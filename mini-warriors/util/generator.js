class Biome{
	constructor(name, temperature){
		this.name = name;
		this.temp = temperature;
	}
	
	
}

const generate = {
	
    empty(width, height, floor){
	    const tiles = [];
	
	    tiles.length = height;
	    for(var line = 0; line < height; line++){
	    	var l = []; l.length = width;
		    for(var block = 0; block < width; block++){
			    l[block] = new Tile(floor, null, null);
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
	    var cy = tiles.length;
	    var x = 0, y = 0;
	
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
	    const tiles = this.empty(width, height, grassFloor);
		return tiles;
    },

    noise(width, height, seed){
	    return;
    },
}