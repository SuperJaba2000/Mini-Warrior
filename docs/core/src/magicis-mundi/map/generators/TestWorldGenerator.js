class TestWorldGenerator extends BasicGenerator{
	genTile(x, y){
		let tile = super.genTile(x, y);
		
		var simplex = new SimplexNoiseObject(this.seed);
		
		let path = Math.abs(simplex.octaveNoise2(x, y, 150, [0.3, 1]));
		//simplex.setSeed(this.seed**this.seed);
		//let river = Math.abs(simplex.octaveNoise2(x, y, 150, [0.3, 1]))
		
		
		let rand = new Random();
		
		tile.floor = Blocks.grass.getWithVariant(rand.basic(0, Blocks.grass.variants-1));
		
		if(rand.chance(1))
			tile.overlay = Blocks.pebbles.getWithVariant(rand.basic(0, Blocks.pebbles.variants-1));
		
		if(rand.chance(1))
			tile.overlay = Blocks.flowers.getWithVariant(rand.basic(0, Blocks.flowers.variants-1));
		
		
		if(path <= 0.04){
			tile.floor = Blocks.sand;
			
		    //if(river <= 0.04)
				//tile.floor = ;
		}else if(path <= 0.1){
			//path structures zone
			tile.floor = Blocks.dirt;
		}else if(path >= 0.2){
			tile.elevation = Math.round(path * 10);
			//tile.elevation -= Math.floor(river*5);
			
			tile.elevation = Math.max(tile.elevation, 0);
		}
		
		/*if(river <= 0.2){
			//tile.floor = river <= 0.02 ? Blocks.deepWater : Blocks.water;
			//tile.elevation = Math.max(tile.elevation-(river*5), 0);
			
			if(river <= 0.04);
			    tile.elevation = 0;
		}*/
		
		/*if(rand.chance(0.4)){
			if(x<1)
				return;
			
			let leftTile = this.tiles.get(x-1, y);
			
			if(leftTile.block == null && leftTile.elevation == tile.elevation){
				leftTile.block = Blocks.spruce.getWithVariant(0);
				tile.block = Blocks.spruce.getWithVariant(1);
			}
		}*/
		
		return tile;
	}
}
