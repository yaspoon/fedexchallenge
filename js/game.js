var player = new player(); //{x: 100, y:100, height: 50, width: 50, speed: 5, facing: 0, jumpSpeed: 15, jumpLimit: 225};
var level = new level(); //[[0, 400, 400, 50],[350, 269, 100, 50],[10, 320, 50, 50],[100, 200, 100, 50]];


// Draw Frame Function
function gameDrawFrame()
{
	//document.getElementById("blah").value = "playerX: " + (player.x + player.width) + ", hitX: " + player.hitX;
	//document.getElementById("blah").value = "HP: " + badguys[0].hp + ", x: " + badguys[0].x + ", y: " + badguys[0].y;
	player.move(level);
	player.checkCollisions(level);
    player.animate();
	level.animate();
	level.drawLevel();
	player.drawPlayer(level);
	document.getElementById("blah").value = "x:" + player.x + "y:" + player.y + ", offset: " + level.offset + ", length: " + (level.maxLength - 300) + ", hitX: " + player.hitX;
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
        //player.moving = false;
		player.jumpCount = -1;
		player.currentSprite = 0;
		window.clearInterval(player.jumpTimer);
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
