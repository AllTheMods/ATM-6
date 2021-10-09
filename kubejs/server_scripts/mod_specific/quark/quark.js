onEvent('recipes', e => {
  function buildQuarkChest(type, material) {
    e.shaped(`quark:${type}_chest`, ['aaa', 'a a', 'aaa'], { a: material })
    e.shapeless(`quark:${type}_trapped_chest`, [`quark:${type}_chest`, 'minecraft:tripwire_hook'])
  }

  buildQuarkChest('nether_brick', 'minecraft:nether_bricks')
  buildQuarkChest('prismarine', 'minecraft:prismarine')
  buildQuarkChest('mushroom', '#forge:mushroom_caps')
  buildQuarkChest('purpur', 'minecraft:purpur_block')

  utils.listOf(['oak', 'dark_oak', 'acacia', 'spruce', 'birch', 'jungle', 'warped', 'crimson']).forEach(wood => {
    e.shapeless(`quark:${wood}_chest`, [`minecraft:${wood}_planks`, '#forge:chests/wooden'])
    e.shapeless(`quark:${wood}_trapped_chest`, [`quark:${wood}_chest`, 'minecraft:tripwire_hook'])
  })

  removeRecipeByOutput(e, [
    'quark:apple_crate',
    'quark:potato_crate',
    'quark:carrot_crate',
    'quark:beetroot_crate',
    'quark:charcoal_block',
    'quark:gunpowder_sack'
  ])
})
