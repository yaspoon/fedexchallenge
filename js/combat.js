/*				COMBAT					*/
function combat(weapon, object)
{
	weaponhit = false;

	if(object.type == "player")
	{
		weaponcollision(weapon, object);
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


function weaponCollision(weapon, object)
{
	if(weapon.x >= object.x && weapon.x <= object.x+object.width)
	{
		if(weapon.y >= object.y && weapon.y <= object.y+object.height)
		{
			weaponhit = true;
			window.clearInterval(combatTimer);
		}
	}
}

/*--------------------------------------------------*/
