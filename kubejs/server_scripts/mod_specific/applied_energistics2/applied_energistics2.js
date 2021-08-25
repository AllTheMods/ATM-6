onEvent('recipes', e => {
  e.recipes.powah.energizing({
    ingredients: [
      Item.of('appliedenergistics2:dense_energy_cell').toJson(),
      Item.of('atmadditions:atm_star').toJson()
    ],
    energy: '2147483647',
    result: 'appliedenergistics2:creative_energy_cell'
  })
})
