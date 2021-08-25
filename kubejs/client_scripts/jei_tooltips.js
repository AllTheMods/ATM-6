onEvent(`item.tooltip`, e => {
  const refined = [`controller`, `creative_controller`, `grid`, `crafting_grid`, `pattern_grid`, `fluid_grid`, `network_receiver`, `network_transmitter`, `relay`, `detector`, `security_manager`, `wireless_transmitter`, `disk_manipulator`, `crafter`, `crafter_manager`, `crafting_monitor`]
  const creativeOnly = [
    'exchangers:creative_exchanger',
    'appliedenergistics2:creative_storage_cell',
    'bloodmagic:activationcrystalcreative',
    'buildinggadgets:construction_paste_container_creative',
    'create:creative_fluid_tank',
    'create:handheld_worldshaper',
    'create:creative_crate',
    'elementalcraft:tank_creative',
    'mekanism:creative_bin',
    'modularrouters:creative_module',
    'pneumaticcraft:creative_upgrade',
    'quarryplus:creative_generator',
    'quarryplus:fuel_module_creative',
    'rftoolspower:dimensionalcell_creative',
    'rftoolsutility:creative_screen',
    'refinedstorage:creative_storage_disk',
    'refinedstorage:creative_fluid_storage_disk',
    'refinedstorage:creative_storage_block',
    'refinedstorage:creative_fluid_storage_block',
    'storagedrawers:creative_vending_upgrade',
    'theoneprobe:creativeprobe',
    'tconstruct:creative_slot',
    'woot:creative_power',
    'draconicevolution:creative_op_capacitor'
  ]

  creativeOnly.forEach(item => {
    e.add(item, [`§4This item is only available in Creative mode.`, '§4   - ATM Team'])
  })

  refined.forEach(refin => e.add(`refinedstorage:${refin}`, `Right click or craft with a dye to color`))
  e.add(`pedestals:pedestal/stone333`, [`Press show uses(default U) key on §6§lColored Pallet§r`, `to show different colored pedestals you can make`])
  e.add(`creativewirelesstransmitter:creative_wireless_transmitter`, `Right click or craft with a dye to color`)
  e.add(`#pedestals:upgrades`, `Hold upgrades in off-hand to apply them`)
  e.add(`#resourcefulbees:valid_apiary`, `Valid Apiary Block`)
  e.add(`mekanism:creative_energy_cube`, [`§4§lWill delete energy if not filled`, `Check JEI Info tab for more info on charging the cube`])
})