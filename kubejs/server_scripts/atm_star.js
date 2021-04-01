events.listen('recipes', function(e) {
	//Patrick Star
    e.recipes.create.mechanical_crafting('kubejs:patrick_star', [
        '    B    ',
        '   BCA   ',
        'BBBGCABBB',
        'ACGCGGGCA',
        ' AAGGGBA ',
        '  EDDDE  ',
        ' EFEDEFE ',
        'BEDD DDEB',
        'AAA   AAA'
    ], {
        A: 'minecraft:magenta_concrete',
        B: 'minecraft:pink_concrete',
        C: 'minecraft:pink_concrete_powder',
        D: 'minecraft:green_concrete',
        E: 'minecraft:green_concrete_powder',
        F: 'minecraft:lime_concrete',
        G: 'minecraft:magenta_concrete_powder'
    })
})