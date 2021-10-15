onEvent('recipes', e => {
  modifyShaped(e, 'buildinggadgets:gadget_exchanging', 1, ['iri', 'dld', 'iai'], {
    i: '#forge:ingots/iron',
    r: '#forge:dusts/redstone',
    l: '#forge:gems/lapis',
    d: '#forge:gems/diamond',
    a: '#forge:nuggets/allthemodium'
  })
})
