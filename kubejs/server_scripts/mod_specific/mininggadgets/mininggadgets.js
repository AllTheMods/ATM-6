onEvent('recipes', e => {
  e.shaped('mininggadgets:upgrade_empty', ['RAL', 'DGD', 'LAR'], {
    'L': '#forge:storage_blocks/lapis',
    'R': '#forge:storage_blocks/redstone',
    'D': '#forge:gems/diamond',
    'A': '#forge:nuggets/allthemodium',
    'G': 'minecraft:glass_pane'
  }).id(`kubejs:mininggadgets/upgrade`)

  removeRecipeByID([
    'mininggadgets:upgrade_empty'
  ])
})