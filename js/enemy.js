function enemy(xpos, ypos)
{
    this.parent = Moveable;
    this.parent(xpos, ypos, 71, 95);
	this.maxHP = 200;
	this.hp = 150;
	this.armor = 20;
	//this.weapon = new weapon();
	this.type = 'enemy';
	
	//this.x = xpos;
	//this.y = ypos;
	//this.height = 95;
    //this.width = 71;
    this.speed = 5;
    this.facing = 0;
    this.jumpSpeed = 15;
    this.jumpLimit = 225;

    this.moving = false;
	this.hitX = false;
	this.offset;

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
	this.aiTimer;
	this.aiON = false;
	
	this.move = move;
	function move(level)
	{
	    this.x += this.speedX;
	    this.y += this.speedY;
	    this.y += level.gravity;
	}
	
	this.drawEnemy = drawEnemy;
	function drawEnemy(offsetX, offsetY)
	{

		var ctx = canvas.getContext('2d');
		
        if(this.spriteFacing == 1)
        {
            ctx.drawImage(this.spriteRight[this.currentSprite], this.x + offsetX, this.y + offsetY, this.width, this.height);
        }
        else
        {
            ctx.drawImage(this.spriteLeft[this.currentSprite], this.x + offsetX, this.y + offsetY, this.width, this.height);
        }
		
		// Draw Health Bar
		ctx.fillStyle = "#000000";
		ctx.strokeRect(this.x + offsetX, this.y + offsetY - 15, this.width, 10);
		if((this.hp/this.maxHP) > 0.5)
		{
			ctx.fillStyle = "#00FF00";
			ctx.fillRect(this.x + offsetX + 1, this.y + offsetY - 14, (this.width*(this.hp/this.maxHP)) - 2, 8);
		}
		else if((this.hp/this.maxHP) > 0.2)
		{
			ctx.fillStyle = "#FF9900";
			ctx.fillRect(this.getX() + 1, this.y - 14, (this.width*(this.hp/this.maxHP)) - 2, 8);
		}
		else
		{
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(this.getX() + 1, this.y - 14, (this.width*(this.hp/this.maxHP)) - 2, 8);
		}
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
	
	this.intelligence = intelligence;
	function intelligence(player)
	{
		this.aiON = true;
		var ran = Math.floor(Math.random()*1000) + 1000;	// time allowed to move for
		var ran2 = Math.floor(Math.random()*5);
		if(ran2 == 0)	// Walk left
		{
			this.speedX = -5;
			this.spriteFacing = -1;
			this.startWalking();
		}
		else if(ran2 == 1)
		{
			this.speedX = 5;
			this.spriteFacing = 1;
			this.startWalking();
		}
		else if(ran2 == 2) // Jump
		{
			this.jumpStart();
		}
		else
		{
			this.moving = false;
			this.currentSprite = 0;
			this.speedX = 0;
		}
		//window.clearInterval(this.moveTimer);
		var self = this;
		//this.moveTimer = setInterval(function() {self.stopWalking;}, ran);
		window.clearInterval(this.aiTimer);
		this.aiTimer = setInterval(function() {self.intelligence();}, ran);
	}
	
	this.stopJump = stopJump;
	function stopJump()
	{
		this.jumpCount = -1;
		this.currentSprite = 0;
		window.clearInterval(this.jumpTimer);
	}
	
	this.startWalking = startWalking;
	function startWalking()
	{
		this.moving = true;
	}

	this.stopWalking = stopWalking;
	function stopWalking()
	{
		this.moving = false;
        this.currentSprite = 0;
		this.facing = 0;
	}
	
	this.getX = getX;
	function getX()
	{
		return this.x + this.offset;
	}
}
