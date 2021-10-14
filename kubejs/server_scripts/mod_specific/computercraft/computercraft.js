onEvent('recipes', e => {
  e.shaped('computercraft:turtle_advanced', ['III', 'ICI', 'IAI'], {
    I: '#forge:ingots/gold',
    C: 'computercraft:computer_advanced',
    A: '#forge:ingots/allthemodium'
  }).id(`kubejs:computercraft/turtle_advanced`)
  e.shaped('computercraft:turtle_normal', ['III', 'ICI', 'IAI'], {
    I: '#forge:ingots/iron',
    C: 'computercraft:computer_normal',
    A: '#forge:ingots/allthemodium'
  }).id(`kubejs:computercraft/turtle_normal`)

  removeRecipeByID(e, [
    'advancedperipherals:chunk_controller',
    'computercraft:turtle_normal',
    'computercraft:turtle_advanced',
    'computercraft:turtle_advanced_upgrade'
  ])
})
