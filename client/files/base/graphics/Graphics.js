class Graphics {

        constructor(outputCanvas) {
		this.canvas = outputCanvas;	
		this.draw = new Draw(outputCanvas, null, 32);
		
		window.addEventListener('resize', this.init, false);
        }
		
	_draw() {
		this.drawTiles();
		this.drawEntities();
		this.drawEffects();
		
		this.drawPlayer();
	}
	
	init(){
		Vars.mainCanvas.width = `${Vars.graphics.getTilesScreen().width * Vars.tileSize}`;
		Vars.mainCanvas.height = `${Vars.graphics.getTilesScreen().height * Vars.tileSize}`;
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
	
	getTilesScreen(){
		return {
			width: Math.ceil(window.screen.availWidth / Vars.tileSize),
			height: Math.ceil(window.screen.availHeight / Vars.tileSize),
		}
	}
	
	drawTiles() {
		
		let map = Vars.changeable.activeMap;
		let camera = Vars.changeable.camera;
		let tiles = map.getActiveWorld().getActiveDimension().tiles;
		
		let y1 = camera.position.y - Math.floor(this.getTilesScreen().height / 2);
	        let y2 = y1 + this.getTilesScreen().height;
                let x1 = camera.position.x - Math.floor(this.getTilesScreen().width / 2);
	        let x2 = x1 + this.getTilesScreen().width;
  
                
		for (let _y = y1; _y < y2; _y++){		
                        for(let _x = x1; _x < x2; _x++){
                        
	
                                let drawX = (_x - x1) * Vars.tileSize;
                                let drawY = (_y - y1) * Vars.tileSize;

                                if(!tiles.valid(_x, _y))
					continue;
									
			        let tile = tiles.get(_x, _y);
					
					
				if((tile.block == null || tile.block.alwaysDrawFloor) && tile.floor != null){
					let floorVariant = tile.floor.name == 'grass-b' ? randomSeed((_x << 16) | (_y & 0xFFFF), 1, 4) : tile.floor.variants;
					
					this.draw.draw(tile.floor, floorVariant, drawX, drawY)
				
				        //if(_x == camera.position.x && _y == camera.position.y)
						//this.draw.draw({color: '#FF0000'}, 0, drawX, drawY)
				}
					
			        if(tile.block != null){
					let getVariant = () => {
						if(!tile.block.animated)
							return tile.block.variants;
						
						let timeScale = Core.time % (Vars.changeable.fps/3);
						
						
						let v = Math.floor(timeScale / (Vars.changeable.fps/3 / tile.block.variants));
						
						return v+1;
					}
					
					this.draw.draw(tile.block, getVariant(), drawX, drawY);
				}
			}
                }
	}
	
	drawEntities() {
		const dimension = Vars.changeable.activeMap.getActiveWorld().getActiveDimension();
		const camera = Vars.changeable.camera;
		const entities = dimension.entities;
		
		let y1 = camera.position.y - Math.floor(this.getTilesScreen().height / 2);
	        let y2 = y1 + this.getTilesScreen().height;
                let x1 = camera.position.x - Math.floor(this.getTilesScreen().width / 2);
	        let x2 = x1 + this.getTilesScreen().width;
		
		
			//if( Math.abs(camera.position.x - entity.position.x) > this.getTilesScreen().width / 2) continue;
			//if( Math.abs(camera.position.y - entity.position.y) > this.getTilesScreen().height / 2) continue;
		
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
		
		let drawX = Math.floor(this.getTilesScreen().width / 2) * Vars.tileSize;// + (player.position.x - camera.position.x);
		let drawY = Math.floor(this.getTilesScreen().height / 2) * Vars.tileSize;// + (player.position.y - camera.position.y);
		
		ctx.globalAlpha = 1;
		
		ctx.fillStyle = '#da70d6';
		ctx.fillRect(drawX, drawY, Vars.tileSize, Vars.tileSize);
		//ctx.drawImage(activeRegion, drawX, drawY, Vars.tileSize, Vars.tileSize);
	}
	
}	

function recolor(img, r, g, b) {
	let width = img.width;
	let height = img.height;

        let data = img.data;
		
        for(let y = 0; y < height; y++){
                for(let x = 0; x < width; x++){
                        /*let red = ((y - 1) * (document.getElementById('scene').width * 4)) + ((x - 1) * 4);
                        let green = red + 1;
                        let blue = red + 2;
                        let alpha = red + 3;
			
                        data[red] = r + (255 - r) * data[red] / 255;
                        data[green] = g + (255 - g) * data[green] / 255;
                        data[blue] = b + (255 - b) * data[blue] / 255;*/
                }
        }
        //img.data = data;
		
	let img2 = new Image();
	img2.width=width; img2.height = height;
	img2.data = data;
		
	return img2;
}