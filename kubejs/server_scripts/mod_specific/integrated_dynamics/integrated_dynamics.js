onEvent('recipes', e => {
  e.recipes.powah.energizing({
    ingredients: [
      Item.of('integrateddynamics:energy_battery').toJson(),
      Item.of('integrateddynamics:energy_battery').toJson(),
      Item.of('atmadditions:atm_star').toJson(),
      Item.of('integrateddynamics:energy_battery').toJson(),
      Item.of('integrateddynamics:energy_battery').toJson()
    ],
    energy: '2147483647',
    result: Item.of('integrateddynamics:energy_battery_creative').toResultJson()
  })
})
