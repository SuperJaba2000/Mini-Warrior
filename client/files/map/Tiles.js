class Tile{
	
	x = 0;    y = 0;
	biome = null;
	
	light = 1;
	
	constructor(floor, block, overlay){
		this.floor = floor;
		this.block = block;
		this.overlay = overlay;
	}
}


class Tiles{
	
	constructor(width, height) {
		this.width = width; 
		this.height = height;
		
		this.array = new Array(height).fill().map( () => Array(width).fill() );
	}
	
	get(x, y) {
		return this.array[x][y];
	}
	
	set(x, y, tile) {
		this.array[x][y] = tile;
	}
	
	upd(x, y, tile) {
		this.array[x][y] = Object.assign(this.get(x, y), tile);
	}
	
	valid(x, y){
		if( 
		        (x >= 0 && x < this.width) && (y >= 0 && y < this.height) && 
		        (this.get(x, y) != undefined && this.get(x, y) != null) 
		) return true;
		
		console.error(`tile(${x}, ${y}) not valid!`);
		return false;
	}
	
	getInCircle(x, y, radius){
		let result = this.getInSquare(x, y, radius);
		
		for(let _x of result){
		        for(let _y of _x){
				
			}
		}
		
		return result;
	}
	
	getInSquare(x, y, range){
		let result = new Array((2*range+1)).fill().map( () => Array((2*range+1)).fill() );
		
		for(let _y = y-range; _y <= y+range; _y++){
			for(let _x = x-range; _x <= x+range; _x++){
				
				result[_x -(x-range)][_y -(y-range)] = this.valid(_x, _y) ?
				        this.get(_x, _y): null;

			}
		}
		
		return result;
	}
}