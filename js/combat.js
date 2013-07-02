/*				COMBAT					*/
function combat(weapon, object)
{
	weaponhit = false;

	if(object.type == "player")
	{
		weaponCollisionCheck(weapon, object);
		if(weaponhit)
		{
			player.hp - weapon.damage;
		}
	}
	else if(object.type == "level")
	{
		if(weaponhit)
		{
		}
	}
	weapon.updateStage();

}


function weaponCollisionCheck(weapon, object)
{
	for(var ii = 0; ii < 6; ii++)
	{
		if(weapon.x[ii] >= object.x && weapon.x[ii] <= object.x+object.width)
		{
			if(weapon.y[ii] >= object.y && weapon.y[ii] <= object.y+object.height)
			{
				weaponhit = true;
				window.clearInterval(combatTimer);
			}
		}
	}
}

/*--------------------------------------------------*/

