events.listen('recipes', function(e) {
    var mekCrush = e.recipes.mekanism.crushing
    var mekEnrich = e.recipes.mekanism.enriching
    var pedCrush = e.recipes.pedestals.pedestal_crushing
    var pedSaw = e.recipes.pedestals.pedestal_sawing
    var mekSaw = e.recipes.mekanism.sawing

    function energize(ingredient, result, rCount, power) {
        e.recipes.powah.energizing({
            ingredients: ingredient,
            energy: power,
            result: {
                item: result,
                count: rCount
            }
        })
    }

    function pressure(inputs, result, rCount, pressure) {
        e.recipes.pneumaticcraft.pressure_chamber({
            inputs: inputs,
            pressure: pressure,
            results: [{
                item: result,
                count: rCount
            }]
        })
    }

    function kjsShaped(result, pattern, ingredients, count) {
        e.shaped(item.of(result, count != null ? count : 1), pattern, ingredients)
    }

    function kjsShapeless(result, ingredients, count) {
        e.shapeless(item.of(result, count != null ? count : 1), ingredients)
    }

    //Make bio fuel use tags instead of invidual items
    e.remove({
        output: 'mekanism:bio_fuel'
    })
    var bioFuels = [2, 4, 5, 7, 8]
    utils.listOf(bioFuels).forEach(function(bioFuel) {
        mekCrush(item.of('mekanism:bio_fuel', bioFuel), '#misctags:biofuel' + bioFuel)
    })

    //Powah recipes
    energize([{
        tag: 'forge:storage_blocks/iron'
    }, {
        tag: 'forge:storage_blocks/gold'
    }], 'powah:energized_steel_block', 2, 90000)
    energize([{
        item: 'botania:blaze_block'
    }], 'powah:blazing_crystal_block', 1, 810000)
    energize([{
        tag: 'forge:storage_blocks/diamond'
    }], 'powah:niotic_crystal_block', 1, 2700000)
    energize([{
        tag: 'forge:storage_blocks/emerald'
    }], 'powah:spirited_crystal_block', 1, 9000000)

    //Misc recipes
    kjsShaped('computercraft:turtle_advanced', [
        'III',
        'ICI',
        'IAI'
    ], {
        I: '#forge:ingots/gold',
        C: 'computercraft:computer_advanced',
        A: '#forge:ingots/allthemodium'
    })
    kjsShaped('computercraft:turtle_normal', [
        'III',
        'ICI',
        'IAI'
    ], {
        I: '#forge:ingots/iron',
        C: 'computercraft:computer_normal',
        A: '#forge:ingots/allthemodium'
    })
    kjsShaped('minecraft:totem_of_undying', [
        ' E ',
        'GVG',
        ' G '
    ], {
        E: 'compressium:emerald_3',
        G: '#forge:storage_blocks/gold',
        V: 'minecraft:villager_spawn_egg'
    })
    e.shaped(item.of('enviromats:alabaster_magenta', 8), [
        'AAA',
        'AMA',
        'AAA'
    ], {
        A: '#forge:alabaster',
        M: '#forge:dyes/magenta'
    })
    e.shaped(item.of('minecraft:ladder', 4), [
        'S S',
        'SPS',
        'S S'
    ], {
        S: '#forge:rods',
        P: '#minecraft:planks'
    })
    e.smelting(item.of('appliedenergistics2:certus_quartz_crystal'), '#forge:ores/certus_quartz').xp(1)
    e.smelting(item.of('alltheores:platinum_ingot'), 'create:crushed_platinum_ore').xp(1)
    e.smelting(item.of('minecraft:glass'), '#forge:sand').xp(.1)
    e.shapeless(item.of('minecraft:clay_ball', 4), 'minecraft:clay')
    e.shapeless(item.of('minecraft:quartz', 4), 'minecraft:quartz_block')
    kjsShaped('appliedenergistics2:silicon_press', [
        'EEE',
        'EAE',
        'EEE'
    ], {
        'E': 'mysticalagriculture:iron_essence',
        'A': 'mysticalagriculture:silicon_essence'
    })
    kjsShaped('appliedenergistics2:calculation_processor_press', [
        'EEE',
        'EAE',
        'EEE'
    ], {
        'E': 'mysticalagriculture:iron_essence',
        'A': 'mysticalagriculture:certus_quartz_essence'
    })
    kjsShaped('appliedenergistics2:engineering_processor_press', [
        'EEE',
        'EAE',
        'EEE'
    ], {
        'E': 'mysticalagriculture:iron_essence',
        'A': 'mysticalagriculture:diamond_essence'
    })
    kjsShaped('appliedenergistics2:logic_processor_press', [
        'EEE',
        'EAE',
        'EEE'
    ], {
        'E': 'mysticalagriculture:iron_essence',
        'A': 'mysticalagriculture:gold_essence'
    })
    kjsShaped('minecraft:hopper', [
        'ILI',
        'ILI',
        ' I '
    ], {
        'L': '#minecraft:logs',
        'I': '#forge:ingots/iron'
    })
    kjsShaped('minecraft:stick', [
        'L',
        'L'
    ], {
        'L': '#minecraft:logs'
    }, 16)
    kjsShaped('minecraft:water_bucket', [
        ' C ',
        'CBC',
        ' C '
    ], {
        'C': 'resourcefulbees:water_honeycomb',
        'B': 'minecraft:bucket'
    })
    kjsShaped('minecraft:lava_bucket', [
        ' C ',
        'CBC',
        ' C '
    ], {
        'C': 'resourcefulbees:lava_honeycomb',
        'B': 'minecraft:bucket'
    })
    kjsShaped('appliedenergistics2:sky_stone_block', [
        'BSB',
        'SBS',
        'BSB'
    ], {
        'S': 'minecraft:stone',
        'B': 'minecraft:blackstone'
    }, 4)
    kjsShaped('biomesoplenty:flesh', [
        'FFF',
        'FFF',
        'FFF'
    ], {
        'F': 'minecraft:rotten_flesh',
    })
    kjsShaped('ctiers:centrifuge_casing_tier_creative', [
        'IRG',
        'RTR',
        'DCE'
    ], {
        'I': '#ctiers:quadruple_compressed_iron_blocks_2',
        'R': 'minecraft:redstone',
        'G': '#ctiers:quadruple_compressed_gold_blocks_2',
        'T': 'ctiers:centrifuge_casing_tier_5',
        'D': '#ctiers:quadruple_compressed_diamond_blocks_2',
        'E': '#ctiers:quadruple_compressed_emerald_blocks_2',
        'C': 'mysticalagradditions:creative_essence'

    }, 3)
    kjsShaped('ctiers:centrifuge_controller_tier_creative', [
        'ICG',
        'STS',
        'DME'
    ], {
        'I': '#ctiers:sextuple_compressed_iron_blocks_2',
        'C': 'ctiers:centrifuge_casing_tier_creative',
        'G': '#ctiers:sextuple_compressed_gold_blocks_2',
        'T': 'ctiers:centrifuge_controller_tier_5',
        'S': 'atmadditions:dragon_soul',
        'D': '#ctiers:sextuple_compressed_diamond_blocks_2',
        'E': '#ctiers:sextuple_compressed_emerald_blocks_2',
        'M': 'compressium:cobblestone_9'

    }, )
    kjsShaped('astralsorcery:aquamarine', [
        'AAA',
        'A A',
        'AAA'
    ], {
        'A': 'mysticalagriculture:aquamarine_essence',
    }, 8)
    e.recipes.industrialforegoing.dissolution_chamber({
        input: [{
            tag: 'minecraft:planks'
        }],
        inputFluid: '{FluidName:\'immersiveengineering:creosote\',Amount:125}',
        processingTime: 1,
        output: {
            item: 'immersiveengineering:treated_wood_horizontal',
            count: 1
        }
    })

    mekCrush(item.of('minecraft:brick', 4), 'minecraft:bricks')
    mekCrush(item.of('minecraft:rotten_flesh', 9), 'biomesoplenty:flesh')
    mekCrush(item.of('minecraft:magma_cream', 4), 'minecraft:magma_block')
    mekCrush(item.of('minecraft:blaze_powder', 4), '#forge:rods/blaze')
    mekCrush(item.of('minecraft:quartz', 4), '#forge:storage_blocks/quartz')
    mekEnrich(item.of('minecraft:blaze_rod'), [item.of('minecraft:blaze_powder', 4)])
    mekEnrich(item.of('powah:uraninite', 2), 'powah:uraninite_ore_poor')
    mekEnrich(item.of('powah:uraninite', 4), 'powah:uraninite_ore')
    mekEnrich(item.of('powah:uraninite', 8), 'powah:uraninite_ore_dense')

    mekSaw(item.of('byg:aspen_planks', 6), 'byg:aspen_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:aspen_planks', 6), 'byg:stripped_aspen_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:baobab_planks', 6), 'byg:baobab_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:baobab_planks', 6), 'byg:stripped_baobab_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:blue_enchanted_planks', 6), 'byg:blue_enchanted_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:blue_enchanted_planks', 6), 'byg:stripped_blue_enchanted_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cherry_planks', 6), 'byg:cherry_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cherry_planks', 6), 'byg:stripped_cherry_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cika_planks', 6), 'byg:cika_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cika_planks', 6), 'byg:stripped_cika_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cypress_planks', 6), 'byg:cypress_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cypress_planks', 6), 'byg:stripped_cypress_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:ebony_planks', 6), 'byg:ebony_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:ebony_planks', 6), 'byg:stripped_ebony_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:ether_planks', 6), 'byg:ether_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:ether_planks', 6), 'byg:stripped_ether_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:fir_planks', 6), 'byg:fir_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:fir_planks', 6), 'byg:stripped_fir_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:green_enchanted_planks', 6), 'byg:green_enchanted_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:green_enchanted_planks', 6), 'byg:stripped_green_enchanted_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:holly_planks', 6), 'byg:holly_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:holly_planks', 6), 'byg:stripped_holly_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:jacaranda_planks', 6), 'byg:jacaranda_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:jacaranda_planks', 6), 'byg:stripped_jacaranda_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:lament_planks', 6), 'byg:lament_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:lament_planks', 6), 'byg:stripped_lament_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:mahogany_planks', 6), 'byg:mahogany_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:mahogany_planks', 6), 'byg:stripped_mahogany_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:mangrove_planks', 6), 'byg:mangrove_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:mangrove_planks', 6), 'byg:stripped_mangrove_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:maple_planks', 6), 'byg:maple_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:maple_planks', 6), 'byg:stripped_maple_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:nightshade_planks', 6), 'byg:nightshade_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:nightshade_planks', 6), 'byg:stripped_nightshade_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:palm_planks', 6), 'byg:palm_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:palm_planks', 6), 'byg:stripped_palm_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('minecraft:birch_planks', 6), 'byg:palo_verde_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('minecraft:birch_planks', 6), 'byg:stripped_palo_verde_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:pine_planks', 6), 'byg:pine_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:pine_planks', 6), 'byg:stripped_pine_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:rainbow_eucalyptus_planks', 6), 'byg:rainbow_eucalyptus_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:rainbow_eucalyptus_planks', 6), 'byg:stripped_rainbow_eucalyptus_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:redwood_planks', 6), 'byg:redwood_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:redwood_planks', 6), 'byg:stripped_redwood_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:skyris_planks', 6), 'byg:skyris_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:skyris_planks', 6), 'byg:stripped_skyris_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:willow_planks', 6), 'byg:willow_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:willow_planks', 6), 'byg:stripped_willow_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:witch_hazel_planks', 6), 'byg:witch_hazel_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:witch_hazel_planks', 6), 'byg:stripped_witch_hazel_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:zelkova_planks', 6), 'byg:zelkova_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:zelkova_planks', 6), 'byg:stripped_zelkova_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('minecraft:oak_planks', 6), 'byg:withering_oak_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('mekanism:sawdust', 8), 'byg:imbued_nightshade_log')

    //Creative recipes
    energize([{
        item: 'appliedenergistics2:dense_energy_cell'
    }], 'appliedenergistics2:creative_energy_cell', 1, 420000000)
    energize([{
        item: 'refinedstorage:controller'
    }], 'refinedstorage:creative_controller', 1, 420000000)
    energize([{
        item: 'refinedstorageaddons:wireless_crafting_grid'
    }], 'refinedstorageaddons:creative_wireless_crafting_grid', 1, 420000)
    energize([{
        item: 'refinedstorage:wireless_crafting_monitor'
    }], 'refinedstorage:creative_wireless_crafting_monitor', 1, 420000)
    energize([{
        item: 'refinedstorage:wireless_fluid_grid'
    }], 'refinedstorage:creative_wireless_fluid_grid', 1, 420000)
    energize([{
        item: 'refinedstorage:wireless_grid'
    }], 'refinedstorage:creative_wireless_grid', 1, 420000)
    e.shapeless(item.of('botania:mana_tablet', {
        mana: 500000,
        creative: 1
    }), ['botania:creative_pool'])
    e.shapeless('botania:creative_pool', [item.of('botania:mana_tablet', {
        mana: 500000,
        creative: 1
    })])
    pressure([{
            'type': 'pneumaticcraft:stacked_item',
            'item': 'mysticalagradditions:insanium_block',
            'count': 8
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'tag': 'forge:pellets/antimatter',
            'count': 6
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'botania:gaia_ingot',
            'count': 3
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'tag': 'forge:storage_blocks/allthemodium',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'tag': 'forge:storage_blocks/vibranium',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'tag': 'forge:storage_blocks/unobtainium',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'elementalcraft:purerock',
            'count': 8
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'xreliquary:angelheart_vial',
            'count': 6
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'mahoutsukai:fae_essence',
            'count': 1
        }
    ], 'mysticalagradditions:creative_essence', 1, 4.9)
    kjsShaped('botania:creative_pool', [
        'CSC',
        'CPC',
        'CWC'
    ], {
        'C': 'mysticalagradditions:creative_essence',
        'P': 'botania:fabulous_pool',
        'S': 'kubejs:rune_of_sins',
        'W': 'kubejs:mass_of_wills'
    })
    kjsShaped('pneumaticcraft:creative_compressor', [
        'CLC',
        'FCA',
        'CEC'
    ], {
        'C': 'mysticalagradditions:creative_essence',
        'L': 'pneumaticcraft:advanced_liquid_compressor',
        'A': 'pneumaticcraft:advanced_air_compressor',
        'E': 'pneumaticcraft:electrostatic_compressor',
        'F': 'pneumaticcraft:flux_compressor'
    })
    kjsShaped('rats:rat_upgrade_creative', [
        'HUH',
        'CCC',
        'HUH'
    ], {
        'C': 'mysticalagradditions:creative_essence',
        'H': 'rats:creative_cheese',
        'U': 'rats:rat_upgrade_nonbeliever'
    })

    //SGear salvaging
    /* Disabled in removals.js for issue #349
      function salvage(item, results) {
        e.recipes.silentgear.salvaging({
          ingredient: {
            item: item
          },
          results: results
        })
      }
      salvage('minecraft:netherite_sword', [{
          'item': 'minecraft:netherite_ingot',
          'count': 1
        },
        {
          'item': 'minecraft:stick',
          'count': 1
        },
        {
          'item': 'minecraft:diamond',
          'count': 2
        }
      ])
      salvage('minecraft:netherite_shovel', [{
          'item': 'minecraft:netherite_ingot',
          'count': 1
        },
        {
          'item': 'minecraft:stick',
          'count': 2
        },
        {
          'item': 'minecraft:diamond',
          'count': 1
        }
      ])
      salvage('minecraft:netherite_pickaxe', [{
          'item': 'minecraft:netherite_ingot',
          'count': 1
        },
        {
          'item': 'minecraft:stick',
          'count': 2
        },
        {
          'item': 'minecraft:diamond',
          'count': 3
        }
      ])
      salvage('minecraft:netherite_hoe', [{
          'item': 'minecraft:netherite_ingot',
          'count': 1
        },
        {
          'item': 'minecraft:stick',
          'count': 2
        },
        {
          'item': 'minecraft:diamond',
          'count': 2
        }
      ])
      salvage('minecraft:netherite_axe', [{
          'item': 'minecraft:netherite_ingot',
          'count': 1
        },
        {
          'item': 'minecraft:stick',
          'count': 2
        },
        {
          'item': 'minecraft:diamond',
          'count': 3
        }
      ])
      salvage('minecraft:netherite_boots', [{
          'item': 'minecraft:netherite_ingot',
          'count': 1
        },
        {
          'item': 'minecraft:diamond',
          'count': 4
        }
      ])
      salvage('minecraft:netherite_leggings', [{
          'item': 'minecraft:netherite_ingot',
          'count': 1
        },
        {
          'item': 'minecraft:diamond',
          'count': 7
        }
      ])
      salvage('minecraft:netherite_chestplate', [{
          'item': 'minecraft:netherite_ingot',
          'count': 1
        },
        {
          'item': 'minecraft:diamond',
          'count': 8
        }
      ])
      salvage('minecraft:netherite_helmet', [{
          'item': 'minecraft:netherite_ingot',
          'count': 1
        },
        {
          'item': 'minecraft:diamond',
          'count': 5
        }
      ])
      salvage('minecraft:anvil', [{
        'item': 'minecraft:iron_ingot',
        'count': 31
      }])
      salvage('minecraft:diamond_horse_armor', [{
        'item': 'minecraft:diamond',
        'count': 7
      }])
      salvage('minecraft:golden_horse_armor', [{
        'item': 'minecraft:gold_ingot',
        'count': 7
      }])
      salvage('minecraft:iron_horse_armor', [{
        'item': 'minecraft:iron_ingot',
        'count': 7
      }])
      salvage('minecraft:leather_horse_armor', [{
        'item': 'minecraft:leather',
        'count': 7
      }])
      salvage('minecraft:minecart', [{
        'item': 'minecraft:iron_ingot',
        'count': 5
      }])
      salvage('minecraft:saddle', [{
          'item': 'minecraft:leather',
          'count': 5
        },
        {
          'item': 'minecraft:iron_nugget',
          'count': 2
        }
      ])
    */
    //Pedestal stuff
    function coinUpgrade(name, type) {
        if (type == 'rf') {
            e.recipes.allthemodium.atmshapeless_crafting({
                ingredients: [{
                        item: 'pedestals:coin/' + name
                    },
                    {
                        tag: 'forge:storage_blocks/redstone'
                    }
                ],
                result: {
                    item: 'pedestals:coin/' + type + name
                }
            })
        } else {
            e.recipes.allthemodium.atmshapeless_crafting({
                ingredients: [{
                        item: 'pedestals:coin/' + name
                    },
                    {
                        item: 'minecraft:experience_bottle'
                    }
                ],
                result: {
                    item: 'pedestals:coin/' + type + name
                }
            })
        }
    }
    coinUpgrade('import', 'rf')
    coinUpgrade('export', 'rf')
    coinUpgrade('crusher', 'rf')
    coinUpgrade('smelter', 'rf')
    coinUpgrade('sawmill', 'rf')
    coinUpgrade('quarry', 'rf')
    coinUpgrade('quarryb', 'rf')
    coinUpgrade('dropper', 'xp')
    coinUpgrade('magnet', 'xp')

    e.remove({
        output: 'pedestals:dustflour'
    })

    function pedestalCrush(result, count, ingredient, type) {
        if (type == 1) {
            pedCrush({
                ingredient: {
                    tag: ingredient
                },
                result: {
                    item: result,
                    count: count
                }
            })
        } else {
            pedCrush({
                ingredient: {
                    item: ingredient
                },
                result: {
                    item: result,
                    count: count
                }
            })
        }
    }

    function pedestalSaw(result, count, ingredient, type) {
        if (type == 1) {
            pedSaw({
                ingredient: {
                    tag: ingredient
                },
                result: {
                    item: result,
                    count: count
                }
            })
        } else {
            pedSaw({
                ingredient: {
                    item: ingredient
                },
                result: {
                    item: result,
                    count: count
                }
            })
        }
    }
    e.remove({
        id: 'appliedenergistics2:grinder/flour'
    })
    e.remove({
        output: '#minecraft:signs',
        type: 'pedestals:pedestal_sawing'
    })
    e.remove({
        output: '#minecraft:wooden_stairs',
        type: 'pedestals:pedestal_sawing'
    })
    e.remove({
        output: '#minecraft:wooden_slabs',
        type: 'pedestals:pedestal_sawing'
    })
    e.remove({
        output: '#minecraft:wooden_trapdoors',
        type: 'pedestals:pedestal_sawing'
    })
    e.remove({
        output: '#minecraft:wooden_pressure_plates',
        type: 'pedestals:pedestal_sawing'
    })
    e.remove({
        output: 'minecraft:stick',
        type: 'pedestals:pedestal_sawing'
    })
    pedestalCrush('pamhc2foodcore:flouritem', 1, 'forge:flour_plants', 1)
    pedestalCrush('appliedenergistics2:fluix_dust', 1, 'appliedenergistics2:fluix_crystal', 0)
    pedestalCrush('appliedenergistics2:certus_quartz_dust', 1, 'forge:gems/certus_quartz', 1)
    pedestalCrush('mekanism:dust_quartz', 1, 'forge:gems/quartz', 1)
    pedestalSaw('mekanism:sawdust', 1, 'forge:rods/wooden', 1)
    pedestalSaw('minecraft:stick', 4, 'minecraft:planks', 1)
    pedestalSaw('minecraft:stick', 2, 'minecraft:wooden_slabs', 1)
    e.recipes.appliedenergistics2.grinder({
        input: {
            tag: 'forge:flour_plants'
        },
        result: {
            primary: {
                item: 'pamhc2foodcore:flouritem',
                count: 1
            }
        },
        turns: 8
    })
    //Exrastorage fixes
    e.remove({
        mod: 'extrastorage'
    })

    function extraBlock(size) {
        kjsShaped('extrastorage:block_' + size, [
            'QPQ',
            'QCQ',
            'QRQ'
        ], {
            Q: 'refinedstorage:quartz_enriched_iron',
            C: 'refinedstorage:machine_casing',
            R: '#forge:dusts/redstone',
            P: 'extradisks:' + size + '_storage_part'
        })
    }
    extraBlock('256k')
    extraBlock('1024k')
    extraBlock('4096k')
    extraBlock('16384k')
    extraBlock('16384k_fluid')
    extraBlock('65536k_fluid')
    extraBlock('262144k_fluid')
    extraBlock('1048576k_fluid')
    kjsShaped('extrastorage:iron_crafter', [
        'B B',
        'PCP',
        'B B'
    ], {
        B: '#forge:storage_blocks/iron',
        P: 'refinedstorage:improved_processor',
        C: '#refinedstorage:crafter'
    })
    kjsShaped('extrastorage:gold_crafter', [
        'B B',
        'PCP',
        'B B'
    ], {
        B: '#forge:storage_blocks/gold',
        P: 'refinedstorage:advanced_processor',
        C: 'extrastorage:iron_crafter'
    })
    kjsShaped('extrastorage:diamond_crafter', [
        'B B',
        'PCP',
        'B B'
    ], {
        B: '#forge:storage_blocks/diamond',
        P: 'refinedstorage:advanced_processor',
        C: 'extrastorage:gold_crafter'
    })
    kjsShaped('extrastorage:netherite_crafter', [
        'BBB',
        'PCP',
        'BBB'
    ], {
        B: '#forge:ingots/netherite',
        P: 'refinedstorage:advanced_processor',
        C: 'extrastorage:diamond_crafter'
    })
    kjsShaped('extrastorage:advanced_exporter', [
        ' T ',
        'PCP',
        ' T '
    ], {
        T: 'minecraft:redstone_torch',
        P: 'refinedstorage:improved_processor',
        C: 'refinedstorage:exporter'
    })
    kjsShaped('extrastorage:advanced_importer', [
        ' T ',
        'PCP',
        ' T '
    ], {
        T: 'minecraft:redstone_torch',
        P: 'refinedstorage:improved_processor',
        C: 'refinedstorage:importer'
    })
    //Reliquary changes
    e.remove({
        output: 'xreliquary:fertile_lily_pad',
        type: 'minecraft:crafting_shapeless'
    })
    kjsShaped('xreliquary:fertile_lily_pad', [
        'ESE',
        'FLF',
        'ESE'
    ], {
        E: 'xreliquary:fertile_essence',
        S: 'mysticalagriculture:supremium_growth_accelerator',
        L: 'minecraft:lily_pad',
        F: 'mysticalagriculture:mystical_fertilizer'
    })
    //NBT Resets
    var resetNBT = [
        'rftoolsbase:filter_module',
        'rftoolspower:dimensionalcell_simple',
        'rftoolspower:dimensionalcell',
        'rftoolspower:dimensionalcell_advanced',
        'rftoolspower:powercell_card',
        'rftoolsutility:syringe'
    ]
    utils.listOf(resetNBT).forEach(function(reset) {
        e.shapeless(item.of(reset), reset)
    })

    var tiersPowah = [
        'starter',
        'basic',
        'hardened',
        'blazing',
        'niotic',
        'spirited',
        'nitro'
    ]
    var typesPowah = [
        'energy_cell',
        'reactor',
        'furnator',
        'magmator',
        'thermo_generator',
        'solar_panel',
        'player_transmitter',
        'energy_hopper',
        'energy_discharger',
        'energizing_rod'
    ]
    utils.listOf(typesPowah).forEach(function(type) {
        utils.listOf(tiersPowah).forEach(function(tier) {
            e.shapeless(item.of('powah:' + type + '_' + tier), 'powah:' + type + '_' + tier)
        })
    })
    var solars = [
        '1',
        '2',
        '3',
        '4',
        '5',
        'custom_allthemodium',
        'custom_vibranium',
        'custom_unobtainium'
    ]
    utils.listOf(solars).forEach(function(solar) {
        e.shapeless(item.of('solarflux:sp_' + solar), 'solarflux:sp_' + solar)
    })
    //Smithing stuff
    function smithing(result, base, addition) {
        e.recipes.minecraft.smithing({
            'base': {
                'item': base
            },
            'addition': {
                'item': addition
            },
            'result': {
                'item': result
            }
        })
    }
    smithing('metalbarrels:wood_to_netherite', 'metalbarrels:wood_to_obsidian', 'minecraft:netherite_ingot')
    //Jumbo Furnace
    function jumbo(ingredients, result, xp) {
        e.recipes.jumbofurnace.jumbo_smelting({
            'ingredients': ingredients,
            'result': {
                'item': result
            },
            'experience': xp
        })
    }
    jumbo(
        [{
                'type': 'forge:nbt',
                'item': 'storagedrawers:emerald_storage_upgrade',
                'count': 16
            },
            {
                'type': 'jumbofurnace:tag_stack',
                'tag': 'forge:ingots/unobtainium',
                'count': 2
            },
            {
                'type': 'jumbofurnace:tag_stack',
                'tag': 'forge:ingots/allthemodium',
                'count': 4
            },
            {
                'type': 'jumbofurnace:tag_stack',
                'tag': 'forge:ender_pearls',
                'count': 16
            }
        ],
        'storagedrawers:creative_storage_upgrade', 5
    )
    jumbo(
        [{
                'type': 'jumbofurnace:tag_stack',
                'tag': 'forge:cheese_block',
                'count': 64
            },
            {
                'type': 'jumbofurnace:tag_stack',
                'tag': 'forge:ingots/vibranium',
                'count': 1
            }
        ],
        'rats:creative_cheese', 5
    )
    //Quark marble to Astral Sorcery Marble
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