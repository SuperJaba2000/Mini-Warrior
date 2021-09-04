class Biome{
	constructor(name, temperature){
		this.name = name;
		this.temp = temperature;
	}
	
	
}

function generateEmpty(width, height, floor){
	const e = [];
	
	e.length = height;
	for(var line = 0; line < height; line++){
		var l = []; l.length = width;
		for(var block = 0; block < width; block++){
			l[block] = new Tile(floor, null, null);
		}
		e[line] = l;
	}
	return e;
}