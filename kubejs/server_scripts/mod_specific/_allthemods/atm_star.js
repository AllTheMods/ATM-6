onEvent('recipes', e => {
  //#region FUNCTIONS
  function multiCrush(output, input) {
    e.recipes.mekanism.crushing(output, input).id(`kubejs:atmadditions/${output.split(':')[1]}_mek_crush`)
    e.recipes.create.crushing(output, input).id(`kubejs:atmadditions/${output.split(':')[1]}_create_crush`)
    e.recipes.immersiveengineering.crusher(output, input).id(`kubejs:atmadditions/${output.split(':')[1]}_ie_crush`)
    e.recipes.thermal.pulverizer(output, input).id(`kubejs:atmadditions/${output.split(':')[1]}_thermal_pulverize`)
  }
  function jumbo(ingr, res, xp) {
    e.recipes.jumbofurnace.jumbo_smelting({
      ingredients: ingr,
      result: { item: res },
      experience: xp
    }).id(`kubejs:atmadditions/${res.split(':')[1]}_jumbo`)
  }
  //#endregion
  //#region RECIPES
  //#region Dragon Soul
  e.shaped('atmadditions:dragon_soul', ['CDA', 'SNI', 'BSE'], {
    A: 'eidolon:lesser_soul_gem',
    C: 'forbidden_arcanus:dark_soul',
    D: [`iceandfire:fire_dragon_blood`, `iceandfire:ice_dragon_blood`, `iceandfire:lightning_dragon_blood`],
    N: 'draconicevolution:dragon_heart',
    B: 'minecraft:dragon_breath',
    S: 'botania:dragonstone',
    E: 'forbidden_arcanus:golden_dragon_scale',
    I: '#forge:scales/dragon'
  }).id('kubejs:atmadditions/dragon_soul')
  //#endregion
  //#region Dimensional Seed
  e.shaped('atmadditions:dimensional_seed', ['ABC', 'DEF', 'GHI'], {
    A: 'compressium:stone_6',
    B: 'compressium:endstone_4',
    C: 'compressium:netherrack_4',
    D: 'compressium:clay_3',
    E: 'compressium:emerald_5',
    F: 'compressium:soulsand_4',
    G: 'compressium:redsand_4',
    H: 'compressium:snow_4',
    I: 'compressium:obsidian_3'
  }).id('kubejs:atmadditions/dimensional_seed')
  //#endregion
  //#region Withers Compass
  e.shaped('atmadditions:withers_compass', ['DCD', 'ABA', 'DED'], {
    A: 'resourcefulbees:wither_honeycomb_block',
    B: 'ars_nouveau:glyph_wither',
    C: 'darkutils:rune_wither',
    D: Item.of('apotheosis:potion_charm', { Damage: 0, Potion: "apotheosis:strong_wither" }),
    E: 'explorerscompass:explorerscompass'
  }).id('kubejs:atmadditions/withers_compass')
  //#endregion
  //#region Philosopher's Fuel
  e.shapeless('kubejs:saltpeter_block', ['9x kubejs:saltpeter_ingot']).id('kubejs:atmadditions/saltpeter_block')
  e.shapeless('9x kubejs:saltpeter_ingot', ['kubejs:saltpeter_block']).id('kubejs:atmadditions/saltpeter_ingot')
  e.shapeless('kubejs:saltpeter_ingot', ['9x immersiveengineering:dust_saltpeter']).id('kubejs:atmadditions/saltpeter_ingot')

  e.shapeless('9x kubejs:potassium_nitrate_ingot', ['kubejs:potassium_nitrate_block']).id('kubejs:atmadditions/potassium_nitrate_ingot')
  e.shapeless('kubejs:potassium_nitrate_block', ['9x kubejs:potassium_nitrate_ingot']).id('kubejs:atmadditions/potassium_nitrate_block')
  e.shapeless('kubejs:potassium_nitrate_ingot', ['9x kubejs:potassium_nitrate_dust']).id('kubejs:atmadditions/potassium_nitrate_ingot')

  e.shapeless('9x kubejs:potassium_ingot', ['kubejs:potassium_block']).id('kubejs:atmadditions/potassium_ingot')
  e.shapeless('kubejs:potassium_block', ['9x kubejs:potassium_ingot']).id('kubejs:atmadditions/potassium_block')
  e.shapeless('kubejs:potassium_ingot', ['9x kubejs:potassium_dust']).id('kubejs:atmadditions/potassium_ingot')

  multiCrush('9x immersiveengineering:dust_saltpeter', 'kubejs:saltpeter_ingot')
  multiCrush('9x kubejs:potassium_dust', 'kubejs:potassium_ingot')
  multiCrush('9x kubejs:potassium_nitrate_dust', 'kubejs:potassium_nitrate_ingot')

  e.recipes.mekanism.combining('2x kubejs:potassium_nitrate_dust', 'kubejs:potassium_dust', '#forge:dusts/saltpeter').id('kubejs:atmadditions/potassium_nitrate_dust_combine')
  e.recipes.mekanism.combining('2x kubejs:potassium_nitrate_ingot', 'kubejs:potassium_ingot', 'kubejs:saltpeter_ingot').id('kubejs:atmadditions/potassium_nitrate_ingot_combine')
  e.recipes.mekanism.combining('2x kubejs:potassium_nitrate_block', 'kubejs:potassium_block', 'kubejs:saltpeter_block').id('kubejs:atmadditions/potassium_nitrate_block_combine')
  e.recipes.create.mixing('2x kubejs:potassium_nitrate_dust', ['kubejs:potassium_dust', '#forge:dusts/saltpeter']).id('kubejs:atmadditions/potassium_nitrate_dust_mix')
  e.recipes.create.mixing('2x kubejs:potassium_nitrate_ingot', ['kubejs:potassium_ingot', 'kubejs:saltpeter_ingot']).id('kubejs:atmadditions/potassium_nitrate_ingot_mix')
  e.recipes.create.mixing('2x kubejs:potassium_nitrate_block', ['kubejs:potassium_block', 'kubejs:saltpeter_block']).id('kubejs:atmadditions/potassium_nitrate_block_mix')

  jumbo(
    [{
      'type': 'jumbofurnace:tag_stack',
      'tag': 'forge:vegetables',
      'count': 64
    },
    {
      'type': 'jumbofurnace:tag_stack',
      'tag': 'forge:vegetables',
      'count': 64
    },
    {
      'type': 'jumbofurnace:tag_stack',
      'tag': 'forge:vegetables',
      'count': 64
    }],
    'kubejs:potassium_dust', 5
  )

  e.recipes.bloodmagic.alchemytable('atmadditions:philosophers_fuel', [
    'kubejs:potassium_nitrate_block',
    'mekanism:sulfuric_acid_bucket',
    'iceandfire:dragonsteel_fire_block',
    '#forge:storage_blocks/coal_coke',
    'immersivepetroleum:napalm_bucket',
    'pneumaticcraft:lpg_bucket'
  ]).syphon(50000).id('kubejs:atmadditions/philosophers_fuel')
  //#endregion
  //#region Improbable Probaility Device
  e.shaped('atmadditions:improbable_probability_device', ['AAB', 'CGE', 'FDF'], {
    A: 'computercraft:monitor_advanced',
    B: 'mekanism:module_solar_recharging_unit',
    C: ['extradisks:1048576k_storage_part', 'ae2extras:16m_cell_component', 'extradisks:1048576k_fluid_storage_part'],
    D: 'forbidden_arcanus:eternal_obsidian_skull',
    E: Item.of('apotheosis:potion_charm', { Damage: 0, Potion: "apotheosis:strong_knowledge" }),
    F: 'thermal:enderium_block',
    G: 'draconicevolution:reactor_core'
  }).id('kubejs:atmadditions/improbable_probability_device')
  //#endregion
  //#region Nexium Emitter
  e.shaped('atmadditions:nexium_emitter', ['A C', ' BF', 'CED'], {
    A: 'powah:energizing_rod_nitro',
    B: ['refinedstorageaddons:wireless_crafting_grid', 'appliedenergistics2:wireless_terminal', 'refinedstorage:wireless_grid', 'refinedstorage:wireless_fluid_grid'],
    C: 'alltheores:platinum_block',
    D: 'compressium:netherite_3',
    E: 'appliedenergistics2:quantum_entangled_singularity',
    F: 'powah:player_transmitter_nitro'
  }).id('kubejs:atmadditions/nexium_emitter')
  //#endregion
  //#region Pulsating Black Hole
  draconicFusion(e, 'atmadditions:pulsating_black_hole', 4, 1024000000, 'draconicevolution:chaos_shard', [
    'mininggadgets:upgrade_void_junk',
    'bloodmagic:voidsigil',
    'ars_nouveau:void_jar',
    'mekanism:pellet_antimatter',
    'thermal:device_nullifier',
    'mekanism:creative_energy_cube',
    'envirotech:xerothium_void_miner_ccu',
    'sophisticatedbackpacks:advanced_void_upgrade'
  ])
  //#endregion
  //#region Oblivion Shard
  e.shaped('atmadditions:oblivion_shard', [' AB', 'ACA', 'BA '], {
    A: 'allthemodium:unobtainium_block',
    C: 'astralsorcery:shifting_star_vicio',
    B: 'forbidden_arcanus:dark_nether_star_block'
  }).id('kubejs:atmadditions/oblivion_shard')
  //#endregion
  //#region Creative Essence
  e.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
  }).id('kubejs:atmadditions/creative_essence')
  //#endregion
  //#region Patrick Star
  e.recipes.create.mechanical_crafting('kubejs:patrick_star', [
    '    B    ',
    '   BCA   ',
    'BBBGCABBB',
    'ACGCGGGCA',
    ' AAGGGBA ',
    '  EDDDE  ',
    ' EFEDEFE ',
    'BEDD DDEB',
    'AAA   AAA'
  ], {
    A: 'minecraft:magenta_concrete',
    B: 'minecraft:pink_concrete',
    C: 'minecraft:pink_concrete_powder',
    D: 'minecraft:green_concrete',
    E: 'minecraft:green_concrete_powder',
    F: 'minecraft:lime_concrete',
    G: 'minecraft:magenta_concrete_powder'
  }).id('kubejs:atmadditions/patrick_star')
  //#endregion
  //#region ATM Star
  e.recipes.create.mechanical_crafting('atmadditions:atm_star', [
    '    A    ',
    '   AJA   ',
    'AAAJFJAAA',
    'AJJCDEJJA',
    ' ANBIHMA ',
    '  AKGLA  ',
    ' AJJAJJA ',
    'AJJA AJJA',
    'AAA   AAA'
  ], {
    A: 'allthemodium:unobtainium_allthemodium_alloy_block',
    B: 'atmadditions:nexium_emitter',
    C: 'atmadditions:dragon_soul',
    D: 'atmadditions:withers_compass',
    E: 'atmadditions:pulsating_black_hole',
    F: 'atmadditions:oblivion_shard',
    G: 'atmadditions:improbable_probability_device',
    H: 'atmadditions:dimensional_seed',
    I: 'kubejs:patrick_star',
    J: 'allthecompressed:nether_star_block',
    K: 'atmadditions:philosophers_fuel',
    L: 'mysticalagradditions:creative_essence',
    M: 'kubejs:rune_of_sins',
    N: 'kubejs:mass_of_wills'
  }).id('kubejs:atmadditions/atm_star')
  //#endregion
  //#endregion
})
