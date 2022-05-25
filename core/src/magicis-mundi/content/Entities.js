class entities{
	load(){
                //region basic
	
	        this.player = new Player();
	
	        //endregion
	        //region magic
	
	        this.magicSphereSmall = new MagicSphere("magic-sphere", 32, "#FFFFFF", 60);
	}
}
const Entities = new entities();
Entities.load();

Entities.magicSphereSmall.speed = 480;