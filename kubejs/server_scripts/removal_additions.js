events.listen('recipes', function (e) {
	e.remove({
        output: [
			'minecraft:dragon_egg'
        ]
    })
})