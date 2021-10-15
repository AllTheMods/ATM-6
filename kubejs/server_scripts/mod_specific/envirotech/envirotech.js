// priority: 1000
//Thanks to Cerbrus#9468, we have this
onEvent('recipes', e => {
  //#region FUNCTIONS
  function key(x, ingredients) { return ingredients[x] ? x : ' ' }
  function add(recipe) {
    //0=ingredients, 1=result, 2=nbt boolean
    e.shaped(Item.of(recipe[1], recipe[2]), [
      ` ${key('T', recipe[0])} `,
      `${key('L', recipe[0])}${key('C', recipe[0])}${key('R', recipe[0])}`,
      ` ${key('B', recipe[0])} `
    ], recipe[0])
  }
  //#endregion
  let recipes = [
    [{
      T: 'envirocore:litherite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: '#forge:storage_blocks/diamond',
      R: '#forge:storage_blocks/diamond',
      C: 'envirocore:null_modifier'
    },
      'envirocore:amplification_modifier',
    {
      tier: 1,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.0,
        'envirocore:amplification': 0.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:litherite_interconnect',
      C: 'envirocore:amplification_modifier'
    },
      'envirocore:amplification_modifier',
    {
      tier: 1,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.0,
        'envirocore:amplification': 0.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:erodium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:amplification_modifier'
    },
      'envirocore:amplification_modifier',
    {
      tier: 2,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.1,
        'envirocore:amplification': 0.4
      }
    },
      true
    ],
    [{
      T: 'envirocore:kyronite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:amplification_modifier'
    },
      'envirocore:amplification_modifier',
    {
      tier: 3,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.2,
        'envirocore:amplification': 0.6
      }
    },
      true
    ],
    [{
      T: 'envirocore:pladium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:amplification_modifier'
    },
      'envirocore:amplification_modifier',
    {
      tier: 4,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.3,
        'envirocore:amplification': 0.8
      }
    },
      true
    ],
    [{
      T: 'envirocore:ionite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:amplification_modifier'
    },
      'envirocore:amplification_modifier',
    {
      tier: 5,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.4,
        'envirocore:amplification': 1.0
      }
    },
      true
    ],
    [{
      T: 'envirocore:aethium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:amplification_modifier'
    },
      'envirocore:amplification_modifier',
    {
      tier: 6,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.5,
        'envirocore:amplification': 1.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:nanorite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:amplification_modifier'
    },
      'envirocore:amplification_modifier',
    {
      tier: 7,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.6,
        'envirocore:amplification': 1.4
      }
    },
      true
    ],
    [{
      T: 'envirocore:xerothium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:amplification_modifier'
    },
      'envirocore:amplification_modifier',
    {
      tier: 8,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.7,
        'envirocore:amplification': 1.6
      }
    },
      true
    ],
    [{
      T: 'envirocore:ionite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: '#forge:storage_blocks/lapis',
      R: '#forge:storage_blocks/lapis',
      C: 'envirocore:null_modifier'
    },
      'envirocore:bandwidth_modifier',
    {
      tier: 5,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.0,
        'envirocore:bandwidth': 1
      }
    },
      true
    ],
    [{
      T: 'envirocore:ionite_interconnect',
      C: 'envirocore:bandwidth_modifier'
    },
      'envirocore:bandwidth_modifier',
    {
      tier: 5,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.0,
        'envirocore:bandwidth': 1
      }
    },
      true
    ],
    [{
      T: 'envirocore:aethium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:bandwidth_modifier'
    },
      'envirocore:bandwidth_modifier',
    {
      tier: 6,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.2,
        'envirocore:bandwidth': 2
      }
    },
      true
    ],
    [{
      T: 'envirocore:nanorite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:bandwidth_modifier'
    },
      'envirocore:bandwidth_modifier',
    {
      tier: 7,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.4,
        'envirocore:bandwidth': 3
      }
    },
      true
    ],
    [{
      T: 'envirocore:xerothium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:bandwidth_modifier'
    },
      'envirocore:bandwidth_modifier',
    {
      tier: 8,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.6,
        'envirocore:bandwidth': 4
      }
    },
      true
    ],
    [{
      T: 'envirocore:ionite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: '#minecraft:wool',
      R: '#minecraft:wool',
      C: 'envirocore:null_modifier'
    },
      'envirocore:electrostatic_modifier',
    {
      tier: 5,
      attributes: {
        'envirocore:electrostatic': 0.4
      }
    },
      true
    ],
    [{
      T: 'envirocore:ionite_interconnect',
      C: 'envirocore:electrostatic_modifier'
    },
      'envirocore:electrostatic_modifier',
    {
      tier: 5,
      attributes: {
        'envirocore:electrostatic': 0.4
      }
    },
      true
    ],
    [{
      T: 'envirocore:aethium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:electrostatic_modifier'
    },
      'envirocore:electrostatic_modifier',
    {
      tier: 6,
      attributes: {
        'envirocore:electrostatic': 0.6
      }
    },
      true
    ],
    [{
      T: 'envirocore:nanorite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:electrostatic_modifier'
    },
      'envirocore:electrostatic_modifier',
    {
      tier: 7,
      attributes: {
        'envirocore:electrostatic': 0.8
      }
    },
      true
    ],
    [{
      T: 'envirocore:xerothium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:electrostatic_modifier'
    },
      'envirocore:electrostatic_modifier',
    {
      tier: 8,
      attributes: {
        'envirocore:electrostatic': 1.0
      }
    },
      true
    ],
    [{
      T: 'envirocore:litherite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: '#forge:storage_blocks/redstone',
      R: '#forge:storage_blocks/redstone',
      C: 'envirocore:null_modifier'
    },
      'envirocore:frequency_modifier',
    {
      tier: 1,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.0,
        'envirocore:frequency': 0.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:litherite_interconnect',
      C: 'envirocore:frequency_modifier'
    },
      'envirocore:frequency_modifier',
    {
      tier: 1,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.0,
        'envirocore:frequency': 0.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:erodium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:frequency_modifier'
    },
      'envirocore:frequency_modifier',
    {
      tier: 2,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.1,
        'envirocore:frequency': 0.4
      }
    },
      true
    ],
    [{
      T: 'envirocore:kyronite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:frequency_modifier'
    },
      'envirocore:frequency_modifier',
    {
      tier: 3,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.2,
        'envirocore:frequency': 0.6
      }
    },
      true
    ],
    [{
      T: 'envirocore:pladium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:frequency_modifier'
    },
      'envirocore:frequency_modifier',
    {
      tier: 4,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.3,
        'envirocore:frequency': 0.8
      }
    },
      true
    ],
    [{
      T: 'envirocore:ionite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:frequency_modifier'
    },
      'envirocore:frequency_modifier',
    {
      tier: 5,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.4,
        'envirocore:frequency': 1.0
      }
    },
      true
    ],
    [{
      T: 'envirocore:aethium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:frequency_modifier'
    },
      'envirocore:frequency_modifier',
    {
      tier: 6,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.5,
        'envirocore:frequency': 1.1
      }
    },
      true
    ],
    [{
      T: 'envirocore:nanorite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:frequency_modifier'
    },
      'envirocore:frequency_modifier',
    {
      tier: 7,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.6,
        'envirocore:frequency': 1.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:xerothium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:frequency_modifier'
    },
      'envirocore:frequency_modifier',
    {
      tier: 8,
      attributes: {
        'envirocore:energy_cost_multiplier': 1.7,
        'envirocore:frequency': 1.3
      }
    },
      true
    ],
    [{
      T: '#forge:storage_blocks/redstone',
      B: 'envirocore:litherite_interconnect',
      L: '#forge:ingots/iron',
      R: '#forge:ingots/iron',
      C: '#envirocore:structure/panels'
    },
      'envirocore:fe_input',
    {
      tier: 1,
      energy: {
        capacity: 1024
      }
    },
      true
    ],
    [{
      T: '#forge:storage_blocks/redstone',
      B: 'envirocore:erodium_interconnect',
      L: '#forge:ingots/iron',
      R: '#forge:ingots/iron',
      C: 'envirocore:fe_input'
    },
      'envirocore:fe_input',
    {
      tier: 2,
      energy: {
        capacity: 8192
      }
    },
      true
    ],
    [{
      T: '#forge:storage_blocks/redstone',
      B: 'envirocore:kyronite_interconnect',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_input'
    },
      'envirocore:fe_input',
    {
      tier: 3,
      energy: {
        capacity: 65536
      }
    },
      true
    ],
    [{
      T: '#forge:storage_blocks/redstone',
      B: 'envirocore:pladium_interconnect',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_input'
    },
      'envirocore:fe_input',
    {
      tier: 4,
      energy: {
        capacity: 524288
      }
    },
      true
    ],
    [{
      T: '#forge:storage_blocks/redstone',
      B: 'envirocore:ionite_interconnect',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_input'
    },
      'envirocore:fe_input',
    {
      tier: 5,
      energy: {
        capacity: 4194304
      }
    },
      true
    ],
    [{
      T: '#forge:storage_blocks/redstone',
      B: 'envirocore:aethium_interconnect',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_input'
    },
      'envirocore:fe_input',
    {
      tier: 6,
      energy: {
        capacity: 33554432
      }
    },
      true
    ],
    [{
      T: '#forge:storage_blocks/redstone',
      B: 'envirocore:nanorite_interconnect',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_input'
    },
      'envirocore:fe_input',
    {
      tier: 7,
      energy: {
        capacity: 268435456
      }
    },
      true
    ],
    [{
      T: '#forge:storage_blocks/redstone',
      B: 'envirocore:xerothium_interconnect',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_input'
    },
      'envirocore:fe_input',
    {
      tier: 8,
      energy: {
        capacity: 2147483647
      }
    },
      true
    ],
    [{
      T: 'envirocore:litherite_interconnect',
      B: '#forge:storage_blocks/redstone',
      L: '#forge:ingots/iron',
      R: '#forge:ingots/iron',
      C: '#envirocore:structure/panels'
    },
      'envirocore:fe_output',
    {
      tier: 1,
      energy: {
        capacity: 1024
      }
    },
      true
    ],
    [{
      T: 'envirocore:erodium_interconnect',
      B: '#forge:storage_blocks/redstone',
      L: '#forge:ingots/iron',
      R: '#forge:ingots/iron',
      C: 'envirocore:fe_output'
    },
      'envirocore:fe_output',
    {
      tier: 2,
      energy: {
        capacity: 8192
      }
    },
      true
    ],
    [{
      T: 'envirocore:kyronite_interconnect',
      B: '#forge:storage_blocks/redstone',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_output'
    },
      'envirocore:fe_output',
    {
      tier: 3,
      energy: {
        capacity: 65536
      }
    },
      true
    ],
    [{
      T: 'envirocore:pladium_interconnect',
      B: '#forge:storage_blocks/redstone',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_output'
    },
      'envirocore:fe_output',
    {
      tier: 4,
      energy: {
        capacity: 524288
      }
    },
      true
    ],
    [{
      T: 'envirocore:ionite_interconnect',
      B: '#forge:storage_blocks/redstone',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_output'
    },
      'envirocore:fe_output',
    {
      tier: 5,
      energy: {
        capacity: 4194304
      }
    },
      true
    ],
    [{
      T: 'envirocore:aethium_interconnect',
      B: '#forge:storage_blocks/redstone',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_output'
    },
      'envirocore:fe_output',
    {
      tier: 6,
      energy: {
        capacity: 33554432
      }
    },
      true
    ],
    [{
      T: 'envirocore:nanorite_interconnect',
      B: '#forge:storage_blocks/redstone',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_output'
    },
      'envirocore:fe_output',
    {
      tier: 7,
      energy: {
        capacity: 268435456
      }
    },
      true
    ],
    [{
      T: 'envirocore:xerothium_interconnect',
      B: '#forge:storage_blocks/redstone',
      L: 'envirocore:lonsdaleite_crystal',
      R: 'envirocore:lonsdaleite_crystal',
      C: 'envirocore:fe_output'
    },
      'envirocore:fe_output',
    {
      tier: 8,
      energy: {
        capacity: 2147483647
      }
    },
      true
    ],
    [{
      T: 'minecraft:redstone',
      B: 'minecraft:redstone',
      L: 'minecraft:redstone',
      R: 'minecraft:redstone',
      C: 'envirocore:obsidian_plate'
    },
      'envirocore:redstone_imbued_obsidian_plate'
    ],
    [{
      T: 'envirocore:litherite_crystal',
      C: 'envirocore:redstone_imbued_obsidian_plate'
    },
      'envirocore:litherite_interconnect'
    ],
    [{
      L: 'envirocore:erodium_crystal',
      R: 'envirocore:erodium_crystal',
      C: 'envirocore:redstone_imbued_obsidian_plate'
    },
      'envirocore:erodium_interconnect'
    ],
    [{
      T: 'envirocore:kyronite_crystal',
      B: 'envirocore:kyronite_crystal',
      L: 'envirocore:kyronite_crystal',
      R: 'envirocore:kyronite_crystal',
      C: 'envirocore:redstone_imbued_obsidian_plate'
    },
      'envirocore:kyronite_interconnect'
    ],
    [{
      T: 'envirocore:pladium_crystal',
      B: 'envirocore:pladium_crystal',
      L: 'envirocore:pladium_crystal',
      R: 'envirocore:pladium_crystal',
      C: 'envirocore:redstone_imbued_obsidian_plate'
    },
      'envirocore:pladium_interconnect'
    ],
    [{
      T: 'envirocore:ionite_crystal',
      B: 'envirocore:ionite_crystal',
      L: 'envirocore:ionite_crystal',
      R: 'envirocore:ionite_crystal',
      C: 'envirocore:redstone_imbued_obsidian_plate'
    },
      'envirocore:ionite_interconnect'
    ],
    [{
      T: 'envirocore:aethium_crystal',
      B: 'envirocore:aethium_crystal',
      L: 'envirocore:aethium_crystal',
      R: 'envirocore:aethium_crystal',
      C: 'envirocore:redstone_imbued_obsidian_plate'
    },
      'envirocore:aethium_interconnect'
    ],
    [{
      T: 'envirocore:nanorite_crystal',
      B: 'envirocore:nanorite_crystal',
      L: 'envirocore:nanorite_crystal',
      R: 'envirocore:nanorite_crystal',
      C: 'envirocore:redstone_imbued_obsidian_plate'
    },
      'envirocore:nanorite_interconnect'
    ],
    [{
      T: 'envirocore:xerothium_crystal',
      B: 'envirocore:xerothium_crystal',
      L: 'envirocore:xerothium_crystal',
      R: 'envirocore:xerothium_crystal',
      C: 'envirocore:redstone_imbued_obsidian_plate'
    },
      'envirocore:xerothium_interconnect'
    ],
    [{
      T: 'envirocore:litherite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: '#forge:storage_blocks/quartz',
      R: '#forge:storage_blocks/quartz',
      C: 'envirocore:null_modifier'
    },
      'envirocore:piezo_modifier',
    {
      tier: 1,
      attributes: {
        'envirocore:piezo': 0.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:litherite_interconnect',
      C: 'envirocore:piezo_modifier'
    },
      'envirocore:piezo_modifier',
    {
      tier: 1,
      attributes: {
        'envirocore:piezo': 0.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:erodium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:piezo_modifier'
    },
      'envirocore:piezo_modifier',
    {
      tier: 2,
      attributes: {
        'envirocore:piezo': 0.4
      }
    },
      true
    ],
    [{
      T: 'envirocore:kyronite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:piezo_modifier'
    },
      'envirocore:piezo_modifier',
    {
      tier: 3,
      attributes: {
        'envirocore:piezo': 0.6
      }
    },
      true
    ],
    [{
      T: 'envirocore:pladium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:piezo_modifier'
    },
      'envirocore:piezo_modifier',
    {
      tier: 4,
      attributes: {
        'envirocore:piezo': 0.8
      }
    },
      true
    ],
    [{
      T: 'envirocore:ionite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:piezo_modifier'
    },
      'envirocore:piezo_modifier',
    {
      tier: 5,
      attributes: {
        'envirocore:piezo': 1.0
      }
    },
      true
    ],
    [{
      T: 'envirocore:aethium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:piezo_modifier'
    },
      'envirocore:piezo_modifier',
    {
      tier: 6,
      attributes: {
        'envirocore:piezo': 1.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:nanorite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:piezo_modifier'
    },
      'envirocore:piezo_modifier',
    {
      tier: 7,
      attributes: {
        'envirocore:piezo': 1.4
      }
    },
      true
    ],
    [{
      T: 'envirocore:xerothium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:piezo_modifier'
    },
      'envirocore:piezo_modifier',
    {
      tier: 8,
      attributes: {
        'envirocore:piezo': 1.6
      }
    },
      true
    ],
    [{
      T: 'envirocore:litherite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'minecraft:ender_eye',
      R: 'minecraft:ender_eye',
      C: 'envirocore:null_modifier'
    },
      'envirocore:radiant_modifier',
    {
      tier: 1,
      attributes: {
        'envirocore:radiant': 0.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:litherite_interconnect',
      C: 'envirocore:radiant_modifier'
    },
      'envirocore:radiant_modifier',
    {
      tier: 1,
      attributes: {
        'envirocore:radiant': 0.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:erodium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:radiant_modifier'
    },
      'envirocore:radiant_modifier',
    {
      tier: 2,
      attributes: {
        'envirocore:radiant': 0.4
      }
    },
      true
    ],
    [{
      T: 'envirocore:kyronite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:radiant_modifier'
    },
      'envirocore:radiant_modifier',
    {
      tier: 3,
      attributes: {
        'envirocore:radiant': 0.6
      }
    },
      true
    ],
    [{
      T: 'envirocore:pladium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:radiant_modifier'
    },
      'envirocore:radiant_modifier',
    {
      tier: 4,
      attributes: {
        'envirocore:radiant': 0.8
      }
    },
      true
    ],
    [{
      T: 'envirocore:ionite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:radiant_modifier'
    },
      'envirocore:radiant_modifier',
    {
      tier: 5,
      attributes: {
        'envirocore:radiant': 1.0
      }
    },
      true
    ],
    [{
      T: 'envirocore:aethium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:radiant_modifier'
    },
      'envirocore:radiant_modifier',
    {
      tier: 6,
      attributes: {
        'envirocore:radiant': 1.2
      }
    },
      true
    ],
    [{
      T: 'envirocore:nanorite_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:radiant_modifier'
    },
      'envirocore:radiant_modifier',
    {
      tier: 7,
      attributes: {
        'envirocore:radiant': 1.4
      }
    },
      true
    ],
    [{
      T: 'envirocore:xerothium_interconnect',
      B: 'envirocore:lonsdaleite_crystal',
      L: 'envirocore:mica',
      R: 'envirocore:mica',
      C: 'envirocore:radiant_modifier'
    },
      'envirocore:radiant_modifier',
    {
      tier: 8,
      attributes: {
        'envirocore:radiant': 1.6
      }
    },
      true
    ]
  ]

  recipes.forEach(recipe => { add(recipe) })

  e.shaped('8x enviromats:alabaster_magenta', ['AAA', 'AMA', 'AAA'], {
    A: '#forge:alabaster',
    M: '#forge:dyes/magenta'
  }).id(`kubejs:magenta_alabaster`)

  modifyShaped(e, 'envirotech:erodium_void_miner_ccu', 1, ['CBC', 'CMC', 'CLC'], {
    C: 'envirocore:erodium_crystal',
    M: 'envirotech:litherite_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'minecraft:netherite_block'
  })
  modifyShaped(e, 'envirotech:kyronite_void_miner_ccu', 1, ['CBC', 'CMC', 'CLC'], {
    C: 'envirocore:kyronite_crystal',
    M: 'envirotech:erodium_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:allthemodium_block'
  })
  modifyShaped(e, 'envirotech:pladium_void_miner_ccu', 1, ['CBC', 'CMC', 'CLC'], {
    C: 'envirocore:pladium_crystal',
    M: 'envirotech:kyronite_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:vibranium_block'
  })
  modifyShaped(e, 'envirotech:ionite_void_miner_ccu', 1, ['CBC', 'CMC', 'CLC'], {
    C: 'envirocore:ionite_crystal',
    M: 'envirotech:pladium_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:unobtainium_block'
  })
  modifyShaped(e, 'envirotech:aethium_void_miner_ccu', 1, ['CBC', 'CMC', 'CLC'], {
    C: 'envirocore:aethium_crystal',
    M: 'envirotech:ionite_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:vibranium_allthemodium_alloy_block'
  })
  modifyShaped(e, 'envirotech:nanorite_void_miner_ccu', 1, ['CBC', 'CMC', 'CLC'], {
    C: 'envirocore:nanorite_crystal',
    M: 'envirotech:aethium_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:unobtainium_allthemodium_alloy_block'
  })
  modifyShaped(e, 'envirotech:xerothium_void_miner_ccu', 1, ['CBC', 'CMC', 'CLC'], {
    C: 'envirocore:xerothium_crystal',
    M: 'envirotech:nanorite_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:unobtainium_vibranium_alloy_block'
  })
})
