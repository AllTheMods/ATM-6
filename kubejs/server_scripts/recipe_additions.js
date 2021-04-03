events.listen('recipes', function(e) {
//Pipez
	e.shaped('pipez:infinity_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'allthemodium:unobtainium_ingot',
        B: 'compressium:redstone_4',
        C: 'pipez:ultimate_upgrade'
    })
//Minecraft
	e.shaped('minecraft:dragon_egg', [
		'SSS',
		'SDS',
		'SSS'
	], {
		S: 'mysticalagradditions:dragon_egg_chunk',
		D: 'atmadditions:dragon_soul'
	})
//Tombstone 
	e.shaped('tombstone:soul_receptacle', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'tombstone:dust_of_vanishing',
		B: 'tombstone:ankh_of_pray',
		C: 'minecraft:totem_of_undying',
		D: 'tombstone:familiar_receptacle',
		E: 'tombstone:voodoo_poppet'
	})
//Botania
	e.recipes.botania.runic_altar({
        output: {
            item: 'kubejs:rune_of_sins'
        },
        mana: 25000,
        ingredients: [{
                tag: 'botania:runes/lust'
            },
            {
                tag: 'botania:runes/gluttony'
            },
            {
                tag: 'botania:runes/greed'
            },
            {
                tag: 'botania:runes/sloth'
            },
            {
                tag: 'botania:runes/wrath'
            },
            {
                tag: 'botania:runes/envy'
            },
            {
                tag: 'botania:runes/pride'
            }
        ]
    }).id('kubejs:runic_altar/rune_of_sins')
	e.recipes.botania.petal_apothecary({
        output: {
            item: 'kubejs:mass_of_wills'
        },
        ingredients: [{
                item: 'botania:ancient_will_ahrim'
            },
            {
                item: 'botania:ancient_will_dharok'
            },
            {
                item: 'botania:ancient_will_guthan'
            },
            {
                item: 'botania:ancient_will_torag'
            },
            {
                item: 'botania:ancient_will_verac'
            },
            {
                item: 'botania:ancient_will_karil'
            }
        ]
    }).id('kubejs:petal_apothecary/mass_of_wills')
})