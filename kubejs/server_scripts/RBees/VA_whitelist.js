//priority: 1000
const VA = 'resourcefulbees:valid_apiary'

//Adding Valid Apiary tags
events.listen('item.tags', e => {
  e.add(VA, whitelistVA)
})

events.listen('block.tags', e => {
  e.add(VA, whitelistVA)
  e.add(VA, [
    //Fluids
    'minecraft:lava',
    'minecraft:water',
    'allthemodium:molten_bluelava_block',
  ])
})