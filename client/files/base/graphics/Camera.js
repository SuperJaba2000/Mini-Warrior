class Camera{
	
	position = {
		x: 50,y: 50,
		
		set(x, y){
			this.x = x;
			this.y = y;
		}
	}
	
	offSetX = 0;
	offSetY = 0;
	
	direction = 1;
	
	free = false;
	
	constructor(){
		/*this.time = 0;
		document.getElementById('scene').addEventListener('tick', (event) => {
            this.time++
        });*/
	};
	
	update(){
		if(this.free)
			return;
		
		this.position = Vars.changeable.player.position;
	}

}