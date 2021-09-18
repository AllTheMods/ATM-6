onEvent('recipes', e => {
  e.recipes.create.mechanical_crafting('create:creative_motor', ['CLC', 'HSH', 'LGL'], {
      C: 'create:cogwheel',
      L: 'create:large_cogwheel',
      H: 'create:shaft',
      S: 'atmadditions:atm_star',
      G: 'create:gearbox'
  })

  e.recipes.createCrushing([
      'allthemodium:allthemodium_dust',
      Item.of('allthemodium:allthemodium_dust', 2).withChance(0.3),
      Item.of('minecraft:cobblestone').withChance(0.12)
  ], 'allthemodium:allthemodium_ore')
  e.recipes.createCrushing([
      'allthemodium:vibranium_dust',
      Item.of('allthemodium:vibranium_dust', 2).withChance(0.3),
      Item.of('minecraft:cobblestone').withChance(0.12)
  ], 'allthemodium:vibranium_ore')
  e.recipes.createCrushing([
      'allthemodium:unobtainium_dust',
      Item.of('allthemodium:unobtainium_dust', 2).withChance(0.3),
      Item.of('minecraft:cobblestone').withChance(0.12)
  ], 'allthemodium:unobtainium_ore')

  e.recipes.createSplashing([
      '10x allthemodium:allthemodium_nugget',
      Item.of('allthemodium:allthemodium_nugget', 5).withChance(0.5)
  ], 'allthemodium:allthemodium_dust')
  e.recipes.createSplashing([
      '10x allthemodium:vibranium_nugget',
      Item.of('allthemodium:vibranium_nugget', 5).withChance(0.5)
  ], 'allthemodium:vibranium_dust')
  e.recipes.createSplashing([
      '10x allthemodium:unobtainium_nugget',
      Item.of('allthemodium:unobtainium_nugget', 5).withChance(0.5)
  ], 'allthemodium:unobtainium_dust')
  e.recipes.createSplashing([
      'minecraft:dirt',
      Item.of('minecraft:gravel', 1).withChance(0.2),
      Item.of('minecraft:flint', 1).withChance(0.05)
  ], 'minecraft:coarse_dirt')

  energize([
      Item.of('create:flywheel').toJson(),
      Item.of('create:furnace_engine').toJson(),
      Item.of('atmadditions:atm_star').toJson()
  ], 'createaddition:creative_energy', 2147483647)

  e.recipes.create.mixing('create:creative_blaze_cake', [
      'createaddition:chocolate_cake',
      'atmadditions:atm_star',
      'createaddition:honey_cake'
  ]).superheated().processingTime(6000).id('kubejs:create/creative_blaze_cake')

  e.replaceInput('create:wheat_flour', '#forge:dusts/flour')
  e.replaceInput('pneumaticraft:wheat_flour', '#forge:dusts/flour')
  e.replaceInput('pamhc2foodcore:flouritem', '#forge:dusts/flour')
  e.replaceInput('create:dough', '#forge:dough')
  e.replaceInput('pamhc2foodcore:doughitem', '#forge:dough')

  e.replaceOutput('pneumaticraft:wheat_flour', 'create:wheat_flour')
  e.replaceOutput('pamhc2foodcore:flouritem', 'create:wheat_flour')
  e.replaceOutput('pamhc2foodcore:doughitem', 'create:dough')

  removeRecipeByID([
      'create:crafting/materials/copper_block_from_compacting',
      'create:crafting/materials/zinc_block_from_compacting',
      'create:emptying/honey_bottle'
  ])
})