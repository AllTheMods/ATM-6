onEvent('recipes', e => {
  e.shaped('entangled:block', ['UEU', 'ECE', 'UEU'], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  }).id(`kubejs:entangled/block`)
  e.shaped('entangled:item', [' EC', ' UE', 'U  '], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  }).id(`kubejs:entanled/item`)

  removeRecipeByID(e, [
    'entangled:block',
    'entangled:item'
  ])
})
