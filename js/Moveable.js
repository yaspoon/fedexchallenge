function Moveable(x, y, width, height)
{
    this.parent = CollisionBlock;
    this.parent(x, y, width, height, true);
    
    this.speedX = 0;
    this.speedY = 0;
    
    addNewMoveable(this);
    
    this.move = move;
    function move(level)
    {
        //this.y += level.gravity;
    }
}

function NonMoveable(x, y, width, height)
{
    this.parent = CollisionBlock;
    this.parent(x, y, width, height, false);
}
