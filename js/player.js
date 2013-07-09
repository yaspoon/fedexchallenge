//constructor/class FUCKING JS
function player()
{
    //Dirtiest way to do inheritence. Set a local variable to the parents constructor function then call it to make it our parent BLERG
    //Stupid "Prototype-based" OO programming
    this.parent = CollisionBlock;
    this.parent(100, 100, 66, 95);
    //player attributes
	this.maxHP = 200;
	this.hp = 30;
	this.armor = 40;
	
    this.speed = 5;
    this.speedX = 0;
    this.speedY = 0;
    this.facing = 0;
    this.jumpSpeed = 30;
    this.jumpLimit = 225;
    this.weapon = new weapon("Aragorn's Sword");
    this.combatRange = weapon.length;

    this.moving = false;
	this.hitX = false;

    this.frameCount = 0

    this.currentSprite = 0;
    this.spriteFacing = 1; //facing right

    this.spriteLeft = new Array();
    this.spriteRight = new Array();

    this.spriteLeft[0] = new Image();
    this.spriteLeft[1] = new Image();
	this.spriteLeft[2] = new Image();
	this.spriteLeft[3] = new Image();
	this.spriteLeft[4] = new Image();

    this.spriteRight[0] = new Image();
    this.spriteRight[1] = new Image();
	this.spriteRight[2] = new Image();
	this.spriteRight[3] = new Image();
	this.spriteRight[4] = new Image();

    this.spriteLeft[0].src = 'resources/sprites/aragonWalkingLeft1.png';
    this.spriteLeft[1].src = 'resources/sprites/aragonWalkingLeft2.png';
	this.spriteLeft[2].src = 'resources/sprites/aragonWalkingLeft3.png';
	this.spriteLeft[3].src = 'resources/sprites/aragonWalkingLeft4.png';
	this.spriteLeft[4].src = this.spriteLeft[0].src;

    this.spriteRight[0].src = 'resources/sprites/aragonWalkingRight1.png';
    this.spriteRight[1].src = 'resources/sprites/aragonWalkingRight2.png';
	this.spriteRight[2].src = 'resources/sprites/aragonWalkingRight3.png';
	this.spriteRight[3].src = 'resources/sprites/aragonWalkingRight4.png';
	this.spriteRight[4].src = this.spriteRight[0].src;

	this.jumpTimer;
	this.jumpCount = 0;
	this.moveTimer;

    //player functions
	this.drawPlayer = drawPlayer;
	function drawPlayer(level)
	{
		var ctx = canvas.getContext('2d');
		
        if(this.spriteFacing == 1)
        {
            ctx.drawImage(this.spriteRight[this.currentSprite], this.x, this.y, this.width, this.height);
        }
        else
        {
            ctx.drawImage(this.spriteLeft[this.currentSprite], this.x, this.y, this.width, this.height);
        }
		
		// Draw Health Bar
		ctx.fillStyle = "#000000";
		ctx.strokeRect(this.x, this.y - 15, this.width, 10);
		if((this.hp/this.maxHP) > 0.5)
		{
			ctx.fillStyle = "#00FF00";
			ctx.fillRect(this.x + 1, this.y - 14, (this.width*(this.hp/this.maxHP)) - 2, 8);
		}
		else if((this.hp/this.maxHP) > 0.2)
		{
			ctx.fillStyle = "#FF9900";
			ctx.fillRect(this.x + 1, this.y - 14, (this.width*(this.hp/this.maxHP)) - 2, 8);
		}
		else
		{
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(this.x + 1, this.y - 14, (this.width*(this.hp/this.maxHP)) - 2, 8);
		}
	}
	
	this.move = move;
	function move(level)
	{
	    this.x += this.speedX;
	    this.y += level.gravity;
	}

	this.jump = jump;
	function jump()
	{
		//alert(this.jumpCount);
		this.jumpCount+=1;
		if(this.jumpCount*this.jumpSpeed > this.jumpLimit)
		{
			window.clearInterval(this.jumpTimer);
			this.jumpCount = -1;
		}
		else
		{
			this.y -= this.jumpSpeed;
		}
	}

	this.jumpStart = jumpStart
	function jumpStart()
	{
		if (this.jumpCount == 0)
		{
			this.jumpCount = 1;
			var self = this;
			this.jumpTimer = setInterval(function() {self.jump();}, 30);
		}
	}

    this.animate = animate
	function animate()
	{
        this.frameCount = this.frameCount + 1;

        if(this.moving)
        {

            if(this.frameCount % 2 == 0)
            {
                this.currentSprite = this.currentSprite + 1;
                this.currentSprite = this.currentSprite % 5;
            }
        }
	}
}
