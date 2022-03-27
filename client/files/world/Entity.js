class Entity{
	
	health = -1; 
	isDead = false;
	
	orientation = 1;
	speed = 0;
	
	group = "entities";
	
	constructor(name, maxHealth){
		this.name = name;
		this.maxHealth = maxHealth;
	}
	
	textureRegion = () => this.textures[this.orientation - 1];
	textures = [0];
	
	position = {
		x: 0,  y: 0,
		offsetX: 0, offsetY: 0,
		
		set(x, y){
			this.x = x;
			this.y = y;
		}
	}
	
	update(){}
	
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