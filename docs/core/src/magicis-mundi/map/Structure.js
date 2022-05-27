class Structure{
	constructor(name, size, plan){	
		//array of structure tiles
		this.plan = plan;
		
	    this.name = name;
		this.size = size;
	}
	
	canSet(tiles, x, y){
		if(!tiles.valid(x, y))
			return false;
		
		let mainElevation = tiles.get(x, y).elevation;
		
		for(var _x = x; _x < x+this.size; _x++){
			for(var _y = y; _y < y+this.size; _y++){
			    if(!tiles.valid(_x, _y))
					return false;
				
				if(tiles.get(_x, _y).block != null)
					return false;
				
				if(tiles.get(_x, _y).elevation != mainElevation)
					return false;
		    }
		}
		
		return true;
	}
	
	set(tiles, x, y){
		for(var _x = x; _x < x+this.size; _x++){
			for(var _y = y; _y < y+this.size; _y++){
				let xonPlan = _x-x;
				let yonPlan = _y-y;
				
				tiles.get(_x, _y).block = this.plan[xonPlan][yonPlan].block;
			}
		}
	}
}