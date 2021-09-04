class Player{
	
    lvl = 1;
	
	maxHealth = 35;
	health = 35;
	isDead = false;
	speed = 1.0;
	attack = 15;
	
	x = 2;
	y = 2;
	
	constructor(){}
			
    damage(amout){
        if(this.health <= 0){
			this.isDead = true;
		}else{
			this.health -= amout;
							
			if(this.health <= 0)this.isDead = true;
	    }
	}
}