class Entity{
	
	maxHealth = -1; health = -1; isDead = false;
	realX = 0; realY = 0;
	orientation = 1;
	speed = 0;
	
	consturctor(name, maxHealth){
		this.name = name;
		this.maxHealth = maxHealth;
	}
	
	textureRegion = () => this.textures[this.orientation - 1];
	textures = [0, 0, 0, 0];
	
	at(x, y){
		pMap.entities.push(this);
	}
}

class Player extends Entity{
	
        lvl = 1;
	
	attack = 15;
	
	x = 0; y = 0; targetTile = null;
	realX = 110; realY = 100;
	
	constructor(){
		super("player", 100);
	}
			
        damage(amout){
                if(this.health <= 0){
			this.isDead = true;
		}else{
			this.health -= amout;
							
			if(this.health <= 0)this.isDead = true;
	        }
	}
}