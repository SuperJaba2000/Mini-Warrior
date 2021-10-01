//only vanilla textures
function setTextures(obj, path){
	if(obj.textures.length == 1){
		let img = new Image(); img.src="assets/sprites/"+path+".png";
		obj.textures[0] = img;
	}else{
		for(v = 0; v < obj.textures.length; v++){
			let img = new Image(); img.src="assets/sprites/"+(path+(v+1))+".png";
			obj.textures[v] = img;
		}
	}
}
	
setTextures(grassFloor, "floors/grass-floor");
setTextures(sandFloor, "floors/sand-floor");
setTextures(stoneFloor, "floors/stone-floor");
setTextures(snowFloor, "floors/snow-floor");
//setTextures(brickFloor, "floors/brick-floor");

//liquids
				
setTextures(water, "floors/water");
setTextures(deepWater, "floors/deep-water");
			
//blocks

/*			

    barrierBlock.textures[0] = new Image(); barrierBlock.textures[0].src=getTexture("floors/deep-water");
    const grassBlock = new Block("grass-block", "#32CD32", 0);
    const sandBlock = new Block("sand-block", "#BDB76B", 0);
    const brickBlock = new Block("brick-block", "#B22222", 0);
*/						