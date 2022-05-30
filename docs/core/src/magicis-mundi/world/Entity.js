class Entity{
	constructor(name, maxHealth){
		this.health = -1; 
	    this.isDead = false;
	
	    this.orientation = 1;
		//tiles per second
	    this.speed = 1;
			
		this.position = {
		    x: 0,  y: 0,
		    offsetX: 0, offsetY: 0,
		
		    set(x, y){
			    this.x = x;
			    this.y = y;
		    }
	    }
	
	    this.group = "entities";
			
		this.textures = [0 ,0 ,0 ,0];
		
		this.name = name;
		this.maxHealth = maxHealth;
		
		Entities.add(this);
	}
	
	textureRegion(){
		return this.textures[this.orientation - 1];
	};
	
	update(){
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
	
	at(map, x, y){
		this.position.set(x, y);
		this.map = map;
		map.entities.push(this);
	}
	
	kill(){
		let index = this.map.entities.indexOf(this);
		this.map.entities.splice(index, 1);
	}
}