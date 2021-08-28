onEvent('recipes', e => {
  e.recipes.powah.energizing({
    ingredients: [
      Item.of('powah:energy_cell_nitro').toJson(),
      Item.of('powah:energy_cell_nitro').toJson(),
      Item.of('atmadditions:atm_star').toJson(),
      Item.of('powah:energy_cell_nitro').toJson(),
      Item.of('powah:energy_cell_nitro').toJson()
    ],
    energy: '2147483647',
    result: Item.of('powah:energy_cell_creative').toResultJson()
  })
})
