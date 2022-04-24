const Vars = {
	
	version: Object.freeze({
		name: "pre-alpha 0.0.4",
		update: 0,
	}),
	
	tileSize: 32,//32
	tileBuffer : 2,
	
	maxLight: 25,
	viewDistance: 5,
	
	mainCanvas: document.getElementById('scene'),
	minimapCanvas: document.getElementById('minimap'),
	
	mspf(){
		return 1000 / this.changeable.fps;
	},
	
	changeable: {
	    activeMap: new Map('main'),
		camera: new Camera(),
	    player: new Player(),
			 
	    fps: 60,
		pause: false
	},
	
	graphics: new Graphics(document.getElementById('scene')),
	controls: new Controls(),
	
	mods: new Set(),
};