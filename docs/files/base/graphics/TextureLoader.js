class TextureLoader{
	constructor(root){
		this.uploaded = 0;
	        this.all = 0;
	
	        this.objectives = [];
		
	        this.root = root;
	}
	
	addObjectives(obj){
		if(Array.isArray(obj)){
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
			
			img.src = `${this.root}/${obj.group}/${obj.name}/0.png`;
			
			//recolor(img, 0x00, 0x00, 0xFF);
			
			obj.textures[0] = img;
	        }else{
		        for(var v = 0; v < obj.textures.length; v++){
			        var img = new Image(); 					
					
				img.onload = function(){
				        loader.loaded();
			        };
					
				img.src = `${this.root}/${obj.group}/${obj.name}/${v}.png`;
					
				obj.textures[v] = img;
				
		        }
	        }
			
		if(obj.edges){
			for(var s = 0; s < 4; s++){
			    var edge = new Image(); 
                var cliff = new Image();				
					
				edge.onload = function(){
				    loader.loaded();
			    };
				
				cliff.onload = function(){
					loader.loaded();
				};
					
				edge.src = `${this.root}/${obj.group}/${obj.name}/edge${s}.png`;
				cliff.src = `${this.root}/${obj.group}/${obj.name}/cliff${s}.png`
					
				obj.edges[s] = edge;
				obj.cliffs[s] = cliff;
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
		console.log(`loaded ${this.uploaded} textures`);
		
                if(this.uploaded == this.all){
		        /*drawTiles();
			console.log("Load is Succesfull!");	*/
                        requestAnimationFrame(Core.update);
		}
        }			
}

const loader = new TextureLoader("files/assets/sprites");

loader.addObjectives([
    Blocks.grass,
	Blocks.dirt,
	Blocks.mud,
	
	Blocks.stone,
	Blocks.andesite,
	Blocks.stoneBlock,
	
	Blocks.pebbles,
	Blocks.flowers,
	
	Blocks.water,
	Blocks.deepWater,
	Blocks.sand,

    Blocks.fire,
	Blocks.ladder,
		
	Entities.player,
	Entities.magicSphereSmall,
		
    /*grassFloor,
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
	woodBlock*/
]);

loader.loadAll();					