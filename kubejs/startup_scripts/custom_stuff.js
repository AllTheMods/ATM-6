events.listen('item.registry', function (e) {
  e.create('mass_of_wills').displayName('§6Mass of Wills').tooltip('§8Combination of the six wills of the ancients').unstackable()
  e.create('rune_of_sins').displayName('§6Rune of Sins').tooltip('§8Rune that contains the power of the seven sins').unstackable()
  e.create('rotten_leather').displayName('Rotten Leather')
  /* e.create('example_food').food(function(food){
    food.hunger(10)
    food.saturation(1)
    food.meat()
    food.alwaysEdible()
    food.fastToEat()
    food.effect('minecraft:regeneration', 400, 1, 1.0)
  }).add() */
})
events.listen('block.registry', function (e) {
  e.create('magical_soil').displayName('§bMagical Soil').material(block.material.organic).hardness(0.6)
  e.create('nether_star_block').displayName('§eNether Start Block').material(block.material.glass).hardness(2)
})