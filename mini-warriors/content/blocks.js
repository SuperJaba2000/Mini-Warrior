class Block{
	
	color = "#000000";
	stillDrawFloor = false;
			
	constructor(name, color, variants) {
		this.textures[0] = new Image(); this.textures[0].src = "assets/sprites/classicTexture.jpg";
		
		this.name = name;
	        this.color = color;
		this.textures.length = variants == 0 ? 1 : variants;
        }
	
        textureRegion(){
		return this.textures[0];
        }
	textures = [];
}
	
class Floor{
	
	color = "#000000";
	speedMultiplier = 1.0;
	canWalk = true;
	
	constructor(name, color, variants) {
		this.textures[0] = new Image(); this.textures[0].src = "assets/sprites/classicTexture.jpg";
		
		this.name = name;
	        this.color = color;
		this.textures.length = variants == 0 ? 1 : variants;
        }
	
	textureRegion(){
		return this.textures[0];
        }
	textures = [];
}
			
/// /// /// /// /// /// /// /// /// /// /// /// /// 
/// /// /// /// /// /// /// /// /// /// /// /// /// 
/// /// /// /// /// /// /// /// /// /// /// /// ///
			
//floors			

const barrierFloor = new Floor("barrier-floor", "#ffffff00", 0);	
const grassFloor = new Floor("grass-floor", "#00FF00", 0);	
const sandFloor = new Floor("sand-floor", "#F0E68C", 3);
const stoneFloor = new Floor("stone-floor", "#808080", 0);
const snowFloor = new Floor("snow-floor", "#ffffff", 0);
const brickFloor = new Floor("brick-floor", "#FF6347", 0);

//liquids
				
const water = new Floor("water", "#199DFF", 0);
water.speedMultiplier = 0.3;			
const deepWater = new Floor("deep-water", "#006ADA", 0);
deepWater.canWalk = false;
			
//blocks
			
const barrierBlock = new Block("barrier-block", "#C71585", 0);
barrierBlock.stillDrawFloor = true;	
const grassBlock = new Block("grass-block", "#32CD32", 0);
const sandBlock = new Block("sand-block", "#BDB76B", 0);
const brickBlock = new Block("brick-block", "#B22222", 0);
