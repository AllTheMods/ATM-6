onEvent('recipes', e => {
  modifyShapeless(e, 'thermal:onion_block', 1, '9x #forge:crops/onion')
  e.recipes.mekanism.crushing('6x thermal:sulfur', 'thermal:sulfur_ore')
  e.recipes.mekanism.crushing('thermal:diamond_dust', 'minecraft:diamond')
  e.recipes.mekanism.crushing('thermal:sulfur_dust', 'thermal:sulfur')

  utils.listOf(['apatite', 'aquamarine', 'azure_silver', 'crimson_iron', 'ruby', 'sapphire', 'cobalt', 'fluorite', 'azure_electrum', 'hepatizon', 'draconium', 'awakened_draconium'])
    .forEach(item => {
      e.recipes.thermal.insolator([`mysticalagriculture:${item}_essence`, `mysticalagriculture:${item}_seeds`], `mysticalagriculture:${item}_seeds`).water(500).id(`kubejs:thermal/insolator_${item}_seeds`)
    })

  let smelterCompat = (e, energy, output, count1, input1, count2, input2, count3, input3, count4) => {
    e.remove({ output: output, type: 'thermal:smelter' })
    if (input3 == null) {
      e.recipes.thermal.smelter(item.of(output, count1), [ingredient.of(input1, count2), ingredient.of(input2, count3)]).energy(`${energy}`).id(`kubejs:thermal/smelter/${output.replace(':', '/')}`)
    } else {
      e.recipes.thermal.smelter(item.of(output, count1), [ingredient.of(input1, count2), ingredient.of(input2, count3), ingredient.of(input3, count4)]).energy(`${energy}`).id(`kubejs:thermal/smelter/${output.replace(':', '/')}`)
    }
  }
  smelterCompat(e, 6400, 'thermal:bronze_ingot', 4, ['#forge:dusts/tin', '#forge:ingots/tin'], 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 3)
  smelterCompat(e, 3200, 'thermal:electrum_ingot', 3, ['#forge:dusts/silver', '#forge:ingots/silver'], 1, ['#forge:dusts/gold', '#forge:ingots/gold'], 2)
  smelterCompat(e, 4800, 'thermal:invar_ingot', 3, ['#forge:dusts/nickel', '#forge:ingots/nickel'], 1, ['#forge:dusts/iron', '#forge:ingots/iron'], 2)
  smelterCompat(e, 3200, 'thermal:constantan_ingot', 2, ['#forge:dusts/nickel', '#forge:ingots/nickel'], 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 2)
  smelterCompat(e, 12000, 'thermal:signalum_ingot', 4, ['#forge:dusts/silver', '#forge:ingots/silver'], 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 3, '#forge:dusts/redstone', 2)
  smelterCompat(e, 12000, 'thermal:lumium_ingot', 4, ['#forge:dusts/silver', '#forge:ingots/silver'], 1, ['#forge:dusts/tin', '#forge:ingots/tin'], 3, '#forge:dusts/glowstone', 2)
  smelterCompat(e, 16000, 'thermal:enderium_ingot', 2, ['#forge:dusts/diamond', '#forge:gems/diamond'], 1, ['#forge:dusts/lead', '#forge:ingots/lead'], 3, ['#forge:dusts/ender_pearl', '#forge:ender_pearls'], 2)
  smelterCompat(e, 3200, 'create:brass_ingot', 2, ['#forge:dusts/zinc', '#forge:ingots/zinc'], 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 1)
  smelterCompat(e, 4000, 'tconstruct:tinkers_bronze_ingot', 3, '#forge:sand', 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 3)
  smelterCompat(e, 4000, 'tconstruct:rose_gold_ingot', 4, ['#forge:dusts/gold', '#forge:ingots/gold'], 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 3)
  smelterCompat(e, 4000, 'tconstruct:pig_iron_ingot', 2, '#forge:slimeball/blood', 1, ['#forge:dusts/iron', '#forge:ingots/iron'], 1, 'minecraft:clay_ball', 1)
  smelterCompat(e, 4000, 'tconstruct:queens_slime_ingot', 2, ['#forge:dusts/gold', '#forge:ingots/gold'], 1, '#forge:ingots/cobalt', 1, 'minecraft:magma_cream', 1)
  smelterCompat(e, 4000, 'tconstruct:hepatizon_ingot', 2, ['#forge:dusts/copper', '#forge:ingots/copper'], 2, '#forge:ingots/cobalt', 1, '#forge:obsidian', 1)

  removeRecipeByID(e, [
    'thermal:storage/tin_block',
    'thermal:storage/copper_block',
    'thermal:storage/lead_block',
    'thermal:storage/platinum_block',
    'thermal:storage/uranium_block',
    'thermal:storage/silver_block',
    'thermal:storage/aluminum_block',
    'thermal:storage/nickel_block',
    'thermal:storage/osmium_block',
    'thermal:storage/zinc_block',
    'thermal:machine/press/packing2x2/press_honeycomb_packing',
    'thermal:machine/press/unpacking/press_honeycomb_unpacking',
    'thermal:machine/centrifuge/centrifuge_oil_sand',
    'thermal:machine/centrifuge/centrifuge_oil_red_sand',
    'thermal:machine/pyrolyzer/pyrolyzer_coal',
    'thermal:machine/pyrolyzer/pyrolyzer_logs',
    'thermal:compat/astralsorcery/pulverizer_astralsorcery_aquamarine_ore',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot',
    'thermal:compat/tconstruct/chiller_tconstruct_pigiron_ingot',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_slimesteel_ingot',
    'thermal:compat/biomesoplenty/tree_extractor_bop_pink_cherry',
    'thermal:compat/biomesoplenty/tree_extractor_bop_white_cherry',
    'thermal:compat/biomesoplenty/tree_extractor_bop_fir', // temporary until fixed in Thermal
    'thermal:machine/chiller/chiller_honey_to_honey_block',
    'thermal:machine/bottler/bottler_honey_bottle',
    'thermal:machine/centrifuge/centrifuge_honeycomb',
    'thermal:machine/crucible/crucible_honey_block_to_honey'
  ])
})
