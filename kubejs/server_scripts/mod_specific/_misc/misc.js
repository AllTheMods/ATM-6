onEvent('recipes', e => {
  //#region functions
  function plateCasting(material, coolingTime, result) {
    e.custom(
      {
        type: 'tconstruct:casting_table',
        conditions: [
          {
            value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
            type: 'forge:not'
          }
        ],
        cast: { tag: 'tconstruct:casts/multi_use/plate' },
        fluid: { name: `tconstruct:molten_${material}`, amount: 144 },
        result: { item: result },
        cooling_time: coolingTime
      }
    )
    e.custom(
      {
        type: 'tconstruct:casting_table',
        conditions: [
          {
            value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
            type: 'forge:not'
          }
        ],
        cast: { tag: 'tconstruct:casts/single_use/plate' },
        cast_consumed: true,
        fluid: { name: `tconstruct:molten_${material}`, amount: 144 },
        result: { item: result },
        cooling_time: coolingTime
      }
    )
  }
  function platePressing(material, result) {
    e.custom(
      {
        type: 'immersiveengineering:metal_press',
        mold: { item: 'immersiveengineering:mold_plate' },
        result: { item: result },
        conditions: [
          {
            value: { tag: `forge:ingots/${material}`, type: 'forge:tag_empty' },
            type: 'forge:not'
          },
          {
            value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
            type: 'forge:not'
          }
        ],
        input: { tag: `forge:ingots/${material}` },
        energy: 2400
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
  function multicrush(output, input) {
    e.recipes.mekanism.crushing(output, input)
    e.recipes.create.crushing(output, input)
    e.recipes.immersiveengineering.crusher(output, input)
    e.recipes.thermal.pulverizer(output, input)
  }
  //#endregion
  multicrush('4x minecraft:brick', 'minecraft:bricks')
  multicrush('4x minecraft:magma_cream', 'minecraft:magma_block')
  multicrush('minecraft:snow_block', 'minecraft:ice')
  multicrush('allthemodium:unobtainium_allthemodium_alloy_dust', 'allthemodium:unobtainium_allthemodium_alloy_ingot')
  multicrush('allthemodium:unobtainium_vibranium_alloy_dust', 'allthemodium:unobtainium_vibranium_alloy_ingot')
  multicrush('allthemodium:vibranium_allthemodium_alloy_dust', 'allthemodium:vibranium_allthemodium_alloy_ingot')

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

  e.shapeless('allthecompressed:atm_star_block', 'kubejs:atm_star_block').id('kubejs:atmadditions/atm_star_block_conversion')

  e.shapeless('astralsorcery:marble_raw', 'enviromats:marble').id('kubejs:marble/astral_to_envirotech')
  e.shapeless('enviromats:marble', 'quark:marble').id('kubejs:marble/envirotech_to_quark')
  e.shapeless('quark:marble', 'projectred-exploration:marble').id('kubejs:marble/quark_to_projectred')
  e.shapeless('projectred-exploration:marble', 'chisel:marble/raw').id('kubejs:marble/projectred_to_chisel')
  e.shapeless('chisel:marble/raw', 'astralsorcery:marble_raw').id('kubejs:marble/chisel_to_astral')

  e.shapeless('create:limestone', 'create:weathered_limestone').id('kubejs:limestone/create_to_create')
  e.shapeless('create:weathered_limestone', 'quark:limestone').id('kubejs:limestone/create_to_quark')
  e.shapeless('quark:limestone', 'chisel:limestone/raw').id('kubejs:limestone/quark_to_chisel')
  e.shapeless('chisel:limestone/raw', 'create:limestone').id('kubejs:limestone/chisel_to_create')

  e.shapeless('kubejs:uru_ingot', '9x kubejs:uru_nugget').id('kubejs:uru/nugget_to_ingot')
  e.shapeless('9x kubejs:uru_ingot', 'kubejs:uru_block').id('kubejs:uru/block_to_ingot')
  e.shapeless('9x kubejs:uru_nugget', 'kubejs:uru_ingot').id('kubejs:uru/ingot_to_nugget')
  e.shapeless('kubejs:uru_block', '9x kubejs:uru_ingot').id('kubejs:uru/ingot_to_block')

  draconicFusion(e, 'kubejs:uru_ingot', 4, 1024000000, 'draconicevolution:chaos_shard', [
    'allthemodium:unobtainium_allthemodium_alloy_ingot',
    'allthemodium:unobtainium_vibranium_alloy_ingot',
    'allthemodium:vibranium_allthemodium_alloy_ingot',
    'draconicevolution:awakened_draconium_ingot'
  ])

  e.shaped('waterstrainer:super_worm', ['DSD', 'DWD', 'DDD'], {
    D: '#forge:dirt',
    S: 'atmadditions:atm_star',
    W: 'waterstrainer:worm'
  }).id('kubejs:waterstrainer/super_worm')

  removeRecipeByID(e, [
    'eidolon:lead_block',
    'eidolon:smelt_stone_brick',
    'platforms:wrench_alt',
    'moreminecarts:minecart_with_chunk_loader',
    'moreminecarts:chunk_loader',
    'silentgear:iron_rod',
    'archers_paradox:explosive_arrow',
    'twilightforest:uncrafting_table',
    'translocators:diamond_nugget'
  ])

  removeRecipeByOutput(e, [
    'darkutils:ender_hopper',
    'naturesaura:chunk_loader',
    'titanium:iron_gear',
    'titanium:gold_gear',
    'titanium:diamond_gear'
  ])
})
