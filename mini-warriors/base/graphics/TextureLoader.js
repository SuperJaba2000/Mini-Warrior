class TextureLoader{
	
	uploaded = 0;
	all = 0;
	
	objectives = [];
	
	constructor(root){
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
			
			recolor(img, 0x00, 0x00, 0xFF);
			
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
		
		let _all = 0;
                for(let e of this.objectives){
			_all += e.textures.length;
		};
		
                if(this.uploaded == _all){
		        //drawTiles();
			console.log("Load is Succesfull!");	
                        requestAnimationFrame(Core.update);
		}
        }			
}

const loader = new TextureLoader("assets/sprites");

loader.addObjectives([

        Blocks.grass,
	Blocks.dirt,
	Blocks.stone,
	Blocks.andesite,
	Blocks.stoneBlock,
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