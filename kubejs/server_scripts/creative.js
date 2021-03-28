events.listen('recipes', function(e) {
    //functions
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

    function jumbo(ingredients, result, xp) {
        e.recipes.jumbofurnace.jumbo_smelting({
            'ingredients': ingredients,
            'result': {
                'item': result
            },
            'experience': xp
        })
    }

    function modifyShaped(result, count, pattern, ingridients) {
        e.remove({
            output: result,
            type: 'minecraft:crafting_shaped'
        })
        e.shaped(item.of(result, count),
            pattern,
            ingridients
        ).id(`kubejs_${result}`)
    }

    //Shaped Recipes
    e.shaped('ctiers:centrifuge_casing_tier_creative', [
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
    e.shaped('ctiers:centrifuge_controller_tier_creative', [
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
    e.shaped('botania:creative_pool', [
        'CSC',
        'CPC',
        'CWC'
    ], {
        'C': 'mysticalagradditions:creative_essence',
        'P': 'botania:fabulous_pool',
        'S': 'kubejs:rune_of_sins',
        'W': 'kubejs:mass_of_wills'
    })
    e.shaped('pneumaticcraft:creative_compressor', [
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
    e.shaped('rats:rat_upgrade_creative', [
        'HUH',
        'CCC',
        'HUH'
    ], {
        'C': 'mysticalagradditions:creative_essence',
        'H': 'rats:creative_cheese',
        'U': 'rats:rat_upgrade_nonbeliever'
    })
    e.shaped('creativeapiary:tcreative_apiary', [
        'HMH',
        'MCM',
        'TAT'
    ], {
        'H': 'compressium:honey_6',
        'M': 'mekanism:pellet_antimatter',
        'C': 'ctiers:centrifuge_controller_tier_creative',
        'T': 'resourcefulbees:t4_apiary',
        'A': 'allthemodium:unobtainium_allthemodium_alloy_block'
    })
    e.shaped('creativeapiary:creative_apiary_storage', [
        'HNH',
        'CAC',
        'NHN'
    ], {
        'H': 'compressium:honey_3',
        'N': 'kubejs:nether_star_block',
        'C': 'ctiers:centrifuge_casing_tier_creative',
        'A': 'resourcefulbees:apiary_storage'
    })

    //Shapeless Recipes
    e.shapeless(item.of('botania:mana_tablet', {
        mana: 500000,
        creative: 1
    }), ['botania:creative_pool'])
    e.shapeless('botania:creative_pool', [item.of('botania:mana_tablet', {
        mana: 500000,
        creative: 1
    })])

    //Energize Recipes
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

    //Pressure Recipes
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

    //Jumbo Recipes
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


})