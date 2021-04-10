events.listen('recipes', function(e) {
    e.remove({
        output: [
            'minecraft:dragon_egg',
            'ctiers:centrifuge_casing_tier_creative',
            'ctiers:centrifuge_controller_tier_creative'
        ]
    })
})
