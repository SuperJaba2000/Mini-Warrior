const Core = {
	
	lastId: 0,
	
	time: 0,
	
	tick() {
		let event = new CustomEvent("tick", {});
		Vars.mainCanvas.dispatchEvent(event);
		this.time++;
	},
	
	update() {
		Vars.graphics.update();
	
	        if(!Vars.changeable.pause){
			Core.tick();
			
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
		
		Vars.changeable.activeMap.generate();
	},
	
	load(){
		for(let contentList of Vars.content){
			contentList.load();
			Vars.loader.addObjectives(contentList.list);
		}
		
		Vars.changeable.camera.load();
		Vars.loader.loadAll(this.update);
	}
};

Core.init();

//Vars.changeable.player.position = Vars.changeable.camera.position;