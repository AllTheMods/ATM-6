events.listen('recipes', function(e) {
    function jumbo(ingredients, result, xp) {
        e.recipes.jumbofurnace.jumbo_smelting({
            'ingredients': ingredients,
            'result': {
                'item': result
            },
            'experience': xp
        })
    }
    //Dragon Soul
    const iaf = 'iceandfire:'
    const dBlood = '_dragon_blood'
    e.shaped('atmadditions:dragon_soul', [
        'CDA',
        'SNI',
        'BSE'
    ], {
        A: 'eidolon:lesser_soul_gem',
        C: 'forbidden_arcanus:dark_soul',
        D: [`${iaf}fire${dBlood}`, `${iaf}ice${dBlood}`, `${iaf}lightning${dBlood}`],
        N: 'minecraft:nether_star',
        B: 'minecraft:dragon_breath',
        S: 'botania:dragonstone',
        E: 'forbidden_arcanus:golden_dragon_scale',
        I: '#forge:scales/dragon'
    })
    //Dimensional Seed
    e.shaped('atmadditions:dimensional_seed', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'compressium:stone_6',
        B: 'compressium:endstone_4',
        C: 'compressium:netherrack_4',
        D: 'compressium:clay_3',
        E: 'compressium:emerald_5',
        F: 'compressium:soulsand_4',
        G: 'compressium:redsand_4',
        H: 'compressium:snow_4',
        I: 'compressium:obsidian_3'
    })
    //Withers Compass
    e.shaped('atmadditions:withers_compass', [
        'DCD',
        'ABA',
        'DAD'
    ], {
        A: 'resourcefulbees:wither_honeycomb_block',
        B: 'ars_nouveau:glyph_wither',
        C: 'darkutils:rune_wither',
        D: Item.of('apotheosis:potion_charm', {
            Damage: 0,
            Potion: "apotheosis:strong_wither"
        })
    })
    //philosophers Fuel
    e.shapeless('kubejs:saltpeter_block', ['9x kubejs:saltpeter_ingot'])
    e.shapeless('9x kubejs:saltpeter_ingot', ['kubejs:saltpeter_block'])
    e.shapeless('kubejs:saltpeter_ingot', ['9x immersiveengineering:dust_saltpeter'])

    e.shapeless('9x kubejs:potassium_nitrate_ingot', ['kubejs:potassium_nitrate_block'])
    e.shapeless('kubejs:potassium_nitrate_block', ['9x kubejs:potassium_nitrate_ingot'])
    e.shapeless('kubejs:potassium_nitrate_ingot', ['9x kubejs:potassium_nitrate_dust'])

    e.shapeless('9x kubejs:potassium_ingot', ['kubejs:potassium_block'])
    e.shapeless('kubejs:potassium_block', ['9x kubejs:potassium_ingot'])
    e.shapeless('kubejs:potassium_ingot', ['9x kubejs:potassium_dust'])


    const multiCrush = (output, input) => {
        e.recipes.mekanism.crushing(output, input)
        e.recipes.create.crushing(output, input)
        e.recipes.immersiveengineering.crusher(output, input)
        e.recipes.thermal.pulverizer(output, input)
    }

    multiCrush('9x immersiveengineering:dust_saltpeter', ['kubejs:saltpeter_ingot'])
    multiCrush('9x kubejs:potassium_dust', ['kubejs:potassium_ingot'])
    multiCrush('9x kubejs:potassium_nitrate_dust', ['kubejs:potassium_nitrate_ingot'])

    e.recipes.mekanism.combining('2x kubejs:potassium_nitrate_dust', 'kubejs:potassium_dust', '#forge:dusts/saltpeter')
    e.recipes.mekanism.combining('2x kubejs:potassium_nitrate_ingot', 'kubejs:potassium_ingot', 'kubejs:saltpeter_ingot')
    e.recipes.mekanism.combining('2x kubejs:potassium_nitrate_block', 'kubejs:potassium_block', 'kubejs:saltpeter_block')
    e.recipes.create.mixing('2x kubejs:potassium_nitrate_dust', ['kubejs:potassium_dust', '#forge:dusts/saltpeter'])
    e.recipes.create.mixing('2x kubejs:potassium_nitrate_ingot', ['kubejs:potassium_ingot', 'kubejs:saltpeter_ingot'])
    e.recipes.create.mixing('2x kubejs:potassium_nitrate_block', ['kubejs:potassium_block', 'kubejs:saltpeter_block'])

    jumbo(
        [{
                'type': 'jumbofurnace:tag_stack',
                'tag': 'forge:vegetables',
                'count': 64
            },
            {
                'type': 'jumbofurnace:tag_stack',
                'tag': 'forge:vegetables',
                'count': 64
            },
            {
                'type': 'jumbofurnace:tag_stack',
                'tag': 'forge:vegetables',
                'count': 64
            }
        ],
        'kubejs:potassium_dust', 5
    )

    e.recipes.bloodmagic.alchemytable('atmadditions:philosophers_fuel', [
        'kubejs:potassium_nitrate_block',
        'mekanism:sulfuric_acid_bucket',
        'mana-and-artifice:enchantment_focus_fire',
        'thermal:coal_coke_block',
        'immersivepetroleum:napalm_bucket',
        'pneumaticcraft:lpg_bucket'
    ]).syphon(50000)
    //Improbable Probaility Device
    e.shaped('atmadditions:improbable_probability_device', [
        'AAB',
        'CDE',
        'FFF'
    ], {
        A: 'computercraft:monitor_advanced',
        B: 'mekanism:module_solar_recharging_unit',
        C: ['extradisks:1048576k_storage_part', 'ae2extras:16m_cell_component', 'extradisks:1048576k_fluid_storage_part'],
        D: 'rats:psionic_rat_brain',
        E: Item.of('apotheosis:potion_charm', {
            Damage: 0,
            Potion: "apotheosis:strong_knowledge"
        }),
        F: 'thermal:enderium_block'
    })
    //Nexium Emitter
    e.shaped('atmadditions:nexium_emitter', [
        'A C',
        ' BF',
        'CED'
    ], {
        A: 'powah:energizing_rod_nitro',
        B: ['refinedstorageaddons:wireless_crafting_grid', 'appliedenergistics2:wireless_terminal', 'refinedstorage:wireless_grid', 'refinedstorage:wireless_fluid_grid'],
        C: 'alltheores:platinum_block',
        D: 'compressium:netherite_3',
        E: 'mana-and-artifice:transitory_tunnel',
        F: 'powah:player_transmitter_nitro'
    })
    //Pulsating Black Hole
    e.shaped('atmadditions:pulsating_black_hole', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'botania:mana_void',
        B: 'bloodmagic:voidsigil',
        C: 'ars_nouveau:void_jar',
        D: 'rftoolsbuilder:shape_card_void',
        E: 'mininggadgets:upgrade_void_junk',
        F: 'thermal:device_nullifier',
        G: 'mekanism:creative_energy_cube',
        H: 'envirotech:xerothium_void_miner_ccu',
        I: 'modularrouters:void_module'
    })
    //Oblivion Shard
    e.shaped('atmadditions:oblivion_shard', [
        ' AB',
        'ACA',
        'BA '
    ], {
        A: 'allthemodium:unobtainium_block',
        C: 'astralsorcery:shifting_star_vicio',
        B: 'forbidden_arcanus:dark_nether_star_block'
    })
    //Creative Essence
    e.shaped('mysticalagradditions:creative_essence', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'mysticalagradditions:insanium_block',
        C: 'mysticalagradditions:insanium_gemstone_block',
        B: 'mysticalagriculture:master_infusion_crystal'
    })
    //Patrick Star
    e.recipes.create.mechanical_crafting('kubejs:patrick_star', [
        '    B    ',
        '   BCA   ',
        'BBBGCABBB',
        'ACGCGGGCA',
        ' AAGGGBA ',
        '  EDDDE  ',
        ' EFEDEFE ',
        'BEDD DDEB',
        'AAA   AAA'
    ], {
        A: 'minecraft:magenta_concrete',
        B: 'minecraft:pink_concrete',
        C: 'minecraft:pink_concrete_powder',
        D: 'minecraft:green_concrete',
        E: 'minecraft:green_concrete_powder',
        F: 'minecraft:lime_concrete',
        G: 'minecraft:magenta_concrete_powder'
    })
    //ATM Star
    e.recipes.create.mechanical_crafting('atmadditions:atm_star', [
        '    A    ',
        '   AJA   ',
        'AAAJFJAAA',
        'AJJCDEJJA',
        ' ANBIHMA ',
        '  AKGLA  ',
        ' AJJAJJA ',
        'AJJA AJJA',
        'AAA   AAA'
    ], {
        A: 'allthemodium:unobtainium_allthemodium_alloy_block',
        B: 'atmadditions:nexium_emitter',
        C: 'atmadditions:dragon_soul',
        D: 'atmadditions:withers_compass',
        E: 'atmadditions:pulsating_black_hole',
        F: 'atmadditions:oblivion_shard',
        G: 'atmadditions:improbable_probability_device',
        H: 'atmadditions:dimensional_seed',
        I: 'kubejs:patrick_star',
        J: 'kubejs:nether_star_block',
        K: 'atmadditions:philosophers_fuel',
        L: 'mysticalagradditions:creative_essence',
        M: 'kubejs:rune_of_sins',
        N: 'kubejs:mass_of_wills'
    })
})