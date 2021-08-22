onEvent('recipes', e => {
  //#region CONST
  const quarkWoodTypes = ['oak', 'dark_oak', 'acacia', 'spruce', 'birch', 'jungle', 'warped', 'crimson']
  const solars = ['1', '2', '3', '4', '5', 'custom_allthemodium', 'custom_vibranium', 'custom_unobtainium']
  const caTypes = [`importer`, `exporter`, `constructor`, `destructor`, `disk_manipulator`]
  const tiersPowah = ['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro']
  const typesPowah = ['energy_cell', 'reactor', 'furnator', 'magmator', 'thermo_generator', 'solar_panel', 'player_transmitter', 'energy_hopper', 'energy_discharger', 'energizing_rod']
  const resetNBT = ['rftoolsbase:filter_module', 'rftoolspower:dimensionalcell_simple', 'rftoolspower:dimensionalcell', 'rftoolspower:dimensionalcell_advanced', 'rftoolspower:powercell_card', 'rftoolsutility:syringe']
  const saw = ['aspen', 'baobab', 'blue_enchanted', 'cherry', 'cika', 'cypress', 'ebony', 'ether', 'fir', 'green_enchanted', 'holly', 'jacaranda', 'lament', 'mahogany', 'mangrove', 'maple', 'nightshade', 'palm', 'pine', 'rainbow_eucalyptus', 'redwood', 'skyris', 'willow', 'witch_hazel', 'zelkova']
  //#endregion
  //#region FUNCTIONS
  function tinkerBasinCasting(entries) {
    entries.forEach(([input, output]) => {
      e.custom({
        type: 'tconstruct:casting_basin',
        cast: {
          item: input
        },
        cast_consumed: true,
        fluid: {
          name: 'tconstruct:magma',
          amount: 1000
        },
        result: output,
        cooling_time: 90
      }).id(`kubejs:basin_casting/${output.substring(output.indexOf(':') + 1)}`)
    })
  }
  function tinkerMelting(entries) {
    entries.forEach(input => {
      e.custom({
        type: 'tconstruct:melting',
        ingredient: {
          item: input
        },
        result: {
          fluid: 'tconstruct:magma',
          amount: 1000
        },
        temperature: 300,
        time: 127
      }).id(`kubejs:melting/${input.substring(input.indexOf(':') + 1)}`)
    })
  }
  function customBlock(block, item) {
    e.shapeless(`9x ${item}`, block)
    e.shaped(block, [
      'AAA',
      'AAA',
      'AAA'
    ], {
      A: item
    })
  }
  function caTier(tier, corners, processor, cables) {
    caTypes.forEach(caType => {
      e.shaped(`cabletiers:${tier}_${caType}`, [
        `a a`,
        `bcb`,
        `a a`
      ], {
        a: corners,
        b: processor,
        c: `${cables}${caType}`
      })
    })
  }
  function buildQuarkChest(type, material) {
    e.shaped(`quark:${type}_chest`, [
      'aaa',
      'a a',
      'aaa'
    ], {
      a: material
    })
    e.shapeless(`quark:${type}_trapped_chest`, [`quark:${type}_chest`, 'minecraft:tripwire_hook'])
  }
  function coinUpgrade(name, type) {
    if (type == 'rf') {
      e.recipes.allthemodium.atmshapeless_crafting({
        ingredients: [{
          item: `pedestals:coin/${name}`
        },
        {
          tag: 'forge:storage_blocks/redstone'
        }
        ],
        result: {
          item: `pedestals:coin/${type}${name}`
        }
      })
    } else {
      e.recipes.allthemodium.atmshapeless_crafting({
        ingredients: [{
          item: `pedestals:coin/${name}`
        },
        {
          item: 'minecraft:experience_bottle'
        }
        ],
        result: {
          item: `pedestals:coin/${type}${name}`
        }
      })
    }
  }
  function energize(ingredient, result, rCount, power) {
    e.recipes.powah.energizing({
      ingredients: ingredient,
      energy: power,
      result: {
        item: result,
        count: rCount
      }
    })
  }
  function pedestalCrush(result, count, ingred, type) {
    const obj = {}
    obj.result = {
      item: result,
      count: count
    }
    obj.ingredient = type == 1 ? { tag: ingred } : { item: ingred }
    e.recipes.pedestals.pedestal_crushing(obj)
  }
  function pedestalSaw(result, count, ingred, type) {
    const obj = {}
    obj.result = {
      item: result,
      count: count
    }
    obj.ingredient = type == 1 ? { tag: ingred } : { item: ingred }
    e.recipes.pedestals.pedestal_sawing(obj)
  }
  function multicrush(output, input) {
    e.recipes.mekanism.crushing(output, input)
    e.recipes.create.crushing(output, input)
    e.recipes.immersiveengineering.crusher(output, input)
    e.recipes.thermal.pulverizer(output, input)
  }
  function crush(output, input) {
    e.recipes.mekanism.crushing((output), input)
  }
  function enrich(output, input) {
    e.recipes.mekanism.enriching((output), input)
  }
  function mainfusion(output, middle, item1, item2, item3, item4, item5, item6, item7, item8) {
    e.recipes.mysticalagriculture.infusion({
      input: {
        item: middle
      },
      ingredients: [{
        item: item1
      },
      {
        item: item2
      },
      {
        item: item3
      },
      {
        item: item4
      },
      {
        item: item5
      },
      {
        item: item6
      },
      {
        item: item7
      },
      {
        item: item8
      }
      ],
      result: {
        item: output
      }
    })
  }
  function parapet(woodTypes) {
    woodTypes.forEach(woodType => {
      e.remove({ type: 'minecraft:crafting_shaped', output: `mcwwindows:${woodType}_log_parapet` })
      e.shaped(`4x mcwwindows:${woodType}_log_parapet`, [
        'SLS'
      ], {
        S: '#forge:rods/wooden',
        L: `minecraft:stripped_${woodType}_log`
      }).id(`kubejs:parapet_${woodType}`)
    })
  }
  function plateCasting(material, coolingTime, result) {
    e.custom(
      {
        'type': 'tconstruct:casting_table',
        'conditions': [
          {
            'value': {
              'tag': `forge:plates/${material}`,
              'type': 'forge:tag_empty'
            },
            'type': 'forge:not'
          }
        ],
        'cast': {
          'tag': 'tconstruct:casts/multi_use/plate'
        },
        'fluid': {
          'name': `tconstruct:molten_${material}`,
          'amount': 144
        },
        'result': {
          'item': result
        },
        'cooling_time': coolingTime
      }
    )
    e.custom(
      {
        'type': 'tconstruct:casting_table',
        'conditions': [
          {
            'value': {
              'tag': `forge:plates/${material}`,
              'type': 'forge:tag_empty'
            },
            'type': 'forge:not'
          }
        ],
        'cast': {
          'tag': 'tconstruct:casts/single_use/plate'
        },
        'cast_consumed': true,
        'fluid': {
          'name': `tconstruct:molten_${material}`,
          'amount': 144
        },
        'result': {
          'item': result
        },
        'cooling_time': coolingTime
      }
    )
  }
  function platePressing(material, result) {
    e.custom(
      {
        'type': 'immersiveengineering:metal_press',
        'mold': {
          'item': 'immersiveengineering:mold_plate'
        },
        'result': {
          'item': result
        },
        'conditions': [
          {
            'value': {
              'tag': `forge:ingots/${material}`,
              'type': 'forge:tag_empty'
            },
            'type': 'forge:not'
          },
          {
            'value': {
              'tag': `forge:plates/${material}`,
              'type': 'forge:tag_empty'
            },
            'type': 'forge:not'
          }
        ],
        'input': {
          'tag': `forge:ingots/${material}`
        },
        'energy': 2400
      }
    )
  }
  function plateProcessing(types) {
    types.forEach(([material, type, coolingTime, result]) => {
      result = result ? result : `thermal:${material}_plate`
      if (type.includes(0)) plateCasting(material, coolingTime, result) // casting missing
      if (type.includes(1)) e.recipes.create.pressing(result, `#forge:ingots/${material}`) // create missing
      if (type.includes(2)) e.recipes.thermal.press(result, `#forge:ingots/${material}`) // thermal missing
      if (type.includes(3)) e.shapeless(result, [`#forge:ingots/${material}`, 'immersiveengineering:hammer']).id(`kubejs:${material}_plate`) // crafting missing
      if (type.includes(4)) platePressing(material, result) // immersiveengineering missing
    })
  }
  function essenceCircle(result, count, name) {
    e.shaped(item.of(result, count), [
      'aaa',
      'a a',
      'aaa'
    ], {
      a: `mysticalagriculture:${name}_essence`
    }).id(`kubejs:${name}_nugget`)
  }
  function smithing(result, base, addition) {
    e.recipes.minecraft.smithing({
      'base': {
        'item': base
      },
      'addition': {
        'item': addition
      },
      'result': {
        'item': result
      }
    })
  }
  //#endregion

  // Plate Processing Additions
  plateProcessing([
    ['aluminum', [1, 2], 47, 'immersiveengineering:plate_aluminum'],
    ['steel', [1, 2], null, 'immersiveengineering:plate_steel'],
    ['uranium', [1], null, 'immersiveengineering:plate_uranium'],
    ['iron', [0], 60],
    ['gold', [0], 57],
    ['copper', [0], 50],
    ['tin', [0, 1, 3], 39],
    ['lead', [0, 1], 43],
    ['silver', [0, 1], 60],
    ['nickel', [0, 1], 65],
    ['bronze', [0, 1, 3], 57],
    ['electrum', [0, 1], 59],
    ['invar', [0, 1, 3], 63],
    ['constantan', [0, 1], 64],
    ['signalum', [1, 3, 4]],
    ['lumium', [1, 3, 4]],
    ['enderium', [1, 3, 4]],
    ['brass', [2, 3], 57, 'create:brass_sheet']
  ])

  parapet([
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak'
  ])

  //Smelting
  e.smelting('appliedenergistics2:certus_quartz_crystal', '#forge:ores/certus_quartz').xp(1).id('kubejs:smelting/certus')
  e.smelting('alltheores:platinum_ingot', 'create:crushed_platinum_ore').xp(1).id('kubejs:smelting/create_platinum')
  e.smelting('minecraft:glass', '#forge:sand').xp(.1).id('kubejs:smelting/sand')
  e.smelting('minecraft:leather', 'kubejs:rotten_leather').xp(.5).id('kubejs:smelting/leather')
  e.smoking('minecraft:leather', 'kubejs:rotten_leather').xp(.5).id('kubejs:smoking/leather')
  e.smelting('allthemodium:vibranium_allthemodium_alloy_ingot', 'allthemodium:vibranium_allthemodium_alloy_dust').xp(.5).id('kubejs:smelting/vibranium_allthemodium_alloy_dust')
  e.smelting('allthemodium:unobtainium_allthemodium_alloy_ingot', 'allthemodium:unobtainium_allthemodium_alloy_dust').xp(.5).id('kubejs:smelting/unobtainium_allthemodium_alloy_dust')
  e.smelting('allthemodium:unobtainium_vibranium_alloy_ingot', 'allthemodium:unobtainium_vibranium_alloy_dust').xp(.5).id('kubejs:smelting/unobtainium_vibranium_alloy_dust')

  //Misc shaped recipes
  e.shaped('pamhc2foodcore:rolleritem', [
    'SLS'
  ], {
    S: '#forge:rods/wooden',
    L: `#minecraft:logs_unstripped`
  }).id(`kubejs:pam_roller_unstripped`)
  e.shaped('computercraft:turtle_advanced', [
    'III',
    'ICI',
    'IAI'
  ], {
    I: '#forge:ingots/gold',
    C: 'computercraft:computer_advanced',
    A: '#forge:ingots/allthemodium'
  }).id(`kubejs:turtle_advanced`)
  e.shaped('computercraft:turtle_normal', [
    'III',
    'ICI',
    'IAI'
  ], {
    I: '#forge:ingots/iron',
    C: 'computercraft:computer_normal',
    A: '#forge:ingots/allthemodium'
  }).id(`kubejs:turtle_normal`)
  e.shaped('minecraft:totem_of_undying', [
    ' E ',
    'GVG',
    ' G '
  ], {
    E: 'compressium:emerald_3',
    G: '#forge:storage_blocks/gold',
    V: 'minecraft:villager_spawn_egg'
  }).id(`kubejs:totem_of_undying`)
  e.shaped(item.of('enviromats:alabaster_magenta', 8), [
    'AAA',
    'AMA',
    'AAA'
  ], {
    A: '#forge:alabaster',
    M: '#forge:dyes/magenta'
  }).id(`kubejs:magenta_alabaster`)
  e.shaped(item.of('minecraft:ladder', 4), [
    'S S',
    'SPS',
    'S S'
  ], {
    S: '#forge:rods',
    P: '#minecraft:planks'
  }).id(`kubejs:ladder`)
  e.shaped('minecraft:hopper', [
    'ILI',
    'ILI',
    ' I '
  ], {
    'L': '#minecraft:logs',
    'I': '#forge:ingots/iron'
  }).id(`kubejs:hopper`)
  e.shaped('16x minecraft:stick', [
    'L',
    'L'
  ], {
    'L': '#minecraft:logs'
  }).id(`kubejs:sticks`)
  e.shaped('4x appliedenergistics2:sky_stone_block', [
    'BSB',
    'SBS',
    'BSB'
  ], {
    'S': 'minecraft:stone',
    'B': 'minecraft:blackstone'
  }).id(`kubejs:sky_stone_brick`)
  e.shaped('appliedenergistics2:calculation_processor_press', [
    'CFC',
    'FVF',
    'PFP'
  ], {
    'C': 'appliedenergistics2:purified_certus_quartz_crystal',
    'F': '#forge:ingots/fluix_steel',
    'V': '#forge:storage_blocks/vibranium',
    'P': 'appliedenergistics2:fluix_pearl'
  }).id(`kubejs:calculation_press`)
  e.shaped('appliedenergistics2:logic_processor_press', [
    'BFB',
    'FVF',
    'CFC'
  ], {
    'B': '#forge:ingots/blaze_gold',
    'F': '#forge:ingots/fluix_steel',
    'V': '#forge:storage_blocks/vibranium',
    'C': '#forge:ingots/rose_gold'
  }).id(`kubejs:logic_press`)
  e.shaped('appliedenergistics2:engineering_processor_press', [
    'DFD',
    'FVF',
    'DFD'
  ], {
    'D': '#forge:gems/mana_diamond',
    'F': '#forge:ingots/fluix_steel',
    'V': '#forge:storage_blocks/vibranium'
  }).id(`kubejs:engineering_press`)
  e.shaped('appliedenergistics2:silicon_press', [
    'WFW',
    'FVF',
    'WFW'
  ], {
    'W': '#forge:silicon',
    'F': '#forge:ingots/fluix_steel',
    'V': '#forge:storage_blocks/vibranium'
  }).id(`kubejs:silicon_press`)
  e.shaped('biomesoplenty:flesh', [
    'FFF',
    'FFF',
    'FFF'
  ], {
    'F': 'minecraft:rotten_flesh',
  }).id(`kubejs:bop_flesh`)
  e.shaped('extrastorage:iron_crafter', [
    'B B',
    'PCP',
    'B B'
  ], {
    B: '#forge:storage_blocks/iron',
    P: 'refinedstorage:improved_processor',
    C: '#refinedstorage:crafter'
  }).id(`kubejs:iron_crafter`)
  e.shaped(`creativecrafter:creative_crafter`, [
    `BUB`,
    `PCP`,
    `BUB`
  ], {
    B: `#forge:storage_blocks/netherite`,
    P: `extradisks:withering_processor`,
    C: `extrastorage:netherite_crafter`,
    U: `#forge:ingots/unobtainium`
  })
  e.shaped('xreliquary:fertile_lily_pad', [
    'ESE',
    'FLF',
    'ESE'
  ], {
    E: 'xreliquary:fertile_essence',
    S: 'mysticalagriculture:supremium_growth_accelerator',
    L: 'minecraft:lily_pad',
    F: 'mysticalagriculture:mystical_fertilizer'
  }).id(`kubejs:fertile_lily_pad`)
  e.shaped('rftoolsbuilder:builder', [
    'aea',
    'rmr',
    'ara'
  ], {
    'a': '#forge:nuggets/allthemodium',
    'e': '#forge:ender_pearls',
    'r': '#forge:storage_blocks/redstone',
    'm': 'rftoolsbase:machine_frame'
  }).id(`kubejs:builder`)
  e.shaped('rats:pied_wool', [
    'YGY',
    'GYG',
    'YGY'
  ], {
    'Y': 'minecraft:yellow_wool',
    'G': 'minecraft:green_wool'
  }).id(`kubejs:pied_wool`)
  e.shaped('quarryplus:solidquarry', [
    'FFF',
    'DGD',
    'AAA'
  ], {
    'F': 'minecraft:furnace',
    'D': 'minecraft:diamond_pickaxe',
    'G': '#forge:storage_blocks/gold',
    'A': '#forge:nuggets/allthemodium'
  }).id(`kubejs:solidquarry`)
  e.shaped('quarryplus:workbenchplus', [
    'III',
    'GDG',
    'AAA'
  ], {
    'I': '#forge:storage_blocks/iron',
    'G': '#forge:storage_blocks/gold',
    'D': '#forge:storage_blocks/diamond',
    'A': '#forge:nuggets/allthemodium'
  }).id(`kubejs:workbenchplus`)
  e.shaped('mininggadgets:upgrade_empty', [
    'RAL',
    'DGD',
    'LAR'
  ], {
    'L': '#forge:storage_blocks/lapis',
    'R': '#forge:storage_blocks/redstone',
    'D': '#forge:gems/diamond',
    'A': '#forge:nuggets/allthemodium',
    'G': 'minecraft:glass_pane'
  }).id(`kubejs:mininggadgets_upgrade`)
  e.shaped(item.of('minecraft:grass', 12), [
    ' E ',
    'E E',
    '   '
  ], {
    'E': 'mysticalagriculture:nature_essence'
  }).id('kubejs:grass')
  essenceCircle('allthemodium:allthemodium_nugget', 1, 'allthemodium')
  essenceCircle('allthemodium:vibranium_nugget', 1, 'vibranium')
  essenceCircle('allthemodium:unobtainium_nugget', 1, 'unobtainium')
  essenceCircle('silentgear:azure_silver_ingot', 6, 'azure_silver')
  essenceCircle('silentgear:azure_electrum_ingot', 4, 'azure_electrum')
  essenceCircle('silentgear:crimson_iron_ingot', 6, 'crimson_iron')
  e.shaped('mysticalagriculture:unattuned_augment', [
    'PMP',
    'AMA',
    'PMP'
  ], {
    'P': 'mysticalagriculture:prosperity_ingot',
    'M': 'botania:manasteel_ingot',
    'A': '#forge:nuggets/allthemodium'
  }).id(`kubejs:unattuned_augment`)
  e.shaped('mekanism:digital_miner', [
    'AUA',
    'LRL',
    'TST'
  ], {
    'L': 'mekanism:logistical_sorter',
    'R': 'mekanism:robit',
    'T': 'mekanism:teleportation_core',
    'A': '#mekanism:alloys/atomic',
    'S': 'mekanism:steel_casing',
    'U': '#forge:ingots/unobtainium'
  }).id(`kubejs:digital_miner`)
  e.shaped('mekanism:atomic_disassembler', [
    'RER',
    'RUR',
    ' V '
  ], {
    'E': 'mekanism:energy_tablet',
    'R': '#mekanism:alloys/reinforced',
    'U': '#forge:circuits/ultimate',
    'V': '#forge:ingots/vibranium'
  }).id(`kubejs:atomic_disassembler`)
  e.shaped('mekanismgenerators:wind_generator', [
    ' O ',
    'OCO',
    'EBE'
  ], {
    'E': 'mekanism:energy_tablet',
    'C': 'mekanismgenerators:electromagnetic_coil',
    'B': '#forge:circuits/basic',
    'O': '#forge:ingots/osmium'
  }).id(`kubejs:wind_generator`)
  e.shaped('mekanism:advanced_bin', [
    ' C ',
    'ABA',
    ' U '
  ], {
    C: 'mekanism:advanced_control_circuit',
    A: 'mekanism:alloy_infused',
    B: 'mekanism:basic_bin',
    U: 'storagedrawers:gold_storage_upgrade'
  })
  e.shaped('mekanism:elite_bin', [
    ' C ',
    'ABA',
    ' U '
  ], {
    C: 'mekanism:elite_control_circuit',
    A: 'mekanism:alloy_reinforced',
    B: 'mekanism:advanced_bin',
    U: 'storagedrawers:diamond_storage_upgrade'
  })
  e.shaped('mekanism:ultimate_bin', [
    ' C ',
    'ABA',
    ' U '
  ], {
    C: 'mekanism:ultimate_control_circuit',
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:elite_bin',
    U: 'storagedrawers:emerald_storage_upgrade'
  })
  e.shaped('mekanism:basic_tier_installer', [
    'RCR',
    'MPM',
    'RCR'
  ], {
    R: 'minecraft:redstone',
    C: 'mekanism:basic_control_circuit',
    M: 'mekanism:ingot_steel',
    P: '#minecraft:planks'
  })
  e.shaped('mekanism:advanced_tier_installer', [
    'RCR',
    'MPM',
    'RCR'
  ], {
    R: 'mekanism:alloy_infused',
    C: 'mekanism:advanced_control_circuit',
    M: 'minecraft:gold_ingot',
    P: '#minecraft:planks'
  })
  e.shaped('mekanism:elite_tier_installer', [
    'RCR',
    'MPM',
    'RCR'
  ], {
    R: 'mekanism:alloy_reinforced',
    C: 'mekanism:elite_control_circuit',
    M: 'minecraft:diamond',
    P: '#minecraft:planks'
  })
  e.shaped('mekanism:ultimate_tier_installer', [
    'RCR',
    'MPM',
    'RCR'
  ], {
    R: 'mekanism:alloy_atomic',
    C: 'mekanism:ultimate_control_circuit',
    M: 'mekanism:ingot_refined_obsidian',
    P: '#minecraft:planks'
  })
  e.shaped('mekanism:chemical_oxidizer', [
    'RCR',
    'PDT',
    'RCR'
  ], {
    R: 'mekanism:alloy_infused',
    C: 'mekanism:basic_control_circuit',
    P: 'mekanism:personal_chest',
    D: 'mekanism:dynamic_tank',
    T: 'mekanism:basic_chemical_tank'
  })
  e.shaped('mekanism:robit', [
    ' S ',
    'ERE',
    'OPO'
  ], {
    R: 'mekanism:alloy_atomic',
    S: '#forge:ingots/steel',
    E: 'mekanism:energy_tablet',
    O: 'mekanism:ingot_refined_obsidian',
    P: 'mekanism:personal_chest'
  })
  e.shaped('mekanism:laser_tractor_beam', [
    'P',
    'L'
  ], {
    P: 'mekanism:personal_chest',
    L: 'mekanism:laser_amplifier'
  })
  e.shaped('ironjetpacks:diamond_cell', [
    ' R ',
    'TCT',
    ' R '
  ], {
    'R': '#forge:dusts/redstone',
    'C': 'ironjetpacks:advanced_coil',
    'T': '#forge:gems/diamond'
  }).id(`kubejs:diamond_cell`)
  e.shaped('ironjetpacks:diamond_thruster', [
    'TAT',
    'ACA',
    'TFT'
  ], {
    'F': 'minecraft:furnace',
    'A': 'ironjetpacks:advanced_coil',
    'C': 'ironjetpacks:diamond_cell',
    'T': '#forge:gems/diamond'
  }).id(`kubejs:diamond_thruster`)
  e.shaped('ironjetpacks:diamond_capacitor', [
    'RCR',
    'RCR',
    'RCR'
  ], {
    'R': '#forge:gems/diamond',
    'C': 'ironjetpacks:diamond_cell'
  }).id(`kubejs:diamond_capacitor`)
  e.shaped('ironjetpacks:diamond_jetpack', [
    'DCD',
    'DJD',
    'TRT'
  ], {
    'D': '#forge:gems/diamond',
    'C': 'ironjetpacks:diamond_capacitor',
    'J': ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
    'T': 'ironjetpacks:diamond_thruster',
    'R': 'angelring:itemdiamondring'
  }).id(`kubejs:diamond_jetpack`)
  e.shaped('ironjetpacks:platinum_cell', [
    ' R ',
    'TCT',
    ' R '
  ], {
    'R': '#forge:dusts/redstone',
    'C': 'ironjetpacks:advanced_coil',
    'T': '#forge:ingots/platinum'
  }).id(`kubejs:platinum_cell`)
  e.shaped('ironjetpacks:platinum_thruster', [
    'TAT',
    'ACA',
    'TFT'
  ], {
    'F': 'minecraft:furnace',
    'A': 'ironjetpacks:advanced_coil',
    'C': 'ironjetpacks:platinum_cell',
    'T': '#forge:ingots/platinum'
  }).id(`kubejs:platinum_thruster`)
  e.shaped('ironjetpacks:platinum_capacitor', [
    'RCR',
    'RCR',
    'RCR'
  ], {
    'R': '#forge:ingots/platinum',
    'C': 'ironjetpacks:platinum_cell'
  }).id(`kubejs:platinum_capacitor`)
  e.shaped('ironjetpacks:platinum_jetpack', [
    'PCP',
    'PJP',
    'TRT'
  ], {
    'P': '#forge:ingots/platinum',
    'C': 'ironjetpacks:platinum_capacitor',
    'J': ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
    'T': 'ironjetpacks:platinum_thruster',
    'R': 'angelring:itemdiamondring'
  }).id(`kubejs:platinum_jetpack`)
  e.shaped('pamhc2foodcore:fruitpunchitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': '#forge:fruits',
    'B': 'pamhc2foodcore:applejuiceitem'
  }).id(`kubejs:fruitpunchitem`)
  e.shaped('pamhc2foodcore:applejuiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': 'minecraft:apple',
    'B': 'minecraft:glass_bottle'
  }).id(`kubejs:applejuiceitem`)
  e.shaped('pamhc2foodcore:melonjuiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': 'minecraft:melon_slice',
    'B': 'minecraft:glass_bottle'
  }).id(`kubejs:melonjuiceitem`)
  e.shaped('pamhc2foodcore:sweetberryjuiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': 'minecraft:sweet_berries',
    'B': 'minecraft:glass_bottle'
  }).id(`kubejs:sweetberryjuiceitem`)
  e.shaped('pamhc2foodcore:p8juiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': '#forge:vegetables',
    'B': 'minecraft:glass_bottle'
  }).id(`kubejs:p8juiceitem`)
  e.shaped('angelring:itemdiamondring', [
    'DND',
    'VEU',
    'DAD'
  ], {
    'D': '#forge:storage_blocks/diamond',
    'N': '#forge:storage_blocks/netherite',
    'V': '#forge:storage_blocks/vibranium',
    'U': '#forge:storage_blocks/unobtainium',
    'A': '#forge:storage_blocks/allthemodium',
    'E': 'minecraft:elytra'
  }).id(`kubejs:diamondring`)
  e.shaped('angelring:itemring', [
    'CAC',
    'ARA',
    'DGD'
  ], {
    'C': 'botania:pixie_dust',
    'A': '#forge:storage_blocks/terrasteel',
    'R': 'angelring:itemdiamondring',
    'D': '#forge:nether_stars',
    'G': 'botania:gaia_ingot'
  }).id(`kubejs:itemring`)
  e.shaped('3x forbidden_arcanus:iron_chain', [
    'N  ',
    ' I ',
    '  N'
  ], {
    'N': '#forge:nuggets/iron',
    'I': '#forge:ingots/iron'
  }).id(`kubejs:iron_chain`)
  e.shaped('entangled:block', [
    'UEU',
    'ECE',
    'UEU'
  ], {
    'U': '#forge:ingots/unobtainium',
    'E': '#forge:ender_pearls',
    'C': 'minecraft:ender_chest'
  }).id(`kubejs:entangled_block`)
  e.shaped('entangled:item', [
    ' EC',
    ' UE',
    'U  '
  ], {
    'U': '#forge:ingots/unobtainium',
    'E': '#forge:ender_pearls',
    'C': 'minecraft:ender_chest'
  }).id(`kubejs:entanled_item`)
  e.shaped('refinedstorage:4096k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'refinedstorage:1024k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:nuggets/allthemodium'
  }).id(`kubejs:4096k_fluid_storage_part`)
  e.shaped('extradisks:4096k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:1024k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:nuggets/allthemodium'
  }).id(`kubejs:4096k_storage_part`)
  e.shaped('extradisks:16384k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'refinedstorage:4096k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/allthemodium'
  }).id(`kubejs:16384k_fluid_storage_part`)
  e.shaped('extradisks:16384k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:4096k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/allthemodium'
  }).id(`kubejs:16384k_storage_part`)
  e.shaped('extradisks:65536k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:16384k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/allthemodium'
  }).id(`kubejs:65536k_fluid_storage_part`)
  e.shaped('extradisks:65536k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:16384k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/allthemodium'
  }).id(`kubejs:65536k_storage_part`)
  e.shaped('extradisks:262144k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:65536k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/vibranium'
  }).id(`kubejs:262144k_fluid_storage_part`)
  e.shaped('extradisks:262144k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:65536k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/vibranium'
  }).id(`kubejs:262144k_storage_part`)
  e.shaped('extradisks:1048576k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:262144k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/unobtainium'
  }).id(`kubejs:1048576k_fluid_storage_part`)
  e.shaped('extradisks:1048576k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:262144k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/unobtainium'
  }).id(`kubejs:1048576k_storage_part`)
  e.shaped('extradisks:infinite_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:1048576k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/unobtainium'
  }).id(`kubejs:infinite_fluid_part`)
  e.shaped('extradisks:infinite_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:1048576k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/unobtainium'
  }).id(`kubejs:infinite_storage_part`)
  e.shaped('2x solarflux:sp_custom_allthemodium', [
    'PPP',
    'SAS',
    'SDS'
  ], {
    S: 'solarflux:sp_5',
    A: '#forge:storage_blocks/allthemodium',
    D: '#forge:storage_blocks/diamond',
    P: 'solarflux:photovoltaic_cell_4'
  }).id(`kubejs:solarflux/allthemodium_solar`)
  e.shaped('2x solarflux:sp_custom_vibranium', [
    'PPP',
    'SAS',
    'SAS'
  ], {
    S: 'solarflux:sp_custom_allthemodium',
    A: '#forge:storage_blocks/vibranium',
    P: 'solarflux:photovoltaic_cell_5'
  }).id(`kubejs:solarflux/vibranium_solar`)
  e.shaped('2x solarflux:sp_custom_unobtainium', [
    'PPP',
    'SAS',
    'SAS'
  ], {
    S: 'solarflux:sp_custom_vibranium',
    A: '#forge:storage_blocks/unobtainium',
    P: 'solarflux:photovoltaic_cell_6'
  }).id(`kubejs:solarflux/unobtainium_solar`)
  e.shaped('4x biggerreactors:reactor_manifold', ['IGI', 'G G', 'IGI'], {
    I: '#forge:ingots/iron',
    G: '#forge:glass'
  }).id(`kubejs:reactor_manifold`)
  e.custom({
    type: 'immersivepetroleum:hydrotreater',
    time: 1,
    energy: 512,
    result: {
      fluid: 'immersivepetroleum:diesel',
      amount: 7
    },
    input: {
      tag: 'forge:diesel_sulfur',
      amount: 7
    },
    secondary_input: {
      tag: 'minecraft:water',
      amount: 7
    },
    secondary_result: {
      item: 'immersiveengineering:dust_sulfur',
      chance: '0.02'
    }
  }).id('kubejs:hydrotreater/sulfur_recovery')
  e.shaped('rats:dragon_wing', ['BBB', 'LLB', '  L'], {
    B: '#forge:bones/dragon',
    L: '#forge:scales/dragon'
  }).id(`kubejs:rats/dragon_wing`)
  //Minecraft
  e.shaped('minecraft:dragon_egg', [
    'SSS',
    'SDS',
    'SSS'
  ], {
    S: 'mysticalagradditions:dragon_egg_chunk',
    D: 'atmadditions:dragon_soul'
  }).id('kubejs:minecraft/dragon_egg')
  //Tombstone
  e.shaped('tombstone:soul_receptacle', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'tombstone:dust_of_vanishing',
    B: 'tombstone:ankh_of_pray',
    C: 'minecraft:totem_of_undying',
    D: 'tombstone:familiar_receptacle',
    E: 'tombstone:voodoo_poppet'
  }).id('kubejs:tombstone/soul_receptacle')
  //Pipez
  e.shaped('pipez:infinity_upgrade', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'compressium:redstone_4',
    C: 'pipez:ultimate_upgrade'
  }).id('kubejs:pipez/infinity_upgrade')
  //MA
  e.shaped('8x astralsorcery:aquamarine', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'mysticalagriculture:aquamarine_essence'
  }).id(`kubejs:mysticalagriculture/aquamarine_essence`)
  e.shaped('8x thermal:niter_dust', [
    ' A ',
    ' A ',
    ' A '
  ], {
    A: 'mysticalagriculture:saltpeter_essence'
  }).id('kubejs:mysticalagriculture/saltpeter_essence')
  //Cable Tiers changes
  caTier(`elite`, `#forge:storage_blocks/iron`, `refinedstorage:improved_processor`, `refinedstorage:`)
  caTier(`ultra`, `#forge:storage_blocks/diamond`, `refinedstorage:advanced_processor`, `cabletiers:elite_`)
  caTier(`creative`, `#forge:storage_blocks/netherite`, `extradisks:withering_processor`, `cabletiers:ultra_`)
  //Creative Transmitter
  e.shaped('creativewirelesstransmitter:creative_wireless_transmitter', [
    'ITI',
    'ICI',
    'IDI'
  ], {
    I: 'allthemodium:unobtainium_ingot',
    D: 'rsinfinitybooster:dimension_card',
    C: 'refinedstorage:machine_casing',
    T: 'refinedstorage:wireless_transmitter'
  }).id(`kubejs:creativewirelesstransmitter/creative_wireless_transmitter`)
  //Mekasuit
  e.shaped(Item.of('mekanism:mekasuit_helmet', {
    HideFlags: 2
  }), [
    'HCH',
    'HUH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_helmet'
  }).id(`kubejs:mekanism/mekasuit_helmet`)
  e.shaped(Item.of('mekanism:mekasuit_bodyarmor', {
    HideFlags: 2
  }), [
    'HCH',
    'HUH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_chestplate'
  }).id(`kubejs:mekanism/mekasuit_bodyarmor`)
  e.shaped(Item.of('mekanism:mekasuit_pants', {
    HideFlags: 2
  }), [
    'HCH',
    'HUH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_leggings'
  }).id(`kubejs:mekanism/mekasuit_pants`)
  e.shaped(Item.of('mekanism:mekasuit_boots', {
    HideFlags: 2
  }), [
    'HCH',
    'HUH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_boots'
  }).id(`kubejs:mekanism/mekasuit_boots`)

  //Misc Shapeless Recipes
  e.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:clay`)
  e.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:quartz`)
  e.shapeless('minecraft:chest', '#forge:chests/wooden')
  e.shapeless('minecraft:crafting_table', /byg:.+_crafting_table/).id(`kubejs:byg_crafter_convert`)
  e.shapeless('kubejs:rotten_leather', '3x minecraft:rotten_flesh').id(`kubejs:rotten_leather`)
  e.shapeless('appliedenergistics2:interface', 'appliedenergistics2:cable_interface').id(`kubejs:ae_interface`)

  //conversion recipe for solar panels which were removed from the game
  e.shapeless('solarflux:sp_custom_allthemodium', 'solarflux:sp_6').id('kubejs:solar_conversion/tier_6')
  e.shapeless('solarflux:sp_custom_vibranium', 'solarflux:sp_7').id('kubejs:solar_conversion/tier_7')
  e.shapeless('solarflux:sp_custom_unobtainium', 'solarflux:sp_8').id('kubejs:solar_conversion/tier_8')

  //Powah recipes
  e.shaped('powah:thermoelectric_plate', [
    'BAB',
    'ACA',
    'BAB'
  ], {
    B: '#forge:rods/blaze',
    A: 'mekanism:alloy_infused',
    C: 'powah:capacitor_basic_tiny'
  }).id('kubejs:powah/thermoelectric_plate')

  energize([{ tag: 'forge:storage_blocks/iron' }, { tag: 'forge:storage_blocks/gold' }], 'powah:energized_steel_block', 2, '90000')
  energize([{ item: 'botania:blaze_block' }], 'powah:blazing_crystal_block', 1, '810000')
  energize([{ tag: 'forge:storage_blocks/diamond' }], 'powah:niotic_crystal_block', 1, '2700000')
  energize([{ tag: 'forge:storage_blocks/emerald' }], 'powah:spirited_crystal_block', 1, '9000000')

  typesPowah.forEach(type => {
    tiersPowah.forEach(tier => {
      e.shapeless(item.of(`powah:${type}_${tier}`), `powah:${type}_${tier}`)
    })
  })

  //Pedestal stuff
  coinUpgrade('import', 'rf')
  coinUpgrade('export', 'rf')
  coinUpgrade('crusher', 'rf')
  coinUpgrade('smelter', 'rf')
  coinUpgrade('sawmill', 'rf')
  coinUpgrade('dropper', 'xp')
  coinUpgrade('magnet', 'xp')
  pedestalCrush('pamhc2foodcore:flouritem', 1, 'forge:flour_plants', 1)
  pedestalCrush('appliedenergistics2:fluix_dust', 1, 'appliedenergistics2:fluix_crystal', 0)
  pedestalCrush('appliedenergistics2:certus_quartz_dust', 1, 'forge:gems/certus_quartz', 1)
  pedestalCrush('mekanism:dust_quartz', 1, 'forge:gems/quartz', 1)
  pedestalSaw('mekanism:sawdust', 1, 'forge:rods/wooden', 1)
  pedestalSaw('minecraft:stick', 4, 'minecraft:planks', 1)
  pedestalSaw('minecraft:stick', 2, 'minecraft:wooden_slabs', 1)

  //AE Recipes
  e.recipes.appliedenergistics2.grinder({
    input: {
      tag: 'forge:flour_plants'
    },
    result: {
      primary: {
        item: 'pamhc2foodcore:flouritem',
        count: 1
      }
    },
    turns: 8
  })

  //NBT Resets
  utils.listOf(resetNBT).forEach(reset => e.shapeless(item.of(reset), reset))

  //Solarflux Recipe
  solars.forEach(solar => e.shapeless(item.of(`solarflux:sp_${solar}`), `solarflux:sp_${solar}`))

  //Smithing stuff
  smithing('metalbarrels:wood_to_netherite', 'metalbarrels:wood_to_obsidian', 'minecraft:netherite_ingot')

  //Quark marble to Astral Sorcery Marble
  e.recipes.astralsorcery.block_transmutation({
    'input': {
      'block': 'quark:marble',
    },
    'output': {
      'block': 'astralsorcery:marble_raw'
    },
    'starlight': 200.0
  })
  e.recipes.astralsorcery.infuser({
    'fluidInput': 'astralsorcery:liquid_starlight',
    'input': {
      'item': 'quark:marble'
    },
    'output': {
      'item': 'astralsorcery:marble_raw',
      'count': 1
    },
    'consumptionChance': 0.1,
    'duration': 100,
    'consumeMultipleFluids': false,
    'acceptChaliceInput': true,
    'copyNBTToOutputs': false
  })

  //quark
  quarkWoodTypes.forEach(wood => {
    e.shapeless(`quark:${wood}_chest`, [`minecraft:${wood}_planks`, '#forge:chests/wooden'])
    e.shapeless(`quark:${wood}_trapped_chest`, [`quark:${wood}_chest`, 'minecraft:tripwire_hook'])
  })
  buildQuarkChest('nether_brick', 'minecraft:nether_bricks')
  buildQuarkChest('prismarine', 'minecraft:prismarine')
  buildQuarkChest('mushroom', '#forge:mushroom_caps')
  buildQuarkChest('purpur', 'minecraft:purpur_block')

  //Make bio fuel use tags instead of invidual items
  e.recipes.mekanism.crushing(item.of('mekanism:bio_fuel', 2), `#misctags:biofuel2`)
  e.recipes.mekanism.crushing(item.of('mekanism:bio_fuel', 4), `#misctags:biofuel4`)
  e.recipes.mekanism.crushing(item.of('mekanism:bio_fuel', 5), `#misctags:biofuel5`)
  e.recipes.mekanism.crushing(item.of('mekanism:bio_fuel', 7), `#misctags:biofuel7`)
  e.recipes.mekanism.crushing(item.of('mekanism:bio_fuel', 8), `#misctags:biofuel8`)

  //multicrush - mek crusher and thermal pulverizer
  multicrush('4x minecraft:brick', 'minecraft:bricks')
  multicrush(`9x minecraft:rotten_flesh`, `biomesoplenty:flesh`)
  multicrush(`4x minecraft:magma_cream`, `minecraft:magma_block`)
  multicrush(`minecraft:snow_block`, `minecraft:ice`)
  multicrush(`allthemodium:unobtainium_allthemodium_alloy_dust`, `allthemodium:unobtainium_allthemodium_alloy_ingot`)
  multicrush(`allthemodium:unobtainium_vibranium_alloy_dust`, `allthemodium:unobtainium_vibranium_alloy_ingot`)
  multicrush(`allthemodium:vibranium_allthemodium_alloy_dust`, `allthemodium:vibranium_allthemodium_alloy_ingot`)

  //crush - mek crushing only
  crush(`4x minecraft:blaze_powder`, `#forge:rods/blaze`)
  crush(`6x thermal:sulfur`, `thermal:sulfur_ore`)
  crush(`thermal:diamond_dust`, `minecraft:diamond`)

  //enrich - mek enriching
  enrich(`minecraft:blaze_rod`, `4x minecraft:blaze_powder`)

  e.recipes.immersiveengineering.crusher(`4x minecraft:nether_wart`, `minecraft:nether_wart_block`)

  saw.forEach(type => e.recipes.mekanism.sawing((`6x byg:${type}_planks`), [`byg:stripped_${type}_log`, `byg:${type}_log`], Item.of('mekanism:sawdust').withChance(0.25)).id(`kubejs:saw/byg_log_${type}`))
  e.recipes.mekanism.sawing((`6x minecraft:oak_planks`), `byg:withering_oak_log`, Item.of('mekanism:sawdust').withChance(0.25)).id(`kubejs:saw/byg_log_withering_oak`)
  e.recipes.mekanism.sawing((`8x mekanism:sawdust`), `byg:imbued_nightshade_log`,).id(`kubejs:saw/byg_log_imbued_nightshade`)
  e.recipes.mekanism.sawing((`6x minecraft:birch_planks`), [`byg:stripped_palo_verde_log`, `byg:palo_verde_log`], Item.of('mekanism:sawdust').withChance(0.25)).id(`kubejs:saw/byg_log_palo_verde`)

  //botania
  e.recipes.botania.runic_altar({
    output: {
      item: 'kubejs:rune_of_sins'
    },
    mana: 25000,
    ingredients: [{
      tag: 'botania:runes/lust'
    },
    {
      tag: 'botania:runes/gluttony'
    },
    {
      tag: 'botania:runes/greed'
    },
    {
      tag: 'botania:runes/sloth'
    },
    {
      tag: 'botania:runes/wrath'
    },
    {
      tag: 'botania:runes/envy'
    },
    {
      tag: 'botania:runes/pride'
    }
    ]
  }).id('kubejs:runic_altar/rune_of_sins')
  e.recipes.botania.petal_apothecary({
    output: {
      item: 'kubejs:mass_of_wills'
    },
    ingredients: [{
      item: 'botania:ancient_will_ahrim'
    },
    {
      item: 'botania:ancient_will_dharok'
    },
    {
      item: 'botania:ancient_will_guthan'
    },
    {
      item: 'botania:ancient_will_torag'
    },
    {
      item: 'botania:ancient_will_verac'
    },
    {
      item: 'botania:ancient_will_karil'
    }
    ]
  }).id('kubejs:petal_apothecary/mass_of_wills')

  //ma infusion
  mainfusion('kubejs:magical_soil', 'botania:overgrowth_seed', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block')
  mainfusion('mysticalagriculture:saltpeter_seeds', 'mysticalagriculture:prosperity_seed_base', 'thermal:niter_dust', 'mysticalagriculture:prudentium_essence', 'thermal:niter_dust', 'mysticalagriculture:prudentium_essence', 'thermal:niter_dust', 'mysticalagriculture:prudentium_essence', 'thermal:niter_dust', 'mysticalagriculture:prudentium_essence')

  //thermal
  e.recipes.thermal.pulverizer([
    Item.of('astralsorcery:aquamarine').withChance(6),
    Item.of('minecraft:sand').withChance(0.2)
  ], [
    { item: 'astralsorcery:aquamarine_sand_ore' }
  ])
  e.recipes.thermal.smelter([
    { item: 'tconstruct:pig_iron_ingot', count: 2 }
  ], [
    { tag: 'forge:ingots/iron' },
    { item: 'tconstruct:blood_slime_ball' },
    { item: 'minecraft:clay_ball' }
  ]).energy(4000).id('kubejs:smelter/pig_iron')
  e.recipes.thermal.chiller(
    [
      { item: 'tconstruct:pig_iron_ingot' }
    ],
    [
      fluid.of('tconstruct:molten_pig_iron', 144),
      { item: 'thermal:chiller_ingot_cast' }
    ])
    .energy(5000)
    .id('kubejs:chiller/pig_iron')
  e.recipes.thermal.smelter([
    { item: 'tconstruct:slimesteel_ingot', count: 2 }
  ], [
    { tag: 'forge:ingots/iron', count: 1 },
    { item: 'tconstruct:sky_slime_ball', count: 1 },
    { item: 'tconstruct:seared_brick', count: 1 }
  ]).energy(4000).id('kubejs:smelter/slimesteel')

  //BYG
  tinkerBasinCasting([
    ['byg:cryptic_stone', 'byg:cryptic_magma_block'],
    ['minecraft:blackstone', 'byg:magmatic_stone']
  ])
  tinkerMelting(['byg:cryptic_magma_block', 'byg:magmatic_stone'])

  //Explorer's Compass
  e.recipes.bloodmagic.altar('explorerscompass:explorerscompass', 'minecraft:compass').upgradeLevel(3).altarSyphon(40000)

  //RFTools
  e.shaped('rftoolsdim:dimension_builder', [
    'USU',
    'MCM',
    'BAB'
  ], {
    U: 'kubejs:uu_matter',
    S: 'atmadditions:dimensional_seed',
    A: 'atmadditions:atm_star',
    M: 'mekanism:pellet_antimatter',
    B: 'thermal:enderium_block',
    C: 'rftoolsbase:machine_frame'
  }).id('kubejs:rftoolsdim/dimension_builder')

  e.shaped('16x resourcefulbees:bee_jar', [
    ' G ',
    'G G',
    'GGG'
  ], {
    G: '#forge:glass'
  })

  e.custom({
    type: "transport:rail_workers_bench",
    ingredient: {
      tag: "forge:storage_blocks/iron",
      count: 2
    },
    result: {
      item: "transport:steam_locomotive",
      count: 1
    }
  }).id('transport:steam_locomotive')

  e.shapeless(`astralsorcery:marble_raw`, 'enviromats:marble')
  e.shapeless(`enviromats:marble`, `quark:marble`)
  e.shapeless(`quark:marble`, `chisel:marble/raw`)
  e.shapeless(`chisel:marble/raw`, `astralsorcery:marble_raw`)

  e.shapeless(`create:limestone`, 'create:weathered_limestone')
  e.shapeless(`create:weathered_limestone`, `quark:limestone`)
  e.shapeless(`quark:limestone`, `chisel:limestone/raw`)
  e.shapeless(`chisel:limestone/raw`, `create:limestone`)

  //Custom Blocks
  customBlock('kubejs:nether_star_block', 'minecraft:nether_star')
  customBlock('kubejs:atm_star_block', 'atmadditions:atm_star')
})
