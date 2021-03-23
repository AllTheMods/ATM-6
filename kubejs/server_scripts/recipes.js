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
    //Smelting
    e.smelting(item.of('appliedenergistics2:certus_quartz_crystal'), '#forge:ores/certus_quartz').xp(1).id('kubejs:smelting/certus')
    e.smelting(item.of('alltheores:platinum_ingot'), 'create:crushed_platinum_ore').xp(1).id('kubejs:smelting/create_platinum')
    e.smelting(item.of('minecraft:glass'), '#forge:sand').xp(.1).id('kubejs:smelting/sand')
    e.smelting(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5).id('kubejs:smelting/leather')
    e.smoking(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5).id('kubejs:smoking/leather')

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
    //RFTools
    e.shaped('rftoolsbuilder:builder', [
        'aea',
        'rmr',
        'ara'
    ], {
        'a': '#forge:nuggets/allthemodium',
        'e': '#forge:ender_pearls',
        'r': '#forge:storage_blocks/redstone',
        'm': 'rftoolsbase:machine_frame'
    })
    //Rats
    e.shaped('rats:pied_wool', [
        'YGY',
        'GYG',
        'YGY'
    ], {
        'Y': 'minecraft:yellow_wool',
        'G': 'minecraft:green_wool'
    })
    //QuarryPlus
    e.shaped('quarryplus:solidquarry', [
        'FFF',
        'DGD',
        'AAA'
    ], {
        'F': 'minecraft:furnace',
        'D': 'minecraft:diamond_pickaxe',
        'G': '#forge:storage_blocks/gold',
        'A': '#forge:nuggets/allthemodium'
    })
    e.shaped('quarryplus:workbenchplus', [
        'III',
        'GDG',
        'AAA'
    ], {
        'I': '#forge:storage_blocks/iron',
        'G': '#forge:storage_blocks/gold',
        'D': '#forge:storage_blocks/diamond',
        'A': '#forge:nuggets/allthemodium'
    })
    //Mining Gadgets
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
    })
    //Mystical Agriculture
    e.shaped('mysticalagriculture:unattuned_augment', [
        'PMP',
        'AMA',
        'PMP'
    ], {
        'P': 'mysticalagriculture:prosperity_ingot',
        'M': 'botania:manasteel_ingot',
        'A': '#forge:nuggets/allthemodium'
    })
    //Mekanism
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
    })
    e.shaped('mekanism:atomic_disassembler', [
        'RER',
        'RUR',
        ' V '
    ], {
        'E': 'mekanism:energy_tablet',
        'R': '#mekanism:alloys/reinforced',
        'U': '#forge:circuits/ultimate',
        'V': '#forge:ingots/vibranium'
    })
    e.shaped('mekanismgenerators:wind_generator', [
        ' O ',
        'OCO',
        'EBE'
    ], {
        'E': 'mekanism:energy_tablet',
        'C': 'mekanismgenerators:electromagnetic_coil',
        'B': '#forge:circuits/basic',
        'O': '#forge:ingots/osmium'
    })
    //Jetpacks
    e.shaped('ironjetpacks:diamond_cell', [
        ' R ',
        'TCT',
        ' R '
    ], {
        'R': '#forge:dusts/redstone',
        'C': 'ironjetpacks:advanced_coil',
        'T': '#forge:gems/diamond'
    })
    e.shaped('ironjetpacks:diamond_thruster', [
        'TAT',
        'ACA',
        'TFT'
    ], {
        'F': 'minecraft:furnace',
        'A': 'ironjetpacks:advanced_coil',
        'C': 'ironjetpacks:diamond_cell',
        'T': '#forge:gems/diamond'
    })
    e.shaped('ironjetpacks:diamond_capacitor', [
        'RCR',
        'RCR',
        'RCR'
    ], {
        'R': '#forge:gems/diamond',
        'C': 'ironjetpacks:diamond_cell'
    })
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
    })
    e.shaped('ironjetpacks:platinum_cell', [
        ' R ',
        'TCT',
        ' R '
    ], {
        'R': '#forge:dusts/redstone',
        'C': 'ironjetpacks:advanced_coil',
        'T': '#forge:ingots/platinum'
    })
    e.shaped('ironjetpacks:platinum_thruster', [
        'TAT',
        'ACA',
        'TFT'
    ], {
        'F': 'minecraft:furnace',
        'A': 'ironjetpacks:advanced_coil',
        'C': 'ironjetpacks:platinum_cell',
        'T': '#forge:ingots/platinum'
    })
    e.shaped('ironjetpacks:platinum_capacitor', [
        'RCR',
        'RCR',
        'RCR'
    ], {
        'R': '#forge:ingots/platinum',
        'C': 'ironjetpacks:platinum_cell'
    })
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
    })
    //Foods
    e.shaped('pamhc2foodcore:fruitpunchitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': '#forge:fruits',
        'B': 'pamhc2foodcore:applejuiceitem'
    })
    e.shaped('pamhc2foodcore:applejuiceitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': 'minecraft:apple',
        'B': 'minecraft:glass_bottle'
    })
    e.shaped('pamhc2foodcore:melonjuiceitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': 'minecraft:melon_slice',
        'B': 'minecraft:glass_bottle'
    })
    e.shaped('pamhc2foodcore:sweetberryjuiceitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': 'minecraft:sweet_berries',
        'B': 'minecraft:glass_bottle'
    })
    e.shaped('pamhc2foodcore:p8juiceitem', [
        'FFF',
        'FBF',
        'FFF'
    ], {
        'F': '#forge:vegetables',
        'B': 'minecraft:glass_bottle'
    })
    //Angel Ring
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
    })
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
    })
    //Other recipes
    e.shaped(item.of('forbidden_arcanus:iron_chain', 3), [
        'N  ',
        ' I ',
        '  N'
    ], {
        'N': '#forge:nuggets/iron',
        'I': '#forge:ingots/iron'
    })
    e.shaped('entangled:block', [
        'UEU',
        'ECE',
        'UEU'
    ], {
        'U': '#forge:ingots/unobtainium',
        'E': '#forge:ender_pearls',
        'C': 'minecraft:ender_chest'
    })
    e.shaped('entangled:item', [
        ' EC',
        ' UE',
        'U  '
    ], {
        'U': '#forge:ingots/unobtainium',
        'E': '#forge:ender_pearls',
        'C': 'minecraft:ender_chest'
    })
    //Extra Disks
    e.shaped('refinedstorage:4096k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'refinedstorage:1024k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:nuggets/allthemodium'
    })
    e.shaped('extradisks:4096k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:1024k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:nuggets/allthemodium'
    })
    e.shaped('extradisks:16384k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'refinedstorage:4096k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/allthemodium'
    })
    e.shaped('extradisks:16384k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:4096k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/allthemodium'
    })
    e.shaped('extradisks:65536k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:16384k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/allthemodium'
    })
    e.shaped('extradisks:65536k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:16384k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/allthemodium'
    })
    e.shaped('extradisks:262144k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:65536k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/vibranium'
    })
    e.shaped('extradisks:262144k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:65536k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/vibranium'
    })
    e.shaped('extradisks:1048576k_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:262144k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/unobtainium'
    })
    e.shaped('extradisks:1048576k_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:262144k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/unobtainium'
    })
    e.shaped('extradisks:infinite_fluid_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:1048576k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/unobtainium'
    })
    e.shaped('extradisks:infinite_storage_part', [
        'ana',
        'fbf',
        'afa'
    ], {
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:1048576k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/unobtainium'
    })
    e.shaped('solarflux:sp_custom_allthemodium', [
        'PPP',
        'SAS',
        'SDS'
    ], {
        S: 'solarflux:sp_5',
        A: '#forge:storage_blocks/allthemodium',
        D: '#forge:storage_blocks/diamond',
        P: 'solarflux:photovoltaic_cell_4'
    }, 2)
    e.shaped('solarflux:sp_custom_vibranium', [
        'PPP',
        'SAS',
        'SAS'
    ], {
        S: 'solarflux:sp_custom_allthemodium',
        A: '#forge:storage_blocks/vibranium',
        P: 'solarflux:photovoltaic_cell_5'
    }, 2)
    e.shaped('solarflux:sp_custom_unobtainium', [
        'PPP',
        'SAS',
        'SAS'
    ], {
        S: 'solarflux:sp_custom_vibranium',
        A: '#forge:storage_blocks/unobtainium',
        P: 'solarflux:photovoltaic_cell_6'
    }, 2)

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

    //Jumbo Furnace

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

    //Reliquary Changes
    e.remove({
        output: 'xreliquary:fertile_lily_pad',
        type: 'minecraft:crafting_shapeless'
    })

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

    //Mek Recipes
    mekCrush(item.of('minecraft:brick', 4), 'minecraft:bricks')
    mekCrush(item.of('minecraft:rotten_flesh', 9), 'biomesoplenty:flesh')
    mekCrush(item.of('minecraft:magma_cream', 4), 'minecraft:magma_block')
    mekCrush(item.of('minecraft:blaze_powder', 4), '#forge:rods/blaze')
    mekCrush(item.of('minecraft:quartz', 4), '#forge:storage_blocks/quartz')
    mekCrush(item.of('allthemodium:unobtainium_allthemodium_alloy_dust'), 'allthemodium:unobtainium_allthemodium_alloy_ingot')
    mekCrush(item.of('allthemodium:unobtainium_vibranium_alloy_dust'), 'allthemodium:unobtainium_vibranium_alloy_ingot')
    mekCrush(item.of('allthemodium:vibranium_allthemodium_alloy_dust'), 'allthemodium:vibranium_allthemodium_alloy_ingot')

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
    //MA
    e.recipes.mysticalagriculture.infusion({
        input: {
            item: 'botania:overgrowth_seed'
        },
        ingredients: [{
                item: 'botania:gaia_ingot'
            },
            {
                item: 'mysticalagradditions:insanium_block'
            },
            {
                item: 'botania:gaia_ingot'
            },
            {
                item: 'mysticalagradditions:insanium_block'
            },
            {
                item: 'botania:gaia_ingot'
            },
            {
                item: 'mysticalagradditions:insanium_block'
            },
            {
                item: 'botania:gaia_ingot'
            },
            {
                item: 'mysticalagradditions:insanium_block'
            }
        ],
        result: {
            item: 'kubejs:magical_soil'
        }
    }).id('kubejs:infusion/magical_soil')

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