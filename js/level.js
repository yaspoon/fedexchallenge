function level()
{
	this.maxLength = 1200;
	this.blocks = [[0, 400, 2000, 50],[350, 269, 100, 50],[10, 320, 50, 50],[100, 200, 100, 50]];
	this.gravity = 5;
	this.type = 'level';
	this.offset = 0;		// X offset used fot scrolling the map
	this.startX = 5;
	this.startY = 300;
	
	this.drawLevel = drawLevel;
	function drawLevel()
	{
		var ctx = canvas.getContext("2d");
		ctx.fillStyle='#FF0000';
		
		for(var i = 0; i < this.blocks.length; i++)
		{
			ctx.fillRect(this.blocks[i][0] + this.offset, this.blocks[i][1], this.blocks[i][2], this.blocks[i][3]);
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