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

    const armorNuggetRatio = {"helmet": 2, "chestplate": 4, "leggings": 3, "boots": 2}
    const toolNuggetRatio = {
        "pick": {
            "allthemodium": 2,
            "vibranium": 3,
            "unobtainium": 3,            
        }, 
        "axe": {
            "allthemodium": 2,
            "vibranium": 3,
            "unobtainium": 3,
        }, 
        "sword": {
            "allthemodium": 1, 
            "vibranium": 2,
            "unobtainium": 2,
        }, 
        "shovel": {
            "allthemodium": 2, 
            "vibranium": 1,
            "unobtainium": 1,
        },
        "paxel": {
            "allthemodium": 9,
            "vibranium": 10,
            "unobtainium": 10,
        }
    }

    utils.listOf(['allthemodium', 'vibranium', 'unobtainium'])
      .forEach(type => {
          utils.listOf(['helmet', 'chestplate', 'leggings', 'boots'])
            .forEach(armor => {
                salvage(e, `allthemodium:${type}_${armor}`, [{item: `allthemodium:${type}_nugget`, count: armorNuggetRatio[armor]}])
            })
      })

    utils.listOf(['pick', 'axe', 'sword', 'shovel', 'paxel'])
      .forEach(tool => {
        const result = [];

        utils.listOf(['allthemodium', 'vibranium', 'unobtainium'])
          .forEach(nugget => {
            result.push({"item": `allthemodium:${nugget}_nugget`, "count": toolNuggetRatio[tool][nugget]})
          })

          salvage(e, `allthemodium:alloy_${tool}`, result)
      })
})