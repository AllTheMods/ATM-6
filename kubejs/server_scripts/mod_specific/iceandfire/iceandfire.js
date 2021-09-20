onEvent('recipes', e => {
  const dragonColors = ['red', 'green', 'bronze', 'gray', 'blue', 'white', 'sapphire', 'silver', 'electric', 'amythest', 'copper', 'black']

  e.shaped('2x iceandfire:creative_dragon_meal', ['DDD', 'DSD', 'DDD'], {
    D: 'iceandfire:dragon_meal',
    S: 'atmadditions:atm_star'
  })

  dragonColors.forEach(color => {
    e.shaped(`iceandfire:dragonegg_${color}`, ['DED', 'ESE', 'DED'], {
      S: 'atmadditions:atm_star',
      E: 'minecraft:dragon_egg',
      D: `iceandfire:dragonscales_${color}`
    })
  })

  removeRecipeByID(e, [
    'iceandfire:copper_block',
    'iceandfire:silver_block',
    'iceandfire:sapphire_block',
    'iceandfire:sapphire_block_to_stones'
  ])
})