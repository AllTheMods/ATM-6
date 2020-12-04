var ores = [
  'Allthemodium',
  'Vibranium',
  'Unobtainium',
  'Aluminum',
  'Copper',
  'Lead',
  'Nickel',
  'Osmium',
  'Platinum',
  'Silver',
  'Tin',
  'Uranium',
  'Zinc'
]

events.listen('item.registry', function (e) {
  e.create('mass_of_wills').displayName('§6Mass of Wills').tooltip('§8Combination of the six wills of the ancients').unstackable()
  e.create('rune_of_sins').displayName('§6Rune of Sins').tooltip('§8Rune that contains the power of the seven sins').unstackable()
  e.create('rotten_leather').displayName('Rotten Leather')
  e.create('uu_matter').displayName('§dUU-Matter')
  /*
  e.create('example_food').food(function(food){
    food.hunger(10)
    food.saturation(1)
    food.meat()
    food.alwaysEdible()
    food.fastToEat()
    food.effect('minecraft:regeneration', 400, 1, 1.0)
  }).add()
  */
  //Script for making items for the mekanism 5x process
  /*
  utils.listOf(ores).forEach(function (ore) {
    var oreFormatted = ore.toLowerCase()
    e.create('clump_' + oreFormatted).displayName(ore + ' Clump').texture('kubejs:item/oreStuff/clump_' + oreFormatted)
    e.create('shard_' + oreFormatted).displayName(ore + ' Shard').texture('kubejs:item/oreStuff/shard_' + oreFormatted)
    e.create('dirty_' + oreFormatted).displayName('Dirty ' + ore + ' Dust').texture('kubejs:item/oreStuff/dirty_' + oreFormatted)
    e.create('crystal_' + oreFormatted).displayName(ore + ' Crystal').texture('kubejs:item/oreStuff/crystal_' + oreFormatted)
  })
  */
})

events.listen('block.registry', function (e) {
  e.create('magical_soil').displayName('§bMagical Soil').material(block.material.organic).hardness(0.6)
  e.create('nether_star_block').displayName('§eNether Star Block').material(block.material.iron).hardness(2).lightLevel(1)
})