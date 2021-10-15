onEvent('recipes', e => {
  e.shaped('byg:black_ice', ['III', 'IDI', 'III'], {
    I: 'minecraft:ice',
    D: '#forge:dyes/black'
  }).id(`kubejs:byg_black_ice`)

  removeRecipeByID(e, [
    'byg:compat/tconstruct/magma_cream_from_cryptic_magma_block_melting',
    'byg:compat/tconstruct/magma_cream_from_magmatic_stone_melting',
    'byg:compat/tconstruct/magmatic_stone_from_casting',
    'byg:compat/tconstruct/cryptic_magma_block_from_casting',
    'byg:black_glass_from_sand',
    'byg:purple_glass_from_sand',
    'byg:blue_glass_from_sand',
    'byg:white_glass_from_sand'
  ])
})
