function drawFloor(x, y, floor){
	let tileSize = Settings.debug.tileSize;
	
	if(Settings.graphics.useTextures){
	    //draw texture
	    worldDraw.drawImage(floor.textureRegion(), x, y, tileSize, tileSize);
	}else{		
            //draw color	
	    worldDraw.fillStyle = floor.color;
	    worldDraw.fillRect(x, y, tileSize, tileSize);
	}
}

function drawBlock(x, y, block){
	let tileSize = Settings.debug.tileSize;
	
	if(Settings.graphics.useTextures){
		//draw texture
	}else{
	    //draw color	
            worldDraw.fillStyle = block.color;
	    worldDraw.fillRect(x, y, tileSize, tileSize);
	}
}

//Draw all tiles

function drawTiles(){
	let player = pMap.player;

        var y1 = player.realY - (Math.round(screenSize.height / 2)-1);
	var y2 = y1 + screenSize.height;
        var x1 = player.realX - (Math.round(screenSize.width / 2)-1);
	var x2 = x1 + screenSize.width;

        //console.log(startx, endx, starty, endy)
  
        for(var line = y1; line < y2; line++){
                for (var element = x1; element < x2; element++){
			const tileSize = Settings.debug.tileSize;
	
                        var drawX = (element - x1) * tileSize;
                        var drawY = (line - y1) * tileSize;

                        if(element >= 0 && line >= 0 && pMap.tiles[line] !== undefined && getTile(element, line) !== undefined){
			        let tile = getTile(element, line);
			        let tileInfo = getTileInfo(tile);
					
			        if(tileInfo.hasBlock){
				        if(tileInfo.stillDrawFloor){
						//drawFloor(drawX, drawY, tile.floor);	
				                drawBlock(drawX, drawY, tile.block);								
			                }else{
                                                drawBlock(drawX, drawY, tile.block);
			                }
				}else{
					drawFloor(drawX, drawY, tile.floor);
				}
			}
                }
        }
}

function drawMiniMap(){
	const tileSize = Settings.debug.tileSize;
	const miniSize = Math.min(minimap.width / pMap.width, minimap.width / pMap.height);
	minimapDraw.clearRect(0, 0, minimap.width, minimap.height)
	
	for(var y = 0; y < pMap.height; y++){
                for (var x = 0; x < pMap.width; x++){
                        if(x >= 0 && y >= 0 && pMap.tiles[y] !== undefined && getTile(x, y) !== undefined){			
			        let tile = getTile(x, y);
			        let tileInfo = getTileInfo(tile);
					
			        if(tileInfo.hasBlock){
                                        //draw block on minimap
                                        minimapDraw.fillStyle = tile.block.color; 
	                                minimapDraw.fillRect(x * miniSize, y * miniSize, miniSize, miniSize);	
				}else{
					//draw block on minimap
                                        minimapDraw.fillStyle = tile.floor.color; 
	                                minimapDraw.fillRect(x * miniSize, y * miniSize, miniSize, miniSize);
				}
			}
                }
        }
	minimapDraw.fillStyle = "#8B0000";
	minimapDraw.fillRect((pMap.player.realX-1) * miniSize, (pMap.player.realY-1) * miniSize, miniSize*3, miniSize*3);
}

function drawPlayer(){
	/*let player = pMap.player;*/
	const tileSize = Settings.debug.tileSize;
	
	var drawX = (Math.round(screenSize.width / 2)-1) * tileSize;
	var drawY = (Math.round(screenSize.height / 2)-1) * tileSize;
	
	worldDraw.fillStyle = "#8B0000";
	worldDraw.fillRect(drawX, drawY, tileSize, tileSize);
}

function draw(){
	switch(Settings.graphics.level) {
                case 1:
                        Settings.graphics.useTextures = false;
            break;
                case 2:
                        Settings.graphics.useTextures = Settings.debug.tileSize <= 3.45 ? false : true;
            break;	
		case 3:
                        Settings.graphics.useTextures = true;
        }
	worldDraw.clearRect(0, 0, world.width, world.height)
	
	drawTiles();
	drawPlayer();
}