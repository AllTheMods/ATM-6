onEvent('jei.hide.items', e => {
  //#region consts
  let refined = ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
  let typeFirst = ['mekanism', 'immersiveengineering']
  //#endregion
  //#region functions
  function hideMetal(mod, name, types) {
    types.forEach(type => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }

  function hideStuff(mod, type, names) {
    names.forEach(name => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }

  //#endregion

  e.hide([
    'apotheosis:iron_mining_arrow',
    'apotheosis:diamond_mining_arrow',
    'apotheosis:explosive_arrow',
    'archers_paradox:explosive_arrow',
    'iceandfire:copper_block',
    'iceandfire:silver_block',
    'projectred-exploration:copper_ore',
    'projectred-exploration:tin_ore',
    'projectred-exploration:silver_ore',
    'moreminecarts:chunkrodite',
    'moreminecarts:chunkrodite_block',
    'moreminecarts:chunk_loader',
    'moreminecarts:minecart_with_chunk_loader',
    /supplementaries:bamboo_spikes_tipped/,
    'quark:ancient_tome',
    '@curios',
    'appliedenergistics2:silicon',
    'appliedenergistics2:flour',
    'cyclic:tile_transporter_empty',
    'cyclic:hopper_gold',
    'cyclic:trash',
    'cyclic:crafting_bag',
    /cyclic:.*pipe/,
    'quark:pipe',
    'naturesaura:chunk_loader',
    /extrastorage:disk_.+/,
    /extrastorage:block_.+/,
    /extrastorage:storagepart_.+/,
    /titanium:.+/,
    'bloodmagic:saltpeter',
    'bloodmagic:sulfur',
    'bloodmagic:coalsand',
    'bloodmagic:ironsand',
    'bloodmagic:goldsand',
    /pedestals:dust.+/,
    /pedestals:pedestal\/stone(?!333)\d{3}/,
    'mekanism:copper_ore',
    'mekanism:tin_ore',
    'mekanism:osmium_ore',
    'mekanism:uranium_ore',
    'mekanism:lead_ore',
    'mekanism:sawdust',
    'mekanism:block_charcoal',
    /mekanism:creative_chemical_tank/,
    /mekanism:creative_fluid_tank/,
    'immersiveengineering:slag',
    'immersivepetroleum:bitumen',
    'darkutils:ender_hopper',
    /biggerreactors:yello.+/,
    /engineerstools:.+_grit/,
    'platforms:ramp',
    'platforms:rise',
    'platforms:rail',
    'platforms:floor',
    'platforms:flat',
    'platforms:frame',
    'xreliquary:alkahestry_tome',
    'mininggadgets:minerslight',
    'mysticalagradditions:nitro_crystal_crux',
    'iceandfire:silver_ingot',
    'iceandfire:copper_ingot',
    'tconstruct:copper_ingot',
    'tmechworks:copper_ingot',
    'tmechworks:aluminum_ingot',
    'tconstruct:molten_aluminum_bucket',
    'tconstruct:molten_copper_bucket',
    'tconstruct:molten_lead_bucket',
    'tconstruct:molten_nickel_bucket',
    'tconstruct:molten_osmium_bucket',
    'tconstruct:molten_platinum_bucket',
    'tconstruct:molten_silver_bucket',
    'tconstruct:molten_tin_bucket',
    'tconstruct:molten_uranium_bucket',
    'tconstruct:molten_zinc_bucket',
    /tconstruct:crafting_station/,
    /tconstruct:tinker_station/,
    /tconstruct:part_builder/,
    /tconstruct:tinkers_anvil/,
    /tconstruct:scorched_anvil/,
    'eidolon:sulfur',
    'eidolon:lead_ore',
    'eidolon:lead_ingot',
    'eidolon:lead_block',
    'eidolon:lead_nugget',
    'cyclic:honey_bucket',
    'create:honey_bucket',
    'thermal:creosote_bucket',
    'thermal:crude_oil_bucket',
    'immersivepetroleum:oil_bucket',
    'twilightforest:uncrafting_table',
    'solarflux:sp_6',
    'solarflux:sp_7',
    'solarflux:sp_8',
    'lazierae2:coal_dust',
    /^thermal:.*coke.*/,
    'thermal:rf_coil_creative_augment',
    'thermal:fluid_tank_creative_augment',
    'thermal:machine_catalyst_creative_augment',
    'mekanism:dust_sulfur',
    'translocators:diamond_nugget',
    'createaddition:diamond_grit',
    'zycraft:aluminium_block',
    'zycraft:aluminium',
    'zycraft:aluminium_foil',
    'zycraft:quartz_bucket',
    'zycraft:aluminium_can',
    'compactmachines:tunnel',
    'exchangers:tuberous_exchanger',
    'projectred-core:copper_ingot',
    /^extradisks:infinite.*/,
    'ironjetpacks:gold_jetpack',
  ])

  // only hide uncraftable spawn eggs
  e.hide([
    'resourcefulbees:abbee_bee_spawn_egg',
    'resourcefulbees:allthemodium_bee_spawn_egg',
    'resourcefulbees:aluminum_bee_spawn_egg',
    'resourcefulbees:awakened_bee_spawn_egg',
    'resourcefulbees:beediddy_bee_spawn_egg',
    'resourcefulbees:blazing_bee_spawn_egg',
    'resourcefulbees:certus_bee_spawn_egg',
    'resourcefulbees:chaotic_bee_spawn_egg',
    'resourcefulbees:coal_bee_spawn_egg',
    'resourcefulbees:copper_bee_spawn_egg',
    'resourcefulbees:cotton_candy_bee_spawn_egg',
    'resourcefulbees:dense_copper_bee_spawn_egg',
    'resourcefulbees:dense_gold_bee_spawn_egg',
    'resourcefulbees:dense_iron_bee_spawn_egg',
    'resourcefulbees:dense_lead_bee_spawn_egg',
    'resourcefulbees:dense_netherite_bee_spawn_egg',
    'resourcefulbees:dense_nickel_bee_spawn_egg',
    'resourcefulbees:dense_osmium_bee_spawn_egg',
    'resourcefulbees:dense_platinum_bee_spawn_egg',
    'resourcefulbees:dense_silver_bee_spawn_egg',
    'resourcefulbees:dense_tin_bee_spawn_egg',
    'resourcefulbees:dense_uranium_bee_spawn_egg',
    'resourcefulbees:dense_zinc_bee_spawn_egg',
    'resourcefulbees:diamond_bee_spawn_egg',
    'resourcefulbees:draconium_bee_spawn_egg',
    'resourcefulbees:dragonic_bee_spawn_egg',
    'resourcefulbees:emerald_bee_spawn_egg',
    'resourcefulbees:fluorite_bee_spawn_egg',
    'resourcefulbees:ghastly_bee_spawn_egg',
    'resourcefulbees:gold_bee_spawn_egg',
    'resourcefulbees:iron_bee_spawn_egg',
    'resourcefulbees:kitten_bee_spawn_egg',
    'resourcefulbees:kobee_beef_bee_spawn_egg',
    'resourcefulbees:lapis_bee_spawn_egg',
    'resourcefulbees:lead_bee_spawn_egg',
    'resourcefulbees:netherite_bee_spawn_egg',
    'resourcefulbees:nickel_bee_spawn_egg',
    'resourcefulbees:obsidian_bee_spawn_egg',
    'resourcefulbees:oreo_bee_spawn_egg',
    'resourcefulbees:osmium_bee_spawn_egg',
    'resourcefulbees:papa_beemeritus_bee_spawn_egg',
    'resourcefulbees:platinum_bee_spawn_egg',
    'resourcefulbees:redstone_bee_spawn_egg',
    'resourcefulbees:silver_bee_spawn_egg',
    'resourcefulbees:soul_lava_bee_spawn_egg',
    'resourcefulbees:starry_bee_spawn_egg',
    'resourcefulbees:stoned_bee_spawn_egg',
    'resourcefulbees:tin_bee_spawn_egg',
    'resourcefulbees:unobtainium_bee_spawn_egg',
    'resourcefulbees:uraninite_bee_spawn_egg',
    'resourcefulbees:uranium_bee_spawn_egg',
    'resourcefulbees:vibranium_bee_spawn_egg',
    'resourcefulbees:wither_bee_spawn_egg',
    'resourcefulbees:withered_bee_spawn_egg',
    'resourcefulbees:yeti_bee_spawn_egg',
    'resourcefulbees:zinc_bee_spawn_egg'
  ])


  colors.forEach(color => {
    refined.forEach(refin => e.hide([`refinedstorage:${color}_${refin}`]))
    e.hide([
      `creativewirelesstransmitter:${color}_creative_wireless_transmitter`,
      `/enviromats:alabaster_${color}_.*/`
    ])
  })

  //#region hideMetal
  hideMetal('immersiveengineering', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'aluminum', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'steel', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'electrum', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'constantan', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  mekanismMetals.forEach(metal => {
    hideMetal('mekanism', metal, ['ingot', 'dust', 'nugget', 'block', 'clean', 'dirty']);
  })
  hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('create', 'copper', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('create', 'zinc', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('thermal', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  //#endregion
  //#region hideStuff
  hideStuff('thermal', 'dust', ['iron', 'gold'])
  hideStuff('immersiveengineering', 'dust', ['iron', 'gold', 'sulfur', 'wood'])
  hideStuff('immersiveengineering', 'plate', ['iron', 'gold', 'copper', 'lead', 'silver', 'nickel', 'constantan', 'electrum'])
  hideStuff('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
  hideStuff('mekanism', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('appliedenergistics2', 'dust', ['nether_quartz', 'ender', 'iron', 'gold'])
  hideStuff('create', 'sheet', ['iron', 'golden', 'copper'])
  hideStuff('iceandfire', 'ore', ['silver', 'copper'])
  hideStuff('tmechworks', 'ore', ['aluminum', 'copper'])
  hideStuff('quark', 'crate', ['apple', 'carrot', 'beetroot', 'potato'])
  hideStuff('quark', 'block', ['bamboo', 'charcoal', 'sugar_cane'])
  hideStuff('mysticalagriculture', 'seeds', maDisabledSeeds)
  hideStuff('mysticalagriculture', 'essence', maDisabledSeeds)
  //#endregion
})
