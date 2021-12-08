onEvent('recipes', e => {
  e.shapeless("enderstorage:ender_chest", "#forge:chests/ender").id('kubejs:shapeless/enderstorage/conversion1')
  e.shapeless("enderstorage:ender_pouch", "enderchests:ender_bag").id('kubejs:shapeless/enderstorage/conversion2')
  e.shapeless("enderstorage:ender_tank", "#forge:tanks/ender").id('kubejs:shapeless/enderstorage/conversion3')

  modifyShaped(e, 'enderstorage:ender_chest', 1, ['BWB', 'OCO', 'BEB'], {
    B: '#forge:rods/blaze',
    W: '#forge:wool',
    O: '#forge:obsidian',
    C: '#forge:chests',
    E: '#forge:ender_pearls'
  })
  modifyShaped(e, 'enderstorage:ender_pouch', 1, ['BLB', 'LEL', 'BWB'], {
    B: 'minecraft:blaze_powder',
    W: '#forge:wool',
    L: '#forge:leather',
    E: '#forge:ender_pearls'
  })
  modifyShaped(e, 'enderstorage:ender_tank', 1, ['BWB', 'OCO', 'BEB'], {
    B: '#forge:rods/blaze',
    W: '#forge:wool',
    O: '#forge:obsidian',
    C: 'minecraft:cauldron',
    E: '#forge:ender_pearls'
  })
  e.remove({ MOD: ['enderchest', 'endertanks'] })
})
