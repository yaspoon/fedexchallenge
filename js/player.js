//constructor/class FUCKING JS
function player()
{
    //player attributes
	this.maxHP = 200;
	this.hp = 30;
	this.armor = 40;
	
    this.x = 100;
    this.y = 100;
    this.height = 95;
    this.width = 66;
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
		
		/*
		if(!hitYT)
			this.y += level.gravity;
		
		if(!this.hitX)
		{
			if((this.x + this.facing*this.speed >= 0) && (this.x + this.width + this.facing*this.speed <= 800))
			{
				if(this.x + (this.facing*this.speed) > 250)
				{
					level.offset -= (this.speed*this.facing);
				}
				else if(this.spriteFacing == -1 && this.x + (this.facing*this.speed) <= 250)
				{
					if(level.offset + this.speed <= 0)
					{
						level.offset += this.speed;
							//if(this.x + (this.facing*this.speed) <= 250 && level.offset == 0)
								//this.x += this.facing*this.speed;
					}
					else
					{
						this.x += this.facing*this.speed;
					}
				}
				else
				{
					this.x += this.facing*this.speed;
				}
			}
		}
		*/
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
	
	this.checkCollisions = checkCollisions
	function checkCollisions(level)
	{
		this.hitX = false;
		var hitYT = false;
		var hitYB = false;

		for(var i = 0; i < level.blocks.length; i++)
		{
		    //top left corner is inside the other one so push the player down
		    if( this.y >= level.blocks[i][1] && this.y <= level.blocks[i][1] + level.blocks[i][3] && this.x >= level.blocks[i][0] && this.x <= level.blocks[i][0] + level.blocks[i][2] )
		    {
		        this.y = level.blocks[i][1] + level.blocks[i][3];
		    }
		    
		    //bottom left corner is inside the other one so push the player up
		    if( this.y + this.height > level.blocks[i][1] && this.y + this.height < level.blocks[i][1] + level.blocks[i][3] && this.x >= level.blocks[i][0] && this.x <= level.blocks[i][0] + level.blocks[i][2])
		    {
		        this.y = level.blocks[i][1] - this.height;
		        this.jumpCount = 0;
		    }
		    
		    //top right corner is inside the other one so push the player down
		    if( this.y >= level.blocks[i][1] && this.y <= level.blocks[i][1] + level.blocks[i][3] && this.x + this.width >= level.blocks[i][0] && this.x + this.width <= level.blocks[i][0] + level.blocks[i][2] )
		    {
		        this.y = level.blocks[i][1] + level.blocks[i][3];
		    }
		    
		    //bottom right corner is inside hte other one so push the player up
		    if( this.y + this.height > level.blocks[i][1] && this.y + this.height < level.blocks[i][1] + level.blocks[i][3] && this.x + this.width >= level.blocks[i][0] && this.x + this.width <= level.blocks[i][0] + level.blocks[i][2])
		    {
		        this.y = level.blocks[i][1] - this.height;
		        this.jumpCount = 0;
		    }
		    
		    //left hand side of player is inside the other one push it to the right
		    if(this.x >= level.blocks[i][0] && this.x <= level.blocks[i][0] + level.blocks[i][2] && this.y <= level.blocks[i][1] && this.y + this.height >= level.blocks[i][1] + level.blocks[i][3])
		    {
		        this.x = level.blocks[i][0] + level.blocks[i][2];
		    }
		    
		    if( this.x + this.width >= level.blocks[i][0] && this.x + this.width <= level.blocks[i][0] + level.blocks[i][2] && this.y <= level.blocks[i][1] && this.y + this.height >= level.blocks[i][1] + level.blocks[i][3])
		    {
		        this.x = level.blocks[i][0] - this.width;
		    }
		    
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
