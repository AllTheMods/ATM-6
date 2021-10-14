onEvent('recipes', e => {
  modifyShaped(e, 'entangled:block', 1, ['UEU', 'ECE', 'UEU'], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  })
  modifyShaped(e, 'entangled:item', 1, [' EC', ' UE', 'U  '], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  })
})
