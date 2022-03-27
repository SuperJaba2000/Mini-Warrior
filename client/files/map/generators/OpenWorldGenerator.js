class OpenWorldGenerator extends BasicGenerator{
	genTile(x, y){
		let tile = super.genTile(x, y);
		
		noise.setSeed(this.seed);
		let river = Math.abs(noise.octaveSimplex2(x, y, 40, [0.3, 1]));
		
		tile.floor = Blocks.grass;
		
		if(river <= 0.15){
			tile.floor = river <= 0.6 ? 
			    Blocks.deepWater : Blocks.water;
		}else if(river <= 0.3){
			tile.floor = Blocks.sand;
		}
		
		return tile;
	}
}
