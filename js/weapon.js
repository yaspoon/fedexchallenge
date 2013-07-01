//constructor/class FUCKING JS
function weapon(damage, attackspeed)
{
	this.damage = damage;
	this.attackspeed = attackspeed;
	this.type = "weapon";
	this.stage = 0;
}

function updateStage()
{
	if (weapon.stage < 5)
	{
		weapon.stage += 1;
	}
	else
	{
		weapon.stage = 0;
		window.clearInterval(combatTimer);
	}
}