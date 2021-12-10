onEvent('recipes', e => {
  e.shapeless("enderstorage:ender_chest", "enderchests:ender_chest").id('kubejs:shapeless/enderstorage/conversion1')
  e.shapeless("enderstorage:ender_pouch", "enderchests:ender_bag").id('kubejs:shapeless/enderstorage/conversion2')
  e.shapeless("enderstorage:ender_tank", "endertanks:ender_tank").id('kubejs:shapeless/enderstorage/conversion3')

  e.remove({mod: 'enderchests'})
  e.remove({mod: 'endertanks'})
})
