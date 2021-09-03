const random = {
	
	basic(min, max){
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    },
				
	percent(percent){
		return this.basic(0, 100) <= percent ? true : false;
	},
}