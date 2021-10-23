onEvent('recipes', e => {
  //#region functions
  function tinkerBasinCasting(entries) {
    entries.forEach(([input, output]) => {
      e.custom({
        type: 'tconstruct:casting_basin',
        cast: { item: input },
        cast_consumed: true,
        fluid: { name: 'tconstruct:magma', amount: 1000 },
        result: output,
        cooling_time: 90
      }).id(`kubejs:basin_casting/${output.substring(output.indexOf(':') + 1)}`)
    })
  }
  function tinkerMelting(entries) {
    entries.forEach(input => {
      e.custom({
        type: 'tconstruct:melting',
        ingredient: { item: input },
        result: { fluid: 'tconstruct:magma', amount: 1000 },
        temperature: 300,
        time: 127
      }).id(`kubejs:melting/${input.substring(input.indexOf(':') + 1)}`)
    })
  }
  function tinkerBlockMelting(entries) {
    entries.forEach(([input, fluidAmount, time, byproductAmount], index) => {
      e.custom({
        type: 'tconstruct:melting',
        ingredient: input,
        result: { fluid: 'alltheores:molten_copper', amount: fluidAmount },
        temperature: 500,
        time: time,
        byproducts: [{ fluid: 'tconstruct:seared_stone', amount: byproductAmount }]
      }).id(`kubejs:melting/copper/fromblock/${index + 1}`)
    })
  }
  //#endregion
  tinkerBasinCasting([
    ['byg:cryptic_stone', 'byg:cryptic_magma_block'],
    ['minecraft:blackstone', 'byg:magmatic_stone']
  ])
  tinkerMelting(['byg:cryptic_magma_block', 'byg:magmatic_stone'])
  tinkerBlockMelting([
    [{ item: 'tconstruct:smeltery_controller' }, 576, 175, 1152],
    [[{ item: 'tconstruct:seared_drain' }, { item: 'tconstruct:seared_chute' }], 288, 125, 576]
  ])

  e.custom({
    type: 'tconstruct:casting_basin',
    cast: { 'item': 'tconstruct:seared_heater' },
    cast_consumed: true,
    fluid: { 'name': 'alltheores:molten_copper', 'amount': 576 },
    result: 'tconstruct:smeltery_controller',
    cooling_time: 100
  }).id('kubejs:tconstruct/smeltery_controller')

  e.recipes.thermal.smelter(
    [{ item: 'tconstruct:slimesteel_ingot', count: 2 }],
    [
      { tag: 'forge:ingots/iron', count: 1 },
      { item: 'tconstruct:sky_slime_ball', count: 1 },
      { item: 'tconstruct:seared_brick', count: 1 }
    ]
  ).energy(4000).id('kubejs:tconstruct/smelter/slimesteel')

  e.recipes.thermal.chiller(
    [{ item: 'tconstruct:pig_iron_ingot' }],
    [
      fluid.of('tconstruct:molten_pig_iron', 144),
      { item: 'thermal:chiller_ingot_cast' }
    ]
  ).energy(5000).id('kubejs:tconstruct/chiller/pig_iron')

  e.shaped(`tconstruct:crafting_station`, ['P', 'T'],
    {
      P: 'tconstruct:pattern',
      T: 'craftingstation:crafting_station'
    }
  )

  removeRecipeByID(e, [
    /^tmechworks:.*_block_from_.*_ingot/,
    'tconstruct:common/materials/copper_block_from_ingots',
    'tconstruct:smeltery/melting/copper/smeltery_controller',
    'tconstruct:smeltery/melting/copper/smeltery_io',
    'tconstruct:tables/crafting_station_from_logs',
    'tconstruct:tables/crafting_station'
  ])
})
