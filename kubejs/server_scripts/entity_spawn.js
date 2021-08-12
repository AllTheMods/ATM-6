onEvent('entity.spawned', e => {
  const entity = e.getEntity()
  if(entity.getType().equals('resourcefulbees:starry_bee')){
    let nbt = entity.getFullNBT()
    nbt.Invulnerable = 1
    entity.setFullNBT(nbt)
    entity.tell('I am Invulnerable!')
  }
})