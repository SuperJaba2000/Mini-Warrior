const Structures = new ContentList(
	function load(){
	    this.mine = new Structure('mine', 3, [
		    [{block: Blocks.mine.getWithVariant(0)}, {block: Blocks.mine.getWithVariant(1)}, {block: Blocks.mine.getWithVariant(2)}],
			[{block: Blocks.mine.getWithVariant(3)}, {block: Blocks.mine.getWithVariant(4)}, {block: Blocks.mine.getWithVariant(5)}],
			[{block: Blocks.mine.getWithVariant(6)}, {block: Blocks.mine.getWithVariant(7)}, {block: Blocks.mine.getWithVariant(8)}]
		]);
	}, false
);