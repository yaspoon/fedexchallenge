function CollisionBlock(inX, inY, inWidth, inHeight, inMoveable)
{
    var x = 0;
    var y = 0;
    var width = 50;
    var height = 50;
    var moveable = false;
    
    if( !(inX === undefined) )
    {
        this.x = inX;
    }
    else
    {
        alert("x is undefined wtf");
    }
    
    if( !(inY === undefined) )
    {
        this.y = inY;
    }
    else
    {
        alert("y is undefined wtf");
    }
    
    if( !(inWidth === undefined) )
    {
        this.width = inWidth;
    }
    else
    {
        alert("width is undefined wtf");
    }
        
    if( !(inHeight === undefined) )
    {
        this.height = inHeight;
    }
    else
    {
        alert("height is undefined wtf");
    }
    
    if( !(inMoveable === undefined) )
    {
        this.moveable = inMoveable;
    }
    else
    {
        alert("moveable is undefined wtf");
    }
     
    addNewObject(this);
    
    
    
}
