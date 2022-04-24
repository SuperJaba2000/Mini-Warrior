class Block{	
	constructor(name, color, variants) {
		this.color = "#000000";
	    this.stillDrawFloor = false;
			
		this.hasShadow = true;
	    this.hasLight = false;
	    this.lightLevel = 20;
		
	    this.animated = false;
		this.frames = 1;
		
	    this.alwaysDrawFloor = false;
	
	    this.group = "blocks";

		//this.textures[0] = new Image(); this.textures[0].src = "assets/sprites/classicTexture.jpg";
		
		this.name = name;
	    this.color = color;
			
		this.textures = [];
		this.textures.length = variants == 0 ? 1 : variants;
		
		this.variants = variants;
		this.variant = 0;
		
		//this.id = Core.getLastId();
    }
	
	getWithVariant(variant){
		const returned = Object.create(this);
		returned.variant = variant;
		
		return returned;
	}
	
    textureRegion(){
		if(!this.animated)
			return this.textures[this.variant];
						
		let timeScale = Core.time % (Vars.changeable.fps/this.frames);		
		let frame = Math.floor(timeScale / (Vars.changeable.fps/this.frames / this.variants));
						
		return this.textures[frame];
    }
		
	playerEntered(player, map){
		let save = {
			player: player,
			x: player.position.x,
			y: player.position.y,
		}
		return save;
	}
}

/*	
class Floor{
	
	color = "#000000";
	speedMultiplier = 1.0;
	canWalk = true;
	type = "floors";
	
	constructor(name, color, variants) {
		//this.textures[0] = new Image(); this.textures[0].src = "assets/sprites/classicTexture.jpg";
		
		this.name = name;
	        this.color = color;
		this.textures.length = variants == 0 ? 1 : variants;
        }
	
	textureRegion(){
		return this.textures[this.icon];
        }
	icon = 0;
	textures = [];
}

class block{
	constructor(name, size){
		this.name = name;
		this.size = size;
	}
}

function extendContent(c){
	return Object.assign(new c(arguments[1], arguments[2]), arguments[arguments.length - 1]);
}
			
/// /// /// /// /// /// /// /// /// /// /// /// /// 
/// /// /// /// /// /// /// /// /// /// /// /// /// 
/// /// /// /// /// /// /// /// /// /// /// /// ///
			
//floors			

const barrierFloor = new Floor("barrier-floor", "#ffffff00", 0);	
const grassFloor = new Floor("grass-floor", "#6aa95e", 0);	
const grassFloorSwamp = new Floor("grass-floor-swamp", "#6a985e", 0);
const sandFloor = new Floor("sand-floor", "#d3ae8d", 3);
const stoneFloor = new Floor("stone-floor", "#676a78", 0);
const snowFloor = new Floor("snow-floor", "#ffffff", 0);
const brickFloor = new Floor("brick-floor", "#FF6347", 0);
const planksFloor = new Floor("planks-floor", "#8f563b", 0);

//liquids
				
const water = new Floor("water", "#596ab8", 0);
water.speedMultiplier = 0.3;	
const waterSwamp = new Floor("water-swamp", "#56839d", 0);
waterSwamp.speedMultiplier = 0.3;	
	
const deepWater = new Floor("deep-water", "#4d5ca4", 0);
deepWater.canWalk = false;
const deepWaterSwamp = new Floor("deep-water-swamp", "#527680", 0);
deepWaterSwamp.canWalk = false;
			
//blocks
			
const barrierBlock = new Block("barrier-block", "#C71585", 0);
barrierBlock.stillDrawFloor = true;	
const grassBlock = new Block("grass-block", "#32CD32", 0);
const sandBlock = new Block("sand-block", "#BDB76B", 3);
const brickBlock = new Block("brick-block", "#B22222", 0);
const shrubBlock = new Block("shrub-block",  "#4a9c4c", 0);

const leavesBlock = new Block("leaves-block", "#46b046", 0);
leavesBlock.stillDrawFloor = true;
const woodBlock = new Block("wood-block", "#c88e51", 0);

//platforms

const nenuphar = new Floor("nenuphar",  "#4a9c4c", 0);
*/