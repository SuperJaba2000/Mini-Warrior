const http = require('http');
const ws = new require('ws');
const wss = new ws.Server({noServer: true});

const connections = new Set();

http.createServer((req, res) => {
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnection);
});

function onConnection(socket) {
    connections.add(socket);

    socket.on('message', function(data){
        //data = JSON.parse(data);
		if(data.heading == 
		
		if(data.version.update != serverVars.version.update)
			socket.close(1000, 'Version mismatch!');
    });

    socket.on('close', function(){
        connections.delete(socket);
    });
}

const serverVars = {
	version: {
		name: 'pre-alpha 0.0.5',
		update: 0,
	},
	
	viewDistance: 5,
	
	changeable: {
	    activeMap: new Map('main'),
	    players: []
		
		//pause: false
	},
	
	mods: new Set(),
}