onEvent('recipes', e => {
  e.recipes.create.mechanical_crafting('create:creative_motor', ['CLC', 'HSH', 'LGL'], {
    C: 'create:cogwheel',
    L: 'create:large_cogwheel',
    H: 'create:shaft',
    S: 'atmadditions:atm_star',
    G: 'create:gearbox'
  })

  energize(e, [
    Item.of('create:flywheel').toJson(),
    Item.of('create:furnace_engine').toJson(),
    Item.of('atmadditions:atm_star').toJson()
  ], 'createaddition:creative_energy', 2147483647)

  e.recipes.create.mixing('create:creative_blaze_cake', [
    'createaddition:chocolate_cake',
    'atmadditions:atm_star',
    'createaddition:honey_cake'
  ]).superheated().processingTime(6000).id('kubejs:create/creative_blaze_cake')

  removeRecipeByID(e, [
    'create:crafting/materials/copper_block_from_compacting',
    'create:crafting/materials/zinc_block_from_compacting',
    'create:emptying/honey_bottle'
  ])
})