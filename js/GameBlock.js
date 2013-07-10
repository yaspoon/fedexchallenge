function GameBlock(x, y, width, height, sprite)
{
    //Make this inherit from CollisionBlock
    this.parent = NonMoveable;
    this.parent(x, y , width, height);
   
    
    if(sprite === undefined)
    {
        this.sprite = "undefined";

    }
    else
    {
        this.sprite = new Image();   
        this.sprite.src = sprite;        
    }
    
    this.draw = draw;
    function draw(offsetX, offsetY)
    {
        var ctx = canvas.getContext("2d");
        
        if(!(this.sprite == "undefined"))
        {
            ctx.drawImage(this.sprite, this.x + offsetX, this.y + offsetY, this.width, this.height);
        }
        else
        {    	
    	    ctx.fillStyle='#FF0000';
            ctx.fillRect(this.x + offsetX, this.y + offsetY, this.width, this.height);
        }
		
		
    }
    
}
