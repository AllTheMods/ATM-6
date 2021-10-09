onEvent('recipes', e => {
  e.shaped('botania:creative_pool', ['RMR', 'MSM', 'RMR'], {
    S: 'atmadditions:atm_star',
    M: 'botania:mana_pool',
    R: '#botania:runes'
  }).id('kubejs:botania/creative_pool')

  e.shapeless(item.of('botania:mana_tablet', { mana: 500000, creative: '1b' }), 'botania:creative_pool').id('kubejs:botania/creative_mana_tablet')
  e.shapeless('botania:creative_pool', Item.of('botania:mana_tablet', { mana: 500000, creative: true })).id('kubejs:botania/creative_pool_from_creative_mana_tablet')

  e.recipes.botania.runic_altar({
    output: { item: 'kubejs:rune_of_sins' },
    mana: 25000,
    ingredients: [
      { tag: 'botania:runes/lust' },
      { tag: 'botania:runes/gluttony' },
      { tag: 'botania:runes/greed' },
      { tag: 'botania:runes/sloth' },
      { tag: 'botania:runes/wrath' },
      { tag: 'botania:runes/envy' },
      { tag: 'botania:runes/pride' }
    ]
  }).id('kubejs:botania/runic_altar/rune_of_sins')

  e.recipes.botania.petal_apothecary({
    output: { item: 'kubejs:mass_of_wills' },
    ingredients: [
      { item: 'botania:ancient_will_ahrim' },
      { item: 'botania:ancient_will_dharok' },
      { item: 'botania:ancient_will_guthan' },
      { item: 'botania:ancient_will_torag' },
      { item: 'botania:ancient_will_verac' },
      { item: 'botania:ancient_will_karil' }
    ]
  }).id('kubejs:botania/petal_apothecary/mass_of_wills')

  modifyShapeless(e, 'botania:lexicon', 1, ['#minecraft:flowers', 'minecraft:book'])
})
