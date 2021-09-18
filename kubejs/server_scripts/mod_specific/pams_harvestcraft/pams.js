onEvent('recipes', e => {
  e.shaped('pamhc2foodcore:rolleritem', ['SLS'], {
      S: '#forge:rods/wooden',
      L: `#minecraft:logs_unstripped`
  }).id(`kubejs:pam_roller_unstripped`)
  e.shaped('pamhc2foodcore:fruitpunchitem', ['FFF', 'FBF', 'FFF'], {
      F: '#forge:fruits',
      B: 'pamhc2foodcore:applejuiceitem'
  }).id(`kubejs:fruitpunchitem`)
  e.shaped('pamhc2foodcore:applejuiceitem', ['FFF', 'FBF', 'FFF'], {
      F: 'minecraft:apple',
      B: 'minecraft:glass_bottle'
  }).id(`kubejs:applejuiceitem`)
  e.shaped('pamhc2foodcore:melonjuiceitem', ['FFF', 'FBF', 'FFF'], {
      F: 'minecraft:melon_slice',
      B: 'minecraft:glass_bottle'
  }).id(`kubejs:melonjuiceitem`)
  e.shaped('pamhc2foodcore:sweetberryjuiceitem', ['FFF', 'FBF', 'FFF'], {
      F: 'minecraft:sweet_berries',
      B: 'minecraft:glass_bottle'
  }).id(`kubejs:sweetberryjuiceitem`)
  e.shaped('pamhc2foodcore:p8juiceitem', ['FFF', 'FBF', 'FFF'], {
      F: '#forge:vegetables',
      B: 'minecraft:glass_bottle'
  }).id(`kubejs:p8juiceitem`)

  e.replaceOutput('#forge:cheese', 'pamhc2foodcore:cheeseitem')

  removeRecipeByID([
      'pamhc2foodcore:fruitpunchitem',
      'pamhc2foodcore:applejuiceitem',
      'pamhc2foodcore:melonjuiceitem',
      'pamhc2foodcore:sweetberryjuiceitem',
      'pamhc2foodcore:p8juiceitem',
      'pamhc2foodcore:tool_roller',
      'pamhc2foodcore:cottoncandyitem',
      'pamhc2foodextended:peachesandcreamoatmealitem'
  ])
})