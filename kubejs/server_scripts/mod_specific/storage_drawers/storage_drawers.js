onEvent('recipes', e => {
  e.shaped('16x storagedrawers:creative_storage_upgrade', ['EEE', 'ASA', 'EEE'], {
    E: 'storagedrawers:emerald_storage_upgrade',
    S: 'atmadditions:atm_star',
    A: 'allthemodium:allthemodium_block'
  })
  e.replaceInput({ output: 'storagedrawers:compacting_drawers_3', type: 'minecraft:crafting_shaped' }, 'minecraft:stone', '#forge:stone')
  e.replaceInput({ output: 'storagedrawers:controller', type: 'minecraft:crafting_shaped' }, 'minecraft:stone', '#forge:stone')
  e.replaceInput({ output: 'storagedrawers:controller_slave', type: 'minecraft:crafting_shaped' }, 'minecraft:stone', '#forge:stone')
})
