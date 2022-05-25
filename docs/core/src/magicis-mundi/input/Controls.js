class Controls{
	constructor(){
		this.keys = [
	        {
			key: 'ArrowUp',
			action: function(player, tiles){
				if(player.orientation != 1){
                    player.orientation = 1;		
				}else{
					let x = player.position.x;
					let y = player.position.y - 1;
					
					if(!tiles.valid(x, y) || !tiles.get(x, y).floor || !tiles.get(x, y).floor.canWalk)
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
					
					if(!tiles.valid(x, y) ||  !tiles.get(x, y).floor || !tiles.get(x, y).floor.canWalk)
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
					
					if(!tiles.valid(x, y) ||  !tiles.get(x, y).floor || !tiles.get(x, y).floor.canWalk)
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
					
					if(!tiles.valid(x, y) ||  !tiles.get(x, y).floor || !tiles.get(x, y).floor.canWalk)
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
	
	

	    this.lastKey = null;
	}
	
	
	
	init(){
		Vars.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		
		if(Vars.isMobile)
			this.joystick = new JoyStick('joystick-box',{
                title: 'joystick-canvas',
                width: 100, height: 100,
                internalFillColor: '#0000FF',
                externalFillColor: '#0000FF',
                internalLineWidth: 2,
                internalStrokeColor: '#000033',
                externalLineWidth: 2,
                externalStrokeColor: '#0000FF',
                autoReturnToCenter: true   
            }, null);
		
		var context = this;
		var keys = this.keys;
		
		document.onkeydown = (event) => {
			var instructionIndex = keys.findIndex(instruction => instruction.key == event.key);
			
			if(instructionIndex == -1)
				return false;
		        
			context.lastKey = instructionIndex;
		}
	}
	
    update(){
		if(Vars.isMobile){
			switch(this.joystick.GetDir()){
				case 'N':
		            this.lastKey = this.keys.findIndex(i => i.key == 'ArrowUp');
			        break;
		
		        case 'S':
		            this.lastKey = this.keys.findIndex(i => i.key == 'ArrowDown');
			        break;
			
		        case 'W':
		            this.lastKey = this.keys.findIndex(i => i.key == 'ArrowLeft');
			        break;
			
		        case 'E':
		            this.lastKey = this.keys.findIndex(i => i.key == 'ArrowRight');
			        break;
			}
		}
		
		/* no instructions */
		if(this.lastKey == null)
			return;
		
		var player = Vars.changeable.player;
		var tiles = Vars.changeable.activeMap.getActiveWorld().getActiveDimension().tiles;
		
		this.keys[this.lastKey].action(player, tiles);
		
		this.lastKey = null;
	}
}