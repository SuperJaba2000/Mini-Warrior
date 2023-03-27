class Animation{
	constructor(name, update){
		this.name = name;
		this.update = update;
	}
}

const animations = {
    top: new Animation('top', () => {
		//in ticks
		let duration = 18;
		
        if(!this.startTime){
			this.startTime = Core.time;
		    Vars.controls.controlСooldown(duration);
		}
 		
        let timeFromStart = Core.time - this.startTime;
		
		let player = Vars.changeable.player;
		let tiles = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles;
		let tile = tiles.get(player.position.x, player.position.y);
		let speed = (tile.floor.speedMultiplier * player.speed)/duration;
				
		Vars.camera.position.offsetY -= speed;
		Vars.changeable.player.position.offsetY -= speed;
		
		Vars.camera.update();
	
		if(timeFromStart >= duration){
			Vars.camera.activeAnimation = new Animation('empty', () => {});
			Vars.changeable.canControl = true;
			this.startTime = null;
		}
    }),
	
	right: new Animation('right', () => {
        //in ticks
		let duration = 18;
		
        if(!this.startTime){
			this.startTime = Core.time;
		    Vars.controls.controlСooldown(duration);
		}
 		
        let timeFromStart = Core.time - this.startTime;
		
		let player = Vars.changeable.player;
		let tiles = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles;
		let tile = tiles.get(player.position.x, player.position.y);
		let speed = (tile.floor.speedMultiplier * player.speed)/duration;
				
		Vars.camera.position.offsetX += speed;
		Vars.changeable.player.position.offsetX += speed;
		
		Vars.camera.update();
	
		if(timeFromStart >= duration){
			Vars.camera.activeAnimation = new Animation('empty', () => {});
			Vars.changeable.canControl = true;
			this.startTime = null;
		}
    }),
	
	bottom: new Animation('right', () => {
        //in ticks
		let duration = 18;
		
        if(!this.startTime){
			this.startTime = Core.time;
		    Vars.controls.controlСooldown(duration);
		}
 		
        let timeFromStart = Core.time - this.startTime;
		
		let player = Vars.changeable.player;
		let tiles = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles;
		let tile = tiles.get(player.position.x, player.position.y);
		let speed = (tile.floor.speedMultiplier * player.speed)/duration;
				
		Vars.camera.position.offsetY += speed;
		Vars.changeable.player.position.offsetY += speed;
		
		Vars.camera.update();
	
		if(timeFromStart >= duration){
			Vars.camera.activeAnimation = new Animation('empty', () => {});
			Vars.changeable.canControl = true;
			this.startTime = null;
		}
    }),
	
	left: new Animation('left', () => {
        //in ticks
		let duration = 18;
		
        if(!this.startTime){
			this.startTime = Core.time;
		    Vars.controls.controlСooldown(duration);
		}
 		
        let timeFromStart = Core.time - this.startTime;
		
		let player = Vars.changeable.player;
		let tiles = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles;
		let tile = tiles.get(player.position.x, player.position.y);
		let speed = (tile.floor.speedMultiplier * player.speed)/duration;
				
		Vars.camera.position.offsetX -= speed;
		Vars.changeable.player.position.offsetX -= speed;
		
		Vars.camera.update();
	
		if(timeFromStart >= duration){
			Vars.camera.activeAnimation = new Animation('empty', () => {});
			Vars.changeable.canControl = true;
			this.startTime = null;
		}
    }),
}

class Camera{	
	constructor(){
		this.position = {
		    x: 50,y: 50,
			//from -0.5 to +0.5
			offsetX: 0, offsetY: 0,
		
		    set(x, y){
			    this.x = x;
			    this.y = y;
		    }
	    }
	
	    this.direction = 1;
	    this.free = false;
		
		this.activeAnimation = new Animation('empty', () => {});
	};
	
	load(){
		
	};
	
	update(){
		if(this.free)
			return;
		
		let playerPosition = Vars.changeable.player.position;
		let worldWidth = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles.width;
		let worldHeight = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles.height;
		
		let minX = Math.ceil(Vars.graphics.drawer.getTilesScreen().width / 2)+1;
		let minY = Math.ceil(Vars.graphics.drawer.getTilesScreen().height / 2)+1;
		
		let maxX = worldWidth - minX;
		let maxY = worldHeight - minY;
		
		if(playerPosition.x <= minX){
			this.position.x = minX;
		}else if(playerPosition.x >= maxX){
			this.position.x = maxX;
		}else{
			this.position.x = playerPosition.x;
		}
		
		if(playerPosition.y <= minY){
			this.position.y = minY;
		}else if(playerPosition.y >= maxY){
			this.position.y = maxY;
		}else{
			this.position.y = playerPosition.y;
		}
		
		
		//this.position.x = Math.maxVars.changeable.player.position;
		
		this.position.offsetX = Math.round(this.position.offsetX*10)/10;
		this.position.offsetY = Math.round(this.position.offsetY*10)/10;
		
		if(Math.abs(this.position.offsetX) > 0.5){
			this.position.x += Math.round(this.position.offsetX / 1);
			this.position.offsetX = this.position.offsetX % 0.5 * Math.sign(this.position.offsetY);
		}
		
        if(Math.abs(this.position.offsetY) > 0.5){
			this.position.y += Math.round(this.position.offsetY / 1);
			this.position.offsetY = this.position.offsetY % 0.5 * Math.sign(this.position.offsetY);
		}
	}
}