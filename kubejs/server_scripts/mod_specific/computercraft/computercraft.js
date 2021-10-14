onEvent('recipes', e => {
  modifyShaped(e, 'computercraft:turtle_advanced', 1, ['III', 'ICI', 'IAI'], {
    I: '#forge:ingots/gold',
    C: 'computercraft:computer_advanced',
    A: '#forge:ingots/allthemodium'
  })
  modifyShaped(e, 'computercraft:turtle_normal', 1, ['III', 'ICI', 'IAI'], {
    I: '#forge:ingots/iron',
    C: 'computercraft:computer_normal',
    A: '#forge:ingots/allthemodium'
  })
  removeRecipeByID(e, [
    'advancedperipherals:chunk_controller'
  ])
})
