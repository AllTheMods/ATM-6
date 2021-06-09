//Adding Valid Apiary tags
events.listen('item.tags', e => {
    e.add('resourcefulbees:valid_apiary', ApiaryBlocks)
})

events.listen('block.tags', e => {
    e.add('resourcefulbees:valid_apiary', ApiaryBlocks)
})

events.listen('block.tags', e => {
    e.add('resourcefulbees:valid_apiary', [
        //Fluids
        'minecraft:lava',
        'minecraft:water',
        'allthemodium:molten_bluelava_block',
    ])
})

events.listen('recipes', e => {
    //Comb to Bucket
    e.shaped('minecraft:water_bucket', [
        ' C ',
        'CBC',
        ' C '
    ], {
        'C': 'resourcefulbees:water_honeycomb',
        'B': 'minecraft:bucket'
    }).id(`kubejs:water_comb_bucket`)

    e.shaped('minecraft:lava_bucket', [
        ' C ',
        'CBC',
        ' C '
    ], {
        'C': 'resourcefulbees:lava_honeycomb',
        'B': 'minecraft:bucket'
    }).id(`kubejs:lava_comb_bucket`)

    //Honey Compatibility
    const honey = [
        'resourcefulbees:honey',
        'cyclic:honey',
        'create:honey',
    ]

    honey.forEach(type => {
        e.recipes.thermal.chiller('minecraft:honey_block', fluid.of(`${type}`, 1000))
    })

    const customHoney = [
        'resourcefulbees:rainbow_honey',
        'resourcefulbees:catnip_honey',
    ]

    customHoney.forEach(type => {
        e.recipes.thermal.chiller(`${type}_block`, fluid.of(`${type}`, 1000))
        e.shaped('compressium:honey_1', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: `${type}_block`
        })
    })
})