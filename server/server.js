var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);

var prompt = require('prompt');







var sockets = [];
//console.log(`Create sockets list! Sockets length: ${sockets.length}`);
var _messages = [];

var serverMsg = 0;

var port = 7777;


app.set('port', port);
app.use('/config', express.static(__dirname + '/config'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/index.html'));
});

server.listen(port, function() {
        console.log(`Start server on port ${port}`);
	getPrompt();
});


///End Settings Part


function regSocket(socket){
	socket._id = Math.random() * Math.random();
        socket.conectionTime = new Date();
	
	sockets.push(socket);
	
	return (sockets.length - 1);
};

function deleteOldSockets(){
	
};

function getPrompt(){
	prompt.start();
	
	prompt.get('Server', function (err, result) {
                serverMsg = result.Server;
		io.sockets.emit('some-message', -1, serverMsg);
		
		//getPrompt();
		prompt.stop();
        });
};




io.on("connection", (socket) => {	
	let socketIndex = sockets.findIndex( (s) => s._id == socket._id );
		
	if( sockets.length == 0 || socket._id == undefined || socketIndex == -1)
		socket.emit("setId", sockets[regSocket(socket)]._id);
		
	console.log(`Update sockets list! New sockets length: ${sockets.length}`);
	
	
	
	socket.on('some-message', (sender, text) => {	
			
		let message = {
			sender: sender,
			text: text,
			
			date: new Date(),
		};
	
	        if( sockets.findIndex( (socket) => socket._id == message.sender ) == -1 ){
	        	console.log(`Message from unregistred user: ${message.text}`);
	        	return false;
	        }
	
	        let senderIndex = sockets.findIndex( (socket) => socket._id == message.sender );
		
	        console.log(`User by index ${senderIndex}: ${message.text}`);
   
   
                _messages.push(message);
		//getPrompt();
        });
});

//getPrompt();

/*io.on('returnConnection', (id) => {
	console.log(`return data: ${id}`);
	/*let _socket = {
	        id: data[1].id,
	        specialId: data[0],
	        index: sockets.length,
		
	        conectionTime: new Date(),
	};
	
	if( sockets.findIndex( (s) => s.specialId == data[0] ) == -1 && sockets.length > 0){
	        console.log(`Reconnection old socket: ${JSON.stringify(_socket)}`);
	        return false;
	}
	
	console.log(`Connection: \n{\n id: ${data[1].id}, \n specialId: ${data[0]}, \n index: ${sockets.length}, \n\n connectionTime: ${new Date()}\n}`);
	
	sockets.push(_socket);
        console.log(`Update sockets list! New sockets length: ${sockets.length}`)
       });*/





/*function getPrompt(){
	prompt.start();
	
	prompt.get('$', function (err, result) {
                io.sockets.emit('message', `Server: ${result.$}`);
		getPrompt();
        });
}

getPrompt();



io.on('getName', function(socket) {
	if(sockets.findIndex((suck) => suck._NAME_ == socket._NAME_) == -1)
		io.sockets.emit('setName', sockets.length);
		sockets.push(socket);
});*/

/*setInterval(function() {
    io.sockets.emit('message', 'HUI');
}, 1000);*/

/*io.on('message', (message) => {
	console.log('message')
	
	if( sockets.findIndex( (socket) => socket.specialId == message.senderId ) == -1 ){
		console.log('Message from unregistred user!');
		return false;
	}
	
	let senderIndex = sockets.findIndex( (socket) => socket.specialId == message.senderId );
		
	console.log(`User by index ${senderIndex}: message.text`);
   
   
        _messages.push(message);
});*/