onEvent('recipes', e => {
  let trees = ['orange', 'peach', 'pear', 'plum', 'pawpaw', 'soursop', 'apricot', 'banana', 'date', 'dragonfruit', 'fig', 'grapefruit', 'mango', 'papaya', 'persimmon', 'pomegranate', 'starfruit', 'breadfruit', 'jackfruit', 'guava', 'lychee', 'passionfruit', 'rambutan', 'tamarind',]
  trees.forEach(type => {
    e.remove({ output: `pamhc2foodextended:${type}juiceitem` })
    e.shaped(`pamhc2foodextended:${type}juiceitem`, ['FFF', 'FBF', 'FFF'], {
      F: `pamhc2trees:${type}item`,
      B: 'pamhc2foodcore:juiceritem'
    }).id(`kubejs:shaped/pamhc2foodextended/${type}juiceitem`)
  })
  e.shaped('pamhc2foodcore:fruitpunchitem', ['FFF', 'FBF', 'FFF'], {
    F: '#forge:fruits',
    B: '#forge:juices'
  }).id(`kubejs:fruitpunchitem`)
  e.shaped('pamhc2foodcore:applejuiceitem', ['FFF', 'FBF', 'FFF'], {
    F: 'minecraft:apple',
    B: 'pamhc2foodcore:juiceritem'
  }).id(`kubejs:applejuiceitem`)
  e.shaped('pamhc2foodcore:p8juiceitem', ['FFF', 'FBF', 'FFF'], {
    F: '#forge:vegetables',
    B: 'pamhc2foodcore:juiceritem'
  }).id(`kubejs:p8juiceitem`)

  removeRecipeByID(e, [
    'pamhc2foodcore:fruitpunchitem',
    'pamhc2foodcore:applejuiceitem',
    'pamhc2foodcore:p8juiceitem',
    'pamhc2foodcore:cottoncandyitem',
  ])
})
