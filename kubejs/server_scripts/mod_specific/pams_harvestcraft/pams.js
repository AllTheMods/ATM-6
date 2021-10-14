onEvent('recipes', e => {
  e.replaceOutput('#forge:cheese', 'pamhc2foodcore:cheeseitem')
  let trees = ['orange', 'peach', 'pear', 'plum', 'pawpaw', 'soursop', 'apricot', 'banana', 'date', 'dragonfruit', 'fig', 'grapefruit', 'mango', 'papaya', 'persimmon', 'pomegranate', 'starfruit', 'breadfruit', 'jackfruit', 'guava', 'lychee', 'passionfruit', 'rambutan', 'tamarind',]
  trees.forEach(type => modifyShaped(e, `pamhc2foodextended:${type}juiceitem`, 1, ['FFF', 'FBF', 'FFF'], {
    F: `pamhc2trees:${type}item`,
    B: 'pamhc2foodcore:juiceritem'
  }))
  modifyShaped(e, 'pamhc2foodcore:fruitpunchitem', 1, ['FFF', 'FBF', 'FFF'], {
    F: '#forge:fruits',
    B: '#forge:juices'
  })
  modifyShaped(e, 'pamhc2foodcore:applejuiceitem', 1, ['FFF', 'FBF', 'FFF'], {
    F: 'minecraft:apple',
    B: 'pamhc2foodcore:juiceritem'
  })
  modifyShaped(e, 'pamhc2foodcore:p8juiceitem', 1, ['FFF', 'FBF', 'FFF'], {
    F: '#forge:vegetables',
    B: 'pamhc2foodcore:juiceritem'
  })
})
