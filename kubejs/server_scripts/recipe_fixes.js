// this file remaps default mod recipes with parsing issues
onEvent('recipes', e => {



    // #region Functions
    // Thermal resolving
    function thermalRemoval(entries) {
        let recipes = []
        entries.forEach(([name, mod, machine]) => {
            switch (mod) {
                case 0:
                    // mystical agriculture
                    recipes.push(`thermal:compat/mysticalagriculture/insolator_mysticalag_${name}_seeds`)
                    break
                case 1:
                    // tinkers construct
                    recipes.push(`thermal:compat/tconstruct/${machine}_tconstruct_${name}_ingot`)
                    break
                case 2:
                    // astral sorcery
                    recipes.push(`thermal:compat/astralsorcery/pulverizer_astralsorcery_${name}_ore`)
                    break
            }
        })
        return recipes
    }

    function tinkerBasinCasting(entries) {
        entries.forEach(([input, output]) => {
            e.custom({
                conditions: [
                    {
                        type: 'forge:mod_loaded',
                        modid: 'tconstruct'
                    }
                ],
                type: 'tconstruct:casting_basin',
                cast: {
                    item: input
                },
                cast_consumed: true,
                fluid: {
                    name: 'tconstruct:magma',
                    amount: 1000
                },
                result: output,
                cooling_time: 90
            }).id(`kubejs:basin_casting/${output.substring(output.indexOf(':') + 1)}`)
        })
    }

    function tinkerMelting(entries) {
        entries.forEach(input => {
            e.custom({
                conditions: [
                    {
                        type: 'forge:mod_loaded',
                        modid: 'tconstruct'
                    }
                ],
                type: 'tconstruct:melting',
                ingredient: {
                    item: input
                },
                result: {
                    fluid: 'tconstruct:magma',
                    amount: 1000
                },
                temperature: 300,
                time: 127
            }).id(`kubejs:melting/${input.substring(input.indexOf(':') + 1)}`)
        })
    }
    // #endregion Functions

    // #region Removal
    const invalidRemovals = [
        'biggerreactors:crafting/reactor/reactor_manifold',
        'biomesoplenty:soil/ash',
        'byg:compat/tconstruct/magma_cream_from_cryptic_magma_block_melting',
        'byg:compat/tconstruct/magma_cream_from_magmatic_stone_melting',
        'byg:compat/tconstruct/magmatic_stone_from_casting',
        'byg:compat/tconstruct/cryptic_magma_block_from_casting',
        'immersivepetroleum:hydrotreater/sulfur_recovery',
        'pamhc2foodcore:cottoncandyitem',
        'pamhc2foodextended:peachesandcreamoatmealitem',
        'rats:dragon_wing_iaf'
    ].concat(
        thermalRemoval([
            ['zombie_pigman', 0],
            ['phantom', 0],
            ['villager', 0],
            ['wolf', 0],
            ['polar_bear', 0],
            ['llama', 0],
            ['stray', 0],
            ['vex', 0],
            ['evoker', 0],
            ['magma_cube', 0],
            ['drowned', 0],
            ['dolphin', 0],
            ['husk', 0],
            ['panda', 0],
            ['vindicator', 0],
            ['shulker', 0],
            ['ravager', 0],
            ['guardian', 0],
            ['mooshroom', 0],
            ['horse', 0],
            ['silverfish', 0],
            ['fox', 0],
            ['endermite', 0],
            ['witch', 0],
            ['pillager', 0],
            ['parrot', 0],
            ['cat', 0],
            ['bat', 0],
            ['pigiron', 1, 'smelter_alloy'],
            ['pigiron', 1, 'chiller'],
            ['slimesteel', 1, 'smelter_alloy'],
            ['aquamarine', 2]
        ])
    )
    invalidRemovals.forEach(id => e.remove({ id: id }))
    // #endregion Removal

    // #region Astral Sorcery
    e.custom({
        type: 'thermal:pulverizer',
        ingredient: {
            item: 'astralsorcery:aquamarine_sand_ore'
        },
        result: [
            {
                item: 'astralsorcery:aquamarine',
                chance: 6.0
            },
            {
                item: 'minecraft:sand',
                chance: 0.2
            }
        ],
        experience: 0.2,
        conditions: [
            {
                type: 'forge:mod_loaded',
                modid: 'astralsorcery'
            }
        ]
    })
    // #endregion Astral Sorcery

    // #region Bigger Reactors
    e.shaped('4x biggerreactors:reactor_manifold', ['IGI', 'G G', 'IGI'], {
        I: '#forge:ingots/iron',
        G: '#forge:glass'
    }).id(`kubejs:reactor_manifold`)
    // #endregion Bigger Reactors

    // #region Immersive Petroleum
    e.custom({
        type: 'immersivepetroleum:hydrotreater',
        time: 1,
        energy: 512,
        result: {
            fluid: 'immersivepetroleum:diesel',
            amount: 7
        },
        input: {
            tag: 'forge:diesel_sulfur',
            amount: 7
        },
        secondary_input: {
            tag: 'minecraft:water',
            amount: 7
        },
        secondary_result: {
            item: 'immersiveengineering:dust_sulfur',
            chance: '0.02'
        }
    }).id('kubejs:hydrotreater/sulfur_recovery')
    // #endregion Immersive Petroleum

    // #region Oh the biomes you'll go
    tinkerBasinCasting([
        ['byg:cryptic_stone', 'byg:cryptic_magma_block'],
        ['minecraft:blackstone', 'byg:magmatic_stone']
    ])
    tinkerMelting(['byg:cryptic_magma_block', 'byg:magmatic_stone'])
    // #endregion Oh the biomes you'll go

    // #region Pams Harvestcraft
    e.shapeless('pamhc2foodcore:cottoncandyitem', ['#forge:tool_pot', '#forge:sugar']).id('kubejs:cottoncandy')
    e.shapeless('pamhc2foodextended:peachesandcreamoatmealitem', [
        '#forge:tool_pot',
        '#forge:crops/oats',
        '#forge:crops/peach',
        '#forge:cream',
        '#forge:water'
    ]).id('kubejs:peachesandcreamoatmealitem')
    // #endregion Pams Harvestcraft

    // #region Rats
    e.shaped('rats:dragon_wing', ['BBB', 'LLB', '  L'], {
        B: '#forge:bones/dragon',
        L: '#forge:scales/dragon'
    }).id(`kubejs:dragon_wing`)
    // #endregion Rats


    // #region Thermal
    e.custom({
        type: 'thermal:smelter',
        input: [
            {
                tag: 'forge:ingots/iron',
                count: 1
            },
            {
                item: 'tconstruct:blood_slime_ball',
                count: 1
            },
            {
                item: 'minecraft:clay_ball',
                count: 1
            }
        ],
        result: [
            {
                item: 'tconstruct:pig_iron_ingot',
                count: 2
            }
        ],
        energy: 4000,
        conditions: [
            {
                type: 'forge:mod_loaded',
                modid: 'tconstruct'
            }
        ]
    }).id('kubejs:smelter/pig_iron')

    e.custom({
        type: 'thermal:chiller',
        input: [
            {
                fluid: 'tconstruct:molten_pig_iron',
                amount: 144
            },
            {
                item: 'thermal:chiller_ingot_cast'
            }
        ],
        result: [
            {
                item: 'tconstruct:pig_iron_ingot',
                count: 1
            }
        ],
        energy: 5000,
        conditions: [
            {
                type: 'forge:mod_loaded',
                modid: 'tconstruct'
            }
        ]
    }).id('kubejs:chiller/pig_iron')

    e.custom({
        type: 'thermal:smelter',
        input: [
            {
                tag: 'forge:ingots/iron',
                count: 1
            },
            {
                item: 'tconstruct:sky_slime_ball',
                count: 1
            },
            {
                item: 'tconstruct:seared_brick',
                count: 1
            }
        ],
        result: [
            {
                item: 'tconstruct:slimesteel_ingot',
                count: 2
            }
        ],
        energy: 4000,
        conditions: [
            {
                type: 'forge:mod_loaded',
                modid: 'tconstruct'
            }
        ]
    }).id('kubejs:smelter/slimesteel')
    // #endregion Thermal
})
