class Graphics {

    constructor(outputCanvas) {
		this.canvas = outputCanvas;	
		this.draw = new Draw(outputCanvas, null, 0);
		
		window.addEventListener('resize', this.init, false);
    }
		
	_draw(){
		this.drawTiles();
		this.drawEntities();
		this.drawEffects();
		
		this.postDraw();
		
		this.drawPlayer();
	}
	
	init(){
		Vars.mainCanvas.width = `${Vars.graphics.draw.getTilesScreen().width * Vars.tileSize}`;
		Vars.mainCanvas.height = `${Vars.graphics.draw.getTilesScreen().height * Vars.tileSize}`;
		
		Vars.graphics.draw.drawSize = Vars.tileSize;
	}
	
	update() {
		this.clear();
	        this._draw();
	}
	
	clear() {
		let width = window.screen.availWidth; 
		let height = window.screen.availHeight;
		
		let ctx = this.canvas.getContext('2d');
		
		this.init();
		
		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	
	drawTiles() {
		
		let map = Vars.changeable.activeMap;
		let camera = Vars.changeable.camera;
		let tiles = map.getActiveWorld().getActiveDimension().tiles;
		
		let y1 = camera.position.y - Math.floor(this.draw.getTilesScreen().height / 2);
	    let y2 = y1 + this.draw.getTilesScreen().height;
        let x1 = camera.position.x - Math.floor(this.draw.getTilesScreen().width / 2);
	    let x2 = x1 + this.draw.getTilesScreen().width;
                
		for(let _y = y1; _y < y2; _y++){		
            for(let _x = x1; _x < x2; _x++){
                let drawX = (_x - x1) * Vars.tileSize;
                let drawY = (_y - y1) * Vars.tileSize;

                if(!tiles.valid(_x, _y))
					continue;
									
			    let tile = tiles.get(_x, _y);
					
					
				if((tile.block == null || tile.block.alwaysDrawFloor) && tile.floor != null){
					//let floorVariant = tile.floor.variants;
					
					this.draw.draw(tile.floor, drawX, drawY, 0.5)
				
				        //if(_x == camera.position.x && _y == camera.position.y)
						//this.draw.draw({color: '#FF0000'}, 0, drawX, drawY)
				}
				
				if(tile.overlay != null)
					this.draw.draw(tile.overlay, drawX, drawY, tile.light);
					
			    if(tile.block != null)
					this.draw.draw(tile.block, drawX, drawY, tile.light);
			}
        }
	}
	
	postDraw() {
		let map = Vars.changeable.activeMap;
		let camera = Vars.changeable.camera;
		let tiles = map.getActiveWorld().getActiveDimension().tiles;
		
		let y1 = camera.position.y - Math.floor(this.draw.getTilesScreen().height / 2);
	    let y2 = y1 + this.draw.getTilesScreen().height;
        let x1 = camera.position.x - Math.floor(this.draw.getTilesScreen().width / 2);
	    let x2 = x1 + this.draw.getTilesScreen().width;
                
		for (let _y = y1; _y < y2; _y++){		
            for(let _x = x1; _x < x2; _x++){
	            let drawX = (_x - x1) * Vars.tileSize;
                let drawY = (_y - y1) * Vars.tileSize;

                if(!tiles.valid(_x, _y))
					continue;
									
			    let tile = tiles.get(_x, _y);
					
				if((tile.block == null || tile.block.alwaysDrawFloor) && tile.floor != null){
					//draw edges
				
				    //top
					if(tiles.valid(_x, _y-1) && tiles.get(_x, _y-1).floor && tiles.get(_x, _y-1).floor.priority < tile.floor.priority)
					    this.draw.drawEdge(tile.floor, 0, drawX, drawY-Vars.tileSize, 0.5)
					
					//right
					if(tiles.valid(_x+1, _y) && tiles.get(_x+1, _y).floor && tiles.get(_x+1, _y).floor.priority < tile.floor.priority)
					    this.draw.drawEdge(tile.floor, 1, drawX+Vars.tileSize, drawY, 0.5)
						
					//bottom
					if(tiles.valid(_x, _y+1) && tiles.get(_x, _y+1).floor && tiles.get(_x, _y+1).floor.priority < tile.floor.priority)
					    this.draw.drawEdge(tile.floor, 2, drawX, drawY+Vars.tileSize, 0.5)
						
					//left
					if(tiles.valid(_x-1, _y) && tiles.get(_x-1, _y).floor && tiles.get(_x-1, _y).floor.priority < tile.floor.priority)
					    this.draw.drawEdge(tile.floor, 3, drawX-Vars.tileSize, drawY, 0.5)
				}
				
				if(tile.elevation != 0 && tile.floor != null){
					//draw cliffs
					
					//top
					if(tiles.valid(_x, _y-1) && tiles.get(_x, _y-1).elevation < tile.elevation)
					    this.draw.drawCliff(tile.floor, 0, drawX, drawY-Vars.tileSize, 0.5)
					
					//right
					if(tiles.valid(_x+1, _y) && tiles.get(_x+1, _y).elevation < tile.elevation)
					    this.draw.drawCliff(tile.floor, 1, drawX+Vars.tileSize, drawY, 0.5)
						
					//bottom
					if(tiles.valid(_x, _y+1) && tiles.get(_x, _y+1).elevation < tile.elevation)
					    this.draw.drawCliff(tile.floor, 2, drawX, drawY+Vars.tileSize, 0.5)
						
					//left
					if(tiles.valid(_x-1, _y) && tiles.get(_x-1, _y).elevation < tile.elevation)
					    this.draw.drawCliff(tile.floor, 3, drawX-Vars.tileSize, drawY, 0.5)
				}
			}
        }
	}
	
	drawEntities() {
		const dimension = Vars.changeable.activeMap.getActiveWorld().getActiveDimension();
		const camera = Vars.changeable.camera;
		const entities = dimension.entities;
		
		let y1 = camera.position.y - Math.floor(this.draw.getTilesScreen().height / 2);
	        let y2 = y1 + this.draw.getTilesScreen().height;
                let x1 = camera.position.x - Math.floor(this.draw.getTilesScreen().width / 2);
	        let x2 = x1 + this.draw.getTilesScreen().width;
		
		
			//if( Math.abs(camera.position.x - entity.position.x) > this.draw.getTilesScreen().width / 2) continue;
			//if( Math.abs(camera.position.y - entity.position.y) > this.draw.getTilesScreen().height / 2) continue;
		
		for (let _y = y1; _y < y2; _y++){		
                        for(let _x = x1; _x < x2; _x++){
                                let drawX = (_x - x1) * Vars.tileSize;
                                let drawY = (_y - y1) * Vars.tileSize;
								
				let entity = entities.getByCoordinates(_x, _y);
				
				if(entity !== null)
				        this.draw.drawEntity( entity, (entity.position.x - x1)*Vars.tileSize, (entity.position.y - y1)*Vars.tileSize);
			}
                }
	}

        drawEffects() {
                //TODO CAMERA FXs
        }			
	
	drawPlayer() {
		let player = Vars.changeable.player;
		let camera = Vars.changeable.camera;
		let ctx = this.canvas.getContext('2d');
		
		//let activeRegion = player.textureRegion.get();
		
		let drawX = (Math.floor(this.draw.getTilesScreen().width/2) - camera.position.x + player.position.x) * Vars.tileSize;
		let drawY = (Math.floor(this.draw.getTilesScreen().height/2) - camera.position.y + player.position.y) * Vars.tileSize;
		
		ctx.globalAlpha = 1;
		
		ctx.fillStyle = '#da70d6';
		ctx.fillRect(drawX, drawY, Vars.tileSize, Vars.tileSize);
		//ctx.drawImage(activeRegion, drawX, drawY, Vars.tileSize, Vars.tileSize);
	}
	
}	