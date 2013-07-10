//Disgusting, because the player is a collidable you need these functions defined before the player object is created...
var newObjects = new Array();
var objects = new Array();
var newMoveableObjects = new Array();
var moveableObjects = new Array();

//Add a new object to do collisions on
function addNewObject(inObject)
{
    this.newObjects.splice(this.newObjects.length, 0, inObject);
}

function addNewMoveable(inObject)
{
    this.newMoveableObjects.splice(this.newMoveableObjects.length, 0, inObject);
}
	
function processNewObjects()
{
	for(var i = 0; i < newObjects.length; i++)
	{
	    this.objects.splice(this.objects.length, 0, newObjects[i]);
	}
	
	for(var i = 0; i < newMoveableObjects.length; i++)
	{
	    this.moveableObjects.splice(this.moveableObjects.length, 0, newMoveableObjects[i]);
	}
	
	newMoveableObjects = new Array();
	newObjects = new Array();
	
}

var player = new player();
var level = new level();
var offsetX = 0;
var offsetY = 0;

// Draw Frame Function
function gameDrawFrame()
{
    processNewObjects();
	moveObjects();
	checkCollisions();
    player.animate();
	level.animate();
	calcOffset();
	level.drawLevel(offsetX, offsetY);
	player.drawPlayer(level);
	document.getElementById("DebugTextBox").value = "x:" + player.x + "y:" + player.y + ", offset: " + level.offset + ", length: " + (level.maxLength - 300) + ", hitX: " + player.hitX;
}

function calcOffset()
{

    offset = 0

    offsetY = 0;
}

function checkCollisions()
{
    for(var i = 0; i < objects.length; i++)
    {
        for( var j = 0; j < objects.length; j++)
        {        
            fixCollision( objects[i], objects[j]);
        }
    }
}

function moveObjects()
{
    for(var i = 0; i < moveableObjects.length; i++)
    {
        moveableObjects[i].move(level);
    }
}

// Keypresses
function gamekeydown(e)
{
	e = e || window.event;
	if (e.keyCode == '37')		// Left Arrow
	{
		player.facing = -1;
		player.spriteFacing = -1
		player.moving = true;
		player.speedX = -5;
	}
	else if (e.keyCode == '39')	// Right Arrow
	{
		player.facing = 1;
		player.spriteFacing = 1;
		player.moving = true;
		player.speedX = 5;
	}
	else if (e.keyCode == '38')	// Up Arrow
	{
		player.jumpStart();
	}
	else if (e.keyCode == '74') //j
	{
		for(var ii = 0; ii < level.badguys.length; ii++)
		{
			if(spriteFacing == 1)
			{
				if(level.badguys[ii].x < player.combatRange && level.badguys[ii].x > player.x)
				{
					combat(weapon, level.badguys[ii])
				}
			}
			else if(spriteFacing == -1)
			{
				if(level.badguys[ii].x < player.combatRange && level.badguys[ii].x < player.x)
				{
					combat(weapon, level.badguys[ii])
				}
			}
		}
		starInterval(combatTimer)
	}

}

function gamekeyup(e)
{
	e = e || window.event;
	if (e.keyCode == '38')		// Up Arror
	{
	}
	if (e.keyCode == '37' || e.keyCode == '39')		// Left or Right Arrow
	{
        player.moving = false;
        player.currentSprite = 0;
		player.facing = 0;
		player.speedX = 0;
		//player.hitX = false;
	}
}
