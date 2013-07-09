function GameBlock(x, y, width, height, moveable)
{
    //Make this inherit from CollisionBlock
    this.parent = CollisionBlock;
    this.parent(x, y , width, height);
    
    this.draw = draw;
    function draw()
    {
        var ctx = canvas.getContext("2d");
    	ctx.fillStyle='#FF0000';

		ctx.fillRect(this.x, this.y, this.width, this.height);
		
		
    }
    
}
