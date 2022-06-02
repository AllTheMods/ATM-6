//priority: 1
let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
let maDisabledSeeds = ['basalz', 'blazing_crystal', 'blitz', 'blizz', 'brass', 'bronze', 'compressed_iron', 'constantan', 'chrome', 'electrum', 'elementium', 'ender_biotite', 'energized_steel', 'fluix', 'graphite', 'hop_graphite', 'invar', 'iridium', 'manasteel', 'niotic_crystal', 'nitro_crystal', 'quartz_enriched_iron', 'refined_glowstone', 'refined_obsidian', 'rock_crystal', 'rubber', 'signalum', 'silicon', 'sky_stone', 'spirited_crystal', 'starmetal', 'steel', 'sulfur', 'terrasteel', 'titanium', 'tungsten', 'mithril', 'tinkers_bronze', 'ironwood', 'steeleaf', 'pig_iron', 'slimesteel', 'rose_gold', 'queens_slime', 'manyullyn', 'fiery_ingot', 'knightmetal', 'hepatizon', 'lumium', 'enderium']
let vanillaMetals = ['iron', 'gold']
let atoMetals = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel', 'zinc', 'copper']
let atmMetals = ['allthemodium', 'vibranium', 'unobtainium']
let immersiveMetals = ['aluminum', 'lead', 'nickel', 'silver', 'uranium', 'copper']
let immersiveAlloys = ['steel', 'electrum', 'constantan']
let mekanismMetals = ['osmium', 'lead', 'tin', 'uranium', 'copper']
let mekanismAlloys = ['steel', 'refined_obsidian', 'refined_glowstone', 'bronze']
let thermalMetals = ['copper', 'tin', 'lead', 'silver', 'nickel']
let thermalAlloys = ['bronze', 'electrum', 'invar', 'constantan', 'signalum', 'enderium', 'lumium']
let createMetals = ['copper', 'zinc']
let createAlloys = ['brass']
let iceAndFireMetals = ['copper', 'silver']
let projectRedMetals = ['copper', 'tin', 'silver']
let tconstructMetals = ['copper']
let tmechworksMetals = ['copper', 'aluminum']
let eidolonMetals = ['lead']

let draconicFusion = (e, output, craftingTier, energy, middleItem, ingredientList) => {
  //crafting tier: 1.draconium, 2.wyvern, 3.draconic, 4.chaotic
  let tiers = ['WYVERN', 'DRACONIC', 'CHAOTIC']
  e.custom({
    type: 'draconicevolution:fusion_crafting',
    result: { item: output },
    catalyst: { item: middleItem },
    total_energy: energy,
    tier: (craftingTier > 4 && craftingTier <= 1) ? 'DRACONIUM' : tiers[craftingTier - 2],
    ingredients: ingredientList.map(item => (item.charAt(0) === '#') ? { tag: item.substring(1) } : { item: item })
  }).id(`kubejs:fusion_crafting/${output.replace(':', '/')}`)
}
let energize = (e, ingredient, result, power, count) => {
  e.recipes.powah.energizing({
    ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
    energy: power,
    result: Item.of(result, count ? count : 1).toResultJson()
  }).id(`kubejs:energizing/${result.replace(':', '/')}`)
}
let modifyShaped = (e, result, count, pattern, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shaped' })
  e.shaped(item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
let modifyShapeless = (e, result, count, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  e.shapeless(item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}
let modifySmelt = (e, result, ingredients) => {
  e.remove({ output: result, type: 'minecraft:smelting' })
  e.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}
let removeRecipeByID = (e, recipes) => {
  recipes.forEach(recipe => {
    e.remove({ id: recipe })
  })
}
let removeRecipeByOutput = (e, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      e.remove({ type: recipe[1], output: recipe[0] })
    } else {
      e.remove({ output: recipe })
    }
  })
}
let woodcutting = (e, entries) => {
  entries.forEach(([input, output, count]) => {
    e.custom({
      type: "corail_woodcutter:woodcutting",
      ingredient: { item: input },
      result: output,
      count: count
    }).id(`kubejs:woodcutting/${output.replace(':', '/')}`)
  })
}
