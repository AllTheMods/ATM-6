onEvent('worldgen.remove', e => {
  e.removeOres(ore => {
    ore.blocks = ['zycraft:aluminium_ore', 'chisel:marble/raw', 'chisel:limestone/raw', 'chisel:basalt/raw', 'powah:dry_ice']
  })
})
