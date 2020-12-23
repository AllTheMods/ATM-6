events.listen('recipes', function (e) {
    //Functions
    function plus(result, count, name) {
        e.shaped(item.of(result, count), [
            ' a ',
            'aaa',
            ' a '
        ], {
            a: 'mysticalagriculture:' + name + '_essence'
        })
    }

    function circle(result, count, name) {
        e.shaped(item.of(result, count), [
            'aaa',
            'a a',
            'aaa'
        ], {
            a: 'mysticalagriculture:' + name + '_essence'
        })
    }

    //Recipes
    e.shaped(item.of('minecraft:grass', 12), [
        ' E ',
        'E E',
        '   '
    ], {
        'E': 'mysticalagriculture:nature_essence'
    })

    plus('powah:uraninite', 4, 'uraninite')
    circle('rats:oratchalcum_ingot', 4, 'oratchalcum')
    circle('alltheores:aluminum_ingot',6,'aluminum')
    circle('alltheores:copper_ingot',6,'copper')
    circle('alltheores:platinum_ingot',6,'platinum')
    circle('alltheores:tin_ingot',6,'tin')
    circle('alltheores:zinc_ingot',6,'zinc')
    circle('alltheores:lead_ingot',6,'lead')
    circle('alltheores:uranium_ingot',6,'uranium')
    circle('alltheores:silver_ingot',6,'silver')
    circle('alltheores:nickel_ingot',6,'nickel')
    circle('thermal:bronze_ingot',6,'bronze')
    circle('minecraft:netherite_scrap',1,'netherite')
    circle('industrialforegoing:dryrubber',6,'rubber')
    circle('thermal:constantan_ingot',4,'constantan')
    circle('mekanism:ingot_steel',2,'steel')
    circle('silentgear:electrum',2,'electrum')
    circle('allthemodium:allthemodium_nugget', 2, 'allthemodium')
    circle('allthemodium:vibranium_nugget', 2, 'vibranium')
    circle('allthemodium:unobtainium_nugget', 2, 'unobtainium')
    circle('appliedenergistics2:fluix_crystal', 12, 'fluix')
    circle('appliedenergistics2:certus_quartz_crystal', 12, 'certus_quartz')
    circle('silentgear:azure_electrum_ingot', 4, 'azure_electrum')
    circle('silentgear:azure_silver_ingot', 6, 'azure_silver')
    circle('silentgear:crimson_iron_ingot', 6, 'crimson_iron')
    circle('silentgear:crimson_steel_ingot', 4, 'crimson_steel')
    //circle('silents_mechanisms:enderium_ingot', 4, 'enderium')
    //circle('silents_mechanisms:lumium_ingot', 4, 'lumium')
    circle('mekanism:fluorite_gem', 12, 'fluorite')
})