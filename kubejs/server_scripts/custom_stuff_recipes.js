events.listen('recipes', function (e) {

  function kjsShaped(result, pattern, ingredients, count) {
    e.shaped(item.of(result, count != null ? count : 1), pattern, ingredients)
  }

  function kjsShapeless(result, ingredients, count) {
    e.shapeless(item.of(result, count != null ? count : 1), ingredients)
  }

  kjsShapeless('kubejs:rotten_leather', ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'])
  e.smelting(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5).id('kubejs:smelting/leather')
  e.recipes.minecraft.smoking(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5).id('kubejs:smoking/leather')
  e.recipes.botania.runic_altar({
    output: {
      item: 'kubejs:rune_of_sins'
    },
    mana: 25000,
    ingredients: [{
        tag: 'botania:runes/lust'
      },
      {
        tag: 'botania:runes/gluttony'
      },
      {
        tag: 'botania:runes/greed'
      },
      {
        tag: 'botania:runes/sloth'
      },
      {
        tag: 'botania:runes/wrath'
      },
      {
        tag: 'botania:runes/envy'
      },
      {
        tag: 'botania:runes/pride'
      }
    ]
  }).id('kubejs:runic_altar/rune_of_sins')

  e.recipes.botania.petal_apothecary({
    output: {
      item: 'kubejs:mass_of_wills'
    },
    ingredients: [{
        item: 'botania:ancient_will_ahrim'
      },
      {
        item: 'botania:ancient_will_dharok'
      },
      {
        item: 'botania:ancient_will_guthan'
      },
      {
        item: 'botania:ancient_will_torag'
      },
      {
        item: 'botania:ancient_will_verac'
      },
      {
        item: 'botania:ancient_will_karil'
      }
    ]
  }).id('kubejs:petal_apothecary/mass_of_wills')

  e.recipes.mysticalagriculture.infusion({
    input: {
      item: 'botania:overgrowth_seed'
    },
    ingredients: [{
        item: 'botania:gaia_ingot'
      },
      {
        item: 'mysticalagradditions:insanium_block'
      },
      {
        item: 'botania:gaia_ingot'
      },
      {
        item: 'mysticalagradditions:insanium_block'
      },
      {
        item: 'botania:gaia_ingot'
      },
      {
        item: 'mysticalagradditions:insanium_block'
      },
      {
        item: 'botania:gaia_ingot'
      },
      {
        item: 'mysticalagradditions:insanium_block'
      }
    ],
    result: {
      item: 'kubejs:magical_soil'
    }
  }).id('kubejs:infusion/magical_soil')
  kjsShaped('solarflux:sp_custom_allthemodium', [
    'PPP',
    'SAS',
    'SDS'
  ], {
    S: 'solarflux:sp_5',
    A: '#forge:storage_blocks/allthemodium',
    D: '#forge:storage_blocks/diamond',
    P: 'solarflux:photovoltaic_cell_4'
  }, 2)
  kjsShaped('solarflux:sp_custom_vibranium', [
    'PPP',
    'SAS',
    'SAS'
  ], {
    S: 'solarflux:sp_custom_allthemodium',
    A: '#forge:storage_blocks/vibranium',
    P: 'solarflux:photovoltaic_cell_5'
  }, 2)
  kjsShaped('solarflux:sp_custom_unobtainium', [
    'PPP',
    'SAS',
    'SAS'
  ], {
    S: 'solarflux:sp_custom_vibranium',
    A: '#forge:storage_blocks/unobtainium',
    P: 'solarflux:photovoltaic_cell_6'
  }, 2)

  function customBlock(block, item) {
    kjsShapeless(item, block, 9)
    kjsShaped(block, [
      'AAA',
      'AAA',
      'AAA'
    ], {
      A: item
    })
  }

  customBlock('kubejs:nether_star_block', 'minecraft:nether_star')
})