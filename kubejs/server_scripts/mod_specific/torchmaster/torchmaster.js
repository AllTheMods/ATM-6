onEvent('recipes', e => {
  modifyShaped(e, 'torchmaster:megatorch', 1, ['TTT', 'GLG', 'DLD'], {
    T: 'xreliquary:interdiction_torch',
    G: '#forge:storage_blocks/gold',
    D: '#forge:storage_blocks/diamond',
    L: '#minecraft:logs'
  })
})