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
		
		noise.setSeed(this.seed);
		let path = Math.abs(noise.octaveSimplex2(x, y, 150, [0.3, 1]));
		noise.setSeed(this.seed**this.seed);
		let river = Math.abs(noise.octaveSimplex2(x, y, 150, [0.3, 1]))
		
		tile.floor = Blocks.grass.getWithVariant(new Random().basic(0, Blocks.grass.variants-1));
		
		if(new Random().chance(1))
			tile.overlay = Blocks.pebbles.getWithVariant(new Random().basic(0, Blocks.pebbles.variants-1));
		
		if(new Random().chance(1))
			tile.overlay = Blocks.flowers.getWithVariant(new Random().basic(0, Blocks.flowers.variants-1));
		
		
		if(path <= 0.04){
			tile.floor = Blocks.mud;
			
		    //if(river <= 0.04)
				//tile.floor = ;
		}else if(path <= 0.2){
			//path structures zone
			//tile.floor = Blocks.dirt;
		}else if(path >= 0.2){
			tile.elevation = Math.round(path * 10) / 10;
			//tile.elevation -= Math.floor(river*5);
			
			tile.elevation = Math.max(tile.elevation, 0);
		}
		
		/*if(river <= 0.2){
			//tile.floor = river <= 0.02 ? Blocks.deepWater : Blocks.water;
			//tile.elevation = Math.max(tile.elevation-(river*5), 0);
			
			if(river <= 0.04);
			    tile.elevation = 0;
		}*/
		
		return tile;
	}
}
