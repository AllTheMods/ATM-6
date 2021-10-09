onEvent('recipes', e => {
  e.shaped('tombstone:soul_receptacle', ['ABA', 'CDC', 'AEA'], {
    A: 'tombstone:dust_of_vanishing',
    B: 'tombstone:ankh_of_pray',
    C: 'minecraft:totem_of_undying',
    D: 'tombstone:familiar_receptacle',
    E: 'tombstone:voodoo_poppet'
  }).id('kubejs:tombstone/soul_receptacle')
})
