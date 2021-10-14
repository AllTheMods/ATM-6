onEvent('recipes', e => {
  modifyShaped(e, 'mininggadgets:upgrade_empty', 1, ['RAL', 'DGD', 'LAR'], {
    'L': '#forge:storage_blocks/lapis',
    'R': '#forge:storage_blocks/redstone',
    'D': '#forge:gems/diamond',
    'A': '#forge:nuggets/allthemodium',
    'G': '#forge:glass_panes'
  })
})
