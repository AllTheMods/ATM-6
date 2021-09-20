onEvent('recipes', e => {
	//Add any extra seeds missing from the insolator.
	//For example, 'apatite' will create a recipe of apatite_seeds = apatite_essence + apatite_seeds
	const listMARecipes = [
	'apatite', 
	'slimesteel', 
	'pig_iron',
	'steeleaf',
	'ironwood',
	'aquamarine',
	'azure_silver',
	'crimson_iron',
	'ruby',
	'sapphire',
	'cobalt',
	'rose_gold',
	'fluorite',
	'knightmetal',
	'fiery_ingot',
	'azure_electrum',
	'manyullyn',
	'queens_slime',
	'hepatizon',
	'draconium'
	]
	for (let recipe of listMARecipes) {
		var essence = `mysticalagriculture:${recipe}_essence`
		var seeds = `mysticalagriculture:${recipe}_seeds`
		e.recipes.thermal.insolator([essence,seeds],seeds).water(500)
	}
})