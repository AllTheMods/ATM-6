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
    'computercraft:turtle_advanced'
  ]
  utils.listOf(idRemove).forEach(function (iR) {
    e.remove({
      id: iR
    })
  })
})