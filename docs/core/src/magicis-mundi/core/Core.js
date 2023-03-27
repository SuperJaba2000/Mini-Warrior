const Core = {
	
	lastId: 0,
	
	//in ms!!
	lastTime: 0,
	//in ticks!!
	time: 0,
	
	/*tick() {
		let event = new CustomEvent("tick", {});
		Vars.mainCanvas.dispatchEvent(event);
		this.time++;
	},*/
	
	update(){
		if(Core.time % 10 == 0) 
			Vars.changeable.fps = 1000/(performance.now() - Core.lastTime);
		
		Core.lastTime = performance.now();
		Core.time++;
		
		let gameState = Vars.changeable.gameState;
		
		UI.update(gameState);
		
		if(gameState.updateGraphics)
		    Vars.graphics.update();
		
		if(!gameState.pause){
		    Vars.controls.update();
            Vars.changeable.activeMap.update();			
		}  
	
	    requestAnimationFrame(Core.update);
	},
	
	getById(id){
		return this.lastId++;
	},
	
	init(){
		this.load();
		
		Vars.controls.init();
        Vars.graphics.init();
		
		/* later, the map will not be generated immediately after opening the game*/
		Vars.changeable.activeMap.generate();
		
		Vars.changeable.activeMap.playerAdd(Vars.changeable.player, 0, 1);
		Vars.changeable.activeMap.playerAdd(Vars.changeable.player, 1, 1);
	},
	
	load(){
		for(let contentList of Vars.content){
			contentList.load();
			
			if(contentList.texturesRequired)
				Vars.loader.addObjectives(contentList.list);
		}
		
		Vars.camera.load();
		
		Vars.loader.addObjectives(Vars.changeable.player);
		Vars.loader.loadAll(this.update);
	}
};

Core.init();

//Vars.changeable.player.position = Vars.camera.position;