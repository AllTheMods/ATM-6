onEvent('recipes', e => {
  e.shaped('botania:creative_pool', ['RMR', 'MSM', 'RMR'], {
    S: 'atmadditions:atm_star',
    M: 'botania:mana_pool',
    R: '#botania:runes'
  })

  e.shapeless(item.of('botania:mana_tablet', {
    mana: 500000,
    creative: '1b'
  }), 'botania:creative_pool')

  e.shapeless('botania:creative_pool',
    Item.of('botania:mana_tablet', {
      mana: 500000,
      creative: true
    })
  )
})