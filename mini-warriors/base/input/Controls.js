class Controls{
	constructor(){}
	
	keys = [
	        {
			key: 'ArrowUp',
			action: function(){
				/*let player = Vars.changeable.player;
				
				if(player != 1){
                                        player.orientation = 1;
				        return;
				}
				
				let tiles = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles;
				let nextTile = tiles.get(player.x, player.y - 1);
									
		                if(tile !== undefined && tile !== null && tile.block == null && tile.floor.canWalk)
		                        //player.y--*/
                                        Vars.changeable.camera.position.y--
			}
		},
		
	        {
		        key: 'ArrowDown',
			action: function(){
				/*let player = Vars.changeable.player;
				
				if(player != 3){
                                        player.orientation = 3;
					return;					
				}
				
				let tiles = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles;
				let nextTile = tiles.get(player.x, player.y + 1);
									
		                if(tile !== undefined && tile !== null && tile.block == null && tile.floor.canWalk)
		                        //player.y++*/
                                        Vars.changeable.camera.position.y++
			}
		},
		
		{
		        key: 'ArrowRight',
			action: function(){
				/*let player = Vars.changeable.player;
				
				if(player != 2){
                                        player.orientation = 2;
					return;				
				}
				
				let tiles = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles;
				let nextTile = tiles.get(player.x + 1, player.y);
									
		                if(tile !== undefined && tile !== null && tile.block == null && tile.floor.canWalk)
		                        //player.x++*/
                                        Vars.changeable.camera.position.x++
			}
		},
		
		{
		        key: 'ArrowLeft',
			action: function(player, tiles){
				
				/*if(player.orientation != 4){
                                        player.orientation = 4;		
				}else{
					let x = player.position.x - 1;
					let y = player.position.y;
					
					if(!tiles.valid(x, y) || tiles.get(x, y).floor?.canWalk)
						return;
					
		                        player.position.x--;*/
					let camera = Vars.changeable.camera;
					
					camera.position.x--;
					let map = Vars.changeable.activeMap;
					
					if(tiles.get(camera.position.x, camera.position.y).block != null)
						tiles.get(camera.position.x, camera.position.y).block.playerEntered(camera, map);
				//}
			}
		},
	];
	
	
	

	lastKey = null;
	
	init(){
		let keys = this.keys;
		
		let that = this;
		
		document.onkeydown = function(e){
			if(/*e.repeat ||*/ keys.findIndex(i => i.key == e.key) == -1)
				return false;
		        
			that.lastKey = keys.findIndex(i => i.key == e.key);
		}
	}
	
        update(){
		if(this.lastKey == null)
			return;
		
		let player = Vars.changeable.player;
		let tiles = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles;
		
		this.keys[this.lastKey].action(player, tiles);
		
		this.lastKey = null;
	}
}