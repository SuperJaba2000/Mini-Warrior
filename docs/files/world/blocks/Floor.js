class Floor extends  Block{
	constructor(name, color, variants, priority) {
		super(name, color, variants);
		
		this.speedMultiplier = 1.0;
	    this.canWalk = true;
	    this.hasShadow = false;
	    this.priority = 1;
	
	    this.group = "floors";
			
		this.edges = [];
		this.cliffs = [];
		
		if(priority)
			this.priority = priority;
    }
        
    edgeRegion(side){
		return this.edges[side];
    }
	
	cliffRegion(side){
		return this.cliffs[side];
	}
}

/*

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