onEvent('item.tooltip', e => {
  //#region variables
  let creativeOnly = [
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

  let formattedTooltip = (item, tooltip, signature) => {
    e.add(item, '')
    let line = ''
    tooltip.split(' ').forEach(word => {
      line.length == 0 ? line = word : line += ` ${word}`
      if (line.length > 30) {
        e.add(item, Text.of(line).darkPurple())
        line = ''
      }
    })
    if (line.length > 0) e.add(item, Text.of(line).darkPurple())
    if (signature) e.add(item, Text.of(`   - ${signature}`).darkRed())
    e.add(item, '')
  }
  //#endregion
  utils.listOf(['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'])
    .forEach(refined => e.add(`refinedstorage:${refined}`, 'Right click or craft with a dye to color'))

  creativeOnly.forEach(item => formattedTooltip(item, 'This item is only available in Creative mode', 'Lexxie'))

  formattedTooltip('pedestals:pedestal/stone333', 'Press show uses(default U) key on Colored Pallet to show different colored pedestals you can make')
  formattedTooltip('creativewirelesstransmitter:creative_wireless_transmitter', 'Right click or craft with a dye to color')
  formattedTooltip('#pedestals:upgrades', 'Hold upgrades in off-hand to apply them')
  formattedTooltip('zycraft:zychorium_water', 'Acts as a water source block. Can turn source lava to obsidian and flowing lava to cobblestone.')
  formattedTooltip('zycraft:zychorium_soil', 'Acts as a farmland block. Any crops can be placed on this block (even sugar cane and cactus) and it doesn\'t require any adjacent water to be able to grow crops. The soil blocks can be stacked on top of each other which will increase the growth speed of a crop by a little with each soil block added.')
  formattedTooltip('zycraft:fire_basin', 'Acts as a netherrack block. Fire will always burn on the upper side of this block.')
  formattedTooltip('zycraft:fluid_void', 'Voids any adjacent fluid (works with waterlogged blocks too).')
  formattedTooltip('zycraft:zychorium_ice', 'Turns adjacent water to ice.')
  formattedTooltip('zycraft:fabricator', 'Autocrafter that can push the results into adjacent fabricators.')
  formattedTooltip('mekanism:creative_energy_cube', 'Will delete energy if not filled! Check JEI Info tab for more info on charging the cube', 'Lexxie')
  formattedTooltip('mahoutsukai:caliburn', 'This item is obtained by throwing an enchanted sword into a lake created by the Power Consolidation ritual', 'Lexxie')
  formattedTooltip('mahoutsukai:morgan', 'This item is obtained by killing a tamed wolf with a Caliburn', 'Lexxie')
})