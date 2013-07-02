//constructor/class FUCKING JS
function weapon(type)
{
	this.type = type
	if(this.type == "Aragorn's Sword")
	{
		this.damage = 20;
		this.attackSpeed = 5;
	}
	this.x = [];
	this.y = [];
	this.stage = 0;
}

function drawWeapon(weapon)
{
	dertermineWeapon(player.facing)
	//draw weapon here.
	var c= document.getElementByID("swordCanvas");
	var ctx = c.getContext("2d");
	ctx.rotate(20*weapon.stage*Math.PI/180); //Rotate depending on stage of combat, 0 is normal.
	ctx.beginPath();
	ctx.moveTo(weapon.x[0], weapon.y[0]);
	for(var ii = 1; ii < 6; ii++)
	{
		ctx.lineTo(weapon.x[ii], weapon.y[ii]);
	}
	ctx.strokeStyle = "blue";
	ctx.stroke();
}

function determineWeapon(facing, weapon)
{
	if(facing == -1)//left
	{
		weapon.x[0] = player.x + (player.width*0.1);
		weapon.y[0] = player.y + (player.height*0.75);
		for (var ii = 1; ii < 6; ii++)
		{
			weapon.x[ii] = weapom.x[ii-1] - 10;
			weapon.y[ii] = findYleft(weapon.y[ii], weapon.x[ii]);
		}
	}
	else if (facing == 1)//right
	{
		weapon.x[0] = player.x + (player.width*0.9);
		weapon.y[0] = player.y + (player.height*0.75);
		for(var ii = 1; ii < 6; ii++)
		{
			weapon.x[ii] = weapon.x[ii-1] + 10;
			weapon.y[ii] = findYright(weapon.y[ii], weapon.x[ii]);
		}
	}
}

function findYleft(y,x)
{
	y = -1.3*x + 0.32;
}

function findYright(y,x)
{
	y = 1.3*x + 0.32;
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
