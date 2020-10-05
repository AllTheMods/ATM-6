events.listen('recipes', function (e) {
    //Functions
    var shaped = function (result, pattern, items) {
        e.shaped(item.of(result),
            pattern,
            items
        )
    }
    var shapedC = function (result, count, pattern, items) {
        e.shaped(item.of(result, count),
            pattern,
            items
        )
    }
    var shapeless = function (result, items) {
        e.shapeless(item.of(result), items)
    }
    var shapelessC = function (result, count, items) {
        e.shapeless(item.of(result, count), items)
    }
    var removeOut = function (item) {
      e.remove({output: item})
    }
    //Removals
    removeOut([/* 
        'quark:oak_chest',
        'quark:dark_oak_chest',
        'quark:acacia_chest',
        'quark:spruce_chest',
        'quark:birch_chest',
        'quark:jungle_chest',
        'quark:warped_chest',
        'quark:crimson_chest',
        'quarryplus:solidquarry',
        'quarryplus:workbenchplus',*/
        'mininggadgets:upgrade_empty',
        'mekanism:digital_miner',
        'mekanism:atomic_disassembler',
        'mekanismgenerators:wind_generator',
        'pamhc2foodcore:fruitpunchitem',
        'pamhc2foodcore:applejuiceitem',
        'pamhc2foodcore:melonjuiceitem',
        'pamhc2foodcore:sweetberryjuiceitem',
        'pamhc2foodcore:p8juiceitem',
        'angelring:itemring',
        'angelring:itemdiamondring',
        'bluepower:alloyfurnace',
        'bluepower:blulectric_alloyfurnace',
        'computercraft:computer_normal',
        'computercraft:computer_advanced',
        'forbidden_arcanus:iron_chain',
        'silentgear:iron_rod',
        'entangled:block',
        'entangled:item',
        'refinedstorage:4096k_fluid_storage_part',
        'extradisks:4096k_storage_part',
        'extradisks:16384k_fluid_storage_part',
        'extradisks:16384k_storage_part',
        'extradisks:65536k_fluid_storage_part',
        'extradisks:65536k_storage_part',
        'extradisks:262144k_fluid_storage_part',
        'extradisks:262144k_storage_part',
        'extradisks:1048576k_fluid_storage_part',
        'extradisks:1048576k_storage_part',
        'extradisks:infinite_fluid_storage_part',
        'extradisks:infinite_storage_part',
        'mysticalagriculture:unattuned_augment',
        'rftoolsbuilder:builder'
    ])
    //Rats
    shaped('rats:pied_wool',[
        'YGY',
        'GYG',
        'YGY'
    ],{
        'Y': 'minecraft:yellow_wool',
        'G': 'minecraft:green_wool'
    })
    //QuarryPlus
/*     shaped('quarryplus:solidquarry',[
    'FFF',
    'DGD',
    'AAA'
    ],{
        'F': 'minecraft:furnace',
        'D': 'minecraft:diamond_pickaxe',
        'G': '#forge:storage_blocks/gold',
        'A': '#forge:nuggets/allthemodium'
    })
    shaped('quarryplus:workbenchplus',[
    'III',
    'GDG',
    'AAA'
    ],{
        'I': '#forge:storage_blocks/iron',
        'G': '#forge:storage_blocks/gold',
        'D': '#forge:storage_blocks/diamond',
        'A': '#forge:nuggets/allthemodium'
    }) */
    //Mining Gadgets
    shaped('mininggadgets:upgrade_empty',[
    'RAL',
    'DGD',
    'LAR'
    ],{
        'L': '#forge:storage_blocks/lapis',
        'R': '#forge:storage_blocks/redstone',
        'D': '#forge:gems/diamond',
        'A': '#forge:nuggets/allthemodium',
        'G': 'minecraft:glass_pane'
    })
    //Mystical Agriculture
    shaped('mysticalagriculture:unattuned_augment',[
    'PMP',
    'AMA',
    'PMP'
    ],{
        'P': 'mysticalagriculture:prosperity_ingot',
        'M': 'botania:manasteel_ingot',
        'A': '#forge:nuggets/allthemodium'
    })
    //Mekanism
    shaped('mekanism:digital_miner',[
    'AUA',
    'LRL',
    'TST'
    ],{
        'L': 'mekanism:logistical_sorter',
        'R': 'mekanism:robit',
        'T': 'mekanism:teleportation_core',
        'A': '#mekanism:alloys/atomic',
        'S': 'mekanism:steel_casing',
        'U': '#forge:ingots/unobtainium'
    })
    shaped('mekanism:atomic_disassembler',[
    'RER',
    'RUR',
    ' V '
    ],{
        'E': 'mekanism:energy_tablet',
        'R': '#mekanism:alloys/reinforced',
        'U': '#forge:circuits/ultimate',
        'V': '#forge:ingots/vibranium'
    })
    shaped('mekanismgenerators:wind_generator',[
    ' O ',
    'OCO',
    'EBE'
    ],{
        'E': 'mekanism:energy_tablet',
        'C': 'mekanismgenerators:electromagnetic_coil',
        'B': '#forge:circuits/basic',
        'O': '#forge:ingots/osmium'
    })
    //Jetpacks
    shaped('ironjetpacks:diamond_cell',[
    ' R ',
    'TCT',
    ' R '
    ],{
        'R': '#forge:dusts/redstone',
        'C': 'ironjetpacks:advanced_coil',
        'T': '#forge:gems/diamond'
    })
    shaped('ironjetpacks:diamond_thruster',[
    'TAT',
    'ACA',
    'TFT'
    ],{
        'F': 'minecraft:furnace',
        'A': 'ironjetpacks:advanced_coil',
        'C': 'ironjetpacks:diamond_cell',
        'T': '#forge:gems/diamond'
    })
    shaped('ironjetpacks:diamond_capacitor',[
    'RCR',
    'RCR',
    'RCR'
    ],{
        'R': '#forge:gems/diamond',
        'C': 'ironjetpacks:diamond_cell'
    })
    shaped('ironjetpacks:diamond_jetpack',[
    'DCD',
    'DJD',
    'TRT'
    ],{
        'D': '#forge:gems/diamond',
        'C': 'ironjetpacks:diamond_capacitor',
        'J': ['ironjetpacks:steel_jetpack','ironjetpacks:electrum_jetpack','ironjetpacks:invar_jetpack'],
        'T': 'ironjetpacks:diamond_thruster',
        'R': 'angelring:itemdiamondring'
    })
    shaped('ironjetpacks:platinum_cell',[
    ' R ',
    'TCT',
    ' R '
    ],{
        'R': '#forge:dusts/redstone',
        'C': 'ironjetpacks:advanced_coil',
        'T': '#forge:ingots/platinum'
    })
    shaped('ironjetpacks:platinum_thruster',[
    'TAT',
    'ACA',
    'TFT'
    ],{
        'F': 'minecraft:furnace',
        'A': 'ironjetpacks:advanced_coil',
        'C': 'ironjetpacks:platinum_cell',
        'T': '#forge:ingots/platinum'
    })
    shaped('ironjetpacks:platinum_capacitor',[
    'RCR',
    'RCR',
    'RCR'
    ],{
        'R': '#forge:ingots/platinum',
        'C': 'ironjetpacks:platinum_cell'
    })
    shaped('ironjetpacks:platinum_jetpack',[
    'PCP',
    'PJP',
    'TRT'
    ],{
        'P': '#forge:ingots/platinum',
        'C': 'ironjetpacks:platinum_capacitor',
        'J': ['ironjetpacks:steel_jetpack','ironjetpacks:electrum_jetpack','ironjetpacks:invar_jetpack'],
        'T': 'ironjetpacks:platinum_thruster',
        'R': 'angelring:itemdiamondring'
    })
    //Foods
    shaped('pamhc2foodcore:fruitpunchitem',[
    'FFF',
    'FBF',
    'FFF'
    ],{
        'F': '#forge:fruits',
        'B': 'pamhc2foodcore:applejuiceitem'
    })
    shaped('pamhc2foodcore:applejuiceitem',[
    'FFF',
    'FBF',
    'FFF'
    ],{
        'F': 'minecraft:apple',
        'B': 'minecraft:glass_bottle'
    })
    shaped('pamhc2foodcore:melonjuiceitem',[
    'FFF',
    'FBF',
    'FFF'
    ],{
        'F': 'minecraft:melon_slice',
        'B': 'minecraft:glass_bottle'
    })
    shaped('pamhc2foodcore:sweetberryjuiceitem',[
    'FFF',
    'FBF',
    'FFF'
    ],{
        'F': 'minecraft:sweet_berries',
        'B': 'minecraft:glass_bottle'
    })
    shaped('pamhc2foodcore:p8juiceitem',[
    'FFF',
    'FBF',
    'FFF'
    ],{
        'F': '#forge:vegetables',
        'B': 'minecraft:glass_bottle'
    })
    //Angel Ring
    shaped('angelring:itemdiamondring',[
    'DND',
    'VEU',
    'DAD'
    ],{
        'D': '#forge:storage_blocks/diamond',
        'N': '#forge:storage_blocks/netherite',
        'V': '#forge:storage_blocks/vibranium',
        'U': '#forge:storage_blocks/unobtainium',
        'A': '#forge:storage_blocks/allthemodium',
        'E': 'minecraft:elytra'
    })
    shaped('angelring:itemring',[
    'CAC',
    'ARA',
    'DGD'
    ],{
        'C': 'botania:pixie_dust',
        'A': '#forge:storage_blocks/terrasteel',
        'R': 'angelring:itemdiamondring',
        'D': '#forge:nether_stars',
        'G': 'botania:gaia_ingot'
    })
    //Computer Craft
    shaped('computercraft:computer_normal',[
    'QQQ',
    'QAQ',
    'QIQ'
    ],{
        'Q': 'refinedstorage:quartz_enriched_iron',
        'A': '#forge:ingots/allthemodium',
        'I': 'botania:elf_glass'
    })
    shaped('computercraft:computer_advanced',[
    'GGG',
    'GCG',
    'GGG'
    ],{
        'G': '#forge:ingots/gold',
        'C': 'computercraft:computer_normal'
    })
    //Other recipes
    shaped('forbidden_arcanus:iron_chain', 3,[
    'N  ',
    ' I ',
    '  N'
    ],{
        'N': '#forge:nuggets/iron',
        'I': '#forge:ingots/iron'
    })
    shaped('entangled:block',[
    'UEU',
    'ECE',
    'UEU'
    ],{
        'U': '#forge:ingots/unobtainium',
        'E': '#forge:ender_pearls',
        'C': 'minecraft:ender_chest'
    })
    shaped('entangled:item',[
    ' EC',
    ' UE',
    'U  '
    ],{
        'U': '#forge:ingots/unobtainium',
        'E': '#forge:ender_pearls',
        'C': 'minecraft:ender_chest'
    })
    //Extra Disks
    shaped('refinedstorage:4096k_fluid_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'refinedstorage:1024k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:nuggets/allthemodium'
    })
    shaped('extradisks:4096k_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:1024k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:nuggets/allthemodium'
    })
    shaped('extradisks:16384k_fluid_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'refinedstorage:4096k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/allthemodium'
    })
    shaped('extradisks:16384k_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:4096k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/allthemodium'
    })
    
    shaped('extradisks:65536k_fluid_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:16384k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/allthemodium'
    })
    shaped('extradisks:65536k_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:16384k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/allthemodium'
    })
    shaped('extradisks:262144k_fluid_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:65536k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/vibranium'
    })
    shaped('extradisks:262144k_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:65536k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/vibranium'
    })
    shaped('extradisks:1048576k_fluid_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:262144k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/unobtainium'
    })
    shaped('extradisks:1048576k_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:262144k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/unobtainium'
    })
    shaped('extradisks:infinite_fluid_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:1048576k_fluid_storage_part',
        'b': 'minecraft:bucket',
        'n': '#forge:ingots/unobtainium'
    })
    shaped('extradisks:infinite_storage_part',[
    'ana',
    'fbf',
    'afa'
    ],{
        'a': 'refinedstorage:advanced_processor',
        'f': 'extradisks:1048576k_storage_part',
        'b': '#forge:dusts/redstone',
        'n': '#forge:ingots/unobtainium'
    })
    //Quark
    /* 
    shapeless('minecraft:chest', '#forge:chests/wooden')
    shapeless('quark:oak_chest',['minecraft:oak_planks', '#forge:chests/wooden'])
    shapeless('quark:dark_oak_chest',['minecraft:dark_oak_planks', '#forge:chests/wooden'])
    shapeless('quark:acacia_chest',['minecraft:acacia_planks', '#forge:chests/wooden'])
    shapeless('quark:spruce_chest',['minecraft:spruce_planks', '#forge:chests/wooden'])
    shapeless('quark:birch_chest',['minecraft:birch_planks', '#forge:chests/wooden'])
    shapeless('quark:jungle_chest',['minecraft:jungle_planks', '#forge:chests/wooden'])
    shapeless('quark:warped_chest',['minecraft:warped_planks', '#forge:chests/wooden'])
    shapeless('quark:crimson_chest',['minecraft:crimson_planks', '#forge:chests/wooden']) */
    //BluePower
    //shapelessC('bluepower:blue_alloy_ingot', 4, ['#forge:dusts/teslatite','#forge:dusts/teslatite','#forge:dusts/teslatite','#forge:ingots/silver'])
    //RFTools
    shaped('rftoolsbuilder:builder',[
    'aea',
    'rmr',
    'ara'
    ],{
        'a': '#forge:nuggets/allthemodium',
        'e': '#forge:ender_pearls',
        'r': '#forge:storage_blocks/redstone',
        'm': 'rftoolsbase:machine_frame'
    })
})