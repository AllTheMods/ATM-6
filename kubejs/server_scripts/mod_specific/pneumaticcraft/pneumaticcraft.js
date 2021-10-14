onEvent('recipes', e => {
  function pressure(inputs, result, rCount, pressure) {
    e.recipes.pneumaticcraft.pressure_chamber({
      inputs: inputs,
      pressure: pressure,
      results: [{
        item: result,
        count: rCount
      }]
    }).id(`kubejs:pressure/${result.replace(':', '/')}`)
  }

  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:advanced_pressure_tube',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:electrostatic_compressor',
    'count': 1
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:advanced_pressure_tube',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:flux_compressor',
    'count': 1
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'atmadditions:atm_star',
    'count': 1
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:advanced_air_compressor',
    'count': 1
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:advanced_pressure_tube',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:advanced_liquid_compressor',
    'count': 1
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:advanced_pressure_tube',
    'count': 64
  }
  ], 'pneumaticcraft:creative_compressor', 1, 4.9)

  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:compressed_iron_block',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:compressed_iron_block',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:compressed_iron_block',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:compressed_iron_block',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'atmadditions:atm_star',
    'count': 1
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:compressed_iron_block',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:compressed_iron_block',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:compressed_iron_block',
    'count': 64
  },
  {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'pneumaticcraft:compressed_iron_block',
    'count': 64
  }
  ], 'pneumaticcraft:creative_compressed_iron_block', 1, 4.9)

  //make plastic recipes take #forge:plastic
  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:gold_nugget',
    'count': 3
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:redstone',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:plastic',
    'count': 1
  }], 'pneumaticcraft:transistor', 1, 1.0)
  e.remove({ id: 'pneumaticcraft:pressure_chamber/transistor' })
  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:gold_nugget',
    'count': 2
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:slimeballs',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:plastic',
    'count': 1
  }], 'pneumaticcraft:capacitor', 1, 1.0)
  e.remove({ id: 'pneumaticcraft:pressure_chamber/capacitor' })
  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:redstone_torch',
    'count': 2
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:gold_nugget',
    'count': 3
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:plastic',
    'count': 1
  }], 'pneumaticcraft:empty_pcb', 3, 1.5)
  e.remove({ id: 'pneumaticcraft:pressure_chamber/empty_pcb' })
})
