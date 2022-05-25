class Random {	
	basic(min, max, round = true) {
        let number = min + Math.random()*(max - min);
		
        return round ? Math.round(number) : number;
    }
				
	chance(percent) {
		return this.basic(0, 100, false) <= Number(percent);
	}
	
	seed(seed, min, max, round = true){
        let number = '0.' + (seed * 16807 % 2147483647);
		number = min + number*(max - min);
		
        return round ? Math.round(number) : number;
	}
}