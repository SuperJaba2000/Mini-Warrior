class Controls{
	constructor(){}
	
	keys = [
	        {
			key: 'ArrowUp',
			action: function(player, tiles){
				if(player.orientation != 1){
                                        player.orientation = 1;		
				}else{
					let x = player.position.x;
					let y = player.position.y - 1;
					
					if(!tiles.valid(x, y) || !tiles.get(x, y).floor?.canWalk)
						return;
					
					
					let nextTile = tiles.get(x, y);
					
					if(nextTile.block != null)
						nextTile.block.playerEntered(player, Vars.changeable.activeMap);
					
					if(nextTile.block !== null)
						return;
					
					
		                        player.position.y--;
					Vars.changeable.camera.update();
				}
			}
		},
		
	        {
		        key: 'ArrowDown',
			action: function(player, tiles){
				if(player.orientation != 3){
                                        player.orientation = 3;		
				}else{
					let x = player.position.x;
					let y = player.position.y + 1;
					
					if(!tiles.valid(x, y) || !tiles.get(x, y).floor?.canWalk)
						return;
					
					let nextTile = tiles.get(x, y);
					
					if(nextTile.block != null)
						nextTile.block.playerEntered(player, Vars.changeable.activeMap);
					
					if(nextTile.block !== null)
						return;
					
					
		                        player.position.y++;
					Vars.changeable.camera.update();
				}
			}
		},
		
		{
		        key: 'ArrowRight',
			action: function(player, tiles){
				if(player.orientation != 2){
                                        player.orientation = 2;		
				}else{
					let x = player.position.x + 1;
					let y = player.position.y;
					
					if(!tiles.valid(x, y) || !tiles.get(x, y).floor?.canWalk)
						return;
					
					let nextTile = tiles.get(x, y);
					
					if(nextTile.block != null)
						nextTile.block.playerEntered(player, Vars.changeable.activeMap);
					
					if(nextTile.block !== null)
						return;
					
					
		                        player.position.x++;
					Vars.changeable.camera.update();
				}
			}
		},
		
		{
		        key: 'ArrowLeft',
			action: function(player, tiles){
				if(player.orientation != 4){
                                        player.orientation = 4;		
				}else{
					let x = player.position.x - 1;
					let y = player.position.y;
					
					if(!tiles.valid(x, y) || !tiles.get(x, y).floor?.canWalk)
						return;
					
					let nextTile = tiles.get(x, y);
					
					if(nextTile.block != null)
						nextTile.block.playerEntered(player, Vars.changeable.activeMap);
					
					if(nextTile.block !== null)
						return;
					
					
		                        player.position.x--;
					Vars.changeable.camera.update();
				}
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



var joy = new JoyStick('joyDiv',{
    // The ID of canvas element
    title: 'joystick',
    // width/height
    width: 180,
    height: 180,
    // Internal color of Stick
    internalFillColor: '#0000FF',
    // Border width of Stick
    internalLineWidth: 2,
    // Border color of Stick
    internalStrokeColor: '#000033',
    // External reference circonference width
    externalLineWidth: 2,
    //External reference circonference color
    externalStrokeColor: '#0000FF',
    // Sets the behavior of the stick
    autoReturnToCenter: true
    
});