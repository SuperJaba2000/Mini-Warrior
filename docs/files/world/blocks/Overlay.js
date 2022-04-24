//decoration block
class Overlay extends Block{
	constructor(name, color, variants){
		super(name, color, variants);
		
		this.speedMultiplier = 1.0;
	    this.canWalk = true;
	
	    this.group = "overlays";
    }
}