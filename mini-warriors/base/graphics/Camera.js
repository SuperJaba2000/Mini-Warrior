class Camera{
	
	position = {
		x: 23,y: 23,
		
		set(x, y){
			this.x = x;
			this.y = y;
		}
	}
	
	offSetX = 0;
	offSetY = 0;
	
	direction = 1;
	
	constructor(){
		/*this.time = 0;
		document.getElementById('scene').addEventListener('tick', (event) => {
            this.time++
        });*/
	};

}