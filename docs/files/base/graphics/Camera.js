class Camera{	
	constructor(){
		this.position = {
		        x: 50,y: 50,
		
		        set(x, y){
			        this.x = x;
			        this.y = y;
		        }
	        }
	
	        this.offSetX = 0; this.offSetY = 0;
	        this.direction = 1;
	        this.free = false;
			
		/*this.time = 0;
		document.getElementById('scene').addEventListener('tick', (event) => {
            this.time++
        });*/
	};
	
	update(){
		if(this.free)
			return;
		
		let playerPosition = Vars.changeable.player.position;
		let worldWidth = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles.width;
		let worldHeight = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles.height;
		
		let minX = Math.ceil(Vars.graphics.draw.getTilesScreen().width / 2)+1;
		let minY = Math.ceil(Vars.graphics.draw.getTilesScreen().height / 2)+1;
		
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
	}

}