onEvent('recipes', e => {
  modifyShaped(e, 'cyclic:soulstone', 1, ['GTG', 'TST', 'GTG'], {
    G: '#forge:ingots/gold',
    T: 'minecraft:totem_of_undying',
    S: 'atmadditions:atm_star_shard'
  })

  removeRecipeByID(e, [
    'cyclic:melter_honey',
    'cyclic:melter_honey1',
    'cyclic:melter_honeybottle',
    'cyclic:melter_honeybottle1',
    'cyclic:solidifier_honeynest',
    'cyclic:solidifier_honeycookie',
    'cyclic:solidifier_honeymelon',
    'cyclic:solidifier_apple_enchanted',
    'cyclic:solidifier_honeyhive',
    'cyclic:solidifier_apple0',
    'cyclic:solidifier_honey_block0',
    'cyclic:solidifier_amber',
    'cyclic:solidifier_honeycomb',
    'cyclic:solidifier_honey_block',
    'cyclic:solidifier_apple',
    'cyclic:solidifier_honeypie',
    'cyclic:solidifier_honeycake',
    'cyclic:solidifier_honeycarrot',
    'cyclic:solidifier_honey_bottle',
    'cyclic:energy_pipe',
    'cyclic:item_pipe',
    'cyclic:fluid_pipe',
    'cyclic:crafting_bag'
  ])

  removeRecipeByOutput(e, [
    'cyclic:packager', // lag issues
    'cyclic:uncrafter',
    'cyclic:tile_transporter_empty',
    'cyclic:trash'
  ])
})
