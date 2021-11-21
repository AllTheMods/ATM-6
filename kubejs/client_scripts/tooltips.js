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

  let formattedTooltip = (item, tooltip) => {
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
    e.add(item, '')
  }
  //#endregion
  utils.listOf(['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'])
    .forEach(refined => e.add(`refinedstorage:${refined}`, 'Right click or craft with a dye to color'))

  creativeOnly.forEach(item => formattedTooltip(item, 'This item is only available in Creative mode'))

  formattedTooltip('pedestals:pedestal/stone333', 'Press show uses(default U) key on Colored Pallet to show different colored pedestals you can make')
  formattedTooltip('creativewirelesstransmitter:creative_wireless_transmitter', 'Right click or craft with a dye to color')
  formattedTooltip('#pedestals:upgrades', 'Hold upgrades in off-hand to apply them')
  formattedTooltip('zycraft:zychorium_water', 'Acts as a water source block. Can turn source lava to obsidian and flowing lava to cobblestone.')
  formattedTooltip('zycraft:zychorium_soil', 'Acts as a farmland block. Any crops can be placed on this block (even sugar cane and cactus) and it doesn\'t require any adjacent water to be able to grow crops. The soil blocks can be stacked on top of each other which will increase the growth speed of a crop by a little with each soil block added.')
  formattedTooltip('zycraft:fire_basin', 'Acts as a netherrack block. Fire will always burn on the upper side of this block.')
  formattedTooltip('zycraft:fluid_void', 'Voids any adjacent fluid (works with waterlogged blocks too).')
  formattedTooltip('zycraft:zychorium_ice', 'Turns adjacent water to ice.')
  formattedTooltip('zycraft:fabricator', 'Autocrafter that can push the results into adjacent fabricators.')
  formattedTooltip('mekanism:creative_energy_cube', 'Will delete energy if not filled! Check JEI Info tab for more info on charging the cube')
  formattedTooltip('mahoutsukai:caliburn', 'This item is obtained by throwing an enchanted sword into a lake created by the Power Consolidation ritual. The damage cap can be increased by throwing the sword back into the lake with up to five ATM Stars. This can only be done once.')
  formattedTooltip('mahoutsukai:morgan', 'This item is obtained by killing a tamed wolf with a Caliburn. The damage cap will be the same as the Caliburn used to create it.')
  formattedTooltip('craftingstation:crafting_station', 'Crafting Station Mk.II')
  formattedTooltip('atmadditions:atm_star_shard', 'Check JEI Info page for more info')
  formattedTooltip('appliedenergistics2:quantum_entangled_singularity', 'To make this, you must use Ender Pearls, not Ender Dust')
  formattedTooltip('astralsorcery:altar_discovery', 'Check the Astral Tome for more info')
  formattedTooltip('enderchests:ender_chest', 'Increase the capacity by shift right-clicking with Eye of Ender or Ender Pearls')
  formattedTooltip('enderchests:ender_tank', 'Increase the capacity by shift right-clicking with Eye of Ender or Ender Pearls')

  //#region Pipez
  //pipes
  e.add('pipez:item_pipe', [
    [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
    [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
  ])
  e.add('pipez:fluid_pipe', [
    [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
  ])
  e.add('pipez:gas_pipe', [
    [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
  ])
  e.add('pipez:energy_pipe', [
    [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
  ])

  //upgrades
  e.add('pipez:basic_upgrade', [
    [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/t')],
    [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])
  e.add('pipez:improved_upgrade', [
    [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/t').gold()],
    [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])
  e.add('pipez:advanced_upgrade', [
    [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/t').darkAqua()],
    [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])
  e.add('pipez:ultimate_upgrade', [
    [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])
  e.add('pipez:infinity_upgrade', [
    [Text.of('Item:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
    [Text.of('Fluid:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Gas:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Energy:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
  ])
  //#endregion
})
