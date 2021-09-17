const generate = {
	
        empty(width, height, floor){
	        const tiles = [];
	        tiles.length = height;
			
	        for(var line = 0; line < height; line++){
	    	        var l = []; l.length = width;
		        for(var block = 0; block < width; block++){
			        l[block] = new Tile(floor, random.chance(8) ? grassBlock : null, null);
					
				//generation barriers aroundmap
				if(line == 0 || block == 0) l[block].block = barrierBlock;
				if(line == (height-1) || block == (width-1)) l[block].block = barrierBlock;
		        }
		        tiles[line] = l;
	        }
	return tiles;
        },
	
	emptyCoordinates(width, height, floor){
	        const tiles = this.empty(width, height, floor);
	
	        const centerX = Math.round(width / 2);
	        const centerY = Math.round(height / 2);
	
	        var cx = -(tiles[0].length - centerX);
	        var cy = 0, x = 0, y = 0;
	
	        while(y < tiles.length){
	    	        while(x < tiles[0].length){
		    	        tiles[y][x].x = cx;
			        tiles[y][x].y = cy;
				
		    	        cx++;
			        x++;
		        }
			x = 0;
			cx = -(tiles[0].length - centerX);
		        cy--;
		        y++;
	        }
	return tiles;
        },

        random(width, height, seed){
	        const tiles = this.emptyCoordinates(width, height, null);
	        return tiles;
        },
	
	//SIMPLEX NOISE GENERATOR

        noise(width, height, seed){
		const tiles = this.emptyCoordinates(width, height, grassFloor);

                //generate biomes
               /* for(var y = 0; y < width; y++){
                        for(var x = 0; x < height; x++){
                                const tile = tiles[y][x];
	
	            if(height <= 0.3){                               //rivers
	                tile.biome = "river"; tile.block = null;
					tile.floor = height <= 0.1 ? deepWater : water;
	            }else if(height <= 0.37){                         //beachs
	                tile.biome = "beach";
					tile.floor = sandFloor;
	            }else if(height <= 0.51){                         //biomes
	                if(biome <= 0.5){
						tile.biome = "meadow";
						tile.floor = grassFloor;
					}else{
						tile.biome = "forest";
						tile.floor = grassFloor;
					}
	            }else if(height <= 0.62){					      //mountains
				    if(biome <= 0.5){
						tile.biome = "classic-mountains";
						tile.floor = stoneFloor;
					}else{
						tile.biome = "hills";
						if(!(height <= 0.5)){
							tile.floor = snowFloor;
						}
					}
                }
				//postgen
				tiles[y][x] = tile;
            }
		}*/
		return tiles;
    },
}