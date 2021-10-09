onEvent('entity.spawned', e => {
  let entity = e.getEntity()
  if (entity.type === 'resourcefulbees:starry_bee') {
    let nbt = entity.getFullNBT()
    nbt.Invulnerable = 1
    entity.setFullNBT(nbt)
  }
})
