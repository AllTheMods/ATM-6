events.listen('recipes', function (e) {
  //Recipe removals
  e.remove({
    output: [
      'appliedenergistics2:silicon',
      'mekanism:upgrade_anchor',
      'fluidtank:chest_as_tank',
      'fluidtank:fluid_source',
      'fluidtank:pipe',
      'fluidtank:item_pipe',
      'forbidden_arcanus:rotten_leather',
      'xreliquary:alkahestry_tome'
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
  e.remove({
    id: 'xreliquary:alkahestry_tome'
  })
})