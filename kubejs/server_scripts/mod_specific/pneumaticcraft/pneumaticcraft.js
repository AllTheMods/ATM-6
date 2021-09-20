onEvent('recipes', e => {
  function pressure(inputs, result, rCount, pressure) {
    e.recipes.pneumaticcraft.pressure_chamber({
      inputs: inputs,
      pressure: pressure,
      results: [{
        item: result,
        count: rCount
      }]
    })
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
})