onEvent('recipes', e => {
  e.remove({ input: 'appliedenergistics2:flour' })

  energize(e, ['appliedenergistics2:dense_energy_cell', 'atmadditions:atm_star'], 'appliedenergistics2:creative_energy_cell', '2147483647')

  e.smelting('appliedenergistics2:certus_quartz_crystal', '#forge:ores/certus_quartz').xp(1).id('kubejs:appliedenergistics2/smelting/certus')
  e.shapeless('appliedenergistics2:interface', 'appliedenergistics2:cable_interface').id(`kubejs:appliedenergistics2/interface`)

  e.shaped('4x appliedenergistics2:sky_stone_block', ['BSB', 'SBS', 'BSB'], {
    S: 'minecraft:stone',
    B: 'minecraft:blackstone'
  }).id(`kubejs:appliedenergistics2/sky_stone_brick`)
  e.shaped('appliedenergistics2:calculation_processor_press', ['CFC', 'FVF', 'PFP'], {
    C: 'appliedenergistics2:purified_certus_quartz_crystal',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/vibranium',
    P: 'appliedenergistics2:fluix_pearl'
  }).id(`kubejs:appliedenergistics2/calculation_press`)
  e.shaped('appliedenergistics2:logic_processor_press', ['BFB', 'FVF', 'CFC'], {
    B: '#forge:ingots/blaze_gold',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/vibranium',
    C: '#forge:ingots/rose_gold'
  }).id(`kubejs:appliedenergistics2/logic_press`)
  e.shaped('appliedenergistics2:engineering_processor_press', ['DFD', 'FVF', 'DFD'], {
    D: '#forge:gems/mana_diamond',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/vibranium'
  }).id(`kubejs:appliedenergistics2/engineering_press`)
  e.shaped('appliedenergistics2:silicon_press', ['WFW', 'FVF', 'WFW'], {
    W: '#forge:silicon',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/vibranium'
  }).id(`kubejs:appliedenergistics2/silicon_press`)

  e.recipes.appliedenergistics2.grinder({
    input: { tag: 'forge:flour_plants' },
    result: { primary: { item: 'pamhc2foodcore:flouritem', count: 1 } },
    turns: 8
  }).id(`kubejs:appliedenergistics2/grinder/flour`)

  e.recipes.appliedenergistics2.inscriber({
    mode: 'inscribe',
    result: { item: 'appliedenergistics2:printed_silicon' },
    ingredients: {
      top: { item: 'appliedenergistics2:silicon_press' },
      middle: { tag: 'forge:silicon' }
    }
  }).id(`kubejs:appliedenergistics2/inscriber/printed_silicon`)

  removeRecipeByID(e, [
    'appliedenergistics2:grinder/flour',
    'appliedenergistics2:inscriber/silicon_print'
  ])

  removeRecipeByOutput(e, [
    'appliedenergistics2:silicon',
    'appliedenergistics2:network_tool',
    'apotheosis:explosive_arrow',
    'apotheosis:diamond_mining_arrow',
    'apotheosis:iron_mining_arrow'
  ])

  modifyShaped(e, 'appliedenergistics2:quartz_glass', 4, ['GDG', 'DGD', 'GDG'], {
    G: '#appliedenergistics2:dusts/quartz',
    D: '#forge:glass'
  })
  modifyShaped(e, 'appliedenergistics2:quartz_fiber', 3, ['DDD', 'GGG', 'DDD'], {
    G: '#appliedenergistics2:dusts/quartz',
    D: '#forge:glass'
  })
  modifyShaped(e, 'appliedenergistics2:chest', 1, ['GTG', 'C C', 'IFI'], {
    G: '#forge:glass',
    T: 'appliedenergistics2:terminal',
    C: 'appliedenergistics2:fluix_glass_cable',
    I: '#forge:ingots/iron',
    F: '#appliedenergistics2:crystals/fluix'
  })
  modifyShaped(e, 'appliedenergistics2:condenser', 1, ['IGI', 'GDG', 'IGI'], {
    G: '#forge:glass',
    I: '#forge:ingots/iron',
    D: '#appliedenergistics2:dusts/fluix',
  })
  modifyShaped(e, 'appliedenergistics2:spatial_io_port', 1, ['GGG', 'CPC', 'IEI'], {
    G: '#forge:glass',
    C: 'appliedenergistics2:fluix_glass_cable',
    P: 'appliedenergistics2:io_port',
    I: '#forge:ingots/iron',
    E: 'appliedenergistics2:engineering_processor'
  })
  modifyShaped(e, 'appliedenergistics2:io_port', 1, ['GGG', 'DCD', 'IPI'], {
    G: '#forge:glass',
    C: 'appliedenergistics2:fluix_glass_cable',
    P: 'appliedenergistics2:logic_processor',
    I: '#forge:ingots/iron',
    D: 'appliedenergistics2:drive'
  })
  modifyShaped(e, 'appliedenergistics2:interface', 1, ['IGI', 'A F', 'IGI'], {
    G: '#forge:glass',
    A: 'appliedenergistics2:annihilation_core',
    F: 'appliedenergistics2:formation_core',
    I: '#forge:ingots/iron'
  })
  modifyShaped(e, 'appliedenergistics2:molecular_assembler', 1, ['IGI', 'ACF', 'IGI'], {
    G: 'appliedenergistics2:quartz_glass',
    A: 'appliedenergistics2:annihilation_core',
    F: 'appliedenergistics2:formation_core',
    I: '#forge:ingots/iron',
    C: '#forge:workbench'
  })
  modifyShaped(e, 'appliedenergistics2:cell_workbench', 1, ['WEW', 'ICI', 'III'], {
    W: '#minecraft:wool',
    E: 'appliedenergistics2:calculation_processor',
    I: '#forge:ingots/iron',
    C: '#forge:chests/wooden'
  })

  modifyShapeless(e, 'appliedenergistics2:cable_anchor', 3, ['#forge:ingots/iron', '#appliedenergistics2:knife'])
  modifyShapeless(e, 'appliedenergistics2:fluix_covered_cable', 1, ['#minecraft:wool', 'appliedenergistics2:fluix_glass_cable'])
  modifyShapeless(e, 'appliedenergistics2:crafting_card', 1, ['#forge:workbench', 'appliedenergistics2:basic_card'])
  modifyShapeless(e, 'appliedenergistics2:fuzzy_card', 1, ['#minecraft:wool', 'appliedenergistics2:advanced_card'])
  modifyShapeless(e, 'appliedenergistics2:crafting_terminal', 1, ['appliedenergistics2:terminal', '#forge:workbench', 'appliedenergistics2:calculation_processor'])
})
