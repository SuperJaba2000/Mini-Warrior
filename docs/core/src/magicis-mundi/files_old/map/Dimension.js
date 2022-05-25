class Dimension{
	constructor(size, elevation, gen){
		this.dayCircle = false;
		
		this.elevation = elevation;
		this.generator = gen;
		this.tiles = new Tiles(size, size);
	}
	
	generate(){
		this.entities = new EntitiesSet(Number.MAX_SAFE_INTEGER);
		
		this.generator.generate(this.tiles, this.entities);
		this.generateTime = Core.time;
	}
	
	update(){
		this.entities.update();
	}
}