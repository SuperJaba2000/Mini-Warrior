

class Player_Class extends Entity{
	
        lvl = 1;
	
	attack = 15;
	buildRange = 5;
	
	x = 0; y = 0; targetTile = null;
	realX = 110; realY = 100;
	
	constructor(name){
		super(name, 100);
	}
	
	inventory = {
		active: 1,
		storage: [n, n, n, n]
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

const warrior = new Player_Class("Warrior");