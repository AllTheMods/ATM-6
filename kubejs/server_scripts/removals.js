events.listen('recipes', function (e) {
  //Recipe removals
  e.remove({
    output: [
      'appliedenergistics2:silicon',
      'mekanism:upgrade_anchor',
      'forbidden_arcanus:rotten_leather',
      'xreliquary:alkahestry_tome',
      'cyclic:uncrafter',
      'solarflux:sp_6',
      'solarflux:sp_7',
      'solarflux:sp_8'
    ]
  })
  e.remove({
    input: [
      'appliedenergistics2:flour'
    ]
  })
  var idRemove = [
    'minecraft:comparator',
    'pedestals:pedestal_crushing/dustnethergold',
    'forbidden_arcanus:leather',
    'computercraft:turtle_normal',
    'computercraft:turtle_advanced',
    'byg:black_glass_from_sand',
    'byg:purple_glass_from_sand',
    'byg:blue_glass_from_sand',
    'byg:white_glass_from_sand',
    'minecraft:glass'
  ]

  utils.listOf(idRemove).forEach(function (iR) {
    e.remove({
      id: iR
    })
  })
})