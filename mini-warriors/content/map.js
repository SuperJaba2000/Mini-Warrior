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

function getTile(x, y){
    return pMap.tiles[y][x];
}
			
function getTileInfo(tile){	
        let info = {
	        hasBlock: tile.block !== null ? true : false,
		hasFloor: tile.floor !== null,
	        stillDrawFloor: this.hasBlock ? tile.block.stillDrawFloor : false,
					
	        canWalk: !this.hasBlock && this.hasFloor && tile.floor.canWalk ? true : false,
					
	        speedMultiplier: this.canWalk ? tile.floor.speedMultiplier : 0,
	};
	return info;
}

//////////

class Map{
	
	name = "unknown";
	displayName = "Unknown";
	version = "";
	
	width = 1;
	height = 1;
	
	constructor(name, width, height, seed, version){
		this.name = name;
		this.width = width;
		this.height = height;
		this.version = version;
		
		if(this.width % 2 === 0) this.width++
		if(this.height % 2 === 0) this.height++
		
		//this.tiles = generate.emptyCoordinates(this.width, this.height, grassFloor);
		this.tiles = generate.noise(this.width, this.height, seed);
		
		this.player = new Player(this, "cente");
	}
						
	tiles = [];
}

function changeMap(map){
	pMap = map;			
	resizing();
}

function pTile(){
	return pMap.tiles[pMap.player.realY][pMap.player.realX];
}