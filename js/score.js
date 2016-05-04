var Score = function()
{
	this.x = 20; 
	this.y = 465;
	this.value = 0;
	
	this.update = function()
	{}

	this.draw = function()
	{
		context.fillStyle = "BLACK";
		context.font = "20px Arial";
		context.fillText("Pontos: " + this.value, this.x, this.y);		
	}
}