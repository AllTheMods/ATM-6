onEvent('recipes', e => {
  e.remove({ id: 'mythicbotany:mythicbotany_rune_rituals/mjoellnir' })
  e.custom({
    "type": "mythicbotany:rune_ritual",
    "group": "rune_rituals",
    "center": {
      "item": "mythicbotany:fimbultyr_tablet"
    },
    "runes": [
      {
        "rune": {
          "tag": "botania:runes/wrath"
        },
        "x": -5,
        "z": 0,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/wrath"
        },
        "x": 5,
        "z": 0,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/wrath"
        },
        "x": 0,
        "z": -5,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/wrath"
        },
        "x": 0,
        "z": 5,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/greed"
        },
        "x": -4,
        "z": -4,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/greed"
        },
        "x": -4,
        "z": 4,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/greed"
        },
        "x": 4,
        "z": -4,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/greed"
        },
        "x": 4,
        "z": 4,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/air"
        },
        "x": -3,
        "z": 2,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/air"
        },
        "x": 3,
        "z": 2,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/air"
        },
        "x": -2,
        "z": 3,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/air"
        },
        "x": 2,
        "z": 3,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/earth"
        },
        "x": -3,
        "z": -2,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/earth"
        },
        "x": 3,
        "z": -2,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/earth"
        },
        "x": -2,
        "z": -3,
        "consume": false
      },
      {
        "rune": {
          "tag": "botania:runes/earth"
        },
        "x": 2,
        "z": -3,
        "consume": false
      },
      {
        "rune": {
          "item": "mythicbotany:nidavellir_rune"
        },
        "x": -2,
        "z": 0,
        "consume": false
      },
      {
        "rune": {
          "item": "mythicbotany:nidavellir_rune"
        },
        "x": 2,
        "z": 0,
        "consume": false
      },
      {
        "rune": {
          "item": "mythicbotany:asgard_rune"
        },
        "x": 0,
        "z": 2,
        "consume": false
      },
      {
        "rune": {
          "item": "mythicbotany:joetunheim_rune"
        },
        "x": 0,
        "z": -2,
        "consume": false
      }
    ],
    "mana": 500000,
    "ticks": 200,
    "inputs": [
      {
        "tag": "forge:ingots/uru"
      },
      {
        "tag": "forge:storage_blocks/uru"
      },
      {
        "item": "forbidden_arcanus:stripped_mysterywood_log"
      },
      {
        "tag": "forge:storage_blocks/uru"
      },
      {
        "tag": "forge:ingots/uru"
      }
    ],
    "outputs": [],
    "special_output": "mythicbotany:mjoellnir"
  })
})
