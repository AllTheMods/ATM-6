events.listen('item.registry', function (e) {
  e.create('mass_of_wills').displayName('§6Mass of Wills').tooltip('§8Combination of the six wills of the ancients').maxStackSize(1)
  e.create('rune_of_sins').displayName('§6Rune of Sins').tooltip('§8Rune that contains the power of the seven sins').maxStackSize(1)
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