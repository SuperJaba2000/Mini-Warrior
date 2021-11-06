class TextureLoader{
	
	uploaded = 0;
	all = 0;
	
	objectives = [];
	
	constructor(root){
	        this.root = root;
	}
	
	addObjectives(obj){
		if(Array.isArray(obj) && obj.length > 1){
			for(var i = 0; i < obj.length; i++){
				this.objectives.push(obj[i]);
			}
		}else{
			this.objectives.push(obj);
		}
	}
	
	load(obj){
	        if(obj.textures.length == 1){
	        	var img = new Image(); 
			
			img.onload = function(){
                                loader.loaded();
			};
			
			img.src = `${this.root}/${obj.type}/${obj.name}.png`;
			
			obj.textures[0] = img;
	        }else{
		        for(var v = 0; v < obj.textures.length; v++){
			        var img = new Image(); 					
					
				img.onload = function(){
				        loader.loaded();
			        };
					
				img.src = `${this.root}/${obj.type}/${obj.name}${v}.png`;
					
				obj.textures[v] = img;
		        }
	        }
        }
		
        loadAll(){
		this.all = this.objectives.length;
		
		for(var i = 0; i < this.objectives.length; i++){
                        this.load(this.objectives[i]);
		}
	}

        loaded(){
		this.uploaded++;
		console.log(`loaded ${this.uploaded} of ${this.all} textures`);
		
                if(this.uploaded == this.all){
		        drawTiles();
			console.log("Load is Succesfull!");	
		}
        }			
}

const loader = new TextureLoader("assets/sprites");

loader.addObjectives([

        grassFloor,
	grassFloorSwamp,
	sandFloor,
	stoneFloor,
	snowFloor,
	planksFloor,
	
	water,
	waterSwamp,
	deepWater,
	deepWaterSwamp,
	
	leavesBlock,
	woodBlock
]);

loader.loadAll();					