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

function teleport(x, y){
	pMap.player.realX = x;
	pMap.player.realY = y;
	console.log("[Teleported player("+pMap.player+") to: "+x+","+y+"]");
}

function tp(x, y){
	teleport(x-1, y-1);
}