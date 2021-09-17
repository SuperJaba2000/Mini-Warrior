class Player{
	
    lvl = 1;
	
	maxHealth = 35;
	health = 35;
	isDead = false;
	isWalk = false;
	speed = 1.0;
	attack = 15;
	
	x = 0;
	y = 0;
	realX = 20;
	realY = 20;
	
	constructor(map, spawn){
		if(spawn == "center"){
			this.realX = Math.round(map.width / 2);
			this.realY = Math.round(map.height / 2);
		}
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