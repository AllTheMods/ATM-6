onEvent('item.entity_interact', e => {
  if (e.hand == MAIN_HAND) {
    if (e.target.type == 'minecraft:turtle') {
      if (e.target.tags.contains('plastic')) return;

      if (e.getItem().id == 'minecraft:shears') {
        e.target.tags.add('plastic')
        e.player.setStatusMessage(Text.of('Seems like the turtle had plastic stuck around its neck').italic().green())
        e.player.give('industrialforegoing:plastic')
      } else {
        e.player.setStatusMessage(Text.of('There appears to be something stuck around its neck...').italic().green())
        e.server.schedule(2000, () => {
          e.player.setStatusMessage(Text.of('Maybe I can do something to free it...').italic().green())
        }).call()
      }
    }
  }
})

