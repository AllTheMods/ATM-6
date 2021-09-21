onEvent('item.entity_interact', e => {
  if (e.target.type == 'minecraft:turtle') {
    if (e.entity.getHeldItem(MAIN_HAND).id == 'minecraft:shears') {
      if(e.target.getFullNBT().plastic){
        if(e.target.getFullNBT().plastic != 'true'){
          
        }
      }
      e.server.runCommand(`/say works`)
      let nbt = e.target.getFullNBT()
      nbt.put('plastic', 'true')
    }
  }
})