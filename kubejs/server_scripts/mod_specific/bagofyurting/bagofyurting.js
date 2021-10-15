onEvent('recipes', e => {
  modifyShaped(e, 'bagofyurting:bag_of_yurting', 1, ['WSW', 'WEW', 'WWW'], {
    W: '#minecraft:wool',
    E: '#forge:ender_pearls',
    S: '#forge:string'
  })
})
