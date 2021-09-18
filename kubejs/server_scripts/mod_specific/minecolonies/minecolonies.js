onEvent('recipes', e => {
  modifyShaped('minecolonies:blockhutbuilder', 1, ['PTP', 'PDP', 'PPP'], {
      P: '#minecraft:planks',
      D: '#minecraft:wooden_doors',
      T: 'structurize:sceptergold'
  })
})