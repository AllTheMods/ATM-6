onEvent('recipes', e => {
  function dragonFlowers(dragons) {
    dragons.forEach(dragon => {
      e.shaped(Item.of(`iceandfire:${dragon.equals('ice') ? 'frost' : dragon}_lily`, 4), [
        'ACA',
        'BDB',
        'ACA'
      ], {
        A: 'minecraft:lily_of_the_valley',
        B: `iceandfire:${dragon}_dragon_heart`,
        C: `iceandfire:${dragon}_dragon_flesh`,
        D: 'mysticalagriculture:master_infusion_crystal'
      }).id(`kubejs:shaped/iceandfire/${dragon}_lily`)
    })
  }
  dragonFlowers([`fire`, `lightning`, `ice`])

  e.shaped('2x iceandfire:creative_dragon_meal', ['DDD', 'DSD', 'DDD'], {
    D: 'iceandfire:dragon_meal',
    S: 'atmadditions:atm_star'
  }).id('kubejs:shaped/iceandfire/creative_dragon_meal')

  let dragonColors = ['red', 'green', 'bronze', 'gray', 'blue', 'white', 'sapphire', 'silver', 'electric', 'amythest', 'copper', 'black']
  dragonColors.forEach(color => {
    e.shaped(`iceandfire:dragonegg_${color}`, ['DED', 'ESE', 'DED'], {
      S: 'atmadditions:atm_star',
      E: 'minecraft:dragon_egg',
      D: `iceandfire:dragonscales_${color}`
    }).id(`kubejs:shaped/iceandfire/dragonegg_${color}`)
  })

  removeRecipeByID(e, [
    'iceandfire:copper_block',
    'iceandfire:silver_block',
    'iceandfire:sapphire_block',
    'iceandfire:sapphire_block_to_stones'
  ])
})
