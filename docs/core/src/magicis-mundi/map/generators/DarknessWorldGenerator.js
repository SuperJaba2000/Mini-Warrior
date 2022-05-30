class DarknessWorldGenerator extends BasicGenerator{
	genTile(x, y){
		let tile = super.genTile(x, y);
		
		let dimension = this.settings.dimension;
		let dayCircle = true;
		let dayDuration = 15;
		
		var simplex = new SimplexNoiseObject(this.seed);
		
		//let land = simplex.octaveNoise2(x, y, 100, [0.2, 0.3, 1]);
		let river = Math.abs(simplex.octaveNoise2(x, y, 140, [0.3, 1]));
		let forest = simplex.octaveNoise2(x, y, 60, [0.2, 0.3, 1]);
		
		tile.floor = Blocks.void;
		tile.biome = 'void';
		
		if(river > 0.3){
			tile.floor = Blocks.distortedGrass;
			tile.elevation = 1+Math.round(river*4);
			tile.biome = 'void-island';
			
			if(forest > 0.1)
			tile.biome = 'void-forest';
		}
		
		tile.light = () => tile.light = () => {
			let dimensionTime = Core.time - dimension.generateTime;
			
		    let playerx = Vars.changeable.player.position.x;
			let playery = Vars.changeable.player.position.y;
			
			let distanceToPlayer = Math.round( Math.sqrt((x-playerx)**2 + (y-playery)**2) );
				
			return Math.max((Math.round(Vars.maxLight/2 * Math.cos(dimensionTime / dayDuration/2)) + Vars.maxLight - distanceToPlayer), 0);
		};
		
		return tile;
	}
	
	postGenerate(){
		super.postGenerate();
		
		let rand = new Random();
		
		/* generate structures */
		for(let y = 0; y < this.height; y++){
		    for(let x = 0; x < this.width; x++){
				let tile = this.tiles.get(x, y);
				
				if(tile.biome == 'void')
					continue;
				
				if(tile.biome == 'void-forest'){
			        if(rand.chanceSeed(this.seed+(x**y), 10+3) && Structures.distortedTree.canSet(this.tiles, x, y))
				        Structures.distortedTree.set(this.tiles, x, y);
				}
	        }
	    }	
	}
}
