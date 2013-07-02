//constructor/class FUCKING JS
function player()
{
    //player attributes
    this.x = 100;
    this.y = 100;
    this.height = 95;
    this.width = 71;
    this.speed = 5;
    this.facing = 0;
    this.jumpSpeed = 30;
    this.jumpLimit = 225;

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
		this.hitX = false;
		var hitYT = false;
		var hitYB = false;

		for(var i = 0; i < level.blocks.length; i++)
		{
			// Collide Top
			if(this.y + this.height <= level.getY(i))	// Above Top
			{
				if(this.y + this.height + level.gravity >= level.getY(i))	// Going to hit Top
				{
					if(this.x + this.width >= level.getX(i))
					{
						if(this.x <= level.getX(i) + level.getLength(i))
						{
							hitYT = true;
							this.y = level.getY(i) - this.height;
							this.jumpCount = 0;
						}
					}
				}
			}

			// Collide Bottom
			if(this.y >= level.getY(i) + level.getHeight(i)) // Below Bottom
			{
				if(this.jumpCount > 0)
				{
					if((level.getY(i) + level.getHeight(i)) - this.y >= this.jumpSpeed)
					{
						if(this.x + this.width >= level.getX(i))
						{
						//alert("yolo1");
							if(this.x <= level.getX(i) + level.getLength(i))
							{
							//alert("yolo2");
								//hitYT = true;
								this.y = level.getY(i) + level.getHeight(i);
								this.jumpCount = 0;
								window.clearInterval(this.jumpTimer);
							}
						}
					}
					if(this.y - this.jumpSpeed <= level.getY(i) + level.getHeight(i))	// About to be above bottom
					{

						if(this.x + this.width >= level.getX(i))
						{
						//alert("yolo1");
							if(this.x <= level.getX(i) + level.getLength(i))
							{
							//alert("yolo2");
								//hitYT = true;
								
								this.y = level.getY(i) + level.getHeight(i);
								this.jumpCount = 0;
								window.clearInterval(this.jumpTimer);
							}
						}
					}
				}
			}
			
			// Left Side Collision
			if(this.x + this.width <= level.getX(i))	// Left of Object
			{
				if(this.x + this.width + this.facing*this.speed >= level.getX(i))
				{
					if(this.y >= level.getY(i) || this.y + this.height >= level.getY(i) )
					{
						if(this.y <= level.getY(i) + level.getHeight(i) || this.y + this.height >= level.getY(i) + level.getHeight(i))
						{
							document.getElementById("blah").value = document.getElementById("blah").value + ", LevelX: " + level.getX(i);
							this.hitX = true;
							this.x = level.getX(i) - this.width - 1;
						}
					}
				}
			}

			// Right Side Collision
			if(this.x >= level.getX(i) + level.getLength(i))
			{
				if(this.x + this.facing*this.speed <= level.getX(i) + level.getLength(i))
				{
					if(this.y <= level.getY(i) + level.getHeight(i))
					{
						if(this.y + this.height >= level.getY(i))
						{
							this.hitX = true;
							//this.x = level.getX(i) + level.getLength(i) + 0.001;
						}
					}
				}
			}

			
		}
		if(!hitYT)
			this.y += level.gravity;
		if(hitYB)
		{
			alert("yolo");
			this.y += level.gravity;
		}
		if(!this.hitX)
		{
			if((this.x + this.facing*this.speed >= 0) && (this.x + this.width + this.facing*this.speed <= 800))
			{
				this.x += this.facing*this.speed;
			}
		}
        if(this.spriteFacing == 1)
        {
            ctx.drawImage(this.spriteRight[this.currentSprite], this.x, this.y, this.width, this.height);
        }
        else
        {
            ctx.drawImage(this.spriteLeft[this.currentSprite], this.x, this.y, this.width, this.height);
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
}
