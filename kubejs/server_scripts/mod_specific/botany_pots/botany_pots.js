onEvent('recipes', e => {
  e.remove({ id: /botanypots:crafting\/hopper.*_botany_pot/ })
  e.remove({ id: /botanypots:crafting\/compact_hopper.*botany_pot/ })

  function hopperRecipe(color) {
    let variant = color ? `${color}_botany_pot` : 'botany_pot';
    e.shaped(`botanypots:hopper_${variant}`, ['MPM', ' H '], {
      M: '#forge:nuggets/terrasteel',
      P: `botanypots:${variant}`,
      H: ['botania:hopperhock', 'botania:hopperhock_chibi']
    }).id(`kubejs:botany_pots/botania/hopper_${variant}`)
    e.shaped(`botanypots:hopper_${variant}`, ['MPM', ' H '], {
      M: `pneumaticcraft:printed_circuit_board`,
      P: `botanypots:${variant}`,
      H: `pneumaticcraft:omnidirectional_hopper`
    }).id(`kubejs:botany_pots/pneumaticraft/hopper_${variant}`)

    if (color) {
      e.shapeless(`botanypots:${variant}`, ['#misctags:botany_pots', `#forge:dyes/${color}`]).id(`kubejs:botany_pots/dye/${variant}`)
      e.shapeless(`botanypots:hopper_${variant}`, ['#botanypots:hopper_botany_pots', `#forge:dyes/${color}`]).id(`kubejs:botany_pots/dye/hopper_${variant}`)
    }
  }

  hopperRecipe()
  colors.forEach(color => hopperRecipe(color))

  //#region FUNCTIONS
  //Soils
  function makeFarmland(input, name, categories, growthModifier) {
    e.recipes.botanypots.soil({
      input: { item: input },
      display: {
        block: input,
        properties: { moisture: 7 }
      },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  function makeSoil(input, name, categories, growthModifier) {
    e.recipes.botanypots.soil({
      input: { item: input },
      display: { block: input },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  //Crops
  function tier(types, time, soil) {
    types.forEach(type => {
      let rItem = `mysticalagriculture:${type}_essence`
      let inItem = `mysticalagriculture:${type}_seeds`
      let renBlock = `mysticalagriculture:${type}_crop`

      e.remove({ id: `mysticalagriculture:crops/${type}` })
      e.recipes.botanypots.crop({
        seed: Ingredient.of(inItem).toJson(),
        categories: [soil],
        growthTicks: time,
        display: {
          block: renBlock,
          properties: { age: 7 }
        },
        results: [{
          chance: 0.75,
          output: Item.of(rItem).toResultJson(),
          minRolls: 1,
          maxRolls: 3
        },
        {
          chance: 0.05,
          output: Item.of(inItem).toResultJson(),
          minRolls: 1,
          maxRolls: 1
        },
        {
          chance: 0.01,
          output: Item.of('mysticalagriculture:fertilized_essence').toResultJson(),
          minRolls: 1,
          maxRolls: 1
        }]
      }).id(`kubejs:botany_pots/crop/mystical_agriculture/${type}`)
    })
  }
  //#endregion
  makeFarmland('mysticalagradditions:insanium_farmland', 'insanium_farmland', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium'], 0.50)
  makeSoil('kubejs:magical_soil', 'magical_soil', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium', 'magical'], 0.75)
  //#region CROPS
  //Tier 1 Crops
  tier([
    'inferium',
    'air',
    'earth',
    'fire',
    'water',
    'dirt',
    'wood',
    'ice',
    'stone'
  ], 1000, 'inferium')
  //Tier 2 Crops
  tier([
    'aluminum',
    'chicken',
    'coal',
    'copper',
    'coral',
    'cow',
    'dye',
    'fish',
    'honey',
    'mystical_flower',
    'nature',
    'nether',
    'pig',
    'saltpeter',
    'sheep',
    'slime',
    'squid',
    'turtle',
    'apatite'
  ], 1750, 'prudentium')
  //Tier 3 Crops
  tier([
    'azure_silver',
    'certus_quartz',
    'creeper',
    'crimson_iron',
    'glowstone',
    'iron',
    'lead',
    'nether_quartz',
    'obsidian',
    'prismarine',
    'rabbit',
    'redstone',
    'silver',
    'skeleton',
    'spider',
    'tin',
    'zinc',
    'zombie',
    'fluorite'
  ], 2500, 'tertium')
  //Tier 4 Crops
  tier([
    'azure_electrum',
    'blaze',
    'end',
    'enderman',
    'experience',
    'ghast',
    'gold',
    'lapis_lazuli',
    'nickel',
    'osmium',
    'cobalt'
  ], 3250, 'imperium')
  //Tier 5 Crops
  tier([
    'diamond',
    'emerald',
    'netherite',
    'uraninite',
    'wither_skeleton',
    'platinum',
    'uranium'
  ], 4000, 'supremium')
  //Tier 6 Crops
  tier([
    'dragon_egg',
    'nether_star'
  ], 4750, 'insanium')
  //Magical Crops
  tier([
    'allthemodium',
    'vibranium',
    'unobtainium'
  ], 5500, 'magical')

  e.recipes.botanypots.crop([
    Item.of('ars_nouveau:mana_bloom').chance(0.75),
    { item: Item.of('ars_nouveau:mana_bloom_crop').chance(0.05), maxRolls: 2 }
  ], 'ars_nouveau:mana_bloom_crop').categories(['dirt'])
  //#endregion
  utils.listOf(['transformation', 'sorting', 'mining', 'time']).forEach(tree => {
    e.recipes.botanypots.crop({
      seed: Item.of(`twilightforest:${tree}_sapling`).toJson(),
      categories: ['dirt'],
      growthTicks: 2400,
      display: { block: `twilightforest:${tree}_sapling` },
      results: [{
        chance: 0.25,
        output: Item.of(`twilightforest:${tree}_log`).toResultJson(),
        minRolls: 1,
        maxRolls: 1
      }]
    }).id(`kubejs:botany_pots/botanytrees/${tree}_tree`)
  })
})
