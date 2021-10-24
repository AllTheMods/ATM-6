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
  modifyShaped(e, 'computercraft:wired_modem', 1, [' S ', 'SRS', ' S '], {
    S: '#forge:stone',
    R: '#forge:dusts/redstone'
  })
  removeRecipeByID(e, [
    'advancedperipherals:chunk_controller',
    'computercraft:turtle_normal',
    'computercraft:turtle_advanced'
  ])
})
