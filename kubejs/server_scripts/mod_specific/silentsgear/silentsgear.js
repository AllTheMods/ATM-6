onEvent('recipes', e => {
    // Output is an array of result objects. 
    // example: [{item: "minecraft:leather", count: 8}]
    let salvage = (e, input, output) => {
        e.custom({
            type: "silentgear:salvaging",
            ingredient: {
                item: input
            },
            results: output
        })
    }

    const nuggetRatio = {"helmet": 2, "chestplate": 4, "leggings": 3, "boots": 2}

    utils.listOf(['allthemodium', 'vibranium', 'unobtanium'])
      .forEach(type => {
          utils.listOf(['helmet', 'chestplate', 'leggings', 'boots'])
            .forEach(armor => {
                salvage(e, `allthemodium:${type}_${armor}`, [{item: `allthemodium:${type}_nugget`, count: nuggetRatio[armor]}])
            })
      })
})