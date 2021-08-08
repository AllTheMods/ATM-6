onEvent(`item.tooltip`, e => {
  const beeTypes = java("com.resourcefulbees.resourcefulbees.compat.jei.JEICompat").ENTITY_INGREDIENT
  const refined = [`controller`, `creative_controller`, `grid`, `crafting_grid`, `pattern_grid`, `fluid_grid`, `network_receiver`, `network_transmitter`, `relay`, `detector`, `security_manager`, `wireless_transmitter`, `disk_manipulator`, `crafter`, `crafter_manager`, `crafting_monitor`]

  e.addForType(entityType, ['bee:starry'], ['Housing this bee in a Creative Apiary will yield 10 comb blocks per harvest', 'You should have one by now, make use of it!'])
  refined.forEach(refin => e.add(`refinedstorage:${refin}`, `Right click or craft with a dye to color`))
  e.add(`pedestals:pedestal/stone333`, [
    `Press show uses(default U) key on §6§lColored Pallet§r`,
    `to show different colored pedestals you can make`
  ])
  e.add(`creativewirelesstransmitter:creative_wireless_transmitter`, [`Right click or craft with a dye to color`])
  e.add(`#pedestals:upgrades`, `Hold upgrades in off-hand to apply them`)
  e.add(`#resourcefulbees:valid_apiary`, `Valid Apiary Block`)
  e.add(`mekanism:creative_energy_cube`, [`§4§lWill delete energy if not filled`, `Check JEI Info tab for more info on charging the cube`])
})