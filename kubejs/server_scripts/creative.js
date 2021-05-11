events.listen('recipes', function(e) {

    const atm_star = 'atmadditions:atm_star'

    function energize(ingredient, result, power) {
        e.recipes.powah.energizing({
            ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
            energy: power,
            result: Item.of(result).toResultJson()
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
    //Ctiers
    e.shaped('3x ctiers:centrifuge_casing_tier_creative', [
        'IRG',
        'RTR',
        'DRE'
    ], {
        I: 'compressium:iron_3',
        R: 'compressium:redstone_3',
        G: 'compressium:gold_3',
        T: 'ctiers:centrifuge_casing_tier_5',
        D: 'compressium:diamond_3',
        E: 'compressium:emerald_3'
    })
    e.shaped('ctiers:centrifuge_controller_tier_creative', [
        'ICG',
        'HSH',
        'DHE'
    ], {
        I: 'compressium:iron_5',
        C: 'ctiers:centrifuge_casing_tier_creative',
        G: 'compressium:gold_5',
        S: atm_star,
        D: 'compressium:diamond_5',
        E: 'compressium:emerald_5',
        H: 'compressium:honey_5'
    })
    //CApiary
    e.shaped('creativeapiary:tcreative_apiary', [
        'HMH',
        'MCM',
        'TAT'
    ], {
        H: 'compressium:honey_6',
        M: 'mekanism:pellet_antimatter',
        C: 'ctiers:centrifuge_controller_tier_creative',
        T: 'resourcefulbees:t4_apiary',
        A: 'allthemodium:unobtainium_allthemodium_alloy_block'
    })
    e.shaped('creativeapiary:creative_apiary_storage', [
        'HNH',
        'CAC',
        'NHN'
    ], {
        H: 'compressium:honey_3',
        N: 'kubejs:nether_star_block',
        C: 'ctiers:centrifuge_casing_tier_creative',
        A: 'resourcefulbees:apiary_storage'
    })
    e.shaped('creativeapiary:creative_apiary_breeder', [
        'BNB',
        'NBN',
        'BNB'
    ], {
        B: 'resourcefulbees:apiary_breeder',
        N: 'kubejs:nether_star_block'
    })
    //Exchangers
        e.shaped('exchangers:creative_exchanger', [
            ' E ',
            'RSH',
            ' U '
        ], {
            S: atm_star,
            E: 'exchangers:end_exchanger',
            H: 'exchangers:hv_exchanger',
            U: 'exchangers:ultimate_exchanger',
            R: 'exchangers:resonant_exchanger'
        })
    //Rats
    e.shaped('rats:creative_cheese', [
        'CCC',
        'CSC',
        'CCC'
    ], {
        C: '#forge:cheese_block',
        S: atm_star
    })
    e.shaped('rats:rat_upgrade_creative', [
        'CUC',
        'USU',
        'CUC'
    ], {
        C: '#forge:cheese_block',
        U: 'rats:rat_upgrade_block',
        S: atm_star
    })
    e.shaped('rats:rat_upgrade_combined_creative', [
        'RUR',
        'USU',
        'RUR'
    ], {
        R: 'rats:idol_of_ratlantis',
        U: 'rats:rat_upgrade_combined',
        S: atm_star
    })
    //Woot
    e.shaped('woot:creative_conatus', [
        'UCU',
        'CSC',
        'UCU'
    ], {
        S: atm_star,
        U: 'allthemodium:unobtainium_ingot',
        C: 'woot:cell_4'
    })
    //Botania
    e.shaped('botania:creative_pool', [
        'RMR',
        'MSM',
        'RMR'
    ], {
        S: atm_star,
        M: 'botania:mana_pool',
        R: '#botania:runes'
    })

    e.shapeless(item.of('botania:mana_tablet', {
        mana: 500000,
        creative: 1
    }), ['botania:creative_pool'])

    //Ars Nouveau
    e.shaped(Item.of('ars_nouveau:creative_spell_book', {
        mode: 0,
        spells: ",intangible,ignite,flare,strength,craft,cold_snap,rune,snare,slowfall,freeze,split,crush,smelt,summon_steed,accelerate,summon_vex,lightning,grow,dampen,touch,invisibility,extract,delay,light,duration_down,exchange,place_block,summon_wolves,shield,conjure_water,cut,harm,interact,blink,amplify,phantom_block,fell,extend_time,heal,leap,redstone_signal,pierce,harvest,fortune,break,pickup,launch,dispel,haste,ender_inventory,pull,explosion,fangs,aoe,gravity,self,aquatic,projectile,wither,gust"
    }), [
        'BSG',
        'GGE',
        'EER'
    ], {
        B: 'ars_nouveau:archmage_spell_book',
        S: atm_star,
        G: 'astralsorcery:resonating_gem',
        E: 'minecraft:ender_eye',
        R: 'tombstone:soul_receptacle'
    })

    e.shaped('ars_nouveau:creative_mana_jar', [
        'GMG',
        'GSG',
        'GGG'
    ], {
        G: '#forge:glass',
        S: atm_star,
        M: 'ars_nouveau:mana_gem_block'
    })
    //Immersive Engineering
    energize(['immersiveengineering:capacitor_lv', 'immersiveengineering:capacitor_mv', 'immersiveengineering:capacitor_hv', atm_star], 'immersiveengineering:capacitor_creative', 2147483647)
    //Integrated Dynamics
    energize(['integrateddynamics:energy_battery', 'integrateddynamics:energy_battery', atm_star, 'integrateddynamics:energy_battery', 'integrateddynamics:energy_battery'], 'integrateddynamics:energy_battery_creative', 2147483647)
    //Powah
    energize(['powah:energy_cell_nitro', 'powah:energy_cell_nitro', atm_star, 'powah:energy_cell_nitro','powah:energy_cell_nitro'], 'powah:energy_cell_creative', 2147483647)
    //Applied Energistics 2
    energize(['appliedenergistics2:dense_energy_cell', atm_star], 'appliedenergistics2:creative_energy_cell', 2147483647)
    //Mekanism
    e.shaped('mekanism:creative_energy_cube', [
        'ATA',
        'VCV',
        'ATA'
    ], {
        A: 'mekanism:alloy_atomic',
        T: 'mekanism:energy_tablet',
        V: 'allthemodium:vibranium_block',
        C: 'mekanism:ultimate_energy_cube'
    })

    energize(['mekanism:creative_energy_cube', atm_star], Item.of('mekanism:creative_energy_cube', {
        mekData: {
            EnergyContainers: [{
                Container: 0,
                stored: "18446744073709551615.9999"
            }]
        }
    }), 2147483647)
    //Create
    e.recipes.create.mechanical_crafting('create:creative_motor', [
        'CLC',
        'HSH',
        'LGL'
    ], {
        C: 'create:cogwheel',
        L: 'create:large_cogwheel',
        H: 'create:shaft',
        S: atm_star,
        G: 'create:gearbox'
    })
    //Refined Storage
    energize(['refinedstorage:wireless_grid'], 'refinedstorage:creative_wireless_grid', 2147483647)
    energize(['refinedstorage:wireless_fluid_grid'], 'refinedstorage:creative_wireless_fluid_grid', 2147483647)
    energize(['refinedstorage:wireless_crafting_monitor'], 'refinedstorage:creative_wireless_crafting_monitor', 2147483647)
    energize(['refinedstorageaddons:wireless_crafting_grid'], 'refinedstorageaddons:creative_wireless_crafting_grid', 2147483647)
    energize(['refinedstorage:portable_grid'], 'refinedstorage:creative_portable_grid', 2147483647)
    energize(['refinedstorage:controller', atm_star], 'refinedstorage:creative_controller', 2147483647)
    //Pneumatic Craft
    pressure([{
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:electrostatic_compressor',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:flux_compressor',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': atm_star,
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_air_compressor',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_liquid_compressor',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        }
    ], 'pneumaticcraft:creative_compressor', 1, 4.9)
    //Storage Drawers
    e.shaped('16x storagedrawers:creative_storage_upgrade', [
        'EEE',
        'ASA',
        'EEE'
    ], {
        E: 'storagedrawers:emerald_storage_upgrade',
        S: atm_star,
        A: 'allthemodium:allthemodium_block'
    })
    //Thermal 
    e.shaped('thermal:machine_efficiency_creative_augment', [
        'AHA',
        'ESE',
        'AHA'
    ], {
        A: 'thermal:upgrade_augment_3',
        H: Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 4),
        E: Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 5),
        S: atm_star
    })
    //Ice And Fire
    e.shaped('2x iceandfire:creative_dragon_meal', [
        'DDD',
        'DSD',
        'DDD'
    ], {
        D: 'iceandfire:dragon_meal',
        S: atm_star
    })

    const colors = ['red', 'green', 'bronze', 'gray', 'blue', 'white', 'sapphire', 'silver', 'electric', 'amythest', 'copper', 'black']

    colors.forEach(color => {
        e.shaped('iceandfire:dragonegg_' + color, [
            'DED',
            'ESE',
            'DED'
        ], {
            S: atm_star,
            E: 'minecraft:dragon_egg',
            D: 'iceandfire:dragonscales_' + color
        })
    })
})
