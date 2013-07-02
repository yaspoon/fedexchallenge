function level()
{
	this.maxLength = 1800;
	this.blocks = [[350, 324, 70, 76],[0, 400, 2000, 1],[10, 320, 50, 1],[100, 200, 100, 1]];
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
	function drawLevel()
	{
		var ctx = canvas.getContext("2d");
		
		ctx.drawImage(this.images[0], this.getX(0), this.getY(0), this.getLength(0), this.getHeight(0));
		
		ctx.fillStyle='#FF0000';
		for(var i = 1; i < this.blocks.length; i++)
		{
			ctx.fillRect(this.blocks[i][0] + this.offset, this.blocks[i][1], this.blocks[i][2], this.blocks[i][3]);
		}
		
		for(var i = 0; i < this.badguys.length; i++)
		{
			this.badguys[i].drawEnemy(this);
		}
	}
	
	this.getX = getX;
	function getX(index)
	{
		return this.blocks[index][0] + this.offset;
	}
	
	this.getLength = getLength;
	function getLength(index)
	{
		return this.blocks[index][2];
	}
	
	this.getY = getY;
	function getY(index)
	{
		return this.blocks[index][1];
	}
	
	this.getHeight = getHeight;
	function getHeight(index)
	{
		return this.blocks[index][3];
	}
}