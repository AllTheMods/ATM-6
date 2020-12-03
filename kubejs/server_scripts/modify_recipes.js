events.listen('recipes', function (e) {
  //Functions

  function modifyShaped(result, count, pattern, ingridients) {
    e.remove({
      output: result,
      type: 'minecraft:crafting_shaped'
    })
    e.shaped(item.of(result, count),
      pattern,
      ingridients
    )
  }

  function modifyShapeless(result, count, ingridients) {
    e.remove({
      output: result,
      type: 'minecraft:crafting_shapeless'
    })
    e.shapeless(item.of(result, count), ingridients)
  }

  function modifySmelt(result, ingridients) {
    e.remove({
      output: result,
      type: 'minecraft:smelting'
    })
    e.smelting(result, ingridients)
  }

  e.replaceOutput('#forge:cheese', 'rats:cheese')
  //Modified recipes
  var combBlock = '#resourcefulbees:resourceful_honeycomb_block'
  modifyShaped('resourcefulbees:t1_apiary', 1, [
    'CHC',
    'HSH',
    'CHC'
  ], {
    C: combBlock,
    H: 'resourcefulbees:t4_beehive',
    S: '#forge:nether_stars'
  })
  modifyShaped('resourcefulbees:t2_apiary', 1, [
    'CHC',
    'HSH',
    'CHC'
  ], {
    C: combBlock,
    H: 'resourcefulbees:t1_apiary',
    S: '#forge:nether_stars'
  })
  modifyShaped('resourcefulbees:t3_apiary', 1, [
    'SHS',
    'HCH',
    'SHS'
  ], {
    C: combBlock,
    H: 'resourcefulbees:t2_apiary',
    S: '#forge:nether_stars'
  })
  modifyShaped('resourcefulbees:t4_apiary', 1, [
    'SHS',
    'HCH',
    'SHS'
  ], {
    C: combBlock,
    H: 'resourcefulbees:t3_apiary',
    S: '#forge:nether_stars'
  })
  modifyShapeless('botania:lexicon', 1, ['#minecraft:flowers', 'minecraft:book'])
  modifyShaped('buildinggadgets:gadget_exchanging', 1, [
    'iri',
    'dld',
    'iai'
  ], {
    i: '#forge:ingots/iron',
    r: '#forge:dusts/redstone',
    l: '#forge:gems/lapis',
    d: '#forge:gems/diamond',
    a: '#forge:nuggets/allthemodium'
  }) //gated since it can change modium ores easily
  modifyShaped('minecraft:honeycomb_block', 1, [
    'CCC',
    'CCC',
    'CCC'
  ], {
    C: 'minecraft:honeycomb'
  })
  e.shapeless(item.of('minecraft:honeycomb', 9), 'minecraft:honeycomb_block').id('kubejs:shapeless/honeycomb')
  modifyShaped('solarflux:mirror', 3, [
    'GGG',
    'III'
  ], {
    G: '#forge:glass',
    I: '#forge:ingots'
  })
  modifyShaped('solarflux:sp_1', 1, [
    'MMM',
    'ILI',
    'III'
  ], {
    M: 'solarflux:mirror',
    L: '#forge:storage_blocks/lapis',
    I: '#forge:ingots/iron'
  })
  modifyShaped('minecraft:sticky_piston', 1, [
    'B',
    'P'
  ], {
    B: '#forge:slimeballs',
    P: 'minecraft:piston'
  })
  modifyShaped('mekanismgenerators:solar_panel', 1, [
    'PPP',
    'RIR',
    'OOO'
  ], {
    P: 'powah:solar_panel_starter',
    R: '#forge:dusts/redstone',
    I: 'mekanism:alloy_infused',
    O: '#forge:ingots/osmium'
  })
  modifyShaped('engineerstools:crushing_hammer', 1, [
    'RI ',
    'BS ',
    '  S'
  ], {
    R: '#forge:string',
    I: '#forge:ingots/iron',
    B: '#forge:storage_blocks/iron',
    S: '#forge:rods/wooden'
  })
  modifyShaped('forbidden_arcanus:candle_lamp', 1, [
    'NDN',
    'GAG',
    'NDN'
  ], {
    N: 'forbidden_arcanus:arcane_gold_nugget',
    A: 'forbidden_arcanus:candle',
    D: 'forbidden_arcanus:darkstone',
    G: 'forbidden_arcanus:arcane_gold_ingot'
  })
  modifyShaped('torchmaster:megatorch', 1, [
    'TTT',
    'GLG',
    'DLD'
  ], {
    T: 'xreliquary:interdiction_torch',
    G: '#forge:storage_blocks/gold',
    D: '#forge:storage_blocks/diamond',
    L: '#minecraft:logs'
  })
  modifyShaped('immersiveengineering:cloche', 1, [
    'GEG',
    'G G',
    'TRT'
  ], {
    G: '#forge:glass',
    E: 'immersiveengineering:electron_tube',
    T: '#forge:treated_wood',
    R: 'mekanism:resistive_heater'
  })
  e.remove({
    id: 'bagofyurting:bag_of_yurting'
  })
  e.shaped(item.of('bagofyurting:bag_of_yurting', 1), [
    'WSW',
    'WEW',
    'WWW'
  ], {
    W: '#minecraft:wool',
    E: '#forge:ender_pearls',
    S: '#forge:string'
  }).id('kubejs:shaped/modified/bagofyurting.bag_of_yurting')
  var ingots = [
    '#forge:ingots/gold',
    '#forge:ingots/iron',
    '#forge:ingots/copper',
    '#forge:ingots/tin'
  ]
  modifyShapeless('appliedenergistics2:cable_anchor', 3, [ingots, '#appliedenergistics2:knife'])
  modifyShapeless('appliedenergistics2:fluix_covered_cable', 1, ['#minecraft:wool', 'appliedenergistics2:fluix_glass_cable'])
  modifyShapeless('appliedenergistics2:crafting_card', 1, ['#forge:workbench', 'appliedenergistics2:basic_card'])
  modifyShapeless('appliedenergistics2:fuzzy_card', 1, ['#minecraft:wool', 'appliedenergistics2:advanced_card'])
  modifyShapeless('appliedenergistics2:crafting_terminal', 1, ['appliedenergistics2:terminal', '#forge:workbench', 'appliedenergistics2:calculation_processor'])
  modifyShaped('appliedenergistics2:quartz_glass', 4, [
    'GDG',
    'DGD',
    'GDG'
  ], {
    G: '#appliedenergistics2:dusts/quartz',
    D: '#forge:glass'
  })
  modifyShaped('appliedenergistics2:quartz_fiber', 3, [
    'DDD',
    'GGG',
    'DDD'
  ], {
    G: '#appliedenergistics2:dusts/quartz',
    D: '#forge:glass'
  })
  modifyShaped('appliedenergistics2:chest', 1, [
    'GTG',
    'C C',
    'IFI'
  ], {
    G: '#forge:glass',
    T: 'appliedenergistics2:terminal',
    C: 'appliedenergistics2:fluix_glass_cable',
    I: '#forge:ingots/iron',
    F: '#appliedenergistics2:crystals/fluix'
  })
  modifyShaped('appliedenergistics2:condenser', 1, [
    'IGI',
    'GDG',
    'IGI'
  ], {
    G: '#forge:glass',
    I: '#forge:ingots/iron',
    D: '#appliedenergistics2:dusts/fluix',
  })
  modifyShaped('appliedenergistics2:spatial_io_port', 1, [
    'GGG',
    'CPC',
    'IEI'
  ], {
    G: '#forge:glass',
    C: 'appliedenergistics2:fluix_glass_cable',
    P: 'appliedenergistics2:io_port',
    I: '#forge:ingots/iron',
    E: 'appliedenergistics2:engineering_processor'
  })
  modifyShaped('appliedenergistics2:io_port', 1, [
    'GGG',
    'DCD',
    'IPI'
  ], {
    G: '#forge:glass',
    C: 'appliedenergistics2:fluix_glass_cable',
    P: 'appliedenergistics2:logic_processor',
    I: '#forge:ingots/iron',
    D: 'appliedenergistics2:drive'
  })
  modifyShaped('appliedenergistics2:interface', 1, [
    'IGI',
    'A F',
    'IGI'
  ], {
    G: '#forge:glass',
    A: 'appliedenergistics2:annihilation_core',
    F: 'appliedenergistics2:formation_core',
    I: '#forge:ingots/iron'
  })
  e.shapeless('appliedenergistics2:interface', ['appliedenergistics2:cable_interface'])
  modifyShaped('appliedenergistics2:molecular_assembler', 1, [
    'IGI',
    'ACF',
    'IGI'
  ], {
    G: 'appliedenergistics2:quartz_glass',
    A: 'appliedenergistics2:annihilation_core',
    F: 'appliedenergistics2:formation_core',
    I: '#forge:ingots/iron',
    C: '#forge:workbench'
  })
  modifyShaped('appliedenergistics2:cell_workbench', 1, [
    'WEW',
    'ICI',
    'III'
  ], {
    W: '#minecraft:wool',
    E: 'appliedenergistics2:calculation_processor',
    I: '#forge:ingots/iron',
    C: '#forge:chests/wooden'
  })
  modifyShaped('minecraft:daylight_detector', 1, [
    'GGG',
    'QQQ',
    'SSS'
  ], {
    G: '#forge:glass',
    Q: '#forge:gems/quartz',
    S: '#minecraft:wooden_slabs'
  })
  modifyShaped('minecraft:beehive', 1, [
    'PPP',
    'CCC',
    'PPP'
  ], {
    P: '#minecraft:planks',
    C: '#resourcefulbees:resourceful_honeycomb'
  })
  modifyShaped('resourcefulbees:centrifuge_controller', 1, [
    'ICI',
    'BAB',
    'IRI'
  ], {
    I: 'resourcefulbees:centrifuge_casing',
    C: 'resourcefulbees:centrifuge',
    B: 'minecraft:iron_bars',
    A: 'minecraft:comparator',
    R: '#forge:storage_blocks/redstone'
  })
  modifyShaped('minecolonies:blockhutbuilder', 1, [
    'PTP',
    'PDP',
    'PPP'
  ], {
    P: '#minecraft:planks',
    D: '#minecraft:wooden_doors',
    T: 'structurize:sceptergold'
  })
  modifySmelt('refinedstorage:silicon', '#appliedenergistics2:crystals/quartz')
  e.remove({
    id: 'appliedenergistics2:inscriber/silicon_print'
  })
  e.recipes.appliedenergistics2.inscriber({
    mode: 'inscribe',
    result: {
      item: 'appliedenergistics2:printed_silicon'
    },
    ingredients: {
      top: {
        item: 'appliedenergistics2:silicon_press'
      },
      middle: {
        tag: 'forge:silicon'
      }
    }
  })
  e.remove({
    output: '#botanypots:botany_pots'
  })
  e.shaped(item.of('botanypots:botany_pot'), [
    'T T',
    'TPT',
    ' T '
  ], {
    T: 'minecraft:terracotta',
    P: 'minecraft:flower_pot'
  })
  e.shaped(item.of('botanypots:hopper_botany_pot'), [
    'MPM',
    ' H '
  ], {
    M: '#forge:nuggets/terrasteel',
    P: 'botanypots:botany_pot',
    H: ['botania:hopperhock', 'botania:hopperhock_chibi']
  })

  //Dye stuff
  var colors = [
    'white',
    'light_gray',
    'gray',
    'black',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'light_blue',
    'cyan',
    'blue',
    'purple',
    'magenta',
    'pink',
    'brown'
  ]
  var pots = [
    'botanypots:botany_pot',
    'botanypots:white_botany_pot',
    'botanypots:orange_botany_pot',
    'botanypots:magenta_botany_pot',
    'botanypots:light_blue_botany_pot',
    'botanypots:yellow_botany_pot',
    'botanypots:lime_botany_pot',
    'botanypots:pink_botany_pot',
    'botanypots:gray_botany_pot',
    'botanypots:light_gray_botany_pot',
    'botanypots:cyan_botany_pot',
    'botanypots:purple_botany_pot',
    'botanypots:blue_botany_pot',
    'botanypots:brown_botany_pot',
    'botanypots:green_botany_pot',
    'botanypots:red_botany_pot',
    'botanypots:black_botany_pot',
  ]
  e.shapeless(item.of('botania:fertilizer'), ['#forge:fetilizer', ['#forge:dyes/' + colors], ['#forge:dyes/' + colors], ['#forge:dyes/' + colors], ['#forge:dyes/' + colors]])
  utils.listOf(colors).forEach(function (color) {
    e.shaped(item.of('botanypots:hopper_' + color + '_botany_pot'), [
      'MPM',
      ' H '
    ], {
      M: '#forge:nuggets/terrasteel',
      P: 'botanypots:' + color + '_botany_pot',
      H: ['botania:hopperhock', 'botania:hopperhock_chibi']
    })
    e.shapeless(item.of('botanypots:' + color + '_botany_pot'), [pots, '#forge:dyes/' + color])
    e.shapeless(item.of('botanypots:hopper_' + color + '_botany_pot'), ['#botanypots:hopper_botany_pots', '#forge:dyes/' + color])
    e.recipes.mekanism.enriching(item.of('minecraft:' + color + '_dye', 2), '#byg:' + color + '_dye')
    e.recipes.pedestals.pedestal_crushing({
      ingredient: {
        tag: 'byg:' + color + '_dye'
      },
      result: {
        item: 'minecraft:' + color + '_dye',
        count: 2
      }
    })
    e.remove({
      output: 'minecraft:' + color + '_bed'
    })
    e.replaceInput('minecraft:' + color + '_dye', '#forge:dyes/' + color)
    e.shaped(item.of('minecraft:' + color + '_bed'), [
      'WWW',
      'PPP'
    ], {
      P: '#minecraft:planks',
      W: 'minecraft:' + color + '_wool'
    })
    e.shapeless(item.of('minecraft:' + color + '_bed'), ['#minecraft:beds', '#forge:dyes/' + color])
    e.remove({
      output: 'minecraft:' + color + '_wool'
    })
    e.shaped(item.of('minecraft:' + color + '_wool', 8), [
      'WWW',
      'WCW',
      'WWW'
    ], {
      C: '#forge:dyes/' + color,
      W: '#minecraft:wool'
    })
    e.shaped(item.of('minecraft:' + color + '_wool', 2), [
      'C',
      'C',
      'C',
    ], {
      C: 'minecraft:' + color + '_carpet'
    })
    e.remove({
      output: 'minecraft:' + color + '_carpet'
    })
    e.shapeless(item.of('minecraft:' + color + '_carpet'), ['#minecraft:carpets', '#forge:dyes/' + color])
    e.shaped(item.of('minecraft:' + color + '_carpet', 8), [
      'WWW',
      'WCW',
      'WWW'
    ], {
      C: '#forge:dyes/' + color,
      W: '#minecraft:carpets'
    })
    e.shaped(item.of('minecraft:' + color + '_carpet', 3), [
      'WW'
    ], {
      W: 'minecraft:' + color + '_wool'
    })
    e.remove({
      output: 'comforts:sleeping_bag_' + color
    })
    if (color !== 'light_gray') {
      e.shaped(item.of('comforts:sleeping_bag_' + color), [
        'WWW',
        'SSS',
        'WWW',
      ], {
        W: 'absentbydesign:slab_wool_' + color,
        S: '#forge:string'
      })
      e.shaped(item.of('minecraft:' + color + '_wool', 1), [
        'W',
        'W'
      ], {
        W: 'absentbydesign:slab_wool_' + color
      })
    } else {
      e.shaped(item.of('comforts:sleeping_bag_light_gray'), [
        'WWW',
        'SSS',
        'WWW',
      ], {
        W: 'absentbydesign:slab_wool_silver',
        S: '#forge:string'
      })
      e.shaped(item.of('minecraft:light_gray_wool', 1), [
        'W',
        'W'
      ], {
        W: 'absentbydesign:slab_wool_silver'
      })
    }
    e.shaped(item.of('minecraft:' + color + '_stained_glass', 3), [
      'GGG',
      'G G',
      'GGG',
    ], {
      G: 'minecraft:' + color + '_stained_glass_pane'
    })
  })
  e.shaped(item.of('minecraft:white_wool'), [
    'SS',
    'SS'
  ], {
    S: '#forge:string'
  })
  e.shaped(item.of('minecraft:glass', 3), [
    'GGG',
    'G G',
    'GGG',
  ], {
    G: 'minecraft:glass_pane'
  })
  e.replaceInput('minecraft:glass_pane', '#forge:glass_panes')
})