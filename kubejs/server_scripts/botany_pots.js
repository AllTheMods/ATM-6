onEvent('recipes', e => {
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
        'nether_star',
        'nitro_crystal',
    ])

    //Magical Crops
    t7([
        'allthemodium',
        'vibranium',
        'unobtainium'
    ])

    //Botany Trees 
    //KubeJS code relevant to botany pots: https://github.com/KubeJS-Mods/KubeJS/blob/2dd08e1f24b9619e613f5998f46eed69a4cf964f/common/src/main/java/dev/latvian/kubejs/recipe/mod/BotanyPotsCropRecipeJS.java#L44
    const growTreeUniversal = (mod, name, raredrops, soil, log) => {
        const dropchance_log = 0.5
        const dropchance_stick = 0.1
        const dropchance_sapling = 0.05
        const dropchance_raredrops = 0.01

        const results = [
            Item.of(log || 'dirt').chance(dropchance_log),
            {
                item: Item.of('minecraft:stick').chance(dropchance_stick),
                maxRolls: 2
            },
            {
                item: Item.of(mod + ':' + name + '_sapling').chance(dropchance_sapling),
                maxRolls: 2
            }
        ]

        if (raredrops) {
            results.push({
                item: Item.of(raredrops).chance(dropchance_raredrops),
                maxRolls: 2
            })
        }

        e.recipes.botanypots.crop(results, mod + ':' + name + '_sapling').categories([soil || (mod + ':' + name + '_log')])
    }
    //Ars Nouveau Mana Bloom
    const results = [
        Item.of('ars_nouveau:mana_bloom').chance(0.75),
        {
            item: Item.of('ars_nouveau:mana_bloom_crop').chance(0.05),
            maxRolls: 2
        }
    ]
    e.recipes.botanypots.crop(results, 'ars_nouveau:mana_bloom_crop').categories(['dirt'])
})