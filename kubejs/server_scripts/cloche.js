onEvent('recipes', e => {

    let tier = (types, time, soil, rCount) => {
        types.forEach(type => {
            let rItem = `mysticalagriculture:${type}_essence`
            let inItem = `mysticalagriculture:${type}_seeds`
            let renBlock = `mysticalagriculture:${type}_crop`
            e.recipes.immersiveengineering.cloche(Item.of(rItem, rCount), inItem, soil, renBlock).time(time)
        })
    }

    function inf(rCount, time, soil) {
        tier([`inferium`], time, soil, rCount)
    }

    function regular(results, seed, crop) {
        e.recipes.immersiveengineering.cloche(results, Item.of(seed), `minecraft:dirt`, crop).time(600)
    }

    //Tier 1 Crops
    tier([
        `air`,
        `earth`,
        `fire`,
        `water`,
        `dirt`,
        `wood`,
        `ice`,
        `stone`
    ], 1600, `#misctags:farmland/tier1`, 2)

    //Tier 2 Crops
    tier([
        `aluminum`,
        `chicken`,
        `coal`,
        `copper`,
        `coral`,
        `cow`,
        `dye`,
        `fish`,
        `honey`,
        `iridium`,
        `mystical_flower`,
        `nature`,
        `nether`,
        `pig`,
        `rubber`,
        `saltpeter`,
        `sheep`,
        `silicon`,
        `slime`,
        `squid`,
        `sulfur`,
        `turtle`,
        `sky_stone`,
        `basalz`,
        `blizz`,
        `blitz`,
        `apatite`
    ], 2800, `#misctags:farmland/tier2`, 2)

    //Tier 3 Crops
    tier([
        `azure_silver`,
        `brass`,
        `bronze`,
        `certus_quartz`,
        `creeper`,
        `crimson_iron`,
        `ender_biotite`,
        `glowstone`,
        `graphite`,
        `iron`,
        `lead`,
        `nether_quartz`,
        `obsidian`,
        `prismarine`,
        `quartz_enriched_iron`,
        `rabbit`,
        `redstone`,
        `silver`,
        `skeleton`,
        `spider`,
        `tin`,
        `zinc`,
        `zombie`,
        `lumium`,
        `fluorite`,
        `aquamarine`,
        `signalum`,
        `starmetal`,
        `pig_iron`,
        `steeleaf`,
        `ironwood`,
        `slimesteel`,
        `tinkers_bronze`,
        `knightmetal`,
        `fiery_ingot`
    ], 4000, `#misctags:farmland/tier3`, 2)

    //Tier 4 Crops
    tier([
        `azure_electrum`,
        `blaze`,
        `chrome`,
        `constantan`,
        `crimson_steel`,
        `electrum`,
        `end`,
        `enderman`,
        `experience`,
        `fluix`,
        `ghast`,
        `gold`,
        `invar`,
        `lapis_lazuli`,
        `mithril`,
        `nickel`,
        `oratchalcum`,
        `osmium`,
        `refined_glowstone`,
        `refined_obsidian`,
        `steel`,
        `titanium`,
        `tungsten`,
        `compressed_iron`,
        `hop_graphite`,
        `energized_steel`,
        `blazing_crystal`,
        `rose_gold`,
        `cobalt`
    ], 5200, `#misctags:farmland/tier4`, 2)

    //Tier 5 Crops
    tier([
        `diamond`,
        `emerald`,
        `netherite`,
        `uraninite`,
        `wither_skeleton`,
        `platinum`,
        `uranium`,
        `enderium`,
        `spirited_crystal`,
        `rock_crystal`,
        `niotic_crystal`,
        `manyullyn`,
        `queens_slime`,
        `hepatizon`
    ], 6400, `#misctags:farmland/tier5`, 2)

    //Tier 6 Crops
    tier([
        `dragon_egg`,
        `nether_star`,
        `nitro_crystal`
    ], 7600, `#misctags:farmland/tier6`, 2)

    //Magical Tier
    tier([
        `allthemodium`,
        `vibranium`,
        `unobtainium`
    ], 8900, `kubejs:magical_soil`, 2)

    //Regular crops
    regular([`forbidden_arcanus:arcane_gold_nugget`, `forbidden_arcanus:golden_orchid_seeds`], `forbidden_arcanus:golden_orchid_seeds`, `forbidden_arcanus:golden_orchid`)
    regular([Item.of(`silentgear:flax_fiber`, 2), `silentgear:flax_seeds`], `silentgear:flax_seeds`, `silentgear:flax_plant`)
    regular([Item.of(`byg:blueberries`, 2)], `byg:blueberries`, `byg:blueberry_bush`)

    //Inferium
    inf(1, 1500, 'minecraft:dirt')
    inf(2, 2100, 'mysticalagriculture:inferium_farmland')
    inf(3, 2700, 'mysticalagriculture:prudentium_farmland')
    inf(4, 3300, 'mysticalagriculture:tertium_farmland')
    inf(5, 4900, 'mysticalagriculture:imperium_farmland')
    inf(6, 5500, 'mysticalagriculture:supremium_farmland')
    inf(7, 6100, 'mysticalagradditions:insanium_farmland')
})
