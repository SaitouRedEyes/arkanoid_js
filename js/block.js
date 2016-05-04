var Block = function(currRow, currColumn)
{
	this.image = new Image();
	this.image.src = "images/Block.jpg";
	this.x = 10 + (currColumn * 43) + (currColumn * 5); 
	this.y = 10 + (currRow * 18) + (currRow * 5);
	this.isDead = false;
	
	this.update = function()
	{}

	this.draw = function()
	{
		if(this.isDead == false) context.drawImage(this.image, this.x, this.y);
	}
}