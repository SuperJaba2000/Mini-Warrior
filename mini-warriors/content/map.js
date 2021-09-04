class Tile{
	
	biome = null;
	
	constructor(floor, block, decor){
		this.floor = floor;
		this.decor = decor;		
	    this.block = block;
	}
}

class Map{
	
	name = "";
	displayName = "Unknown";
	version = "";
	
	width = 1;
	height = 1;
	
	constructor(name, width, height, version){
		this.name = name;
		this.width = width;
		this.height = height;
		this.version = version;
		
		this.tiles = generateEmpty(this.width, this.height, grassFloor);
	}
				
	player = new Player;		
	tiles = [];
}

class Region{
	constructor(name, autor){
		this.name = name;
		this.autor = autor;
	}
	
	sectors = [
		
	]
}