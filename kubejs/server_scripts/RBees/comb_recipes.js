events.listen('recipes', e => {
    const cuShaped = e.recipes.cucumber.shaped_no_mirror
    //Combs to Dye
    function dyeShaped(result_, pattern_) {
        cuShaped({
            pattern: pattern_,
            key: {
                C: {
                    item: 'resourcefulbees:rainbow_honey_block'
                }
            },
            result: {
                item: result_,
                count: 32
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
    function mysticalShaped(result_, pattern_) {
        cuShaped({
            pattern: pattern_,
            key: {
                C: {
                    item: 'resourcefulbees:mystical_honeycomb'
                }
            },
            result: {
                item: result_,
                count: 2
            }
        })
        cuShaped({
            pattern: pattern_,
            key: {
                C: {
                    item: 'resourcefulbees:mystical_honeycomb_block'
                }
            },
            result: {
                item: result_,
                count: 18
            }
        })
    }
    mysticalShaped('botania:white_mystical_flower', [
        '  C',
        ' C ',
        ' C '
    ])
    mysticalShaped('botania:green_mystical_flower', [
        '  C',
        'CC ',
        '   '
    ])
    mysticalShaped('botania:purple_mystical_flower', [
        '  C',
        '  C',
        ' C '
    ])
    mysticalShaped('botania:cyan_mystical_flower', [
        'C C',
        ' C ',
        '   '
    ])
    mysticalShaped('botania:light_gray_mystical_flower', [
        ' C ',
        ' C ',
        '  C'
    ])
    mysticalShaped('botania:gray_mystical_flower', [
        '  C',
        ' C ',
        'C  '
    ])
    mysticalShaped('botania:pink_mystical_flower', [
        'C  ',
        ' C ',
        '  C'
    ])
    mysticalShaped('botania:lime_mystical_flower', [
        '  C',
        '  C',
        '  C'
    ])
    mysticalShaped('botania:yellow_mystical_flower', [
        ' C ',
        ' C ',
        ' C '
    ])
    mysticalShaped('botania:light_blue_mystical_flower', [
        'C  ',
        'C  ',
        'C  '
    ])
    mysticalShaped('botania:magenta_mystical_flower', [
        '   ',
        '   ',
        'CCC'
    ])
    mysticalShaped('botania:orange_mystical_flower', [
        '   ',
        'CCC',
        '   '
    ])
    mysticalShaped('botania:blue_mystical_flower', [
        '   ',
        ' C ',
        'C C'
    ])
    mysticalShaped('botania:brown_mystical_flower', [
        '  C',
        ' C ',
        '  C'
    ])
    mysticalShaped('botania:black_mystical_flower', [
        '   ',
        'CC ',
        '  C'
    ])
    mysticalShaped('botania:red_mystical_flower', [
        'CCC',
        '   ',
        '   '
    ])

    //Combs to crop
    function crop(result_, pattern_) {
        cuShaped({
            pattern: pattern_,
            key: {
                C: {
                    item: 'resourcefulbees:cropy_honeycomb'
                }
            },
            result: {
                item: result_,
                count: 3
            }
        })
        cuShaped({
            pattern: pattern_,
            key: {
                C: {
                    item: 'resourcefulbees:cropy_honeycomb_block'
                }
            },
            result: {
                item: result_,
                count: 27
            }
        })
    }
    crop('minecraft:wheat', [
        '  C',
        ' C ',
        ' C '
    ])
    crop('minecraft:beetroot', [
        '  C',
        'CC ',
        '   '
    ])
    crop('minecraft:carrot', [
        '  C',
        '  C',
        ' C '
    ])
    crop('minecraft:potato', [
        'C C',
        ' C ',
        '   '
    ])
    crop('minecraft:melon_slice', [
        ' C ',
        ' C ',
        '  C'
    ])
    crop('minecraft:pumpkin', [
        '  C',
        ' C ',
        'C  '
    ])
    crop('minecraft:bamboo', [
        'C  ',
        ' C ',
        '  C'
    ])
    crop('minecraft:sweet_berries', [
        '  C',
        '  C',
        '  C'
    ])
    crop('minecraft:brown_mushroom', [
        ' C ',
        ' C ',
        ' C '
    ])
    crop('minecraft:red_mushroom', [
        'C  ',
        'C  ',
        'C  '
    ])

    //Combs to Meat
    function meat(result_, pattern_) {
        cuShaped({
            pattern: pattern_,
            key: {
                C: {
                    item: 'resourcefulbees:kobee_beef_honeycomb'
                }
            },
            result: {
                item: result_,
                count: 3
            }
        })
        cuShaped({
            pattern: pattern_,
            key: {
                C: {
                    item: 'resourcefulbees:kobee_beef_honeycomb_block'
                }
            },
            result: {
                item: result_,
                count: 27
            }
        })
    }
    meat('minecraft:porkchop', [
        '  C',
        ' C ',
        ' C '
    ])
    meat('minecraft:beef', [
        '  C',
        'CC ',
        '   '
    ])
    meat('minecraft:cod', [
        '  C',
        '  C',
        ' C '
    ])
    meat('minecraft:salmon', [
        'C C',
        ' C ',
        '   '
    ])
    meat('minecraft:chicken', [
        ' C ',
        ' C ',
        '  C'
    ])
    meat('minecraft:rabbit', [
        '  C',
        ' C ',
        'C  '
    ])
    meat('minecraft:mutton', [
        'C  ',
        ' C ',
        '  C'
    ])
    meat('twilightforest:raw_venison', [
        '  C',
        '  C',
        '  C'
    ])
    meat('rats:raw_rat', [
        ' C ',
        ' C ',
        ' C '
    ])
    meat('aquaculture:fish_fillet_raw', [
        'C  ',
        'C  ',
        'C  '
    ])

    //Combs to Stone
    function stoneShaped(result_, pattern_) {
        cuShaped({
            pattern: pattern_,
            key: {
                C: {
                    item: 'resourcefulbees:stan_honeycomb_block'
                }
            },
            result: {
                item: result_,
                count: 16
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