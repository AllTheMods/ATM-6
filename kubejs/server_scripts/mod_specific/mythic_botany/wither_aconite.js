onEvent('recipes', e => {
  e.custom({
    "type": "mythicbotany:rune_ritual",
    "group": "rune_rituals",
    "center": {
      "item": "minecraft:wither_rose"
    },
    "runes": [
      {
        "rune": {
          "tag": "botania:runes/wrath"
        },
        "x": 0,
        "z": 5,
        "consume": true
      }, {
        "rune": {
          "tag": "botania:runes/wrath"
        },
        "x": 0,
        "z": 2,
        "consume": true
      }, {
        "rune": {
          "tag": "botania:runes/lust"
        },
        "x": -5,
        "z": 2,
        "consume": true
      }, {
        "rune": {
          "tag": "botania:runes/lust"
        },
        "x": -2,
        "z": 1,
        "consume": true
      }, {
        "rune": {
          "tag": "botania:runes/greed"
        },
        "x": 5,
        "z": 2,
        "consume": true
      }, {
        "rune": {
          "tag": "botania:runes/greed"
        },
        "x": 2,
        "z": 1,
        "consume": true
      }, {
        "rune": {
          "tag": "botania:runes/pride"
        },
        "x": -4,
        "z": -4,
        "consume": true
      }, {
        "rune": {
          "tag": "botania:runes/pride"
        },
        "x": -2,
        "z": -2,
        "consume": true
      }, {
        "rune": {
          "tag": "botania:runes/gluttony"
        },
        "x": 4,
        "z": -4,
        "consume": true
      }, {
        "rune": {
          "tag": "botania:runes/gluttony"
        },
        "x": 2,
        "z": -2,
        "consume": true
      }
    ],
    "mana": 500000,
    "ticks": 200,
    "inputs": [
      {
        "item": "botania:gaia_ingot"
      },
      {
        "item": "kubejs:nether_star_block"
      },
      {
        "item": "minecraft:dragon_egg"
      },
      {
        "item": "botania:terrasteel_ingot"
      },
      {
        "item": "botania:gaia_ingot"
      }
    ],
    "outputs": [{
      "item": "mythicbotany:wither_aconite"
    }]
  })
})