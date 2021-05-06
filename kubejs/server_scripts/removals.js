//priority: 999
events.listen('recipes', e => {
    var idRemove = [
        'minecraft:comparator',
        'minecraft:glass',

        'pedestals:pedestal_crushing/dustnethergold',

        'forbidden_arcanus:leather',

        'computercraft:turtle_normal',
        'computercraft:turtle_advanced',

        'byg:black_glass_from_sand',
        'byg:purple_glass_from_sand',
        'byg:blue_glass_from_sand',
        'byg:white_glass_from_sand',

        'engineerstools:crushing/aluminium_grit_crushing_recipe',

        'xreliquary:alkahestry/crafting/nether_star',

        'thermal:machine/press/packing2x2/press_honeycomb_packing',
        'thermal:machine/press/unpacking/press_honeycomb_unpacking',

        //ma balance
        'mysticalagriculture:essence/astralsorcery/rock_crystal',
        'mysticalagriculture:essence/astralsorcery/starmetal_ingot',
        'mysticalagriculture:essence/astralsorcery/aquamarine',

        'mysticalagriculture:essence/thermal/basalz_rod',
        'mysticalagriculture:essence/thermal/blitz_rod',
        'mysticalagriculture:essence/thermal/blizz_rod',
        'mysticalagriculture:essence/thermal/enderium_ingot',
        'mysticalagriculture:essence/thermal/lumium_ingot',
        'mysticalagriculture:essence/thermal/signalum_ingot',

        'mysticalagriculture:essence/quark/ender_biotite',

        'mysticalagriculture:essence/powah/blazing_crystal',
        'mysticalagriculture:essence/powah/energized_steel',
        'mysticalagriculture:essence/powah/niotic_crystal',
        'mysticalagradditions:essence/nitro_crystal',
        'mysticalagriculture:essence/powah/spirited_crystal',

        'mysticalagriculture:essence/botania/elementium_ingot',
        'mysticalagriculture:essence/botania/manasteel_ingot',
        `mysticalagriculture:essence/botania/terrasteel_ingot`,

        'mysticalagriculture:essence/common/brass_ingot',
        'mysticalagriculture:essence/common/bronze_ingot',
        'mysticalagriculture:essence/common/constantan_ingot',
        'mysticalagriculture:essence/common/electrum_ingot',
        'mysticalagriculture:essence/common/graphite_ingot',
        'mysticalagriculture:essence/common/invar_ingot',
        'mysticalagriculture:essence/common/silicon',
        'mysticalagriculture:essence/common/steel_ingot',
        'mysticalagriculture:essence/common/sulfur',

        'mysticalagriculture:essence/immersiveengineering/hop_graphite_ingot',

        'mysticalagriculture:essence/pneumaticcraft/compressed_iron_ingot',

        'mysticalagriculture:essence/appliedenergistics2/fluix',
        'mysticalagriculture:essence/appliedenergistics2/sky_stone',

        'mysticalagriculture:essence/refinedstorage/quartz_enriched_iron_ingot',

        'mysticalagriculture:essence/mekanism/refined_glowstone_ingot',
        'mysticalagriculture:essence/mekanism/refined_obsidian_ingot',


        'mysticalagriculture:seed/infusion/basalz',
        'mysticalagriculture:seed/infusion/blazing_crystal',
        'mysticalagriculture:seed/infusion/blitz',
        'mysticalagriculture:seed/infusion/blizz',
        'mysticalagriculture:seed/infusion/brass',
        'mysticalagriculture:seed/infusion/bronze',
        'mysticalagriculture:seed/infusion/compressed_iron',
        'mysticalagriculture:seed/infusion/constantan',
        'mysticalagriculture:crimson_steel_seeds_infusion',
        'mysticalagriculture:seed/infusion/electrum',
        'mysticalagriculture:seed/infusion/elementium',
        'mysticalagriculture:seed/infusion/enderium',
        'mysticalagriculture:seed/infusion/ender_biotite',
        'mysticalagriculture:seed/infusion/energized_steel',
        'mysticalagriculture:seed/infusion/fluix',
        'mysticalagriculture:seed/infusion/graphite',
        'mysticalagriculture:seed/infusion/hop_graphite',
        'mysticalagriculture:seed/infusion/invar',
        'mysticalagriculture:seed/infusion/lumium',
        'mysticalagriculture:seed/infusion/manasteel',
        'mysticalagriculture:seed/infusion/niotic_crystal',
        'mysticalagriculture:nitro_crystal_seeds_infusion',
        'mysticalagriculture:oratchalcum_seeds_infusion',
        'mysticalagriculture:seed/infusion/quartz_enriched_iron',
        'mysticalagriculture:seed/infusion/refined_glowstone',
        'mysticalagriculture:seed/infusion/refined_obsidian',
        'mysticalagriculture:seed/infusion/rock_crystal',
        'mysticalagriculture:seed/infusion/signalum',
        'mysticalagriculture:seed/infusion/silicon',
        'mysticalagriculture:seed/infusion/sky_stone',
        'mysticalagriculture:seed/infusion/spirited_crystal',
        'mysticalagriculture:seed/infusion/starmetal',
        'mysticalagriculture:seed/infusion/steel',
        'mysticalagriculture:seed/infusion/sulfur',
        'mysticalagriculture:seed/infusion/terrasteel',

        //crative apiary
        'creativeapiary:tcreative_apiary',
        'creativeapiary:creative_apiary_storage',
        'creativeapiary:creative_apiary_breeder',

        'quarryplus:solidquarry',
        'quarryplus:workbenchplus',
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
        //'bluepower:alloyfurnace',
        //'bluepower:blulectric_alloyfurnace',
        'forbidden_arcanus:iron_chain',
        'silentgear:iron_rod',
        'entangled:block',
        'entangled:item',
        'refinedstorage:part/4096k_fluid_storage_part',
        'extradisks:part/4096k_storage_part',
        'extradisks:part/16384k_fluid_storage_part',
        'extradisks:part/16384k_storage_part',
        'extradisks:part/65536k_fluid_storage_part',
        'extradisks:part/65536k_storage_part',
        'extradisks:part/262144k_fluid_storage_part',
        'extradisks:part/262144k_storage_part',
        'extradisks:part/1048576k_fluid_storage_part',
        'extradisks:part/1048576k_storage_part',
        'extradisks:part/infinite_fluid_storage_part',
        'extradisks:part/infinite_storage_part',
        'mysticalagriculture:unattuned_augment',
        'rftoolsbuilder:builder',
        'extrastorage:iron_crafter',
        'twilightforest:uncrafting_table',
        'mob_grinding_utils:recipe_mob_swab',
        'creativecrafter:creative_crafter',
        'creativewirelesstransmitter:creative_wireless_transmitter',
        'thermal:machine/pyrolyzer/pyrolyzer_coal',
        'thermal:machine/pyrolyzer/pyrolyzer_logs'

    ];
    idRemove.forEach(iR => {
        e.remove({
            id: iR
        });
    });
    //Recipe removals
    e.remove({
        output: [
            'appliedenergistics2:silicon',

            'mekanism:upgrade_anchor',

            'forbidden_arcanus:rotten_leather',

            'xreliquary:alkahestry_tome',

            'naturesaura:chunk_loader',

            'cyclic:uncrafter',
            'cyclic:tile_transporter_empty',

            'solarflux:sp_6',
            'solarflux:sp_7',
            'solarflux:sp_8',

            'quark:apple_crate',
            'quark:potato_crate',
            'quark:carrot_crate',
            'quark:beetroot_crate',
            'quark:charcoal_block',
            'quark:gunpowder_sack',

            'mekanism:block_charcoal',

            'titanium:iron_gear',
            'titanium:gold_gear',
            'titanium:diamond_gear',
        ]
    });
    //Remove via mod name
    var modRemove = [
        `cabletiers`,
    ];
    modRemove.forEach(mR => {
        e.remove({
            mod: mR
        });
    });
    e.remove({
        input: [
            'appliedenergistics2:flour'
        ]
    });
    e.remove({
        type: 'xreliquary:alkahestry_charging'
    });
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
    e.remove({
        output: 'pedestals:dustflour'
    })
    e.remove({
        output: 'mekanism:bio_fuel'
    })
});