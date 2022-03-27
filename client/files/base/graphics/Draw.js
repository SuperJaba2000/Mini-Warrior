class Draw {
	
	minimapData = null;
	drawSize = -1;
	
	useTextures = false;
	
	constructor(canvas, minimap, drawSize){
		this.canvas = canvas;
		this.minimap = minimap;
		this.drawSize = drawSize;
	}
	
	getTilesScreen(){
		return {
			width: Math.round(window.screen.availWidth / Vars.tileSize),
			height: Math.round(document.documentElement.clientHeight / Vars.tileSize),
		}
	}
	
	getLight(x, y){
		let viewDistance = 30;
		
		//x++; y++;
		
		const px = Vars.changeable.camera.position.x;
	        const py = Vars.changeable.camera.position.y;
	        
	        const rx = px - Math.floor(this.getTilesScreen().width / 2) + x;
	        const ry = py - Math.floor(this.getTilesScreen().height / 2) + y;
			
		let dx = rx - px;
		let dy = ry - py;
		
		let d = Math.round(Math.sqrt((dx * dx) + (dy * dy)));
	
	        let l = 0.5 - d/Vars.maxLight;
	
                if( Vars.maxLight - d < (Vars.maxLight - viewDistance) )
	        	l = 0;	
	
        	if(l <= 0)
	                return 0.03;
		
	        return l;
        }
	
	draw(obj, variant, x, y, light){
		
		
		if(variant != 0)
			this.useTextures = true;
		
		if(obj == undefined)
			return false;
		
		const ctx = this.canvas.getContext('2d');
		
		//ctx.globalAlpha = this.getLight(x/this.drawSize, y/this.drawSize);//.get(x / this.drawSize, y / this.drawSize);
		
		/*ctx.fillStyle = "#000000";
		ctx.fillText(this.getLight(x / this.drawSize, y / this.drawSize), x, y)*/
		
		if(this.useTextures){
			ctx.drawImage(obj.textureRegion(variant-1), x, y, this.drawSize, this.drawSize);
		}else{
			ctx.fillStyle = obj.color;
			ctx.fillRect(x, y, this.drawSize, this.drawSize);
			
		}
		
		this.useTextures = false;
		
		if(!obj.hasShadow)
			return;
		
		let shadowX = x + Vars.tileSize + 1;
		let shadowY = y + Vars.tileSize + 1;
		
		ctx.beginPath();
		
                ctx.moveTo(shadowX, y);
                ctx.lineTo(shadowX, shadowY);
                ctx.lineTo(x, shadowY);
                ctx.strokeStyle = '#000000';
				
                ctx.stroke();
				
		this.useTextures = false;
	}
	
	drawEntity( entity, x, y){
		const ctx = this.canvas.getContext('2d');
		
	        let drawX = x + entity.position.offsetX;
		let drawY = y + entity.position.offsetY;
		
		console.log(drawX + "," + drawY)
		
		//ctx.globalAlpha = light;//.get(x / this.drawSize, y / this.drawSize);
		
		/*ctx.fillStyle = "#000000";
		ctx.fillText(this.getLight(x / this.drawSize, y / this.drawSize), x, y)*/
		
		if(entity.draw)
			entity.draw(ctx, x, y);
		
		/*this.useTextures = true;
		
		if(this.useTextures){
			ctx.drawImage(entity.textureRegion(), drawX, drawY, this.drawSize, this.drawSize);
		}else{
			ctx.fillStyle = entity.color;
			ctx.strokeStyle = "#000000";
			
			ctx.beginPath();
			ctx.arc(drawX + (Vars.tileSize/2), drawY + (Vars.tileSize/2), entity.size, 0, 2 * Math.PI, false);
			ctx.fill();
                        ctx.stroke();		
		}
		
		this.useTextures = false;*/
	}
	
	updateMinimap(){
		//TODO WRITE
	}
	
}

/*
worldDraw.mozImageSmoothingEnabled = false;
worldDraw.webkitImageSmoothingEnabled = false;
worldDraw.msImageSmoothingEnabled = false;
worldDraw.imageSmoothingEnabled = false;
*/