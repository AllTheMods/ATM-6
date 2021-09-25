onEvent('recipes', e => {
  function caTier(tier, corners, processor, cables) {
    utils.listOf(['importer', 'exporter', 'constructor', 'destructor', 'disk_manipulator', 'requester']).forEach(caType => {
      e.shaped(`cabletiers:${tier}_${caType}`, [`a a`, `bcb`, `a a`], {
        a: corners,
        b: processor,
        c: `${(caType == 'requester' && tier == 'elite') ? 'rsrequestify:' : cables}${caType}`
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

  e.shaped('extrastorage:iron_crafter', ['B B', 'PCP', 'B B'], {
    B: '#forge:storage_blocks/iron',
    P: 'refinedstorage:improved_processor',
    C: '#refinedstorage:crafter'
  }).id(`kubejs:extrastorage/iron_crafter`)
  e.shaped(`creativecrafter:creative_crafter`, [`BUB`, `PCP`, `BUB`], {
    B: `#forge:storage_blocks/netherite`,
    P: `extradisks:withering_processor`,
    C: `extrastorage:netherite_crafter`,
    U: `#forge:ingots/unobtainium`
  }).id(`kubejs:creativecrafter/creative_crafter`)
  e.shaped('refinedstorage:4096k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'refinedstorage:1024k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:nuggets/allthemodium'
  }).id(`kubejs:4096k_fluid_storage_part`)
  e.shaped('extradisks:4096k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1024k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:nuggets/allthemodium'
  }).id(`kubejs:4096k_storage_part`)
  e.shaped('extradisks:16384k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'refinedstorage:4096k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/allthemodium'
  }).id(`kubejs:16384k_fluid_storage_part`)
  e.shaped('extradisks:16384k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:4096k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  }).id(`kubejs:16384k_storage_part`)
  e.shaped('extradisks:65536k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:16384k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/allthemodium'
  }).id(`kubejs:65536k_fluid_storage_part`)
  e.shaped('extradisks:65536k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:16384k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  }).id(`kubejs:65536k_storage_part`)
  e.shaped('extradisks:262144k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:65536k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/vibranium'
  }).id(`kubejs:262144k_fluid_storage_part`)
  e.shaped('extradisks:262144k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:65536k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/vibranium'
  }).id(`kubejs:262144k_storage_part`)
  e.shaped('extradisks:1048576k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:262144k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/unobtainium'
  }).id(`kubejs:1048576k_fluid_storage_part`)
  e.shaped('extradisks:1048576k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:262144k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/unobtainium'
  }).id(`kubejs:1048576k_storage_part`)


  caTier(`elite`, `#forge:storage_blocks/iron`, `refinedstorage:improved_processor`, `refinedstorage:`)
  caTier(`ultra`, `#forge:storage_blocks/diamond`, `refinedstorage:advanced_processor`, `cabletiers:elite_`)
  caTier(`creative`, `#forge:storage_blocks/netherite`, `extradisks:withering_processor`, `cabletiers:ultra_`)


  removeRecipeByID(e, [
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
    'creativecrafter:creative_crafter',
    'extrastorage:iron_crafter'
  ])

  modifySmelt(e, 'refinedstorage:silicon', '#appliedenergistics2:crystals/quartz')
})