class Interface{
	constructor(element){
		this.element = element;
		
		this.height = '0px';
	        this.width = '0px';
	}
	
	show(){
		this.element.style.height = this.height;
		this.element.style.width = this.width;
		
		this.element.style.visibility = 'visible';
	}
	
	hide(){
		this.element.style.visibility = 'hidden';
	}
	
	
}

/*
const Message = {
	
        text: "message is undefined",
	result: null,
		
	isPrompt: false,
	isConfirm: false,
	canCancel: false,
		
	height: 25,
	width: 40,
	
	setDefault() {
		this.isPrompt = false;
		this.isConfirm = false;
		this.text = "message is undefined";
	},
	
	show() {
		document.getElementById('message-box').style.visibility = 'visible';
		
		let msg = document.getElementById('message');
		let msgText = document.getElementById('message-text');
		let msgPrompt = document.getElementById('message-prompt');
		let msgConfirm = document.getElementById('message-confirm');
		let msgCancel = document.getElementById('message-cancel');
		
		msg.style.height = `${this.height}%`;
		msg.style.width = `${this.width}%`;
		
		msg.style.left = `${ 50 - this.width/2 }%`;
		msg.style.top = `${ 50 - this.height/2 }%`;
		
		msgText.innerHTML = this.text;
		
		msgPrompt.style.visibility = this.isPrompt ? 'visible' : 'hidden';
		msgConfirm.style.visibility = (this.isPrompt || this.isConfirm) ? 'visible' : 'hidden';
		msgCancel.style.visibility = this.canCancel ? 'visible' : 'hidden';
	},
	
	clear() {
		//TODO: may be removed
	},
	
	hide() {
		document.getElementById('message-box').style.visibility = 'hidden';
		
		let msg = document.getElementById('message');
		let msgText = document.getElementById('message-text');
		let msgPrompt = document.getElementById('message-prompt');
		let msgConfirm = document.getElementById('message-confirm');
		let msgCancel = document.getElementById('message-cancel');
		
		msgPrompt.style.visibility = 'hidden';
		msgConfirm.style.visibility = 'hidden';
		msgCancel.style.visibility = 'hidden';
	},
};

Message.show();
Message.hide();*/