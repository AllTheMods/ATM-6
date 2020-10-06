events.listen('recipes', function (e) {
  e.shapeless(item.of('kubejs:rotten_leather'), ['minecraft:rotten_flesh','minecraft:rotten_flesh','minecraft:rotten_flesh'])
  e.smelting(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5)
  e.recipes.minecraft.smoking(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5)
  e.recipes.botania.runic_altar({
      output: {
          item: 'kubejs:rune_of_sins'
        },
        mana: 25000,
        ingredients: [
          {
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
  })

  e.recipes.botania.petal_apothecary({
      output: {
          item: 'kubejs:mass_of_wills'
        },
        ingredients: [
          {
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
  })
  
  e.recipes.mysticalagriculture.infusion({
    'input': {
      'item': 'botania:overgrowth_seed'
    },
    'ingredients': [
      {
        'item': 'botania:gaia_ingot'
      },
      {
        'item': 'mysticalagradditions:insanium_block'
      },
      {
        'item': 'botania:gaia_ingot'
      },
      {
        'item': 'mysticalagradditions:insanium_block'
      },
      {
        'item': 'botania:gaia_ingot'
      },
      {
        'item': 'mysticalagradditions:insanium_block'
      },
      {
        'item': 'botania:gaia_ingot'
      },
      {
        'item': 'mysticalagradditions:insanium_block'
      }
    ],
    'result': {
      'item': 'kubejs:magical_soil'
    }
  })
})