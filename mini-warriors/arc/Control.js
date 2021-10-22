function moveRight(){
	let player = pMap.player;
	
	if(player.orientation == 2){
		let tile = getTile(player.realX+1, player.realY);
		if(tile !== undefined && tile !== null && tile.block == null && tile.floor.canWalk){
		        player.realX++;  player.x = tile.x;
			draw();
		}
	}else{
                player.orientation = 2;	
                draw();					
	}      
}

function moveLeft(){
	let player = pMap.player;
	
	if(player.orientation == 4){
		let tile = getTile(player.realX-1, player.realY);
		if(tile !== undefined && tile !== null && tile.block == null && tile.floor.canWalk){
		        player.realX--;  player.x = tile.x;
			draw();
		}
	}else{
                player.orientation = 4;	
                draw();					
	}      
}

function moveUp(){
	let player = pMap.player;
	
	if(player.orientation == 1){
		let tile = getTile(player.realX, player.realY-1)
		if(tile !== undefined && tile !== null && tile.block == null && tile.floor.canWalk){
		        player.realY--;  player.y = tile.y;
			draw();
		}
	}else{
                player.orientation = 1;	
                draw();					
	}
}

function moveDown(){
	let player = pMap.player;
	
	if(player.orientation == 3){
		let tile = getTile(player.realX, player.realY+1)
		if(tile !== undefined && tile !== null && tile.block == null && tile.floor.canWalk){
		        player.realY++;  player.y = tile.y;
			draw();
		}
	}else{
                player.orientation = 3;	
                draw();					
	}
}

/////////////////////////////////

//computers keys
document.onkeydown = function(e) {
	let player = pMap.player;
	
        if(!Settings.debug.pause && pMap !== null && !player.isDead){
                switch(e.key){
					
			case "ArrowRight":
			        moveRight();   e.preventDefault();
                                break;
			
                        case "ArrowLeft":	
                                moveLeft();   e.preventDefault();
                                break;	

                        case "ArrowUp":	
                                moveUp();   e.preventDefault()
                                break;	

                        case "ArrowDown":	
                               moveDown();   e.preventDefault()
                               break;							
		}
		
		
		if(e.key === "1"){
			let bTile = getTile(p.realX, p.realY-1);
			if(bTile !== undefined && bTile !== null && bTile.block == null && bTile.floor.canWalk){
                                pMap.tiles[p.realY-1][p.realX].block = brickBlock;
			}
			draw();
		}
		
		if(e.key === "2"){
			let bTile = getTile(p.realX, p.realY+1);
			if(bTile !== undefined && bTile !== null && bTile.block == null && bTile.floor.canWalk){
                                pMap.tiles[p.realY+1][p.realX].block = brickBlock;
			}
			draw();
		}
		
		if(e.key === "3"){
			let bTile = getTile(p.realX, p.realY-1);
			if(bTile !== undefined && bTile !== null){
                                pMap.tiles[p.realY-1][p.realX].floor = brickFloor;
			}
			draw();
		}
		
		if(e.key === "4"){
			let bTile = getTile(p.realX, p.realY+1);
			if(bTile !== undefined && bTile !== null){
                                pMap.tiles[p.realY+1][p.realX].floor = brickFloor;
			}
			draw();
		}
                 return false;
	 }
}

//phones controls
right.onclick = moveRight();
left.onclick = moveLeft();
up.onclick = moveUp();
down.onclick = moveDown();

//mouse events
world.addEventListener("wheel", 
	function(e){
	        var tileSize = Settings.debug.tileSize;
		var maxDistance = 32 - Settings.graphics.maxDistance + 2;
                let delta = e.deltaY / 100;

                if(tileSize <= maxDistance && delta > 0){
			Settings.debug.tileSize = maxDistance;
			e.deltaY = 0;
		}else{
			Settings.debug.tileSize -=delta;
			resizing();   draw();
		}

                e.preventDefault();
        },
false);

world.addEventListener("mousemove", 
        function(e){
		var x = pMap.player.realX + Math.floor(e.offsetX/Settings.debug.tileSize) - Math.floor(screenSize.width/2);
		var y = pMap.player.realY + Math.round(e.offsetY/Settings.debug.tileSize-0.5) - Math.round((screenSize.height-1)/2);
		
	        if(x >= 0 && y >= 0){
			pMap.player.targetTile = getTile(x+1, y+1);
		        console.log(getTile(x, y));
		}
	},	
false);

world.addEventListener("click", 
        function(e){
		let tile = pMap.player.targetTile;
		let player = pMap.player;
		
	        if(Math.abs(player.x - tile.x) <= player.buildRange && Math.abs(player.y - tile.y) <= player.buildRange){
			tile.floor = player.inventory.active;
                        			
			draw();   drawMinimap();
		}
	},	
false);

//ingame commands	
const _ = null;

function teleport(x, y){
	if(x !== _) pMap.player.realX = x;
	if(y !== _) pMap.player.realY = y;
	
	console.log("[Teleported player("+pMap.player+") to: "+x+","+y+"]");
	draw();
}

function tp(x, y){
	teleport(x-1, y-1);
}



function changePause(){
	Settings.debug.pause = Settings.debug.pause ? false : true;
}

