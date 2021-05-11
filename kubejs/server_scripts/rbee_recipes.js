events.listen('recipes', function(e) {

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
    var honey = [
        'resourcefulbees:honey',
        'cyclic:honey',
        'create:honey',
    ]
    honey.forEach(type => {
        e.recipes.thermal.chiller('minecraft:honey_block', fluid.of(`${type}`, 1000))
    })
    var customhoney = [
        'resourcefulbees:rainbow_honey',
        'resourcefulbees:catnip_honey',
    ]
    customhoney.forEach(type => {
        e.recipes.thermal.chiller(`${type}_block`, fluid.of(`${type}`, 1000))
        e.shaped('compressium:honey_1', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: `${type}_block`
        })
    })

    //Combs to Dye
    var cuShaped = e.recipes.cucumber.shaped_no_mirror

    function dyeShaped(result, pattern) {
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:rainbow_honey_block'
                }
            },
            'result': {
                'item': result,
                'count': 32
            }
        })
    }
    dyeShaped('minecraft:red_dye', [
        '  C',
        ' C ',
        ' C '
    ])
    dyeShaped('minecraft:green_dye', [
        '  C',
        'CC ',
        '   '
    ])
    dyeShaped('minecraft:purple_dye', [
        '  C',
        '  C',
        ' C '
    ])
    dyeShaped('minecraft:cyan_dye', [
        'C C',
        ' C ',
        '   '
    ])
    dyeShaped('minecraft:light_gray_dye', [
        ' C ',
        ' C ',
        '  C'
    ])
    dyeShaped('minecraft:gray_dye', [
        '  C',
        ' C ',
        'C  '
    ])
    dyeShaped('minecraft:pink_dye', [
        'C  ',
        ' C ',
        '  C'
    ])
    dyeShaped('minecraft:lime_dye', [
        '  C',
        '  C',
        '  C'
    ])
    dyeShaped('minecraft:yellow_dye', [
        ' C ',
        ' C ',
        ' C '
    ])
    dyeShaped('minecraft:light_blue_dye', [
        'C  ',
        'C  ',
        'C  '
    ])
    dyeShaped('minecraft:magenta_dye', [
        '   ',
        '   ',
        'CCC'
    ])
    dyeShaped('minecraft:orange_dye', [
        '   ',
        'CCC',
        '   '
    ])
    dyeShaped('minecraft:blue_dye', [
        '   ',
        ' C ',
        'C C'
    ])
    dyeShaped('minecraft:brown_dye', [
        '  C',
        ' C ',
        '  C'
    ])
    dyeShaped('minecraft:black_dye', [
        '   ',
        'CC ',
        '  C'
    ])
    dyeShaped('minecraft:white_dye', [
        'CCC',
        '   ',
        '   '
    ])
    //Combs to Mystical
    var cuShaped = e.recipes.cucumber.shaped_no_mirror

    function MysticalShaped(result, pattern) {
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:mystical_honeycomb'
                }
            },
            'result': {
                'item': result,
                'count': 2
            }
        })
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:mystical_honeycomb_block'
                }
            },
            'result': {
                'item': result,
                'count': 18
            }
        })
    }
    MysticalShaped('botania:white_mystical_flower', [
        '  C',
        ' C ',
        ' C '
    ])
    MysticalShaped('botania:green_mystical_flower', [
        '  C',
        'CC ',
        '   '
    ])
    MysticalShaped('botania:purple_mystical_flower', [
        '  C',
        '  C',
        ' C '
    ])
    MysticalShaped('botania:cyan_mystical_flower', [
        'C C',
        ' C ',
        '   '
    ])
    MysticalShaped('botania:light_gray_mystical_flower', [
        ' C ',
        ' C ',
        '  C'
    ])
    MysticalShaped('botania:gray_mystical_flower', [
        '  C',
        ' C ',
        'C  '
    ])
    MysticalShaped('botania:pink_mystical_flower', [
        'C  ',
        ' C ',
        '  C'
    ])
    MysticalShaped('botania:lime_mystical_flower', [
        '  C',
        '  C',
        '  C'
    ])
    MysticalShaped('botania:yellow_mystical_flower', [
        ' C ',
        ' C ',
        ' C '
    ])
    MysticalShaped('botania:light_blue_mystical_flower', [
        'C  ',
        'C  ',
        'C  '
    ])
    MysticalShaped('botania:magenta_mystical_flower', [
        '   ',
        '   ',
        'CCC'
    ])
    MysticalShaped('botania:orange_mystical_flower', [
        '   ',
        'CCC',
        '   '
    ])
    MysticalShaped('botania:blue_mystical_flower', [
        '   ',
        ' C ',
        'C C'
    ])
    MysticalShaped('botania:brown_mystical_flower', [
        '  C',
        ' C ',
        '  C'
    ])
    MysticalShaped('botania:black_mystical_flower', [
        '   ',
        'CC ',
        '  C'
    ])
    MysticalShaped('botania:red_mystical_flower', [
        'CCC',
        '   ',
        '   '
    ])
    //Combs to crop
    var cuShaped = e.recipes.cucumber.shaped_no_mirror

    function Crop(result, pattern) {
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:cropy_honeycomb'
                }
            },
            'result': {
                'item': result,
                'count': 3
            }
        })
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:cropy_honeycomb_block'
                }
            },
            'result': {
                'item': result,
                'count': 27
            }
        })
    }
    Crop('minecraft:wheat', [
        '  C',
        ' C ',
        ' C '
    ])
    Crop('minecraft:beetroot', [
        '  C',
        'CC ',
        '   '
    ])
    Crop('minecraft:carrot', [
        '  C',
        '  C',
        ' C '
    ])
    Crop('minecraft:potato', [
        'C C',
        ' C ',
        '   '
    ])
    Crop('minecraft:melon_slice', [
        ' C ',
        ' C ',
        '  C'
    ])
    Crop('minecraft:pumpkin', [
        '  C',
        ' C ',
        'C  '
    ])
    Crop('minecraft:bamboo', [
        'C  ',
        ' C ',
        '  C'
    ])
    Crop('minecraft:sweet_berries', [
        '  C',
        '  C',
        '  C'
    ])
    Crop('minecraft:brown_mushroom', [
        ' C ',
        ' C ',
        ' C '
    ])
    Crop('minecraft:red_mushroom', [
        'C  ',
        'C  ',
        'C  '
    ])
    /*Crop('', [
        '   ',
        '   ',
        'CCC'
    ])
    Crop('', [
        '   ',
        'CCC',
        '   '
    ])
    Crop('', [
        '   ',
        ' C ',
        'C C'
    ])
    Crop('', [
        '  C',
        ' C ',
        '  C'
    ])
    Crop('', [
        '   ',
        'CC ',
        '  C'
    ])
    Crop('', [
        'CCC',
        '   ',
        '   '
    ])*/
    //Combs to Meat
    var cuShaped = e.recipes.cucumber.shaped_no_mirror

    function Meat(result, pattern) {
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:kobee_beef_honeycomb'
                }
            },
            'result': {
                'item': result,
                'count': 3
            }
        })
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:kobee_beef_honeycomb_block'
                }
            },
            'result': {
                'item': result,
                'count': 27
            }
        })
    }
    Meat('minecraft:porkchop', [
        '  C',
        ' C ',
        ' C '
    ])
    Meat('minecraft:beef', [
        '  C',
        'CC ',
        '   '
    ])
    Meat('minecraft:cod', [
        '  C',
        '  C',
        ' C '
    ])
    Meat('minecraft:salmon', [
        'C C',
        ' C ',
        '   '
    ])
    Meat('minecraft:chicken', [
        ' C ',
        ' C ',
        '  C'
    ])
    Meat('minecraft:rabbit', [
        '  C',
        ' C ',
        'C  '
    ])
    Meat('minecraft:mutton', [
        'C  ',
        ' C ',
        '  C'
    ])
    Meat('twilightforest:raw_venison', [
        '  C',
        '  C',
        '  C'
    ])
    Meat('rats:raw_rat', [
        ' C ',
        ' C ',
        ' C '
    ])
    Meat('aquaculture:fish_fillet_raw', [
        'C  ',
        'C  ',
        'C  '
    ])
    /*Meat('', [
        '   ',
        '   ',
        'CCC'
    ])
    Meat('', [
        '   ',
        'CCC',
        '   '
    ])
    Meat('', [
        '   ',
        ' C ',
        'C C'
    ])
    Meat('', [
        '  C',
        ' C ',
        '  C'
    ])
    Meat('', [
        '   ',
        'CC ',
        '  C'
    ])
    Meat('', [
        'CCC',
        '   ',
        '   '
    ])*/
    //Combs to Stone
    function stoneShaped(result, pattern) {
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:stan_honeycomb_block'
                }
            },
            'result': {
                'item': result,
                'count': 16
            }
        })
    }
    stoneShaped('minecraft:andesite', [
        '  C',
        ' C ',
        ' C '
    ])
    stoneShaped('minecraft:diorite', [
        '  C',
        'CC ',
        '   '
    ])
    stoneShaped('minecraft:granite', [
        '  C',
        '  C',
        ' C '
    ])
    stoneShaped('minecraft:basalt', [
        'C C',
        ' C ',
        '   '
    ])
    stoneShaped('create:gabbro', [
        ' C ',
        ' C ',
        '  C'
    ])
    stoneShaped('create:dolomite', [
        '  C',
        ' C ',
        'C  '
    ])
    stoneShaped('create:weathered_limestone', [
        'C  ',
        ' C ',
        '  C'
    ])
    stoneShaped('create:limestone', [
        '  C',
        '  C',
        '  C'
    ])
    stoneShaped('create:scoria', [
        ' C ',
        ' C ',
        ' C '
    ])
    stoneShaped('create:dark_scoria', [
        'C  ',
        'C  ',
        'C  '
    ])
    stoneShaped('quark:brimstone', [
        '   ',
        '   ',
        'CCC'
    ])
    stoneShaped('quark:slate', [
        '   ',
        'CCC',
        '   '
    ])
    stoneShaped('quark:jasper', [
        '   ',
        ' C ',
        'C C'
    ])
    stoneShaped('quark:limestone', [
        '  C',
        ' C ',
        '  C'
    ])
    stoneShaped('quark:basalt', [
        '   ',
        'CC ',
        '  C'
    ])
    stoneShaped('astralsorcery:marble_raw', [
        'CCC',
        '   ',
        '   '
    ])
})