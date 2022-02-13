class Dimension{
	
	dayCircle = false;
	
	elevation = 0;
	
	constructor(size, elevation, gen){
		this.elevation = elevation;
		this.generator = gen;
		this.tiles = new Tiles(size, size);
	}
	
	generate(){
		this.generator.generate(this.tiles, this.entities);
		this.generateTime = Core.time;
	}
	
	update(){
		this.entities.update();
	}
	
	entities = new EntitiesSet(Number.MAX_SAFE_INTEGER);
	tiles = new Tiles(3, 3);
}