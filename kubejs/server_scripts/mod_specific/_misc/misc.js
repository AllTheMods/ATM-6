onEvent('recipes', e => {
  //#region functions
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
    S: 'atmadditions:atm_star_shard',
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
