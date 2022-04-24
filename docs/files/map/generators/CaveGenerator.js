class CaveGenerator extends BasicGenerator{
	genTile(x, y){
		let tile = super.genTile(x, y);
		
		noise.setSeed(this.seed);
		let andesite = noise.octaveSimplex2(x, y, 35, [0.3, 0.02, 1]);
		
		noise.setSeed(this.seed*this.seed);
		let block = noise.octaveSimplex2(x, y, 60, [0.04, 0.09, 0.4, 1]);
		let cracked = noise.octaveSimplex2(x, y, 20, [0.12, 1]);
		let block2 = Math.abs( noise.octaveSimplex2(x, y, 20, [0.2, 0.03, 1]) );
		
		noise.setSeed(this.seed**this.seed);
		let dirt = noise.octaveSimplex2(x, y, 20, [0.04, 0.2, 1]);
		
		if(andesite > 0.15)
			tile.floor = Blocks.andesite;
		
		if(block > -1){
			if(cracked > 0  && block2 > 0.4){
			        //tile.block = Blocks.stoneBlock;
		                tile.floor = Blocks.stone;
			}
		}
		
		/*if(dirt > 0.4)
			tile.floor = Blocks.dirt;*/
		
		return tile;
	}
}
