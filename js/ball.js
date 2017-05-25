var Ball = function()
{
	this.image = new Image();
	this.image.src = "images/Ball.jpg";
	this.x = (canvas.width / 2) - 12; //Fazer preload das imagens para usar o width delas.
	this.y = (canvas.height / 2) - 12;
	this.speedX = 7;
	this.speedY = 7;
	
	this.update = function(player, blocks, score)
	{
		this.x += this.speedX;
		this.y += this.speedY;
		
		this.collisionWithBounds();
		this.collisionWithPlayer(player);
		this.collisionWithBlocks(blocks, score);
	}

	this.draw = function() { context.drawImage(this.image, this.x, this.y); }
	
	this.collisionWithBounds = function()
	{
		if(this.x < 0 || this.x + this.image.width > canvas.width) this.speedX *= -1;
		
		if(this.y < 0) this.speedY *= -1;
		
		if(this.y + this.image.height > canvas.height)
			scene = new StaticScreen("images/LoseScreen.jpg", "lose");
		
	}
	
	this.collisionWithPlayer = function(player)
	{
		if (this.y < player.y + player.image.height)
		{
			if (this.x < player.x + player.image.width &&
				this.x + this.image.width > player.x &&
				this.y < player.y + player.image.height &&
				this.y + this.image.height > player.y)
			{				
				this.speedY *= -1;
			}
		}
	}
	
	this.collisionWithBlocks = function(blocks, score)
	{
		for (block of blocks)
		{
			if (!block.isDead &&
				this.x <= block.x + block.image.width &&
				this.x + this.image.width >= block.x &&
				this.y <= block.y + block.image.height &&
				this.y + this.image.height >= block.y)
			{
				this.speedY *= -1;
				block.isDead = true;
				score.value += 10;
				break;
			}
		}
	}
}