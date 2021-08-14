onEvent('jei.information', e => {
  const beeTypes = java("com.resourcefulbees.resourcefulbees.compat.jei.JEICompat").ENTITY_INGREDIENT
  e.addForType(beeTypes, ['bee:starry'], ['Housing this bee in a Creative Apiary will yield 10 comb blocks per harvest', 'You should have one by now, make use of it!'])
  e.add('thermal:bitumen', ['Byproduct of refining Oil in a Distillation Tower'])
  e.add('mekanism:creative_energy_cube', ['To fill the Cube you have to get 2x Ultimate Induction Providers, 2x filled Ultimate Energy Cubes and an ATM Star.',
    '',
    'You must build a multiblock structure in a horizontal line by placing the Creative Cube down with the Providers on either sides and the Ultimate Cubes at the end.',
    '',
    'All you have to do now, is to make sure your cubes are filled, after which you can Shift + RClick the Creative Cube with the Star.'])
})