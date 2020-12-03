events.listen('recipes', function (e) {
    //Soils
    function makeFarmland(input, name, categories, growthModifier) {
        e.recipes.botanypots.soil({
            input: {
                item: input
            },
            display: {
                block: input,
                properties: {
                    moisture: 7
                }
            },
            categories: categories,
            growthModifier: growthModifier
        }).id('kubejs:botany_pots/soil/' + name)
    }

    function makeSoil(input, name, categories, growthModifier) {
        e.recipes.botanypots.soil({
            input: {
                item: input
            },
            display: {
                block: input
            },
            categories: categories,
            growthModifier: growthModifier
        }).id('kubejs:botany_pots/soil/' + name)
    }

    makeFarmland('mysticalagradditions:insanium_farmland', 'insanium_farmland', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium'], 0.50)
    makeSoil('kubejs:magical_soil', 'magical_soil', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium', 'magical'], 0.75)

    //MA Crop functions
    var ma = 'mysticalagriculture:'

    function t1(types) {
        utils.listOf(types).forEach(function (type) {
            e.remove({
                id: 'mysticalagriculture:crops/' + type
            })
            e.recipes.botanypots.crop({
                seed: {
                    item: ma + type + '_seeds'
                },
                categories: [
                    'inferium'
                ],
                growthTicks: 1200,
                display: {
                    block: ma + type + '_crop',
                    properties: {
                        age: 7
                    }
                },
                results: [{
                        chance: 0.75,
                        output: {
                            item: ma + type + '_essence'
                        },
                        minRolls: 1,
                        maxRolls: 3
                    },
                    {
                        chance: 0.05,
                        output: {
                            item: ma + type + '_seeds'
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
                ]
            }).id('kubejs:botany_pots/crop/mystical_agriculture/' + type)
        })
    }

    function t2(types) {
        utils.listOf(types).forEach(function (type) {
            e.remove({
                id: 'mysticalagriculture:crops/' + type
            })
            e.recipes.botanypots.crop({
                seed: {
                    item: ma + type + '_seeds'
                },
                categories: [
                    'prudentium'
                ],
                growthTicks: 1900,
                display: {
                    block: ma + type + '_crop',
                    properties: {
                        age: 7
                    }
                },
                results: [{
                        chance: 0.75,
                        output: {
                            item: ma + type + '_essence'
                        },
                        minRolls: 1,
                        maxRolls: 3
                    },
                    {
                        chance: 0.05,
                        output: {
                            item: ma + type + '_seeds'
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
                ]
            }).id('kubejs:botany_pots/crop/mystical_agriculture/' + type)
        })
    }

    function t3(types) {
        utils.listOf(types).forEach(function (type) {
            e.remove({
                id: 'mysticalagriculture:crops/' + type
            })
            e.recipes.botanypots.crop({
                seed: {
                    item: ma + type + '_seeds'
                },
                categories: [
                    'tertium'
                ],
                growthTicks: 2400,
                display: {
                    block: ma + type + '_crop',
                    properties: {
                        age: 7
                    }
                },
                results: [{
                        chance: 0.75,
                        output: {
                            item: ma + type + '_essence'
                        },
                        minRolls: 1,
                        maxRolls: 3
                    },
                    {
                        chance: 0.05,
                        output: {
                            item: ma + type + '_seeds'
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
                ]
            }).id('kubejs:botany_pots/crop/mystical_agriculture/' + type)
        })
    }

    function t4(types) {
        utils.listOf(types).forEach(function (type) {
            e.remove({
                id: 'mysticalagriculture:crops/' + type
            })
            e.recipes.botanypots.crop({
                seed: {
                    item: ma + type + '_seeds'
                },
                categories: [
                    'imperium'
                ],
                growthTicks: 3200,
                display: {
                    block: ma + type + '_crop',
                    properties: {
                        age: 7
                    }
                },
                results: [{
                        chance: 0.75,
                        output: {
                            item: ma + type + '_essence'
                        },
                        minRolls: 1,
                        maxRolls: 3
                    },
                    {
                        chance: 0.05,
                        output: {
                            item: ma + type + '_seeds'
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
                ]
            }).id('kubejs:botany_pots/crop/mystical_agriculture/' + type)
        })
    }

    function t5(types) {
        utils.listOf(types).forEach(function (type) {
            e.remove({
                id: 'mysticalagriculture:crops/' + type
            })
            e.recipes.botanypots.crop({
                seed: {
                    item: ma + type + '_seeds'
                },
                categories: [
                    'supremium'
                ],
                growthTicks: 4000,
                display: {
                    block: ma + type + '_crop',
                    properties: {
                        age: 7
                    }
                },
                results: [{
                        chance: 0.75,
                        output: {
                            item: ma + type + '_essence'
                        },
                        minRolls: 1,
                        maxRolls: 3
                    },
                    {
                        chance: 0.05,
                        output: {
                            item: ma + type + '_seeds'
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
                ]
            }).id('kubejs:botany_pots/crop/mystical_agriculture/' + type)
        })
    }

    function t6(types) {
        utils.listOf(types).forEach(function (type) {
            e.remove({
                id: 'mysticalagriculture:crops/' + type
            })
            e.recipes.botanypots.crop({
                seed: {
                    item: ma + type + '_seeds'
                },
                categories: [
                    'insanium'
                ],
                growthTicks: 5000,
                display: {
                    block: ma + type + '_crop',
                    properties: {
                        age: 7
                    }
                },
                results: [{
                        chance: 0.75,
                        output: {
                            item: ma + type + '_essence'
                        },
                        minRolls: 1,
                        maxRolls: 3
                    },
                    {
                        chance: 0.03,
                        output: {
                            item: ma + type + '_seeds'
                        },
                        minRolls: 1,
                        maxRolls: 1
                    },
                    {
                        chance: 0.03,
                        output: {
                            item: 'mysticalagriculture:fertilized_essence'
                        },
                        minRolls: 1,
                        maxRolls: 1
                    }
                ]
            }).id('kubejs:botany_pots/crop/mystical_agriculture/' + type)
        })
    }

    function t7(types) {
        utils.listOf(types).forEach(function (type) {
            e.remove({
                id: 'mysticalagriculture:crops/' + type
            })
            e.recipes.botanypots.crop({
                seed: {
                    item: ma + type + '_seeds'
                },
                categories: [
                    'magical'
                ],
                growthTicks: 6000,
                display: {
                    block: ma + type + '_crop',
                    properties: {
                        age: 7
                    }
                },
                results: [{
                        chance: 0.75,
                        output: {
                            item: ma + type + '_essence'
                        },
                        minRolls: 1,
                        maxRolls: 3
                    },
                    {
                        chance: 0.01,
                        output: {
                            item: ma + type + '_seeds'
                        },
                        minRolls: 1,
                        maxRolls: 1
                    },
                    {
                        chance: 0.1,
                        output: {
                            item: 'mysticalagriculture:fertilized_essence'
                        },
                        minRolls: 1,
                        maxRolls: 1
                    }
                ]
            }).id('kubejs:botany_pots/crop/mystical_agriculture/' + type)
        })
    }

    //Tier 1 Crops
    t1([
        'inferium',
        'air',
        'earth',
        'fire',
        'water',
        'dirt',
        'wood',
        'ice',
        'stone'
    ])

    //Tier 2 Crops
    t2([
        'aluminum',
        'chicken',
        'coal',
        'copper',
        'coral',
        'cow',
        'dye',
        'fish',
        'honey',
        'iridium',
        'mystical_flower',
        'nature',
        'nether',
        'pig',
        'rubber',
        'saltpeter',
        'sheep',
        'silicon',
        'slime',
        'squid',
        'sulfur',
        'turtle',
        'sky_stone'
    ])

    //Tier 3 Crops
    t3([
        'azure_silver',
        'brass',
        'bronze',
        'certus_quartz',
        'creeper',
        'crimson_iron',
        'ender_biotite',
        'glowstone',
        'graphite',
        'iron',
        'lead',
        'manasteel',
        'nether_quartz',
        'obsidian',
        'prismarine',
        'quartz_enriched_iron',
        'rabbit',
        'redstone',
        'silver',
        'skeleton',
        'spider',
        'tin',
        'zinc',
        'zombie',
        'lumium',
        'fluorite'
    ])

    //Tier 4 Crops
    t4([
        'azure_electrum',
        'blaze',
        'chrome',
        'constantan',
        'crimson_steel',
        'electrum',
        'elementium',
        'end',
        'enderman',
        'experience',
        'fluix',
        'ghast',
        'gold',
        'invar',
        'lapis_lazuli',
        'mithril',
        'nickel',
        'oratchalcum',
        'osmium',
        'refined_glowstone',
        'refined_obsidian',
        'steel',
        'titanium',
        'tungsten',
        'enderium',
        'compressed_iron',
        'hop_graphite'
    ])

    //Tier 5 Crops
    t5([
        'diamond',
        'emerald',
        'netherite',
        'terrasteel',
        'uraninite',
        'wither_skeleton',
        'platinum',
        'uranium'
    ])

    //Tier 6 Crops
    t6([
        'dragon_egg',
        'nether_star'
    ])

    //Magical Crops
    t7([
        'allthemodium',
        'vibranium',
        'unobtainium'
    ])

    //Botanypots tree functions
    function growTree(mod, name, ...extra) {
        e.recipes.botanypots.crop({
            seed: {
                item: mod + ':' + name + '_sapling'
            },
            categories: [
                'dirt'
            ],
            growthTicks: 2400,
            display: {
                block: mod + ':' + name + '_sapling'
            },
            results: [{
                    chance: 0.5,
                    output: {
                        item: mod + ':' + name + '_log'
                    },
                    minRolls: 1,
                    maxRolls: 1
                },
                {
                    chance: 0.1,
                    output: {
                        item: 'minecraft:stick'
                    },
                    minRolls: 1,
                    maxRolls: 2
                },
                {
                    chance: 0.05,
                    output: {
                        item: mod + ':' + name + '_sapling'
                    },
                    minRolls: 1,
                    maxRolls: 2
                },
                ...extra
            ]
        }).id('kubejs:botany_pots/crop/' + mod + '/' + name)
    }

    function growTreeSnowflake(mod, name, ...extra) {
        e.recipes.botanypots.crop({
            seed: {
                item: mod + ':' + name + '_sapling'
            },
            categories: [
                'dirt'
            ],
            growthTicks: 2400,
            display: {
                block: mod + ':' + name + '_sapling'
            },
            results: [{
                    chance: 0.1,
                    output: {
                        item: 'minecraft:stick'
                    },
                    minRolls: 1,
                    maxRolls: 2
                },
                {
                    chance: 0.05,
                    output: {
                        item: mod + ':' + name + '_sapling'
                    },
                    minRolls: 1,
                    maxRolls: 2
                },
                ...extra
            ]
        }).id('kubejs:botany_pots/crop/' + mod + '/' + name)
    }

    //Vanilla Trees
    growTree('minecraft', 'oak', {
        chance: 0.01,
        output: {
            item: 'minecraft:apple'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('minecraft', 'dark_oak', {
        chance: 0.01,
        output: {
            item: 'minecraft:apple'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('minecraft', 'jungle', {
        chance: 0.01,
        output: {
            item: 'minecraft:cocoa_beans'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('minecraft', 'acacia')
    growTree('minecraft', 'birch')
    growTree('minecraft', 'spruce')

    //SGear Trees
    growTree('silentgear', 'netherwood', {
        "chance": 0.01,
        "output": {
            "item": "silentgear:nether_banana"
        },
        "minRolls": 1,
        "maxRolls": 1
    })

    //F&A Trees
    growTree('forbidden_arcanus', 'cherrywood', {
        chance: 0.01,
        output: {
            item: 'forbidden_arcanus:cherry_peach'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('forbidden_arcanus', 'mysterywood', {
        chance: 0.01,
        output: {
            item: 'minecraft:golden_apple'
        },
        minRolls: 1,
        maxRolls: 1
    })

    //Quark Trees
    growTreeSnowflake('quark', 'blue_blossom', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('quark', 'lavender_blossom', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('quark', 'orange_blossom', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('quark', 'pink_blossom', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('quark', 'yellow_blossom', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    
    //BoP Trees
    growTree('biomesoplenty', 'dead')
    growTree('biomesoplenty', 'fir')
    growTree('biomesoplenty', 'hellbark')
    growTree('biomesoplenty', 'jacaranda')
    growTree('biomesoplenty', 'magic')
    growTree('biomesoplenty', 'mahogany')
    growTree('biomesoplenty', 'palm')
    growTree('biomesoplenty', 'redwood')
    growTree('biomesoplenty', 'umbran')
    growTree('biomesoplenty', 'willow')
    growTreeSnowflake('biomesoplenty', 'flowering_oak', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('biomesoplenty', 'maple', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('biomesoplenty', 'orange_autumn', {
        chance: 0.50,
        output: {
            item: 'minecraft:dark_oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('biomesoplenty', 'origin', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('biomesoplenty', 'pink_cherry', {
        chance: 0.50,
        output: {
            item: 'biomesoplenty:cherry_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('biomesoplenty', 'rainbow_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('biomesoplenty', 'white_cherry', {
        chance: 0.50,
        output: {
            item: 'biomesoplenty:cherry_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('biomesoplenty', 'yellow_autumn', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })

    //BYG trees
    growTree('byg', 'aspen')
    growTree('byg', 'baobab')
    growTree('byg', 'blue_enchanted')
    growTree('byg', 'cika')
    growTree('byg', 'cypress')
    growTree('byg', 'ebony')
    growTree('byg', 'fir')
    growTree('byg', 'green_enchanted')
    growTree('byg', 'mahogany')
    growTree('byg', 'mangrove')
    growTree('byg', 'maple')
    growTree('byg', 'palo_verde')
    growTree('byg', 'pine')
    growTree('byg', 'rainbow_eucalyptus')
    growTree('byg', 'redwood')
    growTree('byg', 'willow')
    growTree('byg', 'witch_hazel')
    growTree('byg', 'zelkova')
    growTreeSnowflake('byg', 'pink_cherry', {
        chance: 0.50,
        output: {
            item: 'byg:cherry_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'white_cherry', {
        chance: 0.50,
        output: {
            item: 'byg:cherry_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('byg', 'holly', {
        chance: 0.01,
        output: {
            item: 'byg:holly_berries'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('byg', 'jacaranda')
    growTreeSnowflake('byg', 'indigo_jacaranda', {
        chance: 0.50,
        output: {
            item: 'byg:jacaranda_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'red_maple', {
        chance: 0.50,
        output: {
            item: 'byg:maple_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'silver_maple', {
        chance: 0.50,
        output: {
            item: 'byg:maple_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('byg', 'skyris', {
        chance: 0.01,
        output: {
            item: 'byg:green_apple'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'blue_spruce', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'brown_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'brown_oak', {
        chance: 0.50,
        output: {
            item: 'minecraft:dark_oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'joshua', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    }, {
        chance: 0.01,
        output: {
            item: 'byg:joshua_fruit'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'orange_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'orange_oak', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    }, {
        chance: 0.01,
        output: {
            item: 'minecraft:apple'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'orange_spruce', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'orchard', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    }, {
        chance: 0.50,
        output: {
            item: 'minecraft:apple'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'red_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'red_oak', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'red_spruce', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'yellow_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeSnowflake('byg', 'yellow_spruce', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })

    //Misc crops
    function miscCrop(mod, name, seed) {
        e.recipes.botanypots.crop({
            seed: {
                item: mod + ':' + name + '_' + seed
            },
            categories: [
                'dirt'
            ],
            growthTicks: 1200,
            display: {
                block: mod + ':' + name + '_crop',
                properties: {
                    age: 7
                }
            },
            results: [{
                    chance: 0.75,
                    output: {
                        item: mod + ':' + name
                    },
                    minRolls: 1,
                    maxRolls: 1
                },
                {
                    chance: 0.05,
                    output: {
                        item: mod + ':' + name + '_' + seed
                    },
                    minRolls: 1,
                    maxRolls: 1
                }
            ]
        }).id('kubejs:botany_pots/crop/' + mod + '/' + name)
    }

    //Ars Nouveau Crops
    miscCrop('ars_nouveau', 'mana_bloom', 'crop')
})