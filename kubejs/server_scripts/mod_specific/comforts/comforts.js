onEvent('recipes', e => {
  colors.forEach(color => {
    e.shaped(item.of(`comforts:sleeping_bag_${color}`), ['WWW', 'SSS', 'WWW',], {
      W: `absentbydesign:slab_wool_${color == 'light_gray' ? 'silver' : color}`,
      S: '#forge:string'
    }).id(`kubejs:comforts/sleeping_bag_${color}`)
  })
})
