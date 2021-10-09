onEvent('recipes', e => {
  e.shaped('3x forbidden_arcanus:iron_chain', ['N  ', ' I ', '  N'], {
    N: '#forge:nuggets/iron',
    I: '#forge:ingots/iron'
  }).id(`kubejs:iron_chain`)

  e.shapeless('forbidden_arcanus:rotten_leather', '3x minecraft:rotten_flesh').id(`kubejs:forbidden_arcanus/rotten_leather`)

  removeRecipeByID(e, [
    'forbidden_arcanus:leather',
    'forbidden_arcanus:iron_chain'
  ])

  removeRecipeByOutput(e, [
    'forbidden_arcanus:rotten_leather'
  ])

  modifyShaped(e, 'forbidden_arcanus:candle_lamp', 1, ['NDN', 'GAG', 'NDN'], {
    N: 'forbidden_arcanus:arcane_gold_nugget',
    A: 'forbidden_arcanus:candle',
    D: 'forbidden_arcanus:darkstone',
    G: 'forbidden_arcanus:arcane_gold_ingot'
  })
  modifyShaped(e, 'forbidden_arcanus:eternal_stella', 1, ['DBC', 'BAB', 'CBD'], {
    A: 'forbidden_arcanus:stellarite_piece',
    B: 'forbidden_arcanus:xpetrified_orb',
    C: 'allthemodium:allthemodium_ingot',
    D: 'allthemodium:vibranium_ingot'
  })
})
