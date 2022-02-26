onEvent('worldgen.add', event => {
    event.addSpawn(spawn => {
        spawn.category = 'creature'
        spawn.entity = 'minecraft:turtle'
        spawn.weight = 50
        spawn.minCount = 2
        spawn.maxCount = 6
        spawn.biomes.blacklist = false
        spawn.biomes.values = [
            '#beach',
            '#ocean'
        ]
    })
})
