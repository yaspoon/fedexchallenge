function level()
{
	this.maxLength = 1800;
	this.blocks = new Array();
	this.gravity = 5;
	this.type = 'level';
	this.offset = 0;		// X offset used fot scrolling the map
	this.startX = 5;
	this.startY = 300;
	
	this.images = new Array();
	this.images[0] = new Image();
	this.images[0].src = 'resources/sprites/barrel.png';
	
	this.badguys = new Array();
	this.badguys[0] = new enemy(600,100);
	
	var blockSprite = "resources/sprites/barrel.png";
	
	this.blocks[0] = new GameBlock(0, 400, 2000, 20);
	this.blocks[1] = new GameBlock(0, 0, 20, 400);
	this.blocks[2] = new GameBlock(100, 200, 63, 70, "resources/sprites/barrel.png");
	//this.blocks[3] = new GameBlock(780, 0, 20, 400);
	this.blocks[3] = new GameBlock(250, 360, 20, 40, "resources/sprites/barrel.png");
	this.blocks[4] = new GameBlock(250, 250, 20, 20, "resources/sprites/barrel.png");
	
	this.animate = animate;
	function animate()
	{
		for(var i = 0; i < this.badguys.length; i++)
		{
			if(!this.badguys[i].aiON)
			{
				this.badguys[i].intelligence();
			}
			this.badguys[i].animate();
		}
	}
	
	this.drawLevel = drawLevel;
	function drawLevel(offsetX, offsetY)
	{
		var ctx = canvas.getContext("2d");
			
		for(var i = 0; i < this.blocks.length; i++)
		{
			this.blocks[i].draw(offsetX, offsetY);
		}
		
		for(var i = 0; i < this.badguys.length; i++)
		{
			this.badguys[i].drawEnemy(offsetX, offsetY);
		}
	}

}
