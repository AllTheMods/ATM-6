events.listen('recipes', function (e) {
    var pot = e.recipes.botanypots.crop
    var ma = 'mysticalagriculture:'
    var crop = {
        display: {
            block: ma+type+'_crop',
            properties: {
            age: 7
            }
        },
        results: [
            {
            chance: 0.75,
            output: {
                item: ma+type+'_essence'
            },
            minRolls: 1,
            maxRolls: 3
            },
            {
            chance: 0.05,
            output: {
                item: ma+type+'_seeds'
            },
            minRolls: 1,
            maxRolls: 1
            },
            {
            chance: 0.01,
            output: {
                item: 'mysticalagriculture:fertilized_essence'
            },
            minRolls: 1,
            maxRolls: 1
            }
        ]}
    //Soils
    function soil(input, categories, growthModifier){
        e.recipes.botanypots.soil({
            'input':
            {
                'item': input
            },
            'display':
            {
                'block': input,
                'properties':
                {
                    'moisture':7
                }
            },
            'categories': categories,
            'growthModifier': growthModifier
        })
    }
    soil('mysticalagradditions:insanium_farmland',['dirt','farmland','inferium','prudentium','tertium','imperium','supremium','insanium'], 0.50)
    
/*     e.recipes.botanypots.soil({
        'input':
        {
            'item': 'mysticalagradditions:insanium_farmland'
        },
        'display':
        {
            'block': 'mysticalagradditions:insanium_farmland',
            'properties':
            {
                'moisture':7
            }
        },
        'categories': [
            'dirt',
            'farmland',
            'inferium',
            'prudentium',
            'tertium',
            'imperium',
            'supremium',
            'insanium'
        ],
        'growthModifier': 0.50
    })
 */
    //MA Crop functions
    function t1(type) {
        e.remove({id: 'mysticalagriculture:crops/'+type})
        pot({
            seed: {
                item: ma+type+'_seeds'
            },
            categories: [
                'inferium'
            ],
            growthTicks: 1200,
            crop
        })
    }
    function t2(type) {
        e.remove({id: 'mysticalagriculture:crops/'+type})
        pot({
            seed: {
                item: ma+type+'_seeds'
            },
            categories: [
                'prudentium'
            ],
            growthTicks: 1900,
            crop
        })
    }
    function t3(type) {
        e.remove({id: 'mysticalagriculture:crops/'+type})
        pot({
            seed: {
                item: ma+type+'_seeds'
            },
            categories: [
                'tertium'
            ],
            growthTicks: 2400,
            crop
        })
    }
    function t4(type) {
        e.remove({id: 'mysticalagriculture:crops/'+type})
        pot({
            seed: {
                item: ma+type+'_seeds'
            },
            categories: [
                'imperium'
            ],
            growthTicks: 3200,
            crop
        })
    }
    function t5(type) {
        e.remove({id: 'mysticalagriculture:crops/'+type})
        pot({
            seed: {
                item: ma+type+'_seeds'
            },
            categories: [
                'supremium'
            ],
            growthTicks: 4000,
            crop
        })
    }
    function t6(type) {
        e.remove({id: 'mysticalagriculture:crops/'+type})
        pot({
            seed: {
                item: ma+type+'_seeds'
            },
            categories: [
                'insanium'
            ],
            growthTicks: 5000,
            crop
        })
    }
    
    //Tier 1 Crops
    t1('air')
    t1('earth')
    t1('fire')
    t1('water')
    t1('dirt')
    t1('wood')
    t1('ice')
    t1('stone')

    //Tier 2 Crops
    t2('aluminum')
    t2('chicken')
    t2('coal')
    t2('copper')
    t2('coral')
    t2('cow')
    t2('dye')
    t2('fish')
    t2('honey')
    t2('iridium')
    t2('mystical_flower')
    t2('nature')
    t2('nether')
    t2('pig')
    t2('rubber')
    t2('saltpeter')
    t2('sheep')
    t2('silicon')
    t2('slime')
    t2('squid')
    t2('sulfur')
    t2('turtle')
    t2('sky_stone')

    //Tier 3 Crops
    t3('azure_silver')
    t3('brass')
    t3('bronze')
    t3('certus_quartz')
    t3('creeper')
    t3('crimson_iron')
    t3('ender_biotite')
    t3('glowstone')
    t3('graphite')
    t3('iron')
    t3('lead')
    t3('manasteel')
    t3('nether_quartz')
    t3('obsidian')
    t3('prismarine')
    t3('quartz_enriched_iron')
    t3('rabbit')
    t3('redstone')
    t3('silver')
    t3('skeleton')
    t3('spider')
    t3('tin')
    t3('zinc')
    t3('zombie')
    t3('lumium')
    t3('fluorite')

    //Tier 4 Crops
    t4('azure_electrum')
    t4('blaze')
    t4('chrome')
    t4('constantan')
    t4('crimson_steel')
    t4('electrum')
    t4('elementium')
    t4('end')
    t4('enderman')
    t4('experience')
    t4('fluix')
    t4('ghast')
    t4('gold')
    t4('invar')
    t4('lapis_lazuli')
    t4('mithril')
    t4('nickel')
    t4('oratchalcum')
    t4('osmium')
    t4('refined_glowstone')
    t4('refined_obsidian')
    t4('steel')
    t4('titanium')
    t4('tungsten')
    t4('uranium')
    t4('enderium')

    //Tier 5 Crops
    t5('diamond')
    t5('emerald')
    t5('netherite')
    t5('terrasteel')
    t5('uraninite')
    t5('wither_skeleton')
    t5('platinum')

    //Tier 6 Crops
    t6('allthemodium')
    t6('vibranium')
    t6('unobtainium')
    t6('dragon_egg')
    t6('nether_star')
})