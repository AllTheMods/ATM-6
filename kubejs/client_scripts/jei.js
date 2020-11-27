events.listen('jei.information', function (e) {
    function info(item, text) {
        e.add(item, text)
    }
    info('allthemodium:molten_bluelava_bucket', ['Soul Lava appears occasionally in the nether.', '(Small source blocks only - no pools.)'])
    info('allthemodium:allthemodium_ore', ['Check all the oceans for Allthemodium.', '(Y 5-45)'])
    info('allthemodium:vibranium_ore', ['Vibranium can be found in warped forests in the Nether.', '(Y 80-127)'])
    info('allthemodium:unobtainium_ore', ['Unobtainium can be obtained from the Highland biomes in the End.'])
    info('silentgear:salvager', ['Disabled due to issue #349.'])
})
events.listen('jei.add.items', function (e) {
    e.add([
        'minecraft:dragon_egg'
    ])
})


events.listen('jei.hide.items', function (e) {
    e.hide([
        'forbidden_arcanus:rotten_leather',
        'appliedenergistics2:silicon',
        'appliedenergistics2:iron_dust',
        'appliedenergistics2:gold_dust',
        'appliedenergistics2:flour',
		'iceandfire:silver_ore',
		'iceandfire:copper_ore',
		'tmechworks:copper_ore',
		'tmechworks:aluminum_ore',
        '@curios',
        '/pedestals:dust.+/',
        '/engineerstools:.+_grit/',
        'solarflux:sp_6',
        'solarflux:sp_7',
        'solarflux:sp_8'
    ])
    /*
    function hideMetal(mod, name, types){
        utils.listOf(types).forEach(function(type) {
            const id = mod === 'immersiveengineering' ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
            if(!ingredient.of(id).empty){
                e.hide(id)
            }
        })
    }
    //Hide metals, format: 'mod','metal',['type1','type2']
    hideMetal('immersiveengineering','copper',['ingot','ore','dust','nugget','storage'])
    hideMetal('immersiveengineering','silver',['ingot','ore','dust','nugget','storage'])
    hideMetal('immersiveengineering','aluminum',['ingot','ore','dust','nugget','storage'])
    hideMetal('immersiveengineering','uranium',['ingot','ore','dust','nugget','storage'])
    hideMetal('immersiveengineering','lead',['ingot','ore','dust','nugget','storage'])
    hideMetal('immersiveengineering','nickel',['ingot','ore','dust','nugget','storage'])
    hideMetal('immersiveengineering','steel',['ingot','dust','nugget','storage'])
    */
})