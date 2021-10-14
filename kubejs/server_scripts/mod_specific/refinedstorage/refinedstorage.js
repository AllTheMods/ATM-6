onEvent('recipes', e => {
  function caTier(tier, corners, processor, cables) {
    utils.listOf(['importer', 'exporter', 'constructor', 'destructor', 'disk_manipulator', 'requester']).forEach(caType => {
      e.shaped(`cabletiers:${tier}_${caType}`, ['A A', 'BCB', 'A A'], {
        A: corners,
        B: processor,
        C: `${(caType == 'requester' && tier == 'elite') ? 'rsrequestify:' : cables}${caType}`
      })
    })
  }

  e.remove({ mod: 'cabletiers' })

  energize(e, ['refinedstorage:wireless_grid'], 'refinedstorage:creative_wireless_grid', '2147483647')
  energize(e, ['refinedstorage:wireless_fluid_grid'], 'refinedstorage:creative_wireless_fluid_grid', '2147483647')
  energize(e, ['refinedstorage:wireless_crafting_monitor'], 'refinedstorage:creative_wireless_crafting_monitor', '2147483647')
  energize(e, ['refinedstorageaddons:wireless_crafting_grid'], 'refinedstorageaddons:creative_wireless_crafting_grid', '2147483647')
  energize(e, ['refinedstorage:portable_grid'], 'refinedstorage:creative_portable_grid', '2147483647')
  energize(e, ['refinedstorage:controller', 'atmadditions:atm_star'], 'refinedstorage:creative_controller', '2147483647')

  modifyShaped(e, 'extrastorage:iron_crafter', 1, ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/iron',
    P: 'refinedstorage:improved_processor',
    C: '#refinedstorage:crafter'
  })
  //gold-netherite crafter temp till mod updates with proper tags
  modifyShaped(e, 'extrastorage:gold_crafter', 1, ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/gold',
    P: 'extrastorage:neural_processor',
    C: '#refinedstorage:crafter'
  })
  modifyShaped(e, 'extrastorage:diamond_crafter', 1, ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    C: '#refinedstorage:crafter'
  })
  modifyShaped(e, 'extrastorage:netherite_crafter', 1, ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/netherite',
    P: 'extrastorage:neural_processor',
    C: '#refinedstorage:crafter'
  })
  modifyShaped(e, 'creativecrafter:creative_crafter', 1, [`BUB`, `PCP`, `BUB`], {
    B: `#forge:storage_blocks/netherite`,
    P: `extradisks:withering_processor`,
    C: `extrastorage:netherite_crafter`,
    U: `#forge:ingots/unobtainium`
  })
  modifyShaped(e, 'refinedstorage:4096k_fluid_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'refinedstorage:1024k_fluid_storage_part',
    B: 'minecraft:bucket',
    N: '#forge:nuggets/allthemodium'
  })
  modifyShaped(e, 'extradisks:4096k_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:1024k_storage_part',
    B: '#forge:dusts/redstone',
    N: '#forge:nuggets/allthemodium'
  })
  modifyShaped(e, 'extradisks:16384k_fluid_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'refinedstorage:4096k_fluid_storage_part',
    B: 'minecraft:bucket',
    N: '#forge:ingots/allthemodium'
  })
  modifyShaped(e, 'extradisks:16384k_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:4096k_storage_part',
    B: '#forge:dusts/redstone',
    N: '#forge:ingots/allthemodium'
  })
  modifyShaped(e, 'extradisks:65536k_fluid_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:16384k_fluid_storage_part',
    B: 'minecraft:bucket',
    N: '#forge:ingots/allthemodium'
  })
  modifyShaped(e, 'extradisks:65536k_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:16384k_storage_part',
    B: '#forge:dusts/redstone',
    N: '#forge:ingots/allthemodium'
  })
  modifyShaped(e, 'extradisks:262144k_fluid_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:65536k_fluid_storage_part',
    B: 'minecraft:bucket',
    N: '#forge:ingots/vibranium'
  })
  modifyShaped(e, 'extradisks:262144k_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:65536k_storage_part',
    B: '#forge:dusts/redstone',
    N: '#forge:ingots/vibranium'
  })
  modifyShaped(e, 'extradisks:1048576k_fluid_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:262144k_fluid_storage_part',
    B: 'minecraft:bucket',
    N: '#forge:ingots/unobtainium'
  })
  modifyShaped(e, 'extradisks:1048576k_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:262144k_storage_part',
    B: '#forge:dusts/redstone',
    N: '#forge:ingots/unobtainium'
  })
  modifyShaped(e, 'extradisks:infinite_fluid_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:1048576k_fluid_storage_part',
    B: 'minecraft:bucket',
    N: '#forge:ingots/unobtainium'
  })
  modifyShaped(e, 'extradisks:infinite_storage_part', 1, ['ANA', 'FBF', 'AFA'], {
    A: 'refinedstorage:advanced_processor',
    F: 'extradisks:1048576k_storage_part',
    B: '#forge:dusts/redstone',
    N: '#forge:ingots/unobtainium'
  })
  modifyShaped(e, 'creativewirelesstransmitter:creative_wireless_transmitter', 1, ['ITI', 'ICI', 'IDI'], {
    I: 'allthemodium:unobtainium_ingot',
    D: 'rsinfinitybooster:dimension_card',
    C: 'refinedstorage:machine_casing',
    T: 'refinedstorage:wireless_transmitter'
  })

  caTier(`elite`, `#forge:storage_blocks/iron`, `refinedstorage:improved_processor`, `refinedstorage:`)
  caTier(`ultra`, `#forge:storage_blocks/diamond`, `refinedstorage:advanced_processor`, `cabletiers:elite_`)
  caTier(`creative`, `#forge:storage_blocks/netherite`, `extradisks:withering_processor`, `cabletiers:ultra_`)

  modifySmelt(e, 'refinedstorage:silicon', '#appliedenergistics2:crystals/quartz')
})
