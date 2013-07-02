var player = new player(); //{x: 100, y:100, height: 50, width: 50, speed: 5, facing: 0, jumpSpeed: 15, jumpLimit: 225};
var level = new level(); //[[0, 400, 400, 50],[350, 269, 100, 50],[10, 320, 50, 50],[100, 200, 100, 50]];


// Draw Frame Function
function gameDrawFrame()
{
	//document.getElementById("blah").value = "playerX: " + (player.x + player.width) + ", hitX: " + player.hitX;
	//document.getElementById("blah").value = "HP: " + badguys[0].hp + ", x: " + badguys[0].x + ", y: " + badguys[0].y;
    player.animate();
	level.animate();
	scrolling();
	level.drawLevel();
	player.drawPlayer(level);
}

function scrolling()
{
	//document.getElementById("blah").value = player.x + ", offset: " + level.offset + ", length: " + (level.maxLength - 300) + ", hitX: " + player.hitX;
	if(player.moving)
	{
		if(player.facing == -1)	// Facing Left
		{
			if(player.x >= 250 && player.x <= 550)
			{
				if(!player.hitX)
				{
					if( (level.offset * -1) + 250 <= level.maxLength - 250 )
						level.offset += player.speed;
				}
			}
		}
		else if(player.facing == 1)	// Facing Right
		{
			if(player.x >= 250 && player.x <= 550)
			{
				if(!player.hitX)
				{
					if( (level.offset * -1) + 250 <= level.maxLength - 250 )
						level.offset -= player.speed;
				}
			}
		}
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
	}
	else if (e.keyCode == '39')	// Right Arrow
	{
		player.facing = 1;
		player.spriteFacing = 1;
		player.moving = true;
	}
	else if (e.keyCode == '38')	// Up Arrow
	{
		player.jumpStart();
	}
	else if (e.keyCode == '74')
	{
		//combat(weapon, //stuff);
		//starInterval(combatTimer)
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
		//player.hitX = false;
	}
}
