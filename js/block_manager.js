var BlockManager = function()
{
	this.row = 5;
	this.column = 13;
	this.blocks = [];
	
	this.update = function()
	{}

	this.draw = function()
	{
		for(block of this.blocks) block.draw();
	}
	
	this.setupBlocks = function()
	{
		for (i = 0; i < this.row; i++)
		{
			for (j = 0; j < this.column; j++) 
				this.blocks[i * this.column + j] = new Block(i, j);
		}
	}
	
	this.setupBlocks();
}