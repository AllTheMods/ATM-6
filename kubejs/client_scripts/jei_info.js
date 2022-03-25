onEvent('jei.information', e => {
  let beeTypes = java('com.resourcefulbees.resourcefulbees.compat.jei.JEICompat').ENTITY_INGREDIENT
  e.addForType(beeTypes, ['bee:starry'], ['Housing this bee in a Creative Apiary will yield 10 combs per harvest', 'You should have one by now, make use of it!'])
  e.add('thermal:bitumen', ['Byproduct of refining Oil in a Distillation Tower'])
  e.add('mekanism:creative_energy_cube', ['To fill the Cube you have to get 2x Ultimate Induction Providers, 2x filled Ultimate Energy Cubes and an ATM Star.',
    '',
    'You must build a multiblock structure in a horizontal line by placing the Creative Cube down with the Providers on either sides and the Ultimate Cubes at the end.',
    '',
    'All you have to do now, is to make sure your cubes are filled, after which you can Shift + RClick the Creative Cube with the Star.'])
  e.add('atmadditions:atm_star_shard', ['To get the Shards, you will have to build a 4 block tall structure as such:',
    '',
    'The bottom block is Bedrock, above it an Anvil with an Item Frame on top. Hovering over the Item Frame, place Mjollnir.',
    '',
    'Once you have the structure, place your ATM Star in the item frame and click the hammer.'])
})
