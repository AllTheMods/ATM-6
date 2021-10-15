onEvent('recipes', e => {
  function parapet(woodTypes) {
    woodTypes.forEach(woodType => {
      e.remove({ type: 'minecraft:crafting_shaped', output: `mcwwindows:${woodType}_log_parapet` })
      e.shaped(`4x mcwwindows:${woodType}_log_parapet`, ['SLS'], {
        S: '#forge:rods/wooden',
        L: `minecraft:stripped_${woodType}_log`
      }).id(`kubejs:mcwwindows/parapet_${woodType}`)
    })
  }

  parapet(['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak'])
})
