/*				COMBAT					*/
function combat(weapon, object)
{
	weaponhit = false;

	if(object.type == "enemy")
	{
		weaponCollisionCheck(weapon, object);
		if(weaponhit)
		{
			enemy.hp - weapon.damage;
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
		if(weapon.endx >= object.x && weapon.start <= object.x+object.width)
		{
			if(weapon.ylevel >= object.y && weapon.ylevel <= object.y+object.height)
			{
				weaponhit = true;
				window.clearInterval(combatTimer);
			}
		}
	}
}

/*--------------------------------------------------*/


