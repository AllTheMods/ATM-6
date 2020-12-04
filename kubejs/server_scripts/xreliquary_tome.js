/*
events.listen('recipes', function (e) {
    function charge(items, amount) {
        utils.listOf(items).forEach(function (item) {
            e.recipes.xreliquary.alkahestry_charging({
                charge: amount,
                ingredient: {
                    item: item
                }
            })
        })
    }

    function craft(items, amount, cost) {
        utils.listOf(items).forEach(function (item) {
            e.recipes.xreliquary.alkahestry_crafting({
                charge: cost,
                ingredient: {
                    item: item
                },
                result_count: amount
            })
        })
    }
    craft(['minecraft:slime_ball', 'minecraft:leather', 'minecraft:bone'], 2, 32)
    craft(['minecraft:ender_pearl'], 2, 128)
    craft(['minecraft:blaze_rod'], 3, 128)
    craft(['minecraft:ghast_tear'], 2, 256)
    charge(['allthemodium:allthemodium_ingot'], 512);
})
*/