events.listen('recipes', function (e) {
    //Unobtanium
    e.shapeless('allthemodium:vibranium_unobtainium_alloy_dust', ['allthemodium:unobtainium_dust', 'allthemodium:vibranium_dust']).id('kubejs:shapeless/vibranium_unobtainium_alloy_dust')
    e.shapeless('allthemodium:unobtainium_allthemodium_alloy_dust', ['allthemodium:unobtainium_dust', 'allthemodium:allthemodium_dust']).id('kubejs:shapeless/unobtainium_allthemodium_alloy_dust')
    e.shapeless('allthemodium:vibranium_allthemodium_alloy_dust', ['allthemodium:allthemodium_dust', 'allthemodium:vibranium_dust']).id('kubejs:shapeless/vibranium_allthemodium_alloy_dust')
    e.recipes.mekanism.nucleosynthesizing({
        'itemInput': {
            'ingredient': {
                'tag': 'forge:dusts/vibranium_unobtainium_alloy'
            }
        },
        'gasInput': {
            'gas': 'mekanism:antimatter',
            'amount': 1
        },
        'output': {
            'item': 'kubejs:uu_matter',
            'count': 16
        },
        'duration': 20
    }).id('kubejs:nucleosynthesizing/uu-matter')
    e.recipes.psi.trick_crafting({
        'input': {
            'tag': 'forge:dusts/vibranium_unobtainium_alloy'
        },
        'output': {
            'type': 'forge:nbt',
            'item': 'kubejs:uu_matter',
            'count': 4
        },
        'cad': {
            'item': 'psi:cad_assembly_psimetal'
        },
        'trick': 'psi:trick_ebony_ivory'
    }).id('kubejs:trick_crafting/uu-matter')

    function mShaped(result, pattern, count) {
        e.shaped(item.of(result, count != null ? count : 1), pattern, {
            'U': 'kubejs:uu_matter'
        })
    }

    mShaped('alltheores:ore_aluminum', [
        ' UU',
        'UUU',
        'UUU'
    ], 12)
    mShaped('alltheores:ore_copper', [
        'U U',
        'UUU',
        'UUU'
    ], 12)
    mShaped('alltheores:ore_lead', [
        'UU ',
        'UUU',
        'UUU'
    ], 12)
    mShaped('alltheores:ore_nickel', [
        'UUU',
        ' UU',
        'UUU'
    ], 12)
    mShaped('alltheores:ore_osmium', [
        'UUU',
        'U U',
        'UUU'
    ], 12)
    mShaped('alltheores:ore_platinum', [
        'UUU',
        'UU ',
        'UUU'
    ], 12)
    mShaped('alltheores:ore_silver', [
        'UUU',
        'UUU',
        ' UU'
    ], 12)
    mShaped('alltheores:ore_tin', [
        'UUU',
        'UUU',
        'U U'
    ], 12)
    mShaped('alltheores:ore_uranium', [
        'UUU',
        'UUU',
        'UU '
    ], 12)
    mShaped('alltheores:ore_zinc', [
        ' UU',
        'UUU',
        'UU '
    ], 12)
    mShaped('minecraft:gold_ore', [
        ' UU',
        'UUU',
        ' UU'
    ], 12)
    mShaped('minecraft:iron_ore', [
        'UU ',
        'UUU',
        'UU '
    ], 12)
    mShaped('minecraft:nether_quartz_ore', [
        'UUU',
        'UUU',
        'U U'
    ], 12)
    mShaped('minecraft:redstone', [
        'U U',
        'U  ',
        'U U'
    ], 16)
    mShaped('minecraft:glowstone_dust', [
        'U U',
        '  U',
        'U U'
    ], 16)
    mShaped('minecraft:end_stone', [
        'U U',
        'UUU',
        'UUU'
    ], 32)
    mShaped('minecraft:slime_ball', [
        'U U',
        '   ',
        'U U'
    ], 16)
    mShaped('industrialforegoing:plastic', [
        'U U',
        'U U',
        'U U'
    ], 4)
    mShaped('minecraft:white_wool', [
        ' U ',
        'U U',
        ' U '
    ], 16)
    mShaped('minecraft:obsidian', [
        'UUU',
        'U U',
        'UUU'
    ], 16)
    mShaped('minecraft:oak_log', [
        ' U ',
        'UUU',
        ' U '
    ], 32)
    mShaped('minecraft:bone', [
        '  U',
        ' U ',
        'U  '
    ], 8)
    mShaped('minecraft:leather', [
        'U  ',
        ' U ',
        '  U'
    ], 4)
    mShaped('minecraft:gunpowder', [
        'U U',
        ' U ',
        'U U'
    ], 16)
})