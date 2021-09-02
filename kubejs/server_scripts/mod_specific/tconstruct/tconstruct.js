onEvent('recipes', e => {
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

  tinkerBasinCasting([
    ['byg:cryptic_stone', 'byg:cryptic_magma_block'],
    ['minecraft:blackstone', 'byg:magmatic_stone']
  ])
  tinkerMelting(['byg:cryptic_magma_block', 'byg:magmatic_stone'])

  e.recipes.thermal.smelter(
    [{ item: 'tconstruct:pig_iron_ingot', count: 2 }],
    [
      { tag: 'forge:ingots/iron' },
      { item: 'tconstruct:blood_slime_ball' },
      { item: 'minecraft:clay_ball' }
    ]
  ).energy(4000).id('kubejs:smelter/pig_iron')
  e.recipes.thermal.smelter(
    [{ item: 'tconstruct:slimesteel_ingot', count: 2 }],
    [
      { tag: 'forge:ingots/iron', count: 1 },
      { item: 'tconstruct:sky_slime_ball', count: 1 },
      { item: 'tconstruct:seared_brick', count: 1 }
    ]
  ).energy(4000).id('kubejs:smelter/slimesteel')
  e.recipes.thermal.chiller(
    [{ item: 'tconstruct:pig_iron_ingot' }],
    [
      fluid.of('tconstruct:molten_pig_iron', 144),
      { item: 'thermal:chiller_ingot_cast' }
    ]
  ).energy(5000).id('kubejs:chiller/pig_iron')

  removeRecipeByID([
    /^tmechworks:.*_block_from_.*_ingot/,
    'tconstruct:common/materials/copper_block_from_ingots'
  ])
})