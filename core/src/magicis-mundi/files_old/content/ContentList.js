class ContentList{
	constructor(load){
		this.lastid = 1;
		this.content = new Set();
		
		this.list = new Set();
		
		this.load = load;
	}
	
	add(content){
		content.id = this.lastid++;
		this.list.add(content);
		
		return content.id;
	}
	
	getById(id){
		for (let content of this.list){
			if(content.id == id) return content;
		}	
	}
}