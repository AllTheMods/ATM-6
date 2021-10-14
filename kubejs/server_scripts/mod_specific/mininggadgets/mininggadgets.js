onEvent('recipes', e => {
  e.shaped('mininggadgets:upgrade_empty', ['RAL', 'DGD', 'LAR'], {
    'L': '#forge:storage_blocks/lapis',
    'R': '#forge:storage_blocks/redstone',
    'D': '#forge:gems/diamond',
    'A': '#forge:nuggets/allthemodium',
    'G': '#forge:glass_panes'
  }).id(`kubejs:mininggadgets/upgrade`)

  removeRecipeByID(e, [
    'mininggadgets:upgrade_empty'
  ])
})
