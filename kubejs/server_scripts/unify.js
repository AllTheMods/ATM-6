//priority: 997
onEvent('recipes', e => {
    e.replaceInput('appliedenergistics2:certus_quartz_dust', '#forge:dusts/certus_quartz')

    function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem, dslurryFluid, cslurryFluid, crystalItem, shardItem, clumpItem, dirtydustItem) {
        e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
        e.replaceOutput(`#forge:dusts/${name}`, dustItem)
        e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
        e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
        e.remove({
            input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
            output: `#forge:ingots/${name}`,
            type: 'minecraft:smelting'
        })
        e.remove({
            input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
            output: `#forge:ingots/${name}`,
            type: 'minecraft:blasting'
        })
        if (name !== 'iron' && name !== 'gold' && name !== 'azure_silver' && name !== 'crimson_iron') {
            e.remove({
                input: `#forge:ores/${name}`,
                output: `mekanism:dust_${name}`,
                type: 'mekanism:enriching'
            })
            e.remove({
                input: `mekanism:dirty_dust_${name}`,
                output: `mekanism:dust_${name}`,
                type: 'mekanism:enriching'
            })
            e.remove({
                input: `#mekanism:clumps/${name}`,
                output: `mekanism:dirty_dust_${name}`,
                type: 'mekanism:crushing'
            })
            e.remove({
                input: `#forge:ores/${name}`,
                output: `mekanism:clump_${name}`,
                type: 'mekanism:purifying'
            })
            e.remove({
                input: `mekanism:shard_${name}`,
                output: `mekanism:clump_${name}`,
                type: 'mekanism:purifying'
            })
            e.remove({
                input: `#forge:ores/${name}`,
                output: `mekanism:shard_${name}`,
                type: 'mekanism:injecting'
            })
            e.remove({
                input: `#mekanism:crystals/${name}`,
                output: `mekanism:shard_${name}`,
                type: 'mekanism:injecting'
            })
        }
        e.remove({
            input: `#forge:ores/${name}`,
            type: 'immersiveengineering:crusher'
        })
        e.remove({
            input: `#forge:ingots/${name}`,
            type: 'immersiveengineering:crusher'
        })
        e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
        e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
        e.recipes.pedestals.pedestal_crushing({
            ingredient: {
                tag: `forge:ingots/${name}`
            },
            result: {
                item: dustItem,
                count: 1
            }
        })
        e.remove({
            id: `appliedenergistics2:grinder/${name}_dust_ingot`
        })
        e.recipes.appliedenergistics2.grinder({
            input: {
                tag: `forge:ingots/${name}`
            },
            result: {
                primary: {
                    item: dustItem,
                    count: 1
                }
            },
            turns: 8
        })
        e.recipes.immersiveengineering.crusher({
            secondaries: [],
            result: {
                base_ingredient: {
                    item: dustItem
                }
            },
            input: {
                tag: `forge:ingots/${name}`
            },
            energy: 3000
        })

        if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
            e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1)
            e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1)
            e.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`)
            //This is here to stop crushing hammer recipes for modium from generating
            if (name !== 'allthemodium' && name !== 'vibranium' && name !== 'unobtainium') {
                e.remove({
                    id: `engineerstools:crushing/${name}_grit_crushing_recipe`
                })
                e.recipes.engineerstools.crafting_extended_shapeless({
                    group: 'grit',
                    ingredients: [{
                            tag: `forge:ores/${name}`
                        },
                        {
                            item: 'engineerstools:crushing_hammer'
                        }
                    ],
                    result: {
                        item: dustItem,
                        count: 2
                    },
                    aspects: {
                        tool: 'engineerstools:crushing_hammer',
                        tool_damage: 25
                    }
                })
            }
            e.recipes.immersiveengineering.crusher({
                secondaries: [],
                result: {
                    count: 2,
                    base_ingredient: {
                        item: dustItem
                    }
                },
                input: {
                    tag: `forge:ores/${name}`
                },
                energy: 3000
            })
            e.remove({
                id: `pedestals:pedestal_crushing/dust${name}`
            })
            e.recipes.pedestals.pedestal_crushing({
                ingredient: {
                    tag: `forge:ores/${name}`
                },
                result: {
                    item: dustItem,
                    count: 2
                }
            })
            e.remove({
                id: `appliedenergistics2:grinder/${name}_dust_ore`
            })
            e.recipes.appliedenergistics2.grinder({
                input: {
                    tag: `forge:ores/${name}`
                },
                result: {
                    primary: {
                        item: dustItem,
                        count: 2
                    }
                },
                turns: 8
            })
        }
        e.replaceInput(nuggetItem, (`#forge:nuggets/${name}`))
        e.replaceInput(dustItem, (`#forge:dusts/${name}`))
        e.replaceInput(ingotItem, (`#forge:ingots/${name}`))
        e.replaceInput(blockItem, (`#forge:storage_blocks/${name}`))
    }

    function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
        e.replaceInput(nuggetItem, (`#forge:nuggets/${name}`))
        e.replaceInput(dustItem, (`#forge:dusts/${name}`))
        e.replaceInput(ingotItem, (`#forge:ingots/${name}`))
        e.replaceInput(blockItem, (`#forge:storage_blocks/${name}`))
        e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
        e.replaceOutput(`#forge:dusts/${name}`, dustItem)
        e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
        e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
    }

    function unifyPlateSheets(types) {
        types.forEach(type => {
            let create = type == 'gold' ? `create:${type}en_sheet` : `create:${type}_sheet`
            let output = type == 'aluminum' ? `immersiveengineering:plate_${type}` : `thermal:${type}_plate`
            e.replaceInput(`immersiveengineering:plate_${type}`, `#forge:plates/${type}`)
            e.replaceInput(create, `#forge:plates/${type}`)
            e.replaceOutput(`immersiveengineering:plate_${type}`, output)
            e.replaceOutput(create, output)
            if (type != 'aluminum') {
                e.remove({id: `tconstruct:smeltery/casting/metal/${type}/plate_gold_cast`})
                e.remove({id: `tconstruct:smeltery/casting/metal/${type}/plate_sand_cast`})
            }
        })
    }

    // Plates
    unifyPlateSheets([
        'iron',
        'gold',
        'copper',
        'tin',
        'lead',
        'silver',
        'nickel',
        'bronze',
        'electrum',
        'invar',
        'constantan',
        'signalum',
        'lumium',
        'enderium',
        'aluminum'
    ])

    //Vanilla MC
    unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget', 'mekanism:dirty_gold', 'mekanism:clean_gold', 'mekanism:crystal_gold', 'mekanism:shard_gold', 'mekanism:clump_gold', 'mekanism:dirty_dust_gold')
    unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget', 'mekanism:dirty_iron', 'mekanism:clean_iron', 'mekanism:crystal_iron', 'mekanism:shard_iron', 'mekanism:clump_iron', 'mekanism:dirty_dust_iron')

    //Multiple Mods
    unifyMetal('aluminum', 'alltheores:aluminum_ingot', 'alltheores:aluminum_dust', 'alltheores:aluminum_block', 'alltheores:aluminum_nugget', 'alltheores:dirty_aluminum', 'alltheores:clean_aluminum', 'alltheores:aluminum_crystal', 'alltheores:aluminum_shard', 'alltheores:aluminum_clump', 'dirty_aluminum_dust')
    unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget', 'alltheores:dirty_copper', 'alltheores:clean_copper', 'alltheores:copper_crystal', 'alltheores:copper_shard', 'alltheores:copper_clump', 'alltheores:dirty_copper_dust')
    unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget', 'alltheores:dirty_lead', 'alltheores:clean_lead', 'alltheores:lead_crystal', 'alltheores:lead_shard', 'alltheores:lead_clump', 'alltheores:dirty_lead_dust')
    unifyMetal('nickel', 'alltheores:nickel_ingot', 'alltheores:nickel_dust', 'alltheores:nickel_block', 'alltheores:nickel_nugget', 'alltheores:dirty_nickel', 'alltheores:clean_nickel', 'alltheores:nickel_crystal', 'alltheores:nickel_shard', 'alltheores:nickel_clump', 'alltheores:dirty_nickel_dust')
    unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget', 'alltheores:dirty_platinum', 'alltheores:clean_platinum', 'alltheores:platinum_crystal', 'alltheores:platinum_shard', 'alltheores:platinum_clump', 'alltheores:dirty_platinum_dust')
    unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget', 'alltheores:dirty_silver', 'alltheores:clean_silver', 'alltheores:silver_crystal', 'alltheores:silver_shard', 'alltheores:silver_clump', 'alltheores:dirty_silver_dust')
    unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget', 'alltheores:dirty_tin', 'alltheores:clean_tin', 'alltheores:tin_crystal', 'alltheores:tin_shard', 'alltheores:tin_clump', 'alltheores:dirty_tin_dust')
    unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget', 'alltheores:dirty_uranium', 'alltheores:clean_uranium', 'alltheores:uranium_crystal', 'alltheores:uranium_shard', 'alltheores:uranium_clump', 'alltheores:dirty_uranium_dust')
    unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget', 'alltheores:dirty_zinc', 'alltheores:clean_zinc', 'alltheores:zinc_crystal', 'alltheores:zinc_shard', 'alltheores:zinc_clump', 'alltheores:dirty_zinc_dust')

    //Mekanism
    unifyMetal('osmium', 'alltheores:osmium_ingot', 'alltheores:osmium_dust', 'alltheores:osmium_block', 'alltheores:osmium_nugget', 'alltheores:dirty_osmium', 'alltheores:clean_osmium', 'alltheores:osmium_crystal', 'alltheores:osmium_shard', 'alltheores:osmium_clump', 'alltheores:dirty_osmium_dust')

    //Silent Gear
    unifyMetal('azure_silver', 'silentgear:azure_silver_ingot', 'silentgear:azure_silver_dust', 'silentgear:azure_silver_block', 'silentgear:azure_silver_nugget')
    unifyMetal('crimson_iron', 'silentgear:crimson_iron_ingot', 'silentgear:crimson_iron_dust', 'silentgear:crimson_iron_block', 'silentgear:crimson_iron_nugget')

    //Allthemodium (Why would we need to unify these they are only ours)
    unifyMetal('allthemodium', 'allthemodium:allthemodium_ingot', 'allthemodium:allthemodium_dust', 'allthemodium:allthemodium_block', 'allthemodium:allthemodium_nugget', 'allthemodium:dirty_allthemodium', 'allthemodium:clean_allthemodium', 'allthemodium:allthemodium_crystal', 'allthemodium:allthemodium_shard', 'allthemodium:allthemodium_clump', 'allthemodium:dirty_allthemodium_dust')
    unifyMetal('vibranium', 'allthemodium:vibranium_ingot', 'allthemodium:vibranium_dust', 'allthemodium:vibranium_block', 'allthemodium:vibranium_nugget', 'allthemodium:dirty_vibranium', 'allthemodium:clean_vibranium', 'allthemodium:vibranium_crystal', 'allthemodium:vibranium_shard', 'allthemodium:vibranium_clump', 'allthemodium:dirty_vibranium_dust')
    unifyMetal('unobtainium', 'allthemodium:unobtainium_ingot', 'allthemodium:unobtainium_dust', 'allthemodium:unobtainium_block', 'allthemodium:unobtainium_nugget', 'allthemodium:dirty_unobtainium', 'allthemodium:clean_unobtainium', 'allthemodium:unobtainium_crystal', 'allthemodium:unobtainium_shard', 'allthemodium:unobtainium_clump', 'allthemodium:dirty_unobtainium_dust')

    //Craft only metals
    //Multiple Mods crafted only (no ore)
    //unifyCraftMetal('bronze', 'mekanism:ingot_bronze', 'mekanism:dust_bronze', 'mekanism:block_bronze', 'mekanism:nugget_bronze') //Replaced/Returned to unifying on thermal's bronze
    unifyCraftMetal('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel')

    //Thermal
    unifyCraftMetal('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget')
    unifyCraftMetal('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget')
    unifyCraftMetal('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget')

    //Bitumen
    e.replaceInput('thermal:bitumen', '#forge:bitumen')
    e.replaceInput('immersivepetroleum:bitumen', '#forge:bitumen')
    e.replaceOutput('immersivepetroleum:bitumen', 'thermal:bitumen')
    e.remove({id: 'immersivepetroleum:distillationtower/oilcracking'})
    e.remove({output: 'immersivepetroleum:asphalt'})
    e.shaped('immersivepetroleum:asphalt', [
        'SBS',
        'GWG',
        'SBS'
    ], {
        S: '#forge:sand',
        B: '#forge:bitumen',
        G: '#forge:gravel',
        W: ['minecraft:water_bucket', 'create:honey_bucket', 'create:chocolate_bucket', 'mahoutsukai:murky_bucket'],
    }).id('kubejs:asphalt_1')
    e.shaped('immersivepetroleum:asphalt', [
        'SBS',
        'GWG',
        'SBS'
    ], {
        S: '#forge:slag',
        B: '#forge:bitumen',
        G: '#forge:gravel',
        W: ['minecraft:water_bucket', 'create:honey_bucket', 'create:chocolate_bucket', 'mahoutsukai:murky_bucket'],
    }).id('kubejs:asphalt_2')
    e.shaped('immersivepetroleum:asphalt', [
        'S',
        'S',
    ], {
        S: 'immersivepetroleum:asphalt_slab'
    }).id('kubejs:asphalt_3')
    e.custom(
        {
            "type": "immersivepetroleum:distillation",
            "byproducts": [
                {
                    "item": "thermal:bitumen",
                    "chance": 0.07
                }
            ],
            "results": [
                {
                    "fluid": "immersivepetroleum:lubricant",
                    "amount": 9
                },
                {
                    "fluid": "immersivepetroleum:diesel_sulfur",
                    "amount": 14
                },
                {
                    "fluid": "immersivepetroleum:gasoline",
                    "amount": 39
                }
            ],
            "input": {
                "tag": "forge:crude_oil",
                "amount": 75
            },
            "time": 1,
            "energy": 2048
        }
    ).id('kubejs:oilcracking')
})
