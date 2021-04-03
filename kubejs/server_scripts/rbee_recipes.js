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

    //Combs to Dye
    var cuShaped = e.recipes.cucumber.shaped_no_mirror

    function dyeShaped(result, pattern) {
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:rgbee_honeycomb'
                }
            },
            'result': {
                'item': result,
                'count': 6
            }
        })
        cuShaped({
            'pattern': pattern,
            'key': {
                'C': {
                    'item': 'resourcefulbees:rgbee_honeycomb_block'
                }
            },
            'result': {
                'item': result,
                'count': 54
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
})