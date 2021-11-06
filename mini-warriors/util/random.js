const random = {
	
	basic(min, max, round=true){
        let rand = min + Math.random() * (max + 1 - min);
        return round ? Math.floor(rand) : rand;
    },
				
	chance(percent){
		return this.basic(0, 100, false) <= percent ? true : false;
	},
}