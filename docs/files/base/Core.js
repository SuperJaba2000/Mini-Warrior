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
	
	getLastId(){
		return this.lastId++;
	}

};

Vars.changeable.activeMap.generate();

Vars.controls.init();
Vars.graphics.init();

//Vars.changeable.player.position = Vars.changeable.camera.position;