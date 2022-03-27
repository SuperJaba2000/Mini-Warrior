class entities{
        //region basic
	
	player = new Player();
	
	//endregion
	//region magic
	
	magicSphereSmall = new MagicSphere("magic-sphere", 32, "#FFFFFF", 60);
}

const Entities = new entities();
Entities.magicSphereSmall.speed = 480;