const colors = [
    `white`,
    `light_gray`,
    `gray`,
    `black`,
    `red`,
    `orange`,
    `yellow`,
    `lime`,
    `green`,
    `light_blue`,
    `cyan`,
    `blue`,
    `purple`,
    `magenta`,
    `pink`,
    `brown`
]
const refined = [
    `controller`,
    `creative_controller`,
    `grid`,
    `crafting_grid`,
    `pattern_grid`,
    `fluid_grid`,
    `network_receiver`,
    `network_transmitter`,
    `relay`,
    `detector`,
    `security_manager`,
    `wireless_transmitter`,
    `disk_manipulator`,
    `crafter`,
    `crafter_manager`,
    `crafting_monitor`
]

onEvent(`jei.add.items`, e => {
    const eggs = ['dragonic', 'allthemodium', 'vibranium', 'unobtainium', 'soul_lava', 'netherite']
    eggs.forEach(type => {
        e.add([`resourcefulbees:${type}_bee_spawn_egg`])
    })

    e.add([`minecraft:dragon_egg`])
})

onEvent(`jei.hide.items`, e => {
    const typeFirst = ['mekanism', 'immersiveengineering']

    function hideMetal(mod, name, types) {
        types.forEach(type => {
            const id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
            if (!Ingredient.of(id).stacks.empty) e.hide(id)
        })
    }

    function hideStuff(mod, type, names) {
        names.forEach(name => {
            const id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
            if (!Ingredient.of(id).stacks.empty) e.hide(id)
        })
    }

    e.hide([
        `quark:ancient_tome`,

        `@curios`,

        `forbidden_arcanus:rotten_leather`,

        `appliedenergistics2:silicon`,
        `appliedenergistics2:flour`,
        /appliedenergistics2:facade/,

        `cyclic:tile_transporter_empty`,

        `naturesaura:chunk_loader`,

        /extrastorage:disk_.+/,
        /extrastorage:block_.+/,
        /extrastorage:storagepart_.+/,

        /titanium:.+/,

        `bloodmagic:saltpeter`,
        `bloodmagic:sulfur`,
        `bloodmagic:coalsand`,
        `bloodmagic:ironsand`,
        `bloodmagic:goldsand`,

        /pedestals:dust.+/,
        /pedestals:pedestal\/stone(?!333)\d{3}/,

        `mekanism:copper_ore`,
        `mekanism:tin_ore`,
        `mekanism:osmium_ore`,
        `mekanism:uranium_ore`,
        `mekanism:lead_ore`,
        `mekanism:sawdust`,
        `mekanism:block_charcoal`,
        /mekanism:creative_chemical_tank/,
        /mekanism:creative_fluid_tank/,

        /immersiveengineering:.+coke/,
        `immersiveengineering:coke`,
        `immersiveengineering:slag`,
        'immersivepetroleum:bitumen',

        `darkutils:ender_hopper`,

        /biggerreactors:yello.+/,

        /engineerstools:.+_grit/,

        `pamhc2foodcore:cheeseitem`,

        `platforms:ramp`,
        `platforms:rise`,
        `platforms:rail`,
        `platforms:floor`,
        `platforms:flat`,
        `platforms:frame`,

        `xreliquary:alkahestry_tome`,

        `mininggadgets:minerslight`,

        'mysticalagradditions:nitro_crystal_crux',

        `rats:ratlantis_portal`,

        `iceandfire:silver_ingot`,
        `iceandfire:copper_ingot`,

        `tconstruct:copper_ingot`,
        `tmechworks:copper_ingot`,
        `tmechworks:aluminum_ingot`,

        // tinker fluids overriden by ATO
        'tconstruct:molten_aluminum_bucket',
        'tconstruct:molten_copper_bucket',
        'tconstruct:molten_lead_bucket',
        'tconstruct:molten_nickel_bucket',
        'tconstruct:molten_osmium_bucket',
        'tconstruct:molten_platinum_bucket',
        'tconstruct:molten_silver_bucket',
        'tconstruct:molten_tin_bucket',
        'tconstruct:molten_uranium_bucket',
        'tconstruct:molten_zinc_bucket',

        `eidolon:sulfur`,
        `eidolon:lead_ore`,
        `eidolon:lead_ingot`,
        `eidolon:lead_block`,
        `eidolon:lead_nugget`,

        /resourcefulbees:.+_bee_spawn_egg/,

        // honey buckets
        'cyclic:honey_bucket',
        'create:honey_bucket',

        // oil buckets
        'thermal:creosote_bucket',
        'thermal:crude_oil_bucket',
        'immersivepetroleum:oil_bucket',

        `twilightforest:uncrafting_table`,

        `solarflux:sp_6`,
        `solarflux:sp_7`,
        `solarflux:sp_8`,

        'lazierae2:coal_dust',

        'thermal:rf_coil_creative_augment',
        'thermal:fluid_tank_creative_augment',
        'thermal:machine_catalyst_creative_augment'
    ])

    colors.forEach(color => {
        refined.forEach(refin => {
            e.hide([`refinedstorage:${color}_${refin}`])
        })

        e.hide([`creativewirelesstransmitter:${color}_creative_wireless_transmitter`])
    })

    //Hides items based name, format: `mod`, `metal`, [`type1`, `type2`, `etc`]
    hideMetal(`immersiveengineering`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
    hideMetal(`immersiveengineering`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
    hideMetal(`immersiveengineering`, `aluminum`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
    hideMetal(`immersiveengineering`, `uranium`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
    hideMetal(`immersiveengineering`, `lead`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
    hideMetal(`immersiveengineering`, `nickel`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
    hideMetal(`immersiveengineering`, `steel`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
    hideMetal(`immersiveengineering`, `electrum`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
    hideMetal(`immersiveengineering`, `constantan`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
    hideMetal(`mekanism`, `copper`, [`ingot`, `dust`, `nugget`, `block`])
    hideMetal(`mekanism`, `tin`, [`ingot`, `dust`, `nugget`, `block`])
    hideMetal(`mekanism`, `uranium`, [`ingot`, `dust`, `nugget`, `block`])
    hideMetal(`mekanism`, `lead`, [`ingot`, `dust`, `nugget`, `block`])
    hideMetal(`mekanism`, `osmium`, [`ingot`, `dust`, `nugget`, `block`])
    hideMetal(`mekanism`, `bronze`, [`ingot`, `dust`, `nugget`, `block`])
    hideMetal(`create`, `copper`, [`ingot`, `ore`, `nugget`, `block`])
    hideMetal(`create`, `zinc`, [`ingot`, `ore`, `nugget`, `block`])
    hideMetal(`thermal`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
    hideMetal(`thermal`, `tin`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
    hideMetal(`thermal`, `lead`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
    hideMetal(`thermal`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
    hideMetal(`thermal`, `nickel`, [`ingot`, `ore`, `dust`, `nugget`, `block`])

    //Hides items based on type, format: `mod`, `type`, [`name1`, `name2`, `etc`]
    hideStuff(`thermal`, `dust`, [`iron`, `gold`])
    hideStuff(`immersiveengineering`, `dust`, [`iron`, `gold`, `sulfur`, `wood`])
    hideStuff(`immersiveengineering`, `plate`, [
        `iron`,
        `gold`,
        `copper`,
        `aluminum`,
        `lead`,
        `silver`,
        `nickel`,
        `constantan`,
        `electrum`
    ])
    hideStuff(`mekanism`, `dust`, [`lapis_lazuli`, `emerald`, `diamond`, `quartz`, `iron`, `gold`])
    hideStuff(`mekanism`, `crystal`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
    hideStuff(`mekanism`, `shard`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
    hideStuff(`mekanism`, `dirty_dust`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
    hideStuff(`mekanism`, `clump`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
    hideStuff(`appliedenergistics2`, `dust`, [`nether_quartz`, `ender`, `iron`, `gold`])
    hideStuff(`create`, `sheet`, [`iron`, `golden`, `copper`])
    hideStuff(`iceandfire`, `ore`, [`silver`, `copper`])
    hideStuff(`tmechworks`, `ore`, [`aluminum`, `copper`])
    hideStuff(`solarflux`, `sp`, [6, 7, 8])
    hideStuff(`quark`, `crate`, [`apple`, `carrot`, `beetroot`, `potato`])
    hideStuff(`quark`, `block`, [`bamboo`, `charcoal`, `sugar_cane`])
    hideStuff(`mysticalagriculture`, `seeds`, [
        `basalz`,
        `blazing_crystal`,
        `blitz`,
        `blizz`,
        `brass`,
        `bronze`,
        `compressed_iron`,
        `constantan`,
        `crimson_steel`,
        `chrome`,
        `electrum`,
        `elementium`,
        `enderium`,
        `ender_biotite`,
        `energized_steel`,
        `fluix`,
        `graphite`,
        `hop_graphite`,
        `invar`,
        `iridium`,
        `lumium`,
        `manasteel`,
        `niotic_crystal`,
        `nitro_crystal`,
        `oratchalcum`,
        `quartz_enriched_iron`,
        `refined_glowstone`,
        `refined_obsidian`,
        `rock_crystal`,
        `rubber`,
        `signalum`,
        `silicon`,
        `sky_stone`,
        `spirited_crystal`,
        `starmetal`,
        `steel`,
        `sulfur`,
        `terrasteel`,
        `titanium`,
        `tungsten`,
        `mithril`
    ])
    hideStuff(`mysticalagriculture`, `essence`, [
        `basalz`,
        `blazing_crystal`,
        `blitz`,
        `blizz`,
        `brass`,
        `bronze`,
        `compressed_iron`,
        `constantan`,
        `crimson_steel`,
        `chrome`,
        `electrum`,
        `elementium`,
        `enderium`,
        `ender_biotite`,
        `energized_steel`,
        `fluix`,
        `graphite`,
        `hop_graphite`,
        `invar`,
        `iridium`,
        `lumium`,
        `manasteel`,
        `niotic_crystal`,
        `nitro_crystal`,
        `oratchalcum`,
        `quartz_enriched_iron`,
        `refined_glowstone`,
        `refined_obsidian`,
        `rock_crystal`,
        `rubber`,
        `signalum`,
        `silicon`,
        `sky_stone`,
        `spirited_crystal`,
        `starmetal`,
        `steel`,
        `sulfur`,
        `terrasteel`,
        `titanium`,
        `tungsten`,
        `mithril`
    ])
})

onEvent('jei.hide.fluids', e => {
    const hideFluids = [
        // honey
        'cofh_core:honey',
        'cyclic:honey',
        'create:flowing_honey',
        'create:honey',

        // tinker fluids overriden by ATO
        'tconstruct:molten_aluminum',
        'tconstruct:molten_copper',
        'tconstruct:molten_lead',
        'tconstruct:molten_nickel',
        'tconstruct:molten_osmium',
        'tconstruct:molten_platinum',
        'tconstruct:molten_silver',
        'tconstruct:molten_tin',
        'tconstruct:molten_uranium',
        'tconstruct:molten_zinc',

        // oil
        'thermal:creosote',
        'thermal:crude_oil',
        'immersivepetroleum:oil'
    ]
    hideFluids.forEach(fluid => {
        e.hide(fluid)
    })
})

onEvent(`item.tooltip`, e => {
    refined.forEach(refin => {
        e.add(`refinedstorage:${refin}`, `Right click or craft with a dye to color`)
    })
    e.add(`pedestals:pedestal/stone333`, [
        `Press show uses(default U) key on §6§lColored Pallet§r`,
        `to show different colored pedestals you can make`
    ])
    e.add(`creativewirelesstransmitter:creative_wireless_transmitter`, [`Right click or craft with a dye to color`])
    e.add(`#pedestals:upgrades`, `Hold upgrades in off-hand to apply them`)
    e.add(`#resourcefulbees:valid_apiary`, `Valid Apiary Block`)
})

onEvent('jei.information', e => {
    e.add('thermal:bitumen', ['Byproduct of refining Oil in a Distillation Tower'])
})
