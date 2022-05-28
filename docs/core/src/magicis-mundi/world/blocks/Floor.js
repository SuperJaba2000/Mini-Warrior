class Floor extends  Block{
	constructor(name, color, settings) {
		super(name, color, settings);
		
		this.speedMultiplier = 1.0;
	    this.canWalk = true;
	    this.hasShadow = false;
	    this.priority = this.priority || 1;
	
	    this.group = "floors";
			
		this.edges = [];
		this.cliffs = [];
    }
        
    edgeRegion(side){
		return this.edges[side];
    }
	
	cliffRegion(side){
		return this.cliffs[side];
	}
}