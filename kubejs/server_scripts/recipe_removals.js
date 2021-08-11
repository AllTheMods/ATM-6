//priority: 999
onEvent('recipes', e => {
  const idRemove = [
    'minecraft:comparator',
    'minecraft:glass',

    'pedestals:pedestal_crushing/dustnethergold',

    'forbidden_arcanus:leather',

    'computercraft:turtle_normal',
    'computercraft:turtle_advanced',

    'byg:black_glass_from_sand',
    'byg:purple_glass_from_sand',
    'byg:blue_glass_from_sand',
    'byg:white_glass_from_sand',

    'engineerstools:crushing/aluminium_grit_crushing_recipe',

    'xreliquary:alkahestry/crafting/nether_star',
    'xreliquary:fertile_lily_pad',

    'thermal:machine/press/packing2x2/press_honeycomb_packing',
    'thermal:machine/press/unpacking/press_honeycomb_unpacking',
    'thermal:machine/centrifuge/centrifuge_oil_sand',
    'thermal:machine/centrifuge/centrifuge_oil_red_sand',

    //ma balance
    'mysticalagriculture:essence/astralsorcery/rock_crystal',
    'mysticalagriculture:essence/astralsorcery/starmetal_ingot',
    'mysticalagriculture:essence/astralsorcery/aquamarine',

    'mysticalagriculture:essence/thermal/basalz_rod',
    'mysticalagriculture:essence/thermal/blitz_rod',
    'mysticalagriculture:essence/thermal/blizz_rod',
    'mysticalagriculture:essence/thermal/enderium_ingot',
    'mysticalagriculture:essence/thermal/lumium_ingot',
    'mysticalagriculture:essence/thermal/signalum_ingot',

    'mysticalagriculture:essence/quark/ender_biotite',

    'mysticalagriculture:essence/powah/blazing_crystal',
    'mysticalagriculture:essence/powah/energized_steel',
    'mysticalagriculture:essence/powah/niotic_crystal',
    'mysticalagradditions:essence/nitro_crystal',
    'mysticalagriculture:essence/powah/spirited_crystal',

    'mysticalagriculture:essence/botania/elementium_ingot',
    'mysticalagriculture:essence/botania/manasteel_ingot',
    'mysticalagriculture:essence/botania/terrasteel_ingot',

    'mysticalagriculture:essence/common/brass_ingot',
    'mysticalagriculture:essence/common/bronze_ingot',
    'mysticalagriculture:essence/common/constantan_ingot',
    'mysticalagriculture:essence/common/electrum_ingot',
    'mysticalagriculture:essence/common/graphite_ingot',
    'mysticalagriculture:essence/common/invar_ingot',
    'mysticalagriculture:essence/common/silicon',
    'mysticalagriculture:essence/common/steel_ingot',
    'mysticalagriculture:essence/common/sulfur',
    'mysticalagriculture:essence/common/niter',

    'mysticalagriculture:essence/immersiveengineering/hop_graphite_ingot',

    'mysticalagriculture:essence/pneumaticcraft/compressed_iron_ingot',

    'mysticalagriculture:essence/appliedenergistics2/fluix',
    'mysticalagriculture:essence/appliedenergistics2/sky_stone',
    'mysticalagriculture:essence/appliedenergistics2/silicon_press',
    'mysticalagriculture:essence/appliedenergistics2/calculation_press',
    'mysticalagriculture:essence/appliedenergistics2/engineering_press',
    'mysticalagriculture:essence/appliedenergistics2/logic_press',

    'mysticalagriculture:essence/refinedstorage/quartz_enriched_iron_ingot',

    'mysticalagriculture:essence/mekanism/refined_glowstone_ingot',
    'mysticalagriculture:essence/mekanism/refined_obsidian_ingot',

    'mysticalagriculture:seed/infusion/basalz',
    'mysticalagriculture:seed/infusion/blazing_crystal',
    'mysticalagriculture:seed/infusion/blitz',
    'mysticalagriculture:seed/infusion/blizz',
    'mysticalagriculture:seed/infusion/brass',
    'mysticalagriculture:seed/infusion/bronze',
    'mysticalagriculture:seed/infusion/compressed_iron',
    'mysticalagriculture:seed/infusion/constantan',
    'mysticalagriculture:crimson_steel_seeds_infusion',
    'mysticalagriculture:seed/infusion/electrum',
    'mysticalagriculture:seed/infusion/elementium',
    'mysticalagriculture:seed/infusion/enderium',
    'mysticalagriculture:seed/infusion/ender_biotite',
    'mysticalagriculture:seed/infusion/energized_steel',
    'mysticalagriculture:seed/infusion/fluix',
    'mysticalagriculture:seed/infusion/graphite',
    'mysticalagriculture:seed/infusion/hop_graphite',
    'mysticalagriculture:seed/infusion/invar',
    'mysticalagriculture:seed/infusion/lumium',
    'mysticalagriculture:seed/infusion/manasteel',
    'mysticalagriculture:seed/infusion/niotic_crystal',
    'mysticalagriculture:seed/infusion/nitro_crystal',
    'mysticalagriculture:oratchalcum_seeds_infusion',
    'mysticalagriculture:seed/infusion/quartz_enriched_iron',
    'mysticalagriculture:seed/infusion/refined_glowstone',
    'mysticalagriculture:seed/infusion/refined_obsidian',
    'mysticalagriculture:seed/infusion/rock_crystal',
    'mysticalagriculture:seed/infusion/signalum',
    'mysticalagriculture:seed/infusion/silicon',
    'mysticalagriculture:seed/infusion/sky_stone',
    'mysticalagriculture:seed/infusion/spirited_crystal',
    'mysticalagriculture:seed/infusion/starmetal',
    'mysticalagriculture:seed/infusion/steel',
    'mysticalagriculture:seed/infusion/sulfur',
    'mysticalagriculture:seed/infusion/terrasteel',

    'mysticalagradditions:nitro_crystal_crux',

    //crative apiary
    'creativeapiary:tcreative_apiary',
    'creativeapiary:creative_apiary_storage',
    'creativeapiary:creative_apiary_breeder',

    'quarryplus:solidquarry',
    'quarryplus:workbenchplus',
    'mininggadgets:upgrade_empty',
    'mekanism:digital_miner',
    'mekanism:atomic_disassembler',
    'mekanismgenerators:wind_generator',
    'mekanism:advanced_bin',
    'mekanism:elite_bin',
    'mekanism:ultimate_bin',
    'mekanism:basic_tier_installer',
    'mekanism:advanced_tier_installer',
    'mekanism:elite_tier_installer',
    'mekanism:ultimate_tier_installer',
    'pamhc2foodcore:fruitpunchitem',
    'pamhc2foodcore:applejuiceitem',
    'pamhc2foodcore:melonjuiceitem',
    'pamhc2foodcore:sweetberryjuiceitem',
    'pamhc2foodcore:p8juiceitem',
    'pamhc2foodcore:tool_roller',
    'angelring:itemring',
    'angelring:itemdiamondring',
    'forbidden_arcanus:iron_chain',
    'silentgear:iron_rod',
    'entangled:block',
    'entangled:item',
    'refinedstorage:part/4096k_fluid_storage_part',
    'extradisks:part/4096k_storage_part',
    'extradisks:part/16384k_fluid_storage_part',
    'extradisks:part/16384k_storage_part',
    'extradisks:part/65536k_fluid_storage_part',
    'extradisks:part/65536k_storage_part',
    'extradisks:part/262144k_fluid_storage_part',
    'extradisks:part/262144k_storage_part',
    'extradisks:part/1048576k_fluid_storage_part',
    'extradisks:part/1048576k_storage_part',
    'extradisks:part/infinite_fluid_storage_part',
    'extradisks:part/infinite_storage_part',
    'mysticalagriculture:unattuned_augment',
    'rftoolsbuilder:builder',
    'extrastorage:iron_crafter',
    'twilightforest:uncrafting_table',
    'creativecrafter:creative_crafter',
    'creativewirelesstransmitter:creative_wireless_transmitter',
    'thermal:machine/pyrolyzer/pyrolyzer_coal',
    'thermal:machine/pyrolyzer/pyrolyzer_logs',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    'mekanism:processing/diamond/to_dust',
    'mekanism:gas_conversion/salt_to_hydrogen_chloride',
    'powah:crafting/thermoelectric_plate',
    'eidolon:smelt_stone_brick',
    'immersiveengineering:crusher/nether_wart',
    'biggerreactors:crafting/reactor/reactor_manifold',
    'biomesoplenty:soil/ash',
    'byg:compat/tconstruct/magma_cream_from_cryptic_magma_block_melting',
    'byg:compat/tconstruct/magma_cream_from_magmatic_stone_melting',
    'byg:compat/tconstruct/magmatic_stone_from_casting',
    'byg:compat/tconstruct/cryptic_magma_block_from_casting',
    'immersivepetroleum:hydrotreater/sulfur_recovery',
    'pamhc2foodcore:cottoncandyitem',
    'pamhc2foodextended:peachesandcreamoatmealitem',
    'rats:dragon_wing_iaf',
    `thermal:compat/astralsorcery/pulverizer_astralsorcery_aquamarine_ore`,
    `thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot`,
    `thermal:compat/tconstruct/chiller_tconstruct_pigiron_ingot`,
    `thermal:compat/tconstruct/smelter_alloy_tconstruct_slimesteel_ingot`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_zombie_pigman_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_phantom_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_villager_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_wolf_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_polar_bear_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_llama_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_stray_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_vex_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_evoker_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_magma_cube_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_drowned_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_dolphin_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_husk_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_panda_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_vindicator_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_shulker_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_ravager_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_guardian_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_mooshroom_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_horse_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_silverfish_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_fox_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_endermite_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_witch_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_pillager_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_parrot_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_cat_seeds`,
    `thermal:compat/mysticalagriculture/insolator_mysticalag_bat_seeds`,
    'create:emptying/honey_bottle',
    'cyclic:melter_honey',
    'cyclic:melter_honey1',
    'cyclic:melter_honeybottle',
    'cyclic:melter_honeybottle1',
    'cyclic:solidifier_honeynest',
    'cyclic:solidifier_honeycookie',
    'cyclic:solidifier_honeymelon',
    'cyclic:solidifier_apple_enchanted',
    'cyclic:solidifier_honeyhive',
    'cyclic:solidifier_apple0',
    'cyclic:solidifier_honey_block0',
    'cyclic:solidifier_amber',
    'cyclic:solidifier_honeycomb',
    'cyclic:solidifier_honey_block',
    'cyclic:solidifier_apple',
    'cyclic:solidifier_honeypie',
    'cyclic:solidifier_honeycake',
    'cyclic:solidifier_honeycarrot',
    'cyclic:solidifier_honey_bottle',
    'thermal:machine/chiller/chiller_honey_to_honey_block',
    'thermal:machine/bottler/bottler_honey_bottle',
    'thermal:machine/centrifuge/centrifuge_honeycomb',
    'thermal:machine/crucible/crucible_honey_block_to_honey'
  ]
  idRemove.forEach(recipe_id => { e.remove({ id: recipe_id }) })
  e.remove({
    output: [
      'darkutils:ender_hopper',

      'minecraft:dragon_egg',

      'ctiers:centrifuge_casing_tier_creative',
      'ctiers:centrifuge_controller_tier_creative',

      'appliedenergistics2:silicon',

      'mekanism:upgrade_anchor',

      'forbidden_arcanus:rotten_leather',

      'xreliquary:alkahestry_tome',

      'naturesaura:chunk_loader',

      'cyclic:uncrafter',
      'cyclic:tile_transporter_empty',
      'cyclic:trash',

      'quark:apple_crate',
      'quark:potato_crate',
      'quark:carrot_crate',
      'quark:beetroot_crate',
      'quark:charcoal_block',
      'quark:gunpowder_sack',

      'mekanism:block_charcoal',

      'titanium:iron_gear',
      'titanium:gold_gear',
      'titanium:diamond_gear'
    ]
  })
  e.remove({ mod: 'cabletiers' })
  e.remove({
    input: ['appliedenergistics2:flour']
  })
  e.remove({
    type: 'xreliquary:alkahestry_charging'
  })
  e.remove({
    id: 'appliedenergistics2:grinder/flour'
  })
  e.remove({
    output: '#minecraft:signs',
    type: 'pedestals:pedestal_sawing'
  })
  e.remove({
    output: '#minecraft:wooden_stairs',
    type: 'pedestals:pedestal_sawing'
  })
  e.remove({
    output: '#minecraft:wooden_slabs',
    type: 'pedestals:pedestal_sawing'
  })
  e.remove({
    output: '#minecraft:wooden_trapdoors',
    type: 'pedestals:pedestal_sawing'
  })
  e.remove({
    output: '#minecraft:wooden_pressure_plates',
    type: 'pedestals:pedestal_sawing'
  })
  e.remove({
    output: 'minecraft:stick',
    type: 'pedestals:pedestal_sawing'
  })
  e.remove({
    output: 'pedestals:dustflour'
  })
  e.remove({
    output: 'mekanism:bio_fuel'
  })
})
