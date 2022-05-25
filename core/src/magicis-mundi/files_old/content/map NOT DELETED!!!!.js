class Tile{
	
	biome = n;
	x = 0; y = 0;
	
	constructor(floor, platform, block){
		this.floor = floor;
		this.platform = platform;		
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
		
		//this.tiles = generate.emptyCoordinates(this.width, this.height, grassFloor);
		let gen = new CaveGenerator(); 
		gen.width = this.width; gen.height = this.height;
		gen.setSeed(seed);
		
		this.tiles = gen.generate();
		
		/*this.player.realX = gen.SPAWN.x;
		this.player.realY = gen.SPAWN.y;*/
	}
			
        player = warrior;			
	tiles = [];
}

class Biome{
	
	treeChance = 0;
	
	constructor(name, temperature){
		this.name = name;
		this.temperature = temperature;
	}
}

const ocean = new Biome("ocean", 0.4);
const ocean_beach = new Biome("ocean-beach", 0.5);

const river = new Biome("river", 0.4);
const river_beach = new Biome("river-beach", 0.5);
const river_mouth = new Biome("river-mouth", 0.4);

const meadow = new Biome("meadow", 0.5);
meadow.treeChance = 3;

const forest = new Biome("forest", 0.5);
forest.treeChance = 95;

const swamp = new Biome("swamp", 0.6);
swamp.treeChance = 10;

const classic_mountains = new Biome("classic-mountains", 0.2);

//////////

function changeMap(map){
	pMap = map;			
	resizing();
}

const getTile = (x, y) => pMap.tiles[y][x];
const pTile = () =>  pMap.tiles[pMap.player.realY][pMap.player.realX];

const getTileInfo = tile => ({
	hasBlock: tile.block !== null,
	stillDrawFloor: this.hasBlock ? tile.block.stillDrawFloor : false,	
	canWalk: (!this.hasBlock && tile.floor.canWalk),		
	speedMultiplier: tile.floor.speedMultiplier,
});

let pMap = new Map("Main", 500, 500, 12345, gameVersion);