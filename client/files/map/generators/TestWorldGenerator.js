class TestWorldGenerator extends BasicGenerator{
	genTile(x, y){
		let tile = super.genTile(x, y);
		
		//noise.setSeed(this.seed);
		//let river = /*Math.abs(*/noise.octaveSimplex2(x, y, 40, [0.2, 1])//);
		/*
                var floors = [Blocks.stone, Blocks.andesite, Blocks.grass, Blocks.dirt, Blocks.sand];
		
		if(river <= 0.1){
			tile.floor = river <= 0.04 ? Blocks.deepWater : Blocks.water;
		}else{
		        tile.floor = floors[new Random().basic(0, floors.length-1)];
		}*/
		
		tile.floor = Blocks.dirt;
		
		if(Math.floor((x-1)/10) % 2 == 0 && Math.floor((y-1)/10) % 2 == 0)
			tile.floor = Blocks.stone;
		
		if(Math.floor((x+9)/10) % 2 == 0 && Math.floor((y+9)/10) % 2 == 0)
			tile.floor = Blocks.grass;
		
		return tile;
	}
}
