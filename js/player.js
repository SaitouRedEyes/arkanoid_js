var Player = function()
{
	this.image = new Image();
	this.image.src = "images/Player.jpg";
	this.x = (canvas.width / 2) - 44; //Fazer preload das imagens para usar o width delas.
	this.y = 430;
	this.speed = 10;
	this.moveLeft = false;
	this.moveRight = false;
	
	this.update = function()
	{
		if(this.moveLeft == true)  this.x -= this.speed;
		if(this.moveRight == true) this.x += this.speed;
		
		if(this.x < 0) this.x = 0;
		
		else if(this.x + this.image.width > canvas.width) 
			this.x = canvas.width - this.image.width;
	}

	this.draw = function() { context.drawImage(this.image, this.x, this.y); }
	
	this.keyboardHandler = function(e, down)
	{
		switch(e.keyCode)
		{
			case 37: this.moveLeft  = down == true ? true : false; break;
			case 39: this.moveRight = down == true ? true : false; break;
		}
	}
}