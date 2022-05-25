class Player extends Entity{	
	
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
	
	draw(ctx, x, y){
		let drawX = x + this.position.offsetX;
		let drawY = y + this.position.offsetY;
		
		//ctx.fillStyle = "#fac";
			ctx.strokeStyle = "#fac";
			
			ctx.fillRect(drawX, drawY, Vars.tileSize, Vars.tileSize);
	}
}