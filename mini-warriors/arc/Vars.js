const gameVersion = "PC-0.03"
const screenSize = { height: 0, width:  0};

const Settings = {
	graphics: {
		level: 2,
		useTextures: true,
		maxDistance: 32, //render distanse 2-32;
	},

    debug: {
		tileSize: (32),
		miniSize: (1),
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

const worldDraw = world.getContext("2d");
const inventoryDraw = inventory.getContext("2d");
const minimapDraw = minimap.getContext("2d");