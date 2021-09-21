function drawFloor(x, y, floor){
	if(Settings.graphics.useTextures){
	    //draw texture
	    worldDraw.drawImage(floor.textureRegion(), x, y, Settings.debug.tileSize, Settings.debug.tileSize);
	}else{		
            //draw color	
	    worldDraw.fillStyle = floor.color;
	    worldDraw.fillRect(x, y, Settings.debug.tileSize, Settings.debug.tileSize);
	}
}

function drawBlock(x, y, block){
	if(Settings.graphics.useTextures){
		//draw texture
	}else{
	    //draw color	
            worldDraw.fillStyle = block.color;
	    worldDraw.fillRect(x, y, Settings.debug.tileSize, Settings.debug.tileSize);
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

function drawPlayer(){
	/*let player = pMap.player;*/
	const tileSize = Settings.debug.tileSize;
	
	var drawX = (Math.round(screenSize.width / 2)-1) * tileSize;   //(Math.round(screenSize.width/2)-1) * tileSize
	var drawY = (Math.round(screenSize.height / 2)-1) * tileSize;
	
	worldDraw.fillStyle = "#8B0000";
	worldDraw.fillRect(drawX, drawY, tileSize, tileSize);
}

function draw(){
	if( == 2) Settings.graphics.useTextures = Settings.debug.tileSize <= 3.45 ? false : true;
	switch(Settings.graphics.level) {
                case 'value1':

                [break]

                case 'value2':

                [break]

                default:

               [break]
        }
	
	worldDraw.clearRect(0, 0, world.width, world.height)
	
	drawTiles();
	drawPlayer();
}