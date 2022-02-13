class blocks{
        //region environment
	
	stone = new Floor('stone', '#676a78', 1);
	andesite = new Floor('andesite', '#807a8a', 1);
	
	stoneBlock = new Block('stone-block', '#575a68', 1);
	
	grass = new Floor('grass', '#00FF00', 1);
	dirt = new Floor('dirt', '#69392b', 1);
	sand = new Floor('sand', '#FFFF00', 1);
	
	water = new Floor('water', '#0000FF', 1);
	deepWater = new Floor('water', '#0000AA', 1);
	
	//endregion
	//region special
	fire = new Block('fire', '#FF0000', 3);
	ladder = new MultyWorldBlock('ladder', '#8a5139', 1)
};

const Blocks = new blocks();

Blocks.fire.animated = true;
Blocks.fire.alwaysDrawFloor = true;

Blocks.ladder.alwaysDrawFloor = true;