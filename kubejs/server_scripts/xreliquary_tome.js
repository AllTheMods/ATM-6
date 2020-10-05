/* events.listen('recipes', function (e) {
    e.remove({id: 'xreliquary:alkahestry/crafting/nether_star'})
    e.remove({type: 'xreliquary:alkahestry_charging'})
    function charge(item, amount){
        e.recipes.xreliquary.alkahestry_charging({
            charge: amount,
            ingredient: {
                item: item
            }
        })
    }
    function craft(item, amount, cost){
        e.recipes.xreliquary.alkahestry_crafting({
            charge: cost,
            ingredient: {
                item: item
            },
            result_count: amount
        })
    }
    charge('allthemodium:allthemodium_ingot', 512)
    craft('minecraft:slime_ball', 2, 32)
    craft('minecraft:ghast_tear', 2, 256)
    craft('minecraft:ender_pearl', 2, 128)
    craft('minecraft:leather', 2, 32)
    craft('minecraft:bone', 2, 32)
    craft('minecraft:blaze_rod', 3, 128)
}) */