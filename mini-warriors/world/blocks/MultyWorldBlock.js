class MultyWorldBlock extends  Block{
	playerEntered(player, map){
	        let save = super.playerEntered(player, map);
	
	        map.getActiveWorld().getActiveDimension().entities.array = [];
	
	        map.getActiveWorld().activeDimension++;
			
		let nextDimension = map.getActiveWorld().getActiveDimension();
		//nextDimension.entities.add(save.player);
		
       	        nextDimension.tiles.upd(save.x, save.y, {block: Blocks.ladder});
	}
}