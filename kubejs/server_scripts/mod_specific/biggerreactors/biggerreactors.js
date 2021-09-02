onEvent('recipes', e => {
  e.shaped('4x biggerreactors:reactor_manifold', ['IGI', 'G G', 'IGI'], {
    I: '#forge:ingots/iron',
    G: '#forge:glass'
  }).id(`kubejs:biggerreactors/reactor_manifold`)

  removeRecipeByID([
    'biggerreactors:crafting/reactor/reactor_manifold',
    'biggerreactors:crafting/yellorium_block'
  ])
})