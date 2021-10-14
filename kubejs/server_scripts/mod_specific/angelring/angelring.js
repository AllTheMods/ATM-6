onEvent('recipes', e => {
  modifyShaped(e, 'angelring:itemdiamondring', 1, ['DND', 'VEU', 'DAD'], {
    D: '#forge:storage_blocks/diamond',
    N: '#forge:storage_blocks/netherite',
    V: '#forge:storage_blocks/vibranium',
    U: '#forge:storage_blocks/unobtainium',
    A: '#forge:storage_blocks/allthemodium',
    E: 'minecraft:elytra'
  })
  modifyShaped(e, 'angelring:itemring', 1, ['CAC', 'ARA', 'DGD'], {
    C: 'botania:pixie_dust',
    A: '#forge:storage_blocks/terrasteel',
    R: 'angelring:itemdiamondring',
    D: '#forge:nether_stars',
    G: 'botania:gaia_ingot'
  })
})
