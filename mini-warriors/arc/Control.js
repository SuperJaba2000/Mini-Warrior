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
		}
                if(e.key === "ArrowLeft"){
			let wTile = getTile(p.realX-1, p.realY);
			if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
		                p.realX--;
			        p.x = wTile.x;
			}
			draw();
		}
                if(e.key === "ArrowDown"){
			let wTile = getTile(p.realX, p.realY+1);
			if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
		                p.realY++;
			        p.y = wTile.y;
			}
			draw();
		 }
                if(e.key === "ArrowUp"){
			let wTile = getTile(p.realX, p.realY-1);
			if(wTile !== undefined && wTile !== null && wTile.block == null && wTile.floor.canWalk){
		                p.realY--;
			        p.y = wTile.y;
			}
			draw();
		}
	
                console.log(e.key+"\n x: "+p.x+",y: "+p.y);
                //draw();
                 e.preventDefault();

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


    // Это решение предусматривает поддержку IE8-
    function onWheel(e) {
      e = e || window.event;

      // deltaY, detail содержат пиксели
      // wheelDelta не дает возможность узнать количество пикселей
      // onwheel || MozMousePixelScroll || onmousewheel
      var delta = e.deltaY / 1000;

      Settings.debug.tileSize += delta;
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