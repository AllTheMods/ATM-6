onEvent('recipes', e => {
  e.recipes.astralsorcery.block_transmutation({
    input: { block: 'quark:marble', },
    output: { block: 'astralsorcery:marble_raw' },
    starlight: 200.0
  }).id(`kubejs:astralsorcery/block_transmutation/marble_raw`)

  e.recipes.astralsorcery.infuser({
    fluidInput: 'astralsorcery:liquid_starlight',
    input: { item: 'quark:marble' },
    output: { item: 'astralsorcery:marble_raw', count: 1 },
    consumptionChance: 0.1,
    duration: 100,
    consumeMultipleFluids: false,
    acceptChaliceInput: true,
    copyNBTToOutputs: false
  }).id(`kubejs:astralsorcery/infuser/marble_raw`)

  e.recipes.thermal.pulverizer(
    [
      Item.of('astralsorcery:aquamarine').withChance(6),
      Item.of('minecraft:sand').withChance(0.2)
    ],
    [{ item: 'astralsorcery:aquamarine_sand_ore' }]
  )
})
