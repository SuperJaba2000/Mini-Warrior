
///START SETTINGS PART


//a lot of imports...
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
const prompt = require('prompt'); prompt.stop();
const fs = require('fs');


//basic server settings
var PORT, DIRECTORY, HOME_PAGE, USERS_BASE, CONNECTION_LIMIT;
//settings for each socket
var socketConfig = {};

//load config.json
fs.readFile('config.json', 'utf8', function(error,data){
	if(error){
		throw error;
	}else{
		let config = JSON.parse(data) || {};
		
		PORT = config.port;
		DIRECTORY = config.directory;
		HOME_PAGE = config.home_page;
		USERS_BASE = config.users_base;
		
		CONNECTION_LIMIT = config.connection_limit;
		
		socketConfig = {
			reconnection_attempts: config.reconnection_attempts,
                        reconnection_timeout: config.reconnection_timeout,
		};
				
		console.log('\nloading the configuration');	
		
		
		//server deployment
		
		let clientDirectory = __dirname.replace('\server', '\client');
		
		app.set('port', PORT);
                app.use('/files', express.static(DIRECTORY));

                app.get('/', function(request, response) {
                        response.sendFile(path.join(clientDirectory, HOME_PAGE));
                });

                server.listen(PORT, function() {
                        console.log(`\n\nsuccessful launch on the port ${PORT}`);
                        readData();
						
			prompt.start();  getPrompt();
                });
	}
});


///END SETTINGS PART

///START DATA PART

//array of all existing users
var USERS = [];
//array of currently connected users
var activeUsers = [];
//array of all currently connected sockets
var sockets = [];
//array of all open chats
var chats = [];

//reading data stored in files
function readData(){
	console.log('\nreading data...');
	
	console.time('reading time');
	
	//users keys
	fs.readFile(USERS_BASE, 'utf8', function(error,data){
		if(error){
			console.timeEnd('reading time');
			throw error;
		}else{
		        USERS = JSON.parse(data) || [];
				
			console.log('\nsuccessful reading of user data');
			console.timeEnd('reading time');	
		}
	});
}

//writing up-to-date data to files
function writeData(){
	console.log('\n write data...');
	
	console.time('writing time');
	
	//users keys
	fs.writeFile(USERS_BASE, JSON.stringify(USERS, null, 2), function(error){
                if(error){
			console.timeEnd('writing time');
		        throw error
		}else{
			console.log('\nusers data successfully overwritten');
			console.timeEnd('writing time');
		}
        });
}


///END DATA PART

///START REG & LOGIN PART


//creating a user account
function registrationF(login, password, name){
	
	for(let user of USERS){
		if(user.login == login || user.name == name)
			return -1;
	}
	
	let newUser = {
		login: login,
		password: password,
		
		name: name,
		registrationTime: new Date(),
	}
	
	USERS.push(newUser);
	
	return USERS.length - 1;
}

//login to the user account
function loginF(login, password){
	let userIndex = -1;
	
	for(let user of USERS){
		if(user.login == login && user.password == password)
			userIndex = USERS.indexOf(user);
	}
	
	for(let user of activeUsers){
		if(user.login == login)
			return -1;
	}
	
	activeUsers.push(USERS[userIndex]);
 
        return userIndex;
}


///END REG & LOGIN PART

///START SOCKETS PART


//registering and recording new sockets
function socketRegistration(socket){
	
	socket.$id = Math.random() * Math.random();
        socket.conectionTime = new Date();
	
	sockets.push(socket);
	
	return (sockets.length - 1);
};

//removing disconnected sockets
function deleteOldSockets(){
	for(let socket of sockets){
		if(socket.disconnected || !socket.connected){
			sockets.splice(sockets.indexOf(socket), 1);
			console.log('\nold socket deleted');
		}
	}
	
	deleteOldUsers();
};

//deleting disconnected users
function deleteOldUsers(){
	for(let user of activeUsers){
		let socketIndex = -1;
		
		for(let socket of sockets){
			if(socket.user == undefined)
				continue;
			
		        if(socket.user.login == user.login)
                                socketIndex = 1;
	        }
		
		if(socketIndex == -1){
			activeUsers.splice(activeUsers.indexOf(user), 1);
			
			const date = new Date();
			const disconnectionTime = `[${date.getHours()}:${date.getMinutes()}]`;
			
			console.log(`\n\n${disconnectionTime}user ${user.name} was disconnected`)
		}
	}
};

//deletion interval
setInterval( () => { if(sockets.length != 0) deleteOldSockets() }, 1000 );


///END SOCKETS PART

///START COMMANDS PART


//getting command line content
function getPrompt(){
	prompt.get('$', function (err, result) {
                let command = result.$;
		
		if(command)
		        emitCommand(command);
			
		//io.sockets.emit('some-message', -1, 'Server', serverMsg);
		
		getPrompt();
        });
};

//command line handler
function emitCommand(command){
	var separator = ' ';
	
	let commandMastches = command.split(separator);
	commandMastches.join(' / ');
	
	let commandName = commandMastches[0];
	
	if(commandName == 'do')
		eval(`${commandMastches[1]}(${commandMastches[2]})`);
	
	if(commandName == 'get')
		eval(`console.log(${commandMastches[1]})`);
	
	if(commandName == 'read' || commandName == 'load')
		readData();
	
	if(commandName == 'write' || commandName == 'save')
		writeData();
	
	if(commandName == 'say'){
		let text = '';
		
		for(let word of commandMastches){
			if(word == commandName)
				continue;
			text = text + ' ' + word;
		} say(text);
	}
};

//sending messages to connected sockets
function say(text){
	io.sockets.emit('some-message', -1, 'Server', text);
};


///END COMMANDS PART

///START CHATS PART


function createChat(creator, settings){
	var newChat = {
		name: settings.name,
		creator: creator,
		
		seers: [],
		communicators: [creator],
		messanges: [],
	}
	
	if(settings.public)
		newChat.seers = USERS;
	
	for(let seer of newChat.seers){
		delete seer.password;
		delete seer.registrationTime;
	}
	
	chats.push(newChat);
	
	return chats.indexOf(newChat);
};


///END CHATS PART


//main connection event
io.on("connection", (socket) => {	

        //set socket configuration
	socket.emit('set-config', socketConfig);

        //index in sockets array
	let socketIndex = sockets.findIndex( (s) => s.$id == socket.$id );
		
	if( socket.length == CONNECTION_LIMIT ){
		socket.emit('error-message', 'the server connection limit has been reached, try connecting later!');
		return false;
	}
		
	//registration new sockets
	if( sockets.length == 0 || socket.$id == undefined || socketIndex == -1)
		socket.emit("setId", sockets[socketRegistration(socket)].$id);
		
	console.log(`Update sockets list! New sockets length: ${sockets.length}`);
	
	//message event
	socket.on('some-message', (sender, name, text) => {	
			
		let message = {
			sender: sender,
			name: name,
			text: text,
			
			date: new Date(),
		};
	
	        if( sockets.findIndex( (socket) => socket.$id == message.sender ) == -1 ){
	        	console.log(`Message from unregistred user: ${message.text}`);
	        	return false;
	        }
	 
	        //sender index in sockets
	        let senderIndex = sockets.findIndex( (socket) => socket.$id == message.sender );
		
	        console.log(`User by index ${senderIndex}: ${message.text}`);
   
   
                messages.push(message);
		//getPrompt();
		
		//send a message to the other sockets
		io.sockets.emit('some-message', sender, name, text);
        });
		
	socket.on('login', (login, password) => {
		//index in USERS array
		const index = loginF(login, password);
		
		if(index == -1){
			socket.emit('error-message', 'Incorrect data has been entered, or someone has already logged in from this account!');
		}else{
			const date = new Date();
			const loginTime = `[${date.getHours()}:${date.getMinutes()}]`;
			
			socket.emit('successful-login', login, USERS[index].name);
			sockets[sockets.indexOf(socket)].user = {login: login, name: USERS[index].name};
			
		        console.log(`\n${loginTime} user ${USERS[index].name} logged in`);
		}
	});
	
	socket.on('registration', (login, password, name) => {
		//new index in USERS array
		const index = registrationF(login, password, name);
		
		if(index == -1){
			socket.emit('error-message', 'A user with this username or name already exists, if it was you, try logging in!');
		}else{
			const date = new Date();
			const registrationTime = `[${date.getHours()}:${date.getMinutes()}]`;
			
			//socket.emit('successful-registration', null, null);
			
			console.log(`\n${registrationTime} user ${name} registered`);
			
			//overwriting a file with new data
			writeData();
		}
	});
	
	socket.on('create-chat', (creator, settings) => {
		//index in chats array
	        let chatIndex = createChat(creator, settings);
		
		console.log(`\n\nchat '${settings.name}' was created`);
			
		for(let s of sockets){
			let see = false;
			
			for(let seer of chats[chatIndex].seers){
				if(seer.login == s.user.login)
					see = true;
			}
			
			if(!see)
				continue;
			
			s.emit('chat-created', chats[chatIndex]);
			console.log(`add ${s.user.name} to chat '${settings.name}' communicators`)
		}
	});
});
