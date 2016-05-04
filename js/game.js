var Game = function()
{
	this.player = new Player();
	this.ball = new Ball();
	this.blockManager = new BlockManager();
	this.score = new Score();
	
	this.update = function()
	{
		this.player.update();
		this.ball.update(this.player, this.blockManager.blocks, this.score);
		
		this.endGame();
	}

	this.draw = function()
	{
		this.player.draw();
		this.ball.draw();
		this.blockManager.draw();
		this.score.draw();
	}
	
	this.keyboardHandler = function(e, down) { this.player.keyboardHandler(e, down); }
	
	this.endGame = function()
	{
		for(i = 0; i < this.blockManager.blocks.length; i++)
		{
			if (!this.blockManager.blocks[i].isDead) break;
			
			else if (i == this.blockManager.blocks.length - 1)
				scene = new StaticScreen("images/WinScreen.jpg", "win");	
		}
	}
}