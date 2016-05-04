var StaticScreen = function(image, name)
{
	this.image = new Image();
	this.image.src = image;
	this.name = name;
	
	this.update = function() {}

	this.draw = function() { context.drawImage(this.image, 0, 0, canvas.width, canvas.height); }
	
	this.keyboardHandler = function(e, down)
	{
		if(e.keyCode == 13 && down == true)
		{
			switch(this.name)
			{
				case "start": scene = new Game(); break;
				case "win": 
				case "lose": scene = new StaticScreen("images/StartScreen.jpg", "start"); break;
			}
		}
	}
}