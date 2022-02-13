class CaveGenerator extends BasicGenerator{
	genTile(x, y){
		let tile = super.genTile(x, y);
		
		noise.setSeed(this.seed);
		let stone = noise.octaveSimplex(x, y, 25, [0.3, 1]);
		noise.setSeed(this.seed*this.seed);
		let block = Math.abs(noise.octaveSimplex(x, y, 35, [0.04, 1]));
		
		if(stone > 0.31)
			tile.floor = Blocks.andesite;
		
		if(block > 0.4){
			tile.block = Blocks.stoneBlock;
		        tile.floor = Blocks.stone;
	        }
		
		return tile;
	}
}
