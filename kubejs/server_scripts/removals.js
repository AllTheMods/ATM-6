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
  e.remove({
    id: 'minecraft:comparator'
  })
  e.remove({
    id: 'pedestals:pedestal_crushing/dustnethergold'
  })
  e.remove({
    id: 'forbidden_arcanus:leather'
  })
})