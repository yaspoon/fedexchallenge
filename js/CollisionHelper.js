//Helper functions for collision handling\

//Checks if the first object(collider) has collided with the collidee
function fixCollision( collider, collidee)
{ 
            
		    //top left corner is inside the other one so push the player which ever direction is smallest
		    if( collider.y >= collidee.y && collider.y <= collidee.y + collidee.height && collider.x >= collidee.x && collider.x <= collidee.x + collidee.width )
		    {
		        var changeY = Math.abs(collidee.y + collidee.height - collider.y);
 		        var changeX = Math.abs(collidee.x - (collider.x + collider.width));
		        var rightChangeX = Math.abs(collidee.x + collidee.width - collider.x);
		        
		        //It's a smaller move if we push the player down
		        if((changeY <= changeX) && (changeY <= rightChangeX))
		        {
		            collider.y = collidee.y + collidee.height;
		        }
		        else if((changeX <= changeY) && (changeX <= rightChangeX))
		        {
		            collider.x = collidee.x - collider.width;
		        }
		        else if((rightChangeX <= changeX) && (rightChangeX <= changeY))
		        {
		            collider.x = collidee.x + collidee.width;
		        }
		        else
		        {
		            alert("Can't figure out how to push player out of collision changeX:" + changeX + " rightChangeX:" + rightChangeX + " changeY:" + changeY);
		        }
		    }
		    
		    //bottom left corner is inside the other one so push the player up
		    if( collider.y + collider.height > collidee.y && collider.y + collider.height < collidee.y + collidee.height && collider.x >= collidee.x && collider.x <= collidee.x + collidee.width)
		    {
		        var changeY = Math.abs(collidee.y - (collider.y + collider.height));
 		        var changeX = Math.abs(collidee.x - (collider.x + collider.width));
		        var rightChangeX = Math.abs(collidee.x + collidee.width - collider.x);
		        
		        //It's a smaller move if we push the player down
		        if((changeY <= changeX) && (changeY <= rightChangeX))
		        {
		            collider.y = collidee.y - collider.height;
		        }
		        else if((changeX <= changeY) && (changeX <= rightChangeX))
		        {
		            collider.x = collidee.x - collider.width;
		        }
		        else if((rightChangeX <= changeX) && (rightChangeX <= changeY))
		        {
		            collider.x = collidee.x + collidee.width;
		        }
		        else
		        {
		            alert("Can't figure out how to push player out of collision changeX:" + changeX + " rightChangeX:" + rightChangeX + " changeY:" + changeY);
		        }
		        
		        collider.jumpCount = 0;
		    }
		    
		    //top right corner is inside the other one so push the player down
		    if( collider.y >= collidee.y && collider.y <= collidee.y + collidee.height && collider.x + collider.width >= collidee.x && collider.x + collider.width <= collidee.x + collidee.width )
		    {
		        var changeY = Math.abs(collidee.y + collidee.height - collider.y);
 		        var changeX = Math.abs(collidee.x - (collider.x + collider.width));
		        var rightChangeX = Math.abs(collidee.x + collidee.width - collider.x);
		        
		        //It's a smaller move if we push the player down
		        if((changeY <= changeX) && (changeY <= rightChangeX))
		        {
		            collider.y = collidee.y + collidee.height;
		        }
		        else if((changeX <= changeY) && (changeX <= rightChangeX))
		        {
		            collider.x = collidee.x - collider.width;
		        }
		        else if((rightChangeX <= changeX) && (rightChangeX <= changeY))
		        {
		            collider.x = collidee.x + collidee.width;
		        }
		        else
		        {
		            alert("Can't figure out how to push player out of collision changeX:" + changeX + " rightChangeX:" + rightChangeX + " changeY:" + changeY);
		        }
		        
		    }
		    
		    //bottom right corner is inside hte other one so push the player up
		    if( collider.y + collider.height > collidee.y && collider.y + collider.height < collidee.y + collidee.height && collider.x + collider.width >= collidee.x && collider.x + collider.width <= collidee.x + collidee.width)
		    {
		        var changeY = Math.abs(collidee.y - (collider.y + collider.height));
 		        var changeX = Math.abs(collidee.x - (collider.x + collider.width));
		        var rightChangeX = Math.abs(collidee.x + collidee.width - collider.x);
		        
		        //It's a smaller move if we push the player down
		        if((changeY <= changeX) && (changeY <= rightChangeX))
		        {
		            collider.y = collidee.y - collider.height;
		        }
		        else if((changeX <= changeY) && (changeX <= rightChangeX))
		        {
		            collider.x = collidee.x - collider.width;
		        }
		        else if((rightChangeX <= changeX) && (rightChangeX <= changeY))
		        {
		            collider.x = collidee.x + collidee.width;
		        }
		        else
		        {
		            alert("Can't figure out how to push player out of collision changeX:" + changeX + " rightChangeX:" + rightChangeX + " changeY:" + changeY);
		        }		    
		        
		        collider.jumpCount = 0;
		    }
		    
		    //left hand side of player is inside the other one push it to the right
		    if(collider.x >= collidee.x && collider.x <= collidee.x + collidee.width && collider.y <= collidee.y && collider.y + collider.height >= collidee.y + collidee.height)
		    {
		        collider.x = collidee.x + collidee.width;
		    }
		    
		    if( collider.x + collider.width >= collidee.x && collider.x + collider.width <= collidee.x + collidee.width && collider.y <= collidee.y && collider.y + collider.height >= collidee.y + collidee.height)
		    {
		        collider.x = collidee.x - collider.width;
		    }
		    
}

function detectCollision( collider, collidee)
{
    //By default assume not colliding
    var colliding = false;     
            
		    //top left corner is inside the other one so push the player which ever direction is smallest
    if( collider.y >= collidee.y && collider.y <= collidee.y + collidee.height && collider.x >= collidee.x && collider.x <= collidee.x + collidee.width )
	{
        colliding = true;
	}
		    
	//bottom left corner is inside the other one so push the player up
	if( collider.y + collider.height > collidee.y && collider.y + collider.height < collidee.y + collidee.height && collider.x >= collidee.x && collider.x <= collidee.x + collidee.width)
	{
        colliding = true;
	}
		    
		    //top right corner is inside the other one so push the player down
	if( collider.y >= collidee.y && collider.y <= collidee.y + collidee.height && collider.x + collider.width >= collidee.x && collider.x + collider.width <= collidee.x + collidee.width )
	{
		colliding = true;        
	}
		    
	//bottom right corner is inside hte other one so push the player up
	if( collider.y + collider.height > collidee.y && collider.y + collider.height < collidee.y + collidee.height && collider.x + collider.width >= collidee.x && collider.x + collider.width <= collidee.x + collidee.width)
	{
        colliding = true;
	}
		    
	//left hand side of player is inside the other one push it to the right
	if(collider.x >= collidee.x && collider.x <= collidee.x + collidee.width && collider.y <= collidee.y && collider.y + collider.height >= collidee.y + collidee.height)
	{
	    colliding = true;
	}

    //right hand side of player is inside the other		    
	if( collider.x + collider.width >= collidee.x && collider.x + collider.width <= collidee.x + collidee.width && collider.y <= collidee.y && collider.y + collider.height >= collidee.y + collidee.height)
	{
        colliding = true;
	}
		    
	return colliding;
		    
}


