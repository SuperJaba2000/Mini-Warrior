const generate = {
	
        empty(width, height, floor){
	        const tiles = [];
	        tiles.length = height;
			
	        for(var line = 0; line < height; line++){
	    	        var l = []; l.length = width;
		        for(var block = 0; block < width; block++){
			        l[block] = new Tile(null, null, null);
					
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
	        var cy = tiles.length - centerY, x = 0, y = 0;
	
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
                for(var y = 0; y < tiles.length; y++){
                        for(var x = 0; x < tiles[0].length; x++){
                                var tile = tiles[y][x];
				noise.setSeed(seed);
				//const h =  Math.abs(noise.simplex2(x / 140, y / 140));
				e  =   1 * Math.abs(noise.simplex2(x / 140, y / 140));
                                        + 0.25 * Math.abs(noise.simplex2(x / 35, y / 35));
                                const h = e / (1 + 0.25);
	
	                        if(h <= 0.2){                               //rivers
	                               tile.biome = "river";
			               tile.floor = h <= 0.1 ? deepWater : water;
	                        }else if(h <= 0.45){                         //beachs
	                                tile.biome = "beach";
			                tile.floor = sandFloor;
	                        }else if(h <= 0.58){                         //biomes
                                        tile.floor = grassFloor;
	                        }else if(h <= 0.82){					      //mountains
			                tile.floor = stoneFloor;
			                tile.biome = "classic-mountains";
		                }else{
					tile.floor = snowFloor;		
				}
				tiles[y][x] = tile;
                        }
			//postgen
                }
		return tiles;
        },
}