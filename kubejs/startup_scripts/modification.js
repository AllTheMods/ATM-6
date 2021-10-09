onEvent('item.modification', e => {
  let colors = [`white`, `light_gray`, `gray`, `black`, `red`, `orange`, `yellow`, `lime`, `green`, `light_blue`, `cyan`, `blue`, `purple`, `magenta`, `pink`, `brown`]

  function modifyStack(listOfItems, countPerStack) {
    listOfItems.forEach(item => {
      e.modify(item, item => item.maxStackSize = countPerStack)
    })
  }

  modifyStack([
    /^industrialforegoing:.*addon.*/,
    'cyclic:heart',
    'cyclic:heart_empty',
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:honey_bottle',
    'minecraft:snowball',
    'minecraft:armor_stand',
    'minecraft:bucket',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:birch_sign',
    'minecraft:acacia_sign',
    'minecraft:jungle_sign',
    'minecraft:dark_oak_sign',
    'minecraft:crimson_sign',
    'minecraft:warped_sign',
    'forbidden_arcanus:cherrywood_sign',
    'forbidden_arcanus:edelwood_sign',
    'forbidden_arcanus:mysterywood_sign',
    'twilightforest:twilight_oak_sign',
    'twilightforest:canopy_sign',
    'twilightforest:mangrove_sign',
    'twilightforest:darkwood_sign',
    'twilightforest:time_sign',
    'twilightforest:trans_sign',
    'twilightforest:mine_sign',
    'twilightforest:sort_sign',
    'upgrade_aquatic:driftwood_sign',
    'upgrade_aquatic:river_sign',
    'tconstruct:greenheart_sign',
    'tconstruct:skyroot_sign',
    'tconstruct:bloodshroom_sign',
    'tconstruct:glow_ball',
    'tconstruct:efln_ball',
    'tconstruct:flint_shuriken',
    'powah:charged_snowball',
    'resourcefulbees:bee_jar',
    'resourcefulbees:rainbow_honey_bottle',
    'resourcefulbees:starry_honey_bottle',
    'resourcefulbees:catnip_honey_bottle',
    'resourcefulbees:iron_storage_upgrade',
    'resourcefulbees:gold_storage_upgrade',
    'resourcefulbees:diamond_storage_upgrade',
    'resourcefulbees:emerald_storage_upgrade',
    'resourcefulbees:apiary_breeder_upgrade',
    'resourcefulbees:apiary_breed_time_upgrade',
    'resourcefulbees:t1_hive_upgrade',
    'resourcefulbees:t2_hive_upgrade',
    'resourcefulbees:t3_hive_upgrade',
    'resourcefulbees:t4_hive_upgrade',
    'forbidden_arcanus:aureal_bottle',
    'forbidden_arcanus:xpetrified_orb',
    'upgrade_aquatic:mulberry_jam_bottle',
    'mekanism:upgrade_speed',
    'mekanism:upgrade_energy',
    'mekanism:upgrade_filter',
    'mekanism:upgrade_muffling',
    'mekanism:upgrade_gas',
    'mekanism:upgrade_anchor',
    'thermal:explosive_grenade',
    'thermal:slime_grenade',
    'thermal:redstone_grenade',
    'thermal:glowstone_grenade',
    'thermal:ender_grenade',
    'thermal:earth_grenade',
    'thermal:fire_grenade',
    'thermal:ice_grenade',
    'thermal:lightning_grenade',
    'bloodmagic:voidsigil',
    'sophisticatedbackpacks:advanced_void_upgrade',
    'ars_nouveau:void_jar',
    'mininggadgets:upgrade_void_junk'
  ], 64)
  modifyStack([
    'forbidden_arcanus:quantum_catcher',
    'aquaculture:worm',
    'immersiveengineering:graphite_electrode'
  ], 1)

  e.modify('immersivepetroleum:bitumen', item => item.burnTime = 1600)

  colors.forEach(color => {
    e.modify(`minecraft:${color}_banner`, item => item.maxStackSize = 64)
  })
})
