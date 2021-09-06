class Tile{
	
	biome = null;
	x = 0;
	y = 0;
	
	constructor(floor, block, decor){
		this.floor = floor;
		this.decor = decor;		
	    this.block = block;
	}
}

class Map{
	
	name = "unknown";
	displayName = "Unknown";
	version = "";
	
	width = 1;
	height = 1;
	
	constructor(name, width, height, version){
		this.name = name;
		this.width = width;
		this.height = height;
		this.version = version;
		
		if(this.width % 2 === 0) this.width++
		if(this.height % 2 === 0) this.height++
		
		this.tiles = generate.emptyCoordinates(this.width, this.height, grassFloor);
	}
				
	player = new Player;		
	tiles = [];
}