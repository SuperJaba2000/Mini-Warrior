document.onkeydown = function(e) {
	let m = pMap;
	let p = m.player;
	
        if(!Settings.debug.pause && m !== null && !m.player.isDead){
                if(e.key === "ArrowRight"){
		        let wTile = getTile(p.realX+1, p.realY);
			if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
		                p.realX++;
			        p.x = wTile.x;
			}
			draw();
			e.preventDefault();
		}
                if(e.key === "ArrowLeft"){
			let wTile = getTile(p.realX-1, p.realY);
			if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
		                p.realX--;
			        p.x = wTile.x;
			}
			draw();
			e.preventDefault();
		}
                if(e.key === "ArrowDown"){
			let wTile = getTile(p.realX, p.realY+1);
			if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
		                p.realY++;
			        p.y = wTile.y;
			}
			draw();
			e.preventDefault();
		 }
                if(e.key === "ArrowUp"){
			let wTile = getTile(p.realX, p.realY-1);
			if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
		                p.realY--;
			        p.y = wTile.y;
			}
			draw();
			e.preventDefault();
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
	
                //console.log(e.key+"\n x: "+p.x+",y: "+p.y);
                //draw();

                 return false;
	 }
}

 if(world.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        world.addEventListener("wheel", onWheel);
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        world.addEventListener("mousewheel", onWheel);
      } else {
        // Firefox < 17
        world.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else { // IE8-
      world.attachEvent("onmousewheel", onWheel);
    }

    function onWheel(e) {
      e = e || window.event;

      var delta = e.deltaY / 500;

         Settings.debug.tileSize -= delta;
         if(Settings.debug.tileSize <= 0){
	        Settings.debug.tileSize = 3;
		e.deltaY = 1500;	
        }
	 resizing();
	 draw();

      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
	
    const _ = "~";

function teleport(x, y){
	if(x !== _) pMap.player.realX = x;
	if(y !== _) pMap.player.realY = y;
	
	console.log("[Teleported player("+pMap.player+") to: "+x+","+y+"]");
	draw();
}

function tp(x, y){
	teleport(x-1, y-1);
}

//Phones Controls

left.onclick = function(){
    let p = pMap.player;
    let wTile = getTile(p.realX-1, p.realY);
    if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
        p.realX--;
	p.x = wTile.x;
    }
    draw();
}

up.onclick = function(){
    let p = pMap.player;
    let wTile = getTile(p.realX, p.realY-1);
    if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
        p.realY--;
	p.y = wTile.y;
    }
    draw();
}

down.onclick = function(){
    let p = pMap.player;
    let wTile = getTile(p.realX, p.realY+1);
    if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
        p.realY++;
	p.y = wTile.y;
    }
    draw();
}

right.onclick = function(){
    let p = pMap.player;
    let wTile = getTile(p.realX+1, p.realY);
    if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
        p.realX++;
	p.x = wTile.x;
    }
    draw();
}
