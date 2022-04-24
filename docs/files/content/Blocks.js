class blocks{
	load(){
		//region environment
		 
	    this.stone = new Floor('stone', '#676a78', 5);
	    this.andesite = new Floor('andesite', '#807a8a', 1, 6);
		
		this.pebbles = new Overlay('pebbles', '#676a78', 2);
		this.flowers = new Overlay('flowers', '#ffffff', 1);
	
	    this.stoneBlock = new Block('stone-block', '#575a68', 1);
	
	    this.grass = new Floor('grass', '#00FF00', 2, 9);
	    this.dirt = new Floor('dirt', '#69392b', 1, 7);
		this.mud = new Floor('mud', '#69392b', 1, 8);
	    this.sand = new Floor('sand', '#FFFF00', 1, 10);
	
	    this.water = new Floor('water', '#0000FF', 1, 3);
	    this.deepWater = new Floor('deep-water', '#0000AA', 1, 4);
	
	    //endregion
	    //region special
			
	    this.fire = new Block('fire', '#FF0000', 3);
	    this.ladder = new HeightChangeBlock('ladder', '#8a5139', 1, 1);
		
		//endregion
	}
};

const Blocks = new blocks();
Blocks.load();

Blocks.fire.animated = true;
Blocks.fire.alwaysDrawFloor = true;
Blocks.fire.hasLight = true;

Blocks.ladder.alwaysDrawFloor = true;

Blocks.deepWater.canWalk = false;