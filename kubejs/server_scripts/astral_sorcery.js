events.listen('recipes', function (e) {
    e.recipes.astralsorcery.block_transmutation({
        "input": {
          "block": "quark:marble",
        },
        "output": {
          "block": "astralsorcery:marble_raw"
        },
        "starlight": 200.0
    })

    e.recipes.astralsorcery.infuser({
        "fluidInput": "astralsorcery:liquid_starlight",
        "input": {
            "item": "quark:marble"
        },
        "output": {
            "item": "astralsorcery:marble_raw",
            "count": 1
        },
        "consumptionChance": 0.1,
        "duration": 100,
        "consumeMultipleFluids": false,
        "acceptChaliceInput": true,
        "copyNBTToOutputs": false
    })
})