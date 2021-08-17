onEvent('item.modification', e => {
  e.modify('immersivepetroleum:bitumen', item => item.setBurnTime(1600))
})

onEvent('worldgen.remove', e => {
  e.removeOres(ore => {
    ore.blocks = ['zycraft:aluminium_ore']
  })
})
