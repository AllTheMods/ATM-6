onEvent('recipes', e => {
  e.recipes.powah.energizing({
    ingredients: [
      Item.of('immersiveengineering:capacitor_lv').toJson(),
      Item.of('immersiveengineering:capacitor_mv').toJson(),
      Item.of('immersiveengineering:capacitor_hv').toJson(),
      Item.of('atmadditions:atm_star').toJson()
    ],
    energy: '2147483647',
    result: Item.of('immersiveengineering:capacitor_creative').toResultJson()
  })
})
