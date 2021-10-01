class Tile{
	
	biome = n;
	x = 0; y = 0;
	
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
	
	constructor(name, width, height, seed, version){
		this.name = name;
		this.width = width;
		this.height = height;
		this.version = version;
		
		if(this.width % 2 === 0) this.width++
		if(this.height % 2 === 0) this.height++
		
		//this.tiles = generate.emptyCoordinates(this.width, this.height, grassFloor);
		let gen = new worldGen(); 
		gen.width = this.width; gen.height = this.height;
		gen.setSeed(seed);
		
		this.tiles = gen.generate();
	}
			
        player = new Player();			
	tiles = [];
}

//////////

function changeMap(map){
	pMap = map;			
	resizing();
}

const getTile = (x, y) => pMap.tiles[y][x];
const pTile = () =>  pMap.tiles[pMap.player.realY][pMap.player.realX];

const getTileInfo = tile => ({
	hasBlock: tile.block == null ? false : true,
	stillDrawFloor: this.hasBlock ? tile.block.stillDrawFloor : false,	
	canWalk: !this.hasBlock && tile.floor.canWalk ? true : false,		
	speedMultiplier: tile.floor.speedMultiplier,
});