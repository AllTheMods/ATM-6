onEvent('recipes', e => {
  e.shaped('quarryplus:solidquarry', ['FFF', 'DGD', 'AAA'], {
    F: 'minecraft:furnace',
    D: 'minecraft:diamond_pickaxe',
    G: '#forge:storage_blocks/gold',
    A: '#forge:nuggets/allthemodium'
  }).id(`kubejs:solidquarry`)
  e.shaped('quarryplus:workbenchplus', ['III', 'GDG', 'AAA'], {
    I: '#forge:storage_blocks/iron',
    G: '#forge:storage_blocks/gold',
    D: '#forge:storage_blocks/diamond',
    A: '#forge:nuggets/allthemodium'
  }).id(`kubejs:workbenchplus`)

  removeRecipeByID(e, [
    'quarryplus:solidquarry',
    'quarryplus:workbenchplus'
  ])
})
