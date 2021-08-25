onEvent('recipes', e => {
  const colors = ['red', 'green', 'bronze', 'gray', 'blue', 'white', 'sapphire', 'silver', 'electric', 'amythest', 'copper', 'black']

  e.shaped('2x iceandfire:creative_dragon_meal', [
    'DDD',
    'DSD',
    'DDD'
  ], {
    D: 'iceandfire:dragon_meal',
    S: 'atmadditions:atm_star'
  })

  colors.forEach(color => {
    e.shaped(`iceandfire:dragonegg_${color}`, [
      'DED',
      'ESE',
      'DED'
    ], {
      S: 'atmadditions:atm_star',
      E: 'minecraft:dragon_egg',
      D: `iceandfire:dragonscales_${color}`
    })
  })
})
