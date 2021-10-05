class tileGen{
	width = 0; height = 0;
	SEED = Math.random();
	
	setSeed(value){
		typeof (Number(value)) == "number" ? this.SEED = value : console.error("Seed must be a number!");
		noise.setSeed(this.SEED);
	}
	
	CX(){ return -(this.width - Math.round(this.width / 2)) }
        CY(){ return (this.height - Math.round(this.height / 2)) }
		
	genTile(y, x){
		let tile = new Tile(n, n, n);
		tile.x = this.CX()+x; tile.y = this.CY()-y;
                return tile;
	}
	
        generate(){
		var tiles = [];
	        tiles.length = this.height;
			
	        for(var y = 0; y < this.height; y++){
	    	        var l = []; l.length = this.width;
		        for(var x = 0; x < this.width; x++){
			        l[x] = this.genTile(y, x)
					
				//generation barriers aroundmap
				if(y == 0 || x == 0) l[x].block = barrierBlock;
				if(y == (this.height-1) || x == (this.width-1)) l[x].block = barrierBlock;
		        }
		        tiles[y] = l;
	        }
		
                tiles = this.postGenerate(tiles);		
			
	        return tiles;
	}
	
	postGenerate(tiles){};
}

class worldGen extends tileGen{
	
	OCTAVES = [1, 0.15, 0.07];
	STRUCTURES = [];
	
	genTile(x, y){
		let tile = super.genTile(x, y);
		let e = noise.octaveSimplex(x, y, 150, this.OCTAVES);
		let b = noise.octaveSimplex(x, y, 220, [0.4, 0.1, 0.08]);
		
		if(e < 0.21){                                                	    //0.17
	                if(b > 0.48){
			        tile.floor = random.chance(8) ? grassFloorSwamp : e < 0.14 ? deepWaterSwamp : waterSwamp;
                                tile.biome = "swamp";					
			}else{
				tile.floor = e < 0.14 ? deepWater : water;
				tile.biome = "river"
			}
	        }else if(e < 0.45){                                                 //0.35
	                if(b > 0.48){
			        tile.floor = random.chance(26) ? waterSwamp : (random.chance(8) ? grassFloor : grassFloorSwamp);
                                tile.biome = "swamp";					
			}else{
				tile.floor = sandFloor;
				tile.biome = "beach"
			}
	        }else if(e < 0.66){                                                 //0.58
                        if(b > 0.48){
			        tile.floor = grassFloorSwamp;
                                 tile.biome = "swamp";					
			}else{
				tile.floor = grassFloor;
				tile.biome = "meadow";
			}
	        }else if(e < 0.84){                                                 //0.82
			tile.floor = stoneFloor;
			tile.biome = "classic-mountains";
		}else{
			tile.floor = snowFloor;		
		}
		
		return tile;
	}
	
	postGenerate(tiles){
		//generate structures
		
		for(var y = 0; y < this.height; y++){
		        for(var x = 0; x < this.width; x++){
				let tile = tiles[y][x];
				noise.setSeed(this.SEED + Math.round((x*2)+(y/2)) );
				
				if(noise.simplex2(x/30, y/30) > 0.9){
					if(tile.biome == "swamp" && (tile.floor == water || tile.floor == deepWater) ){
						tile.block = nenuphar;
					}
				}
				tiles[y][x] = tile;
		        }
	        }
		return tiles;	
	}
}