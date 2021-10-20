onEvent('recipes', e => {
  modifyShaped(e, 'compactmachines:wall', 1, [' R ', ' A '], {
    R: '#forge:dusts/redstone',
    A: '#forge:storage_blocks/allthemodium'
  })
})
