onEvent('item.modification', e => {
  const colors = [`white`, `light_gray`, `gray`, `black`, `red`, `orange`, `yellow`, `lime`, `green`, `light_blue`, `cyan`, `blue`, `purple`, `magenta`, `pink`, `brown`]

  function modifyStack(listOfItems, countPerStack) {
    listOfItems.forEach(item => {
      e.modify(item, item => item.maxStackSize = countPerStack)
    })
  }

  modifyStack([
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:honey_bottle',
    'minecraft:snowball',
    'minecraft:armor_stand',
    'minecraft:bucket',
    '#minecraft:signs',
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
    'thermal:lightning_grenade'
  ], 64)
  modifyStack([
    'forbidden_arcanus:quantum_catcher'
  ], 1)

  e.modify('immersivepetroleum:bitumen', item => item.burnTime = 1600)

  colors.forEach(color => {
    e.modify(`minecraft:${color}_banner`, item => item.maxStackSize = 64)
  })
})

onEvent('worldgen.remove', e => {
  e.removeOres(ore => {
    ore.blocks = ['zycraft:aluminium_ore']
  })
})
