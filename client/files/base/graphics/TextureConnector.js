class TextureConnector {
	
	constructor(object){
		this.object = object;
	}
	
	get(tiles, x, y){
		
	}
	
	getShadow(tiles, x, y){
		let block = tiles.get(x, y);
		
		let pattern = tiles.getOther(2, x, y);
	}
}