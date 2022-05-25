const Blocks = new ContentList(
	function load(){
		//region environment
		
	    this.stone = new Floor('stone', '#676a78', { 
		    variants: 1, 
			priority: 5 
		});
		
	    this.andesite = new Floor('andesite', '#807a8a', { 
		    variants: 1, 
			priority: 6 
		});
		
		this.stoneBlock = new Block('stone-block', '#575a68', { 
		    variants: 1 
		});
		
		
		this.pebbles = new Overlay('pebbles', '#676a78', { 
		    variants: 2 
		});
		
		this.flowers = new Overlay('flowers', '#ffffff', { 
		    variants: 1 
		});
	
		
	    this.grass = new Floor('grass', '#00FF00', { 
		    variants: 2, 
			priority: 9 
		});
		
	    this.dirt = new Floor('dirt', '#69392b', { 
		    variants: 1, 
			priority: 7 
		});
			
		this.mud = new Floor('mud', '#69392b', { 
		    variants: 1, 
			priority: 8 
		});
		
	    this.sand = new Floor('sand', '#FFFF00', { 
		    variants: 1, 
			priority: 10 
		});
	
	
	    this.water = new Floor('water', '#0000FF', { 
		    variants: 1, 
			priority: 3 
		});
		
	    this.deepWater = new Floor('deep-water', '#0000AA', { 
		    variants: 1, 
			priority: 4,
			canWalk: false
		});
	
	    //endregion
	    //region special
			
	    this.fire = new Block('fire', '#FF0000', { 
		    variants: 3, 
			frames: 3,
			animated: true, 
			alwaysDrawFloor: true,
			hasLight: true
		});
	    this.ladder = new HeightChangeBlock('ladder', '#8a5139', {
			heightDelta: 1,
			variants: 1
		});
		
		//endregion
	}
);

//Blocks.ladder.alwaysDrawFloor = true;