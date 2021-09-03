class Block{
	
	variants = 0;
	color = "#000000";
	stillDrawFloor = false;
			
	constructor(name, variants) {
		this.name = name;
        this.variants = variants;
    }
	
    textureRegion(){
		return this.variants = 0 ? this.name : this.name+random.basic(1, this.variants);
    }
}
			
class Floor extends Block{
	speedMultiplier = 1.0;
	damageTaken = 0.0;
	canWalk = true;
}
			
class Tile{
	constructor(floor, block, decor){
		this.floor = floor;
		this.decor = decor;		
	    this.block = block;
	}
}
			
/// /// /// /// /// /// /// /// /// /// /// /// /// 
/// /// /// /// /// /// /// /// /// /// /// /// /// 
/// /// /// /// /// /// /// /// /// /// /// /// ///
			
//floors
			
const barrierFloor = new Floor("barrier-floor", 0);
barrierFloor.color = "#ffffff00";
			
const grassFloor = new Floor("grass-floor", 0);
grassFloor.color = "#00FF00";
			
const sandFloor = new Floor("sand-floor", 0);
sandFloor.color = "#F0E68C";
			
//liquids
				
const water = new Floor("water", 0);
water.color = "#199DFF";
speedMultiplier = 0.3;
				
const deepWater = new Floor("deep-water", 0);
deepWater.color = "#006ADA";
deepWater.canWalk = false;
			
//blocks
			
const barrierBlock = new Block("air-block", 0);
barrierBlock.color = "#ffffff00";
			
const grassBlock = new Block("grass-block", 0);
grassBlock.color = "#32CD32";
			
const sandBlock = new Block("sand-block", 0);
sandBlock.color = "#BDB76B";