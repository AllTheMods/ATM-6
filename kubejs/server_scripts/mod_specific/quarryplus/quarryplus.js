onEvent('recipes', e => {
  modifyShaped(e, 'quarryplus:solidquarry', 1, ['FFF', 'DGD', 'AAA'], {
    F: 'minecraft:furnace',
    D: 'minecraft:diamond_pickaxe',
    G: '#forge:storage_blocks/gold',
    A: '#forge:nuggets/allthemodium'
  })
  modifyShaped(e, 'quarryplus:workbenchplus', 1, ['III', 'GDG', 'AAA'], {
    I: '#forge:storage_blocks/iron',
    G: '#forge:storage_blocks/gold',
    D: '#forge:storage_blocks/diamond',
    A: '#forge:nuggets/allthemodium'
  })
})
