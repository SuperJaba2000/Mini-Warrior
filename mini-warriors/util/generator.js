class tileGen{
	width = 0; height = 0;
	
	CX(){ return -(this.width - Math.round(this.width / 2)) }
        CY(){ return (this.height - Math.round(this.height / 2)) }
		
	genTile(y, x){
		let tile = new Tile(n, n, n);
		tile.x = this.CX()+x; tile.y = this.CY()-y;
                return tile;
	}
	
        generate(){
		const tiles = [];
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
	        return tiles;
	}
}

class worldGen extends tileGen{
	
	SEED = Math.random();
	OCTAVES = [1, 0.15, 0.07];
	
	setSeed(value){
		typeof value == "number" ? this.SEED = value : console.error("Seed must be a number!");
		noise.setSeed(this.SEED);
	}
	
	genTile(x, y){
		let tile = super.genTile(x, y);
		let e = noise.octaveSimplex(x, y, 150, this.OCTAVES);
		
		if(e < 0.17){
	                tile.biome = "river";
			tile.floor = e < 0.12 ? deepWater : water;
	        }else if(e < 0.35){
	                tile.biome = "beach";
			tile.floor = sandFloor;
	        }else if(e < 0.58){
                        tile.floor = grassFloor;
	        }else if(e < 0.82){
			tile.floor = stoneFloor;
			tile.biome = "classic-mountains";
		}else{
			tile.floor = snowFloor;		
		}
		
		return tile;
	}
}