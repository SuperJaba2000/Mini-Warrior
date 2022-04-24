/*Array.prototype.sum = function(){
   var s = 0;
   for (i = 0; i < this.length; i++){
      s += Number(this[i])
   }
   return s
}*/


class Tile{	
	constructor(floor, block, overlay){
		this.x = 0; this.y = 0;
		this.biome = null;
		
		this.light = 0;
                this.elevation = 0;
		
		this.floor = floor;
		this.block = block;
		this.overlay = overlay;
	}
}


class Tiles{
	
	constructor(width, height) {
		this.width = width; 
		this.height = height;
		
		this.array = new Array(width).fill().map( () => Array(height).fill(0) );
	}
	
	/*getLight(x, y){
		let otherTiles = this.getInCircle(x, y, Vars.viewDistance);
		
		let lights = [];
		
		for(let _x in otherTiles){
			for(let _y in otherTiles[_x]){
				if(otherTiles[_x][_y] == null || otherTiles[_x][_y].block == null || !otherTiles[_x][_y].block.hasLight)
				        continue;
					
				let dx = (x - radius + _x) - x;
				let dy = (y - radius + _y) - y;
				
			        let d = Math.round( Math.sqrt((dx * dx) + (dy * dy)) );
				
				let light = 0.9 - d/otherTiles[_x][_y].block.lightLevel;
				
				lights.push(light);
			}
		}
		
	        return Math.min(lights.sum(), 0.9);
	}*/
	
	get(x, y) {
		return this.array[x][y];
	}
	
	set(x, y, tile) {
		this.array[x][y] = tile;
	}
	
	upd(x, y, tile){
		this.array[x][y] = Object.assign(this.get(x, y), tile);
		
		/*if(tile.block && tile.block.hasLight){
			let otherTiles = this.getInCircle(x, y, tile.block.lightLevel);
			
			for(let _x in otherTiles){
				for(let _y in otherTiles[_x]){
					
					let t = otherTiles[_x][_y];
					
					if(t == null || t == undefined)
						continue;
					
					
					let rx = (x - tile.block.lightLevel) + Number(_x);
					let ry = (y - tile.block.lightLevel) + Number(_y);
					
					let dx = rx - x;
					let dy = ry - y;
					
					let d = Math.round( Math.sqrt((dx * dx) + (dy * dy)) );
						
					let light = (t.light == undefined || t.light == null) ? (0.9 - d/tile.block.lightLevel) :
					        t.light + (0.9 - d/tile.block.lightLevel);
							
					console.log('set light ' + light);
						
					this.upd(rx, ry, {light: light});
				        //otherTiles[_x][_y].light += 0.9 - d/tile.block.lightLevel;
				}
			}
		}*/
	}
	
	valid(x, y){
		if( 
		        (x >= 0 && x < this.width) && (y >= 0 && y < this.height) && 
		        (this.get(x, y) != undefined && this.get(x, y) != null) 
		) return true;
		
		//console.error(`tile(${x}, ${y}) not valid!`);
		return false;
	}
	
	getInCircle(x, y, radius){
		let result = this.getInSquare(x, y, radius);
		
		for(let _x in result){
		        for(let _y in result[_x]){
				console.log(_x, _y)
					
				let dx = (x - radius + _x) - x;
				let dy = (y - radius + _y) - y;
				
			        let d = Math.round( Math.sqrt((dx * dx) + (dy * dy)) );
					
				if(d > radius)
					result[_x][_y] = null;
			}
		}
		
		return result;
	}
	
	getInSquare(x, y, range){
		console.log(range)
		let result = new Array((2*range+1)).fill().map( () => Array((2*range+1)).fill() );
		
		for(let _x in result){
			for(let _y in result[_x]){
				let rx = (x - range) + Number(_x);
				let ry = (y - range) + Number(_y);
				
				console.log(rx, ry)
				
				if(rx < 0 || ry < 0)
					continue;
				
				if(rx > this.width-1 || ry > this.height-1)
					continue;
				
				result[_x][_y] = this.valid(rx, ry) ?
				        this.get(rx, rx): null;

			}
		}
		
		return result;
	}
}