onEvent('recipes', e => {
  let craftingShapes = [
    //vertical
    ['  C', '  C', '  C'],
    [' C ', ' C ', ' C '],
    ['C  ', 'C  ', 'C  '],
    //horizontal
    ['CCC', '   ', '   '],
    ['   ', 'CCC', '   '],
    ['   ', '   ', 'CCC'],
    //diagonal
    ['  C', ' C ', 'C  '],
    ['C  ', ' C ', '  C'],
    //misc
    ['  C', ' C ', ' C '],
    [' C ', 'C  ', 'C  '],
    ['  C', 'CC ', '   '],
    ['   ', '  C', 'CC '],
    ['  C', '  C', ' C '],
    [' C ', ' C ', 'C  '],
    ['C C', ' C ', '   '],
    ['   ', 'C C', ' C '],
    [' C ', ' C ', '  C'],
    ['C  ', 'C  ', ' C '],
    ['   ', ' C ', 'C C'],
    [' C ', 'C C', '   '],
    ['  C', ' C ', '  C'],
    [' C ', 'C  ', ' C '],
    ['   ', 'CC ', '  C'],
    ['CC ', '  C', '   ']
  ] // 25 now
  let dyes = []
  let botaniaFlowers = []
  let honey = ['resourcefulbees:honey', 'cyclic:honey', 'create:honey']
  let customHoney = ['resourcefulbees:rainbow_honey', 'resourcefulbees:catnip_honey']

  function shapedRecipe(results, craftingItem, itemCount) {
    let maxLength = Math.min(craftingShapes.length, results.length)
    for (let i = 0; i < maxLength; i++) {
      let recipe = {
        pattern: craftingShapes[i],
        key: { C: { item: craftingItem } },
        result: {
          item: results[i].match(/^([a-z\-_0-9]+:[a-z\-_0-9]+)(?:{[^}]*})?$/)[1],
          count: itemCount
        }
      }

      if (results[i].match(/{.+}/)) recipe.result['nbt'] = results[i].match(/{.+}/)[0]

      e.recipes.cucumber.shaped_no_mirror(recipe)
    }
  }

  colors.forEach(color => {
    dyes.push(`minecraft:${color}_dye`)
    botaniaFlowers.push(`botania:${color}_mystical_flower`)
  })

  e.recipes.thermal.chiller('resourcefulbees:starry_honey_block', fluid.of('resourcefulbees:starry_honey', 1000))

  honey.forEach(type => e.recipes.thermal.chiller('minecraft:honey_block', fluid.of(`${type}`, 1000)))
  customHoney.forEach(type => {
    e.recipes.thermal.chiller(`${type}_block`, fluid.of(`${type}`, 1000))
    e.shaped('compressium:honey_1', ['AAA', 'AAA', 'AAA'], { A: `${type}_block` })
  })

  shapedRecipe(dyes, 'resourcefulbees:rainbow_honey_block', 32)
  shapedRecipe(botaniaFlowers, 'resourcefulbees:mystical_honeycomb', 2)
  shapedRecipe(botaniaFlowers, 'resourcefulbees:mystical_honeycomb_block', 18)
  shapedRecipe(['minecraft:wheat', 'minecraft:beetroot', 'minecraft:carrot', 'minecraft:potato', 'minecraft:melon_slice', 'minecraft:pumpkin', 'minecraft:bamboo', 'minecraft:sweet_berries', 'minecraft:brown_mushroom', 'minecraft:red_mushroom'], 'resourcefulbees:cropy_honeycomb', 3)
  shapedRecipe(['minecraft:wheat', 'minecraft:beetroot', 'minecraft:carrot', 'minecraft:potato', 'minecraft:melon_slice', 'minecraft:pumpkin', 'minecraft:bamboo', 'minecraft:sweet_berries', 'minecraft:brown_mushroom', 'minecraft:red_mushroom'], 'resourcefulbees:cropy_honeycomb_block', 27)
  shapedRecipe(['minecraft:porkchop', 'minecraft:beef', 'minecraft:cod', 'minecraft:salmon', 'minecraft:chicken', 'minecraft:rabbit', 'minecraft:mutton'], 'resourcefulbees:kobee_beef_honeycomb', 3)
  shapedRecipe(['minecraft:porkchop', 'minecraft:beef', 'minecraft:cod', 'minecraft:salmon', 'minecraft:chicken', 'minecraft:rabbit', 'minecraft:mutton'], 'resourcefulbees:kobee_beef_honeycomb_block', 27)
  shapedRecipe(['minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'minecraft:basalt', 'create:gabbro', 'create:dolomite', 'create:weathered_limestone', 'create:limestone', 'create:scoria', 'create:dark_scoria', 'quark:brimstone', 'quark:slate', 'quark:jasper', 'quark:limestone', 'quark:basalt', 'astralsorcery:marble_raw'], 'resourcefulbees:stan_honeycomb', 2)
  shapedRecipe(['minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'minecraft:basalt', 'create:gabbro', 'create:dolomite', 'create:weathered_limestone', 'create:limestone', 'create:scoria', 'create:dark_scoria', 'quark:brimstone', 'quark:slate', 'quark:jasper', 'quark:limestone', 'quark:basalt', 'astralsorcery:marble_raw'], 'resourcefulbees:stan_honeycomb_block', 18)
  shapedRecipe(['minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log', 'minecraft:jungle_log', 'minecraft:acacia_log', 'minecraft:dark_oak_log', 'minecraft:crimson_stem', 'minecraft:warped_stem'], 'resourcefulbees:lumber_honeycomb', 3)
  shapedRecipe(['minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log', 'minecraft:jungle_log', 'minecraft:acacia_log', 'minecraft:dark_oak_log', 'minecraft:crimson_stem', 'minecraft:warped_stem'], 'resourcefulbees:lumber_honeycomb_block', 27)
  shapedRecipe(['pamhc2foodcore:cottoncandyitem', 'pamhc2foodextended:candycornitem', 'supplementaries:candy'], 'resourcefulbees:cotton_candy_honeycomb', 3)
  shapedRecipe(['pamhc2foodcore:cottoncandyitem', 'pamhc2foodextended:candycornitem', 'supplementaries:candy'], 'resourcefulbees:cotton_candy_honeycomb_block', 27)
})
