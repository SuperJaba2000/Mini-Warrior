class OpenWorldGenerator extends BasicGenerator{
	genTile(x, y){
		let tile = super.genTile(x, y);
		
		noise.setSeed(this.seed**this.seed);
		let ocean = noise.octaveSimplex2(x, y, 130, [0.3, 0.02, 1])
		
		noise.setSeed(this.seed);
		let river = Math.abs(noise.octaveSimplex2(x, y, 130, [0.3, 0.1, 0.5, 0.02, 1]));
		
		tile.floor = Blocks.grass;
		
		
		if(ocean <= -0.1){
		        tile.floor = Blocks.deepWater;
			if(river >= 0.1 && ocean >= -0.25)
				tile.floor = (ocean >= -0.2 ? Blocks.sand : Blocks.water);
		}else{
			if(river <= 0.1){
			        tile.floor =(river >= 0.05 ? Blocks.water : Blocks.deepWater);
		        }else if(river <= 0.2){
			        tile.floor = Blocks.sand;
		        }
		}
		
		return tile;
	}
}
