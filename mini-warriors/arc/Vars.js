const gameVersion = "PN-0.02"
const screenSize = { height: 0, width:  0};

const Settings = {
	graphics: {
		useTextures: false,
		level: 2,
	},

    debug: {
		tileSize: (32),
		pause: false,
	},
}, n = null;

function changeTex(){
	if(textures.checked){
                Settings.graphics.useTextures = true;
        }else{
                Settings.graphics.useTextures = false;
        }
        draw();
}