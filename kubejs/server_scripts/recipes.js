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

    function jumbo(ingredients, result, xp) {
        e.recipes.jumbofurnace.jumbo_smelting({
            'ingredients': ingredients,
            'result': {
                'item': result
            },
            'experience': xp
        })
    }

    function multicrush(output, input) {
        e.recipes.mekanism.crushing((output), input)
        e.recipes.thermal.pulverizer((output), input)
    }

    function crush(output, input) {
        e.recipes.mekanism.crushing((output), input)
    }

    function enrich(output, input) {
        e.recipes.mekanism.enriching((output), input)
    }

    function pulverize(output, input) {
        e.recipes.thermal.pulverizer((output), input)
    }

    function mainfusion(output, middle, item1, item2, item3, item4, item5, item6, item7, item8) {
        e.recipes.mysticalagriculture.infusion({
            input: {
                item: middle
            },
            ingredients: [{
                    item: item1
                },
                {
                    item: item2
                },
                {
                    item: item3
                },
                {
                    item: item4
                },
                {
                    item: item5
                },
                {
                    item: item6
                },
                {
                    item: item7
                },
                {
                    item: item8
                }
            ],
            result: {
                item: output
            }
        })
    }
    //Smelting
    e.smelting(item.of('appliedenergistics2:certus_quartz_crystal'), '#forge:ores/certus_quartz').xp(1).id('kubejs:smelting/certus')
    e.smelting(item.of('alltheores:platinum_ingot'), 'create:crushed_platinum_ore').xp(1).id('kubejs:smelting/create_platinum')
    e.smelting(item.of('minecraft:glass'), '#forge:sand').xp(.1).id('kubejs:smelting/sand')
    e.smelting(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5).id('kubejs:smelting/leather')
    e.smoking(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5).id('kubejs:smoking/leather')
    e.smelting(item.of('allthemodium:vibranium_allthemodium_alloy_ingot'), 'allthemodium:vibranium_allthemodium_alloy_dust').xp(.5).id('kubejs:smelting/vibranium_allthemodium_alloy_dust')
    e.smelting(item.of('allthemodium:unobtainium_allthemodium_alloy_ingot'), 'allthemodium:unobtainium_allthemodium_alloy_dust').xp(.5).id('kubejs:smelting/unobtainium_allthemodium_alloy_dust')
    e.smelting(item.of('allthemodium:unobtainium_vibranium_alloy_ingot'), 'allthemodium:unobtainium_vibranium_alloy_dust').xp(.5).id('kubejs:smelting/unobtainium_vibranium_alloy_dust')

    //Misc shaped recipes
    e.shaped('computercraft:turtle_advanced', [
        'III',
        'ICI',
        'IAI'
    ], {
        I: '#forge:ingots/gold',
        C: 'computercraft:computer_advanced',
        A: '#forge:ingots/allthemodium'
    }).id(`kubejs:turtle_advanced`)
    e.shaped('computercraft:turtle_normal', [
        'III',
        'ICI',
        'IAI'
    ], {
        I: '#forge:ingots/iron',
        C: 'computercraft:computer_normal',
        A: '#forge:ingots/allthemodium'
    }).id(`kubejs:turtle_normal`)
    e.shaped('minecraft:totem_of_undying', [
        ' E ',
        'GVG',
        ' G '
    ], {
        E: 'compressium:emerald_3',
        G: '#forge:storage_blocks/gold',
        V: 'minecraft:villager_spawn_egg'
    }).id(`kubejs:totem_of_undying`)
    e.shaped(item.of('enviromats:alabaster_magenta', 8), [
        'AAA',
        'AMA',
        'AAA'
    ], {
        A: '#forge:alabaster',
        M: '#forge:dyes/magenta'
    }).id(`kubejs:magenta_alabaster`)
    e.shaped(item.of('minecraft:ladder', 4), [
        'S S',
        'SPS',
        'S S'
    ], {
        S: '#forge:rods',
        P: '#minecraft:planks'
    }).id(`kubejs:ladder`)
    e.shaped('appliedenergistics2:silicon_press', [
        'EEE',
        'EAE',
        'EEE'
    ], {
        'E': 'mysticalagriculture:iron_essence',
        'A': 'mysticalagriculture:silicon_essence'
    }).id(`kubejs:silicon_press`)
    e.shaped('appliedenergistics2:calculation_processor_press', [
        'EEE',
        'EAE',
        'EEE'
    ], {
        'E': 'mysticalagriculture:iron_essence',
        'A': 'mysticalagriculture:certus_quartz_essence'
    }).id(`kubejs:calculation_press`)
    e.shaped('appliedenergistics2:engineering_processor_press', [
        'EEE',
        'EAE',
        'EEE'
    ], {
        'E': 'mysticalagriculture:iron_essence',
        'A': 'mysticalagriculture:diamond_essence'
    }).id(`kubejs:engineering_press`)
    e.shaped('appliedenergistics2:logic_processor_press', [
        'EEE',
        'EAE',
        'EEE'
    ], {
        'E': 'mysticalagriculture:iron_essence',
        'A': 'mysticalagriculture:gold_essence'
    }).id(`kubejs:logic_press`)
    e.shaped('minecraft:hopper', [
        'ILI',
        'ILI',
        ' I '
    ], {
        'L': '#minecraft:logs',
        'I': '#forge:ingots/iron'
    }).id(`kubejs:hopper`)
    e.shaped('minecraft:stick', [
        'L',
        'L'
    ], {
        'L': '#minecraft:logs'
    }, 16).id(`kubejs:sticks`)
    e.shaped('appliedenergistics2:sky_stone_block', [
        'BSB',
        'SBS',
        'BSB'
    ], {
        'S': 'minecraft:stone',
        'B': 'minecraft:blackstone'
    }, 4).id(`kubejs:sky_stone_brick`)
    e.shaped('biomesoplenty:flesh', [
        'FFF',
        'FFF',
        'FFF'
    ], {
        'F': 'minecraft:rotten_flesh',
    }).id(`kubejs:bop_flesh`)
    e.shaped('extrastorage:iron_crafter', [
        'B B',
        'PCP',
        'B B'
    ], {
        B: '#forge:storage_blocks/iron',
        P: 'refinedstorage:improved_processor',
        C: '#refinedstorage:crafter'
    }).id(`kubejs:iron_crafter`)
    e.shaped('xreliquary:fertile_lily_pad', [
        'ESE',
        'FLF',
        'ESE'
    ], {
        E: 'xreliquary:fertile_essence',
        S: 'mysticalagriculture:supremium_growth_accelerator',
        L: 'minecraft:lily_pad',
        F: 'mysticalagriculture:mystical_fertilizer'
    }).id(`kubejs:fertile_lily_pad`)
    e.shaped('rftoolsbuilder:builder', [
        'aea',
        'rmr',
        'ara'
    ], {
        'a': '#forge:nuggets/allthemodium',
        'e': '#forge:ender_pearls',
        'r': '#forge:storage_blocks/redstone',
        'm': 'rftoolsbase:machine_frame'
    }).id(`kubejs:builder`)
    e.shaped('rats:pied_wool', [
        'YGY',
        'GYG',
        'YGY'
    ], {
        'Y': 'minecraft:yellow_wool',
        'G': 'minecraft:green_wool'
    }).id(`kubejs:pied_wool`)
    e.shaped('quarryplus:solidquarry', [
        'FFF',
        'DGD',
        'AAA'
    ], {
        'F': 'minecraft:furnace',
        'D': 'minecraft:diamond_pickaxe',
        'G': '#forge:storage_blocks/gold',
        'A': '#forge:nuggets/allthemodium'
    }).id(`kubejs:solidquarry`)
    e.shaped('quarryplus:workbenchplus', [
        'III',
        'GDG',
        'AAA'
    ], {
        'I': '#forge:storage_blocks/iron',
        'G': '#forge:storage_blocks/gold',
        'D': '#forge:storage_blocks/diamond',
        'A': '#forge:nuggets/allthemodium'
    }).id(`kubejs:workbenchplus`)
    e.shaped('mininggadgets:upgrade_empty', [
        'RAL',
        'DGD',
        'LAR'
    ], {
        'L': '#forge:storage_blocks/lapis',
        'R': '#forge:storage_blocks/redstone',
        'D': '#forge:gems/diamond',
        'A': '#forge:nuggets/allthemodium',
        'G': 'minecraft:glass_pane'
    }).id(`kubejs:mininggadgets_upgrade`)
    e.shaped('mysticalagriculture:unattuned_augment', [
        'PMP',
        'AMA',
        'PMP'
    ], {
        'P': 'mysticalagriculture:prosperity_ingot',
        'M': 'botania:manasteel_ingot',
        'A': '#forge:nuggets/allthemodium'
    }).id(`kubejs:unattuned_augment`)
    e.shaped('mekanism:digital_miner', [
        'AUA',
        'LRL',
        'TST'
    ], {
        'L': 'mekanism:logistical_sorter',
        'R': 'mekanism:robit',
        'T': 'mekanism:teleportation_core',
        'A': '#mekanism:alloys/atomic',
        'S': 'mekanism:steel_casing',
        'U': '#forge:ingots/unobtainium'
    }).id(`kubejs:digital_miner`)
    e.shaped('mekanism:atomic_disassembler', [
        'RER',
        'RUR',
        ' V '
    ], {
        'E': 'mekanism:energy_tablet',
        'R': '#mekanism:alloys/reinforced',
        'U': '#forge:circuits/ultimate',
        'V': '#forge:ingots/vibranium'
    }).id(`kubejs:atomic_disassembler`)
    e.shaped('mekanismgenerators:wind_generator', [
        ' O ',
        'OCO',
        'EBE'
    ], {
        'E': 'mekanism:energy_tablet',
        'C': 'mekanismgenerators:electromagnetic_coil',
        'B': '#forge:circuits/basic',
        'O': '#forge:ingots/osmium'
    }).id(`kubejs:wind_generator`)
    e.shaped('ironjetpacks:diamond_cell', [
        ' R ',
        'TCT',
        ' R '
    ], {
        'R': '#forge:dusts/redstone',
        'C': 'ironjetpacks:advanced_coil',
        'T': '#forge:gems/diamond'
    }).id(`kubejs:diamond_cell`)
    e.shaped('ironjetpacks:diamond_thruster', [
        'TAT',
        'ACA',
        'TFT'
    ], {
        'F': 'minecraft:furnace',
        'A': 'ironjetpacks:advanced_coil',
        'C': 'ironjetpacks:diamond_cell',
        'T': '#forge:gems/diamond'
    }).id(`kubejs:diamond_thruster`)
    e.shaped('ironjetpacks:diamond_capacitor', [
        'RCR',
        'RCR',
        'RCR'
    ], {
        'R': '#forge:gems/diamond',
        'C': 'ironjetpacks:diamond_cell'
    }).id(`kubejs:diamond_capacitor`)
    e.shaped('ironjetpacks:diamond_jetpack', [
        'DCD',
        'DJD',
        'TRT'
    ], {
        'D': '#forge:gems/diamond',
        'C': 'ironjetpacks:diamond_capacitor',
        'J': ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
        'T': 'ironjetpacks:diamond_thruster',
        'R': 'angelring:itemdiamondring'
    }).id(`kubejs:diamond_jetpack`)
    e.shaped('ironjetpacks:platinum_cell', [
        ' R ',
        'TCT',
        ' R '
    ], {
        'R': '#forge:dusts/redstone',
        'C': 'ironjetpacks:advanced_coil',
        'T': '#forge:ingots/platinum'
    }).id(`kubejs:platinum_cell`)
    e.shaped('ironjetpacks:platinum_thruster', [
        'TAT',
        'ACA',
        'TFT'
    ], {
        'F': 'minecraft:furnace',
        'A': 'ironjetpacks:advanced_coil',
        'C': 'ironjetpacks:platinum_cell',
        'T': '#forge:ingots/platinum'
    }).id(`kubejs:platinum_thruster`)
    e.shaped('ironjetpacks:platinum_capacitor', [
        'RCR',
        'RCR',
        'RCR'
    ], {
        'R': '#forge:ingots/platinum',
        'C': 'ironjetpacks:platinum_cell'
    }).id(`kubejs:platinum_capacitor`)
    e.shaped('ironjetpacks:platinum_jetpack', [
        'PCP',
        'PJP',
        'TRT'
    ], {
        'P': '#forge:ingots/platinum',
        'C': 'ironjetpacks:platinum_capacitor',
        'J': ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
        'T': 'ironjetpacks:platinum_thruster',
        'R': 'angelring:itemdiamondring'
    }).id(`kubejs:platinum_jetpack`)
    e.shaped('pamhc2foodcore:fruitpunchitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': '#forge:fruits',
        'B': 'pamhc2foodcore:applejuiceitem'
    }).id(`kubejs:fruitpunchitem`)
    e.shaped('pamhc2foodcore:applejuiceitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': 'minecraft:apple',
        'B': 'minecraft:glass_bottle'
    }).id(`kubejs:applejuiceitem`)
    e.shaped('pamhc2foodcore:melonjuiceitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': 'minecraft:melon_slice',
        'B': 'minecraft:glass_bottle'
    }).id(`kubejs:melonjuiceitem`)
    e.shaped('pamhc2foodcore:sweetberryjuiceitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': 'minecraft:sweet_berries',
        'B': 'minecraft:glass_bottle'
    }).id(`kubejs:sweetberryhuiceitem`)
    e.shaped('pamhc2foodcore:p8juiceitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': '#forge:vegetables',
        'B': 'minecraft:glass_bottle'
    }).id(`kubejs:p8juiceitem`)
    e.shaped('angelring:itemdiamondring', [
        'DND',
        'VEU',
        'DAD'
    ], {
        'D': '#forge:storage_blocks/diamond',
        'N': '#forge:storage_blocks/netherite',
        'V': '#forge:storage_blocks/vibranium',
        'U': '#forge:storage_blocks/unobtainium',
        'A': '#forge:storage_blocks/allthemodium',
        'E': 'minecraft:elytra'
    }).id(`kubejs:diamondring`)
    e.shaped('angelring:itemring', [
        'CAC',
        'ARA',
        'DGD'
    ], {
        'C': 'botania:pixie_dust',
        'A': '#forge:storage_blocks/terrasteel',
        'R': 'angelring:itemdiamondring',
        'D': '#forge:nether_stars',
        'G': 'botania:gaia_ingot'
    }).id(`kubejs:itemring`)
    e.shaped(item.of('forbidden_arcanus:iron_chain', 3), [
        'N  ',
        ' I ',
        '  N'
    ], {
        'N': '#forge:nuggets/iron',
        'I': '#forge:ingots/iron'
    }).id(`kubejs:iron_chain`)
    e.shaped('entangled:block', [
        'UEU',
        'ECE',
        'UEU'
    ], {
        'U': '#forge:ingots/unobtainium',
        'E': '#forge:ender_pearls',
        'C': 'minecraft:ender_chest'
    }).id(`kubejs:entangled_block`)
    e.shaped('entangled:item', [
        ' EC',
        ' UE',
        'U  '
    ], {
        'U': '#forge:ingots/unobtainium',
        'E': '#forge:ender_pearls',
        'C': 'minecraft:ender_chest'
    }).id(`kubejs:entanled_item`)
    e.shaped('refinedstorage:4096k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'refinedstorage:1024k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:nuggets/allthemodium'
    }).id(`kubejs:4096k_fluid_storage_part`)
    e.shaped('extradisks:4096k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:1024k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:nuggets/allthemodium'
    }).id(`kubejs:4096k_storage_part`)
    e.shaped('extradisks:16384k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'refinedstorage:4096k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/allthemodium'
    }).id(`kubejs:16384k_fluid_storage_part`)
    e.shaped('extradisks:16384k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:4096k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/allthemodium'
    }).id(`kubejs:16384k_storage_part`)
    e.shaped('extradisks:65536k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:16384k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/allthemodium'
    }).id(`kubejs:65536k_fluid_storage_part`)
    e.shaped('extradisks:65536k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:16384k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/allthemodium'
    }).id(`kubejs:65536k_storage_part`)
    e.shaped('extradisks:262144k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:65536k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/vibranium'
    }).id(`kubejs:262144k_fluid_storage_part`)
    e.shaped('extradisks:262144k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:65536k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/vibranium'
    }).id(`kubejs:262144k_storage_part`)
    e.shaped('extradisks:1048576k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:262144k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/unobtainium'
    }).id(`kubejs:1048576k_fluid_storage_part`)
    e.shaped('extradisks:1048576k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:262144k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/unobtainium'
    }).id(`kubejs:1048576k_storage_part`)
    e.shaped('extradisks:infinite_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:1048576k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/unobtainium'
    }).id(`kubejs:infinite_fluid_part`)
    e.shaped('extradisks:infinite_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:1048576k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/unobtainium'
    }).id(`kubejs:infinite_storage_part`)
    e.shaped('solarflux:sp_custom_allthemodium', [
        'PPP',
        'SAS',
        'SDS'
    ], {
        S: 'solarflux:sp_5',
        A: '#forge:storage_blocks/allthemodium',
        D: '#forge:storage_blocks/diamond',
        P: 'solarflux:photovoltaic_cell_4'
    }, 2).id(`kubejs:allthemodium_solar`)
    e.shaped('solarflux:sp_custom_vibranium', [
        'PPP',
        'SAS',
        'SAS'
    ], {
        S: 'solarflux:sp_custom_allthemodium',
        A: '#forge:storage_blocks/vibranium',
        P: 'solarflux:photovoltaic_cell_5'
    }, 2).id(`kubejs:vibranium_solar`)
    e.shaped('solarflux:sp_custom_unobtainium', [
        'PPP',
        'SAS',
        'SAS'
    ], {
        S: 'solarflux:sp_custom_vibranium',
        A: '#forge:storage_blocks/unobtainium',
        P: 'solarflux:photovoltaic_cell_6'
    }, 2).id(`kubejs:unobtainium_solar`)
    //Minecraft
    e.shaped('minecraft:dragon_egg', [
        'SSS',
        'SDS',
        'SSS'
    ], {
        S: 'mysticalagradditions:dragon_egg_chunk',
        D: 'atmadditions:dragon_soul'
    })
    //Tombstone 
    e.shaped('tombstone:soul_receptacle', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'tombstone:dust_of_vanishing',
        B: 'tombstone:ankh_of_pray',
        C: 'minecraft:totem_of_undying',
        D: 'tombstone:familiar_receptacle',
        E: 'tombstone:voodoo_poppet'
    })
    //Pipez
    e.shaped('pipez:infinity_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'allthemodium:unobtainium_ingot',
        B: 'compressium:redstone_4',
        C: 'pipez:ultimate_upgrade'
    })

    //Misc Shapeless Recipes
    e.shapeless(item.of('minecraft:clay_ball', 4), 'minecraft:clay').id(`kubejs:clay`)
    e.shapeless(item.of('minecraft:quartz', 4), 'minecraft:quartz_block').id(`kubejs:quartz`)
    e.shapeless('minecraft:chest', '#forge:chests/wooden')
    //e.shapeless(item.of('bluepower:blue_alloy_ingot', 4), ['#forge:dusts/teslatite','#forge:dusts/teslatite','#forge:dusts/teslatite','#forge:ingots/silver'])
    //e.shapeless('kubejs:rotten_leather', ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'])
    e.shapeless(item.of('kubejs:rotten_leather'), '3x minecraft:rotten_flesh').id(`kubejs:rotten_leather`)
    e.shapeless('appliedenergistics2:interface', 'appliedenergistics2:cable_interface').id(`kubejs:ae_interface`)


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

    pedestalCrush('pamhc2foodcore:flouritem', 1, 'forge:flour_plants', 1)
    pedestalCrush('appliedenergistics2:fluix_dust', 1, 'appliedenergistics2:fluix_crystal', 0)
    pedestalCrush('appliedenergistics2:certus_quartz_dust', 1, 'forge:gems/certus_quartz', 1)
    pedestalCrush('mekanism:dust_quartz', 1, 'forge:gems/quartz', 1)

    pedestalSaw('mekanism:sawdust', 1, 'forge:rods/wooden', 1)
    pedestalSaw('minecraft:stick', 4, 'minecraft:planks', 1)
    pedestalSaw('minecraft:stick', 2, 'minecraft:wooden_slabs', 1)

    //AE Recipes
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

    //Solarflux Recipe
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

    //quark
    const quarkWoodTypes = ['oak', 'dark_oak', 'acacia', 'spruce', 'birch', 'jungle', 'warped', 'crimson'];
    quarkWoodTypes.forEach(wood => {
        e.shapeless('quark:' + wood + '_chest', ['minecraft:' + wood + '_planks', '#forge:chests/wooden']);
        e.shapeless('quark:' + wood + '_trapped_chest', ['quark:' + wood + '_chest', 'minecraft:tripwire_hook']);
    });

    function buildQuarkChest(type, material) {
        e.shaped('quark:' + type + '_chest', [
            'aaa',
            'a a',
            'aaa'
        ], {
            a: material
        });
        e.shapeless('quark:' + type + '_trapped_chest', ['quark:' + type + '_chest', 'minecraft:tripwire_hook']);
    }

    buildQuarkChest('nether_brick', 'minecraft:nether_bricks');
    buildQuarkChest('prismarine', 'minecraft:prismarine');
    buildQuarkChest('mushroom', '#forge:mushroom_caps');
    buildQuarkChest('purpur', 'minecraft:purpur_block');

    //Industrial Foregoing Recipes
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

    //Make bio fuel use tags instead of invidual items
    var bioFuels = [2, 4, 5, 7, 8]
    utils.listOf(bioFuels).forEach(function(bioFuel) {
        mekCrush(item.of('mekanism:bio_fuel', bioFuel), '#misctags:biofuel' + bioFuel)
    })

    //multicrush - mek crusher and thermal pulverizer
    //multicrush (`output`,`input`)
    multicrush('4x minecraft:brick', 'minecraft:bricks')
    multicrush(`9x minecraft:rotten_flesh`, `biomesoplenty:flesh`)
    multicrush(`4x minecraft:magma_cream`, `minecraft:magma_block`)
    multicrush(`minecraft:snow_block`, `minecraft:ice`)
    multicrush(`allthemodium:unobtainium_allthemodium_alloy_dust`, `allthemodium:unobtainium_allthemodium_alloy_ingot`)
    multicrush(`allthemodium:unobtainium_vibranium_alloy_dust`, `allthemodium:unobtainium_vibranium_alloy_ingot`)
    multicrush(`allthemodium:vibranium_allthemodium_alloy_dust`, `allthemodium:vibranium_allthemodium_alloy_ingot`)

    //crush - mek crushing only
    //crush (`output`, `input`)
    crush(`4x minecraft:blaze_powder`, `#forge:rods/blaze`)

    //enrich - mek enriching 
    //enrich (`output`, `input`)
    enrich(`minecraft:blaze_rod`, item.of(`minecraft:blaze_powder`, 4))

    //pulverize - thermal pulverizer only
    //pulverize (`output`, `input`)

    //add byg logs to mek sawmill
    var saw = [
        'aspen',
        'baobab',
        'blue_enchanted',
        'cherry',
        'cika',
        'cypress',
        'ebony',
        'ether',
        'fir',
        'green_enchanted',
        'holly',
        'jacaranda',
        'lament',
        'mahogany',
        'mangrove',
        'maple',
        'nightshade',
        'palm',
        'pine',
        'rainbow_eucalyptus',
        'redwood',
        'skyris',
        'willow',
        'witch_hazel',
        'zelkova'
    ]
    saw.forEach(type => {
        mekSaw((`6x byg:${type}_planks`), [`byg:stripped_${type}_log`, `byg:${type}_log`], Item.of('mekanism:sawdust').withChance(0.25)).id(`kubejs:saw/byg_log_${type}`)
    })
    mekSaw((`6x minecraft:oak_planks`), `byg:withering_oak_log`, Item.of('mekanism:sawdust').withChance(0.25)).id(`kubejs:saw/byg_log_withering_oak`)
    mekSaw((`8x mekanism:sawdust`), `byg:imbued_nightshade_log`, ).id(`kubejs:saw/byg_log_imbued_nightshade`)
    mekSaw((`6x minecraft:birch_planks`), [`byg:stripped_palo_verde_log`, `byg:palo_verde_log`], Item.of('mekanism:sawdust').withChance(0.25)).id(`kubejs:saw/byg_log_palo_verde`)

    //botania
    e.recipes.botania.runic_altar({
        output: {
            item: 'kubejs:rune_of_sins'
        },
        mana: 25000,
        ingredients: [{
                tag: 'botania:runes/lust'
            },
            {
                tag: 'botania:runes/gluttony'
            },
            {
                tag: 'botania:runes/greed'
            },
            {
                tag: 'botania:runes/sloth'
            },
            {
                tag: 'botania:runes/wrath'
            },
            {
                tag: 'botania:runes/envy'
            },
            {
                tag: 'botania:runes/pride'
            }
        ]
    }).id('kubejs:runic_altar/rune_of_sins')
    e.recipes.botania.petal_apothecary({
        output: {
            item: 'kubejs:mass_of_wills'
        },
        ingredients: [{
                item: 'botania:ancient_will_ahrim'
            },
            {
                item: 'botania:ancient_will_dharok'
            },
            {
                item: 'botania:ancient_will_guthan'
            },
            {
                item: 'botania:ancient_will_torag'
            },
            {
                item: 'botania:ancient_will_verac'
            },
            {
                item: 'botania:ancient_will_karil'
            }
        ]
    }).id('kubejs:petal_apothecary/mass_of_wills')

    //ma infusion
    //mainfusion (output,middle,item1,item2,item3,item4,item5,item6,item7,item8)
    mainfusion('kubejs:magical_soil', 'botania:overgrowth_seed', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block')

    //Custom Blocks
    function customBlock(block, item) {
        e.shapeless(item, block, 9)
        e.shaped(block, [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: item
        })
    }

    customBlock('kubejs:nether_star_block', 'minecraft:nether_star')
})