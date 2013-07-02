//constructor/class FUCKING JS
function weapon(type)
{
	this.type = type
	if(this.type == "Aragorn's Sword")
	{
		this.damage = 20;
		this.attackSpeed = 5;
		this.length = player.height*0.5;
	}
	this.endx = player.x+this.length;
	this.start = player.x;
	this.ylevel = player.y+(player.height/2)

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
