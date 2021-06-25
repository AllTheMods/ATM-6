onEvent('recipes', e => {
    const colors = [
        'white',
        'light_gray',
        'gray',
        'black',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'light_blue',
        'cyan',
        'blue',
        'purple',
        'magenta',
        'pink',
        'brown'
    ]

    const craftingShapes = [
        //vertical
        ['  C', '  C', '  C'],
        [' C ', ' C ', ' C '],
        ['C  ', 'C  ', 'C  '],
        //horizontal
        ['CCC', '   ', '   '],
        ['   ', 'CCC', '   '],
        ['   ', '   ', 'CCC'],
        //diagonal
        ['  C', ' C ', 'C  '],
        ['C  ', ' C ', '  C'],
        //misc
        ['  C', ' C ', ' C '],
        [' C ', 'C  ', 'C  '],
        ['  C', 'CC ', '   '],
        ['   ', '  C', 'CC '],
        ['  C', '  C', ' C '],
        [' C ', ' C ', 'C  '],
        ['C C', ' C ', '   '],
        ['   ', 'C C', ' C '],
        [' C ', ' C ', '  C'],
        ['C  ', 'C  ', ' C '],
        ['   ', ' C ', 'C C'],
        [' C ', 'C C', '   '],
        ['  C', ' C ', '  C'],
        [' C ', 'C  ', ' C '],
        ['   ', 'CC ', '  C'],
        ['CC ', '  C', '   ']
    ]

    function combRecipes(entries) {
        entries.forEach(([output, input, amount1, amount2]) => {
            const length = Math.min(craftingShapes.length, output.length)
            for (let i = 0; i < length; i++) {
                e.shaped(Item.of(output[i], amount1), craftingShapes[i], {
                    C: input
                }).id(`kubejs:combs/${output[i].substring(output[i].indexOf(':') + 1)}`)
                if (!amount2) continue
                e.shaped(Item.of(output[i], amount2), craftingShapes[i], {
                    C: `${input}_block`
                }).id(`kubejs:combs/block/${output[i].substring(output[i].indexOf(':') + 1)}`)
            }
        })
    }

    // Comb to Bucket
    e.shaped('minecraft:water_bucket', [' C ', 'CBC', ' C '], {
        C: 'resourcefulbees:water_honeycomb',
        B: 'minecraft:bucket'
    }).id('kubejs:combs/water_bucket')
    e.shaped('minecraft:lava_bucket', [' C ', 'CBC', ' C '], {
        C: 'resourcefulbees:lava_honeycomb',
        B: 'minecraft:bucket'
    }).id('kubejs:combs/lava_bucket')

    // Comb Recipes
    combRecipes([
        [colors.map(color => `minecraft:${color}_dye`), 'resourcefulbees:rainbow_honey_block', 32],
        [colors.map(color => `botania:${color}_mystical_flower`), 'resourcefulbees:mystical_honeycomb', 2, 18],
        [
            [
                'minecraft:wheat',
                'minecraft:beetroot',
                'minecraft:carrot',
                'minecraft:potato',
                'minecraft:melon_slice',
                'minecraft:pumpkin',
                'minecraft:bamboo',
                'minecraft:sweet_berries',
                'minecraft:brown_mushroom',
                'minecraft:red_mushroom'
            ],
            'resourcefulbees:cropy_honeycomb',
            3,
            27
        ],
        [
            [
                'minecraft:porkchop',
                'minecraft:beef',
                'minecraft:cod',
                'minecraft:salmon',
                'minecraft:chicken',
                'minecraft:rabbit',
                'minecraft:mutton'
            ],
            'resourcefulbees:kobee_beef_honeycomb',
            3,
            27
        ],
        [
            [
                'minecraft:andesite',
                'minecraft:diorite',
                'minecraft:granite',
                'minecraft:basalt',
                'create:gabbro',
                'create:dolomite',
                'create:weathered_limestone',
                'create:limestone',
                'create:scoria',
                'create:dark_scoria',
                'quark:brimstone',
                'quark:slate',
                'quark:jasper',
                'quark:limestone',
                'quark:basalt',
                'astralsorcery:marble_raw'
            ],
            'resourcefulbees:stan_honeycomb',
            2,
            18
        ]
    ])
})
