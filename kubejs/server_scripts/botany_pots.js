events.listen('recipes', function (e) {
    //Soils
    function makeFarmland(input, categories, growthModifier) {
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
        })
    }

    function makeSoil(input, categories, growthModifier) {
        e.recipes.botanypots.soil({
            input: {
                item: input
            },
            display: {
                block: input
            },
            categories: categories,
            growthModifier: growthModifier
        })
    }

    makeFarmland('mysticalagradditions:insanium_farmland', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium'], 0.50)
    makeSoil('kubejs:magical_soil', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium', 'magical'], 0.75)

    //MA Crop functions
    var ma = 'mysticalagriculture:'

    function t1(type) {
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
        })
    }

    function t2(type) {
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
        })
    }

    function t3(type) {
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
        })
    }

    function t4(type) {
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
        })
    }

    function t5(type) {
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
        })
    }

    function t6(type) {
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
        })
    }

    function t7(type) {
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
        })
    }

    //Tier 1 Crops
    t1('inferium')
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
    t4('enderium')
    t4('compressed_iron')
    t4('hop_graphite')

    //Tier 5 Crops
    t5('diamond')
    t5('emerald')
    t5('netherite')
    t5('terrasteel')
    t5('uraninite')
    t5('wither_skeleton')
    t5('platinum')
    t5('uranium')

    //Tier 6 Crops
    t6('dragon_egg')
    t6('nether_star')

    //Magical Crops
    t7('allthemodium')
    t7('vibranium')
    t7('unobtainium')

    //Botanypots tree functions
    function growTree(mod, name) {
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
                }
            ]
        })
    }

    function growTreeExtra(mod, name, ...extra) {
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
        })
    }

    function growTreeExtraBoP(mod, name, ...extra) {
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
        })
    }

    function growTreeSF(name) {
        e.recipes.botanypots.crop({
            seed: {
                item: 'simplefarming:' + name + '_sapling'
            },
            categories: [
                'dirt'
            ],
            growthTicks: 2400,
            display: {
                block: 'simplefarming:' + name + '_sapling'
            },
            results: [{
                    chance: 0.5,
                    output: {
                        item: 'simplefarming:fruit_log'
                    },
                    minRolls: 1,
                    maxRolls: 1
                },
                {
                    chance: 0.05,
                    output: {
                        item: 'simplefarming:' + name + '_sapling'
                    },
                    minRolls: 1,
                    maxRolls: 2
                },
                {
                    chance: 0.05,
                    output: {
                        item: 'simplefarming:' + name
                    },
                    minRolls: 1,
                    maxRolls: 1
                }
            ]
        })
    }
    growTreeExtra('minecraft', 'oak', {
        chance: 0.01,
        output: {
            item: 'minecraft:apple'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtra('minecraft', 'dark_oak', {
        chance: 0.01,
        output: {
            item: 'minecraft:apple'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtra('minecraft', 'jungle', {
        chance: 0.01,
        output: {
            item: 'minecraft:cocoa_beans'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtra('forbidden_arcanus', 'cherrywood', {
        chance: 0.01,
        output: {
            item: 'forbidden_arcanus:cherry_peach'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtra('forbidden_arcanus', 'mysterywood', {
        chance: 0.01,
        output: {
            item: 'minecraft:golden_apple'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('minecraft', 'acacia')
    growTree('minecraft', 'birch')
    growTree('minecraft', 'spruce')
    /*
    growTree('quark', 'blue_blossom')
    growTree('quark', 'lavender_blossom')
    growTree('quark', 'orange_blossom')
    growTree('quark', 'pink_blossom')
    growTree('quark', 'yellow_blossom')
    growTreeSF('apple')
    growTreeSF('apricot')
    growTreeSF('banana')
    growTreeSF('cherry')
    growTreeSF('mango')
    growTreeSF('olive')
    growTreeSF('orange')
    growTreeSF('pear')
    growTreeSF('plum')
    */
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
    growTreeExtraBoP('biomesoplenty', 'flowering_oak', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('biomesoplenty', 'maple', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('biomesoplenty', 'orange_autumn', {
        chance: 0.50,
        output: {
            item: 'minecraft:dark_oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('biomesoplenty', 'origin', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('biomesoplenty', 'pink_cherry', {
        chance: 0.50,
        output: {
            item: 'biomesoplenty:cherry_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('biomesoplenty', 'rainbow_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('biomesoplenty', 'white_cherry', {
        chance: 0.50,
        output: {
            item: 'biomesoplenty:cherry_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('biomesoplenty', 'yellow_autumn', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })

    // Biomes You'll Go trees
    growTree('byg', 'aspen')
    growTree('byg', 'baobab')
    growTree('byg', 'blue_enchanted')
    growTreeExtraBoP('byg', 'pink_cherry', {
        chance: 0.50,
        output: {
            item: 'byg:cherry_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'white_cherry', {
        chance: 0.50,
        output: {
            item: 'byg:cherry_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('byg', 'cika')
    growTree('byg', 'cypress')
    growTree('byg', 'ebony')
    growTree('byg', 'fir')
    growTree('byg', 'green_enchanted')
    growTreeExtra('byg', 'holly', {
        chance: 0.01,
        output: {
            item: 'byg:holly_berries'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('byg', 'jacaranda')
    growTreeExtraBoP('byg', 'indigo_jacaranda', {
        chance: 0.50,
        output: {
            item: 'byg:jacaranda_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('byg', 'mahogany')
    growTree('byg', 'mangrove')
    growTree('byg', 'maple')
    growTreeExtraBoP('byg', 'red_maple', {
        chance: 0.50,
        output: {
            item: 'byg:maple_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'silver_maple', {
        chance: 0.50,
        output: {
            item: 'byg:maple_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('byg', 'palo_verde')
    growTree('byg', 'pine')
    growTree('byg', 'rainbow_eucalyptus')
    growTree('byg', 'redwood')
    growTreeExtra('byg', 'skyris', {
        chance: 0.01,
        output: {
            item: 'byg:green_apple'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTree('byg', 'willow')
    growTree('byg', 'witch_hazel')
    growTree('byg', 'zelkova')
    growTreeExtraBoP('byg', 'blue_spruce', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'brown_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'brown_oak', {
        chance: 0.50,
        output: {
            item: 'minecraft:dark_oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'joshua', {
                chance: 0.50,
                output: {
                    item: 'minecraft:oak_log'
                },
                minRolls: 1,
                maxRolls: 1
            },
            {
                chance: 0.01,
                output: {
                    item: 'byg:joshua_fruit'
                },
                minRolls: 1,
                maxRolls: 1
            })
    growTreeExtraBoP('byg', 'orange_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'orange_oak', {
                chance: 0.50,
                output: {
                    item: 'minecraft:oak_log'
                },
                minRolls: 1,
                maxRolls: 1
            },
            {
                chance: 0.01,
                output: {
                    item: 'minecraft:apple'
                },
                minRolls: 1,
                maxRolls: 1
            })
    growTreeExtraBoP('byg', 'orange_spruce', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'orchard', {
                chance: 0.50,
                output: {
                    item: 'minecraft:oak_log'
                },
                minRolls: 1,
                maxRolls: 1
            },
            {
                chance: 0.50,
                output: {
                    item: 'minecraft:apple'
                },
                minRolls: 1,
                maxRolls: 1
            })
    growTreeExtraBoP('byg', 'red_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'red_oak', {
        chance: 0.50,
        output: {
            item: 'minecraft:oak_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'red_spruce', {
        chance: 0.50,
        output: {
            item: 'minecraft:spruce_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'yellow_birch', {
        chance: 0.50,
        output: {
            item: 'minecraft:birch_log'
        },
        minRolls: 1,
        maxRolls: 1
    })
    growTreeExtraBoP('byg', 'yellow_spruce', {
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
        })
    }

    miscCrop('ars_nouveau', 'mana_bloom', 'crop')
})