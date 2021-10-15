onEvent('block.right_click', e => {
  if (!e.server) return;
  let NORTH = Facing.north
  let WEST = Facing.west
  let SOUTH = Facing.south
  let EAST = Facing.east
  let placedBlock = e.getBlock()

  //check full ultimate energy cube
  function checkUEC(targetBlock) {
    if (targetBlock.id.equals('mekanism:ultimate_energy_cube')) {
      if (!!targetBlock.entityData.EnergyContainers[0]) {
        if (!!targetBlock.entityData.EnergyContainers[0].stored) {
          if (targetBlock.entityData.EnergyContainers[0].stored == 4096000000) {
            return true
          }
        }
      }
    }
    return false
  }

  if (e.entity.isPlayer() && e.entity.isCrouching()) {
    if (e.hand == MAIN_HAND) {
      let heldItem = e.entity.getHeldItem(MAIN_HAND).id
      if (placedBlock.id.equals('mekanism:creative_energy_cube')) {
        if (heldItem.equals('atmadditions:atm_star')) {
          if (
            placedBlock.offset(SOUTH, 1).id.equals('mekanism:ultimate_induction_provider') &&
            placedBlock.offset(NORTH, 1).id.equals('mekanism:ultimate_induction_provider') &&
            checkUEC(placedBlock.offset(NORTH, 2)) &&
            checkUEC(placedBlock.offset(SOUTH, 2))
          ) {
            e.entity.getMainHandItem().count--
            placedBlock.mergeEntityData({ EnergyContainers: [{ Container: 0, stored: "18446744073709551615.9999" }] })
            placedBlock.offset(SOUTH, 2).mergeEntityData({ EnergyContainers: [{ Container: 0, stored: "0" }] })
            placedBlock.offset(NORTH, 2).mergeEntityData({ EnergyContainers: [{ Container: 0, stored: "0" }] })

            e.server.runCommand('/title @a title {"text":"Cube filled!","color":"green"}')

          } else if (
            placedBlock.offset(EAST, 1).id.equals('mekanism:ultimate_induction_provider') &&
            placedBlock.offset(WEST, 1).id.equals('mekanism:ultimate_induction_provider') &&
            checkUEC(placedBlock.offset(EAST, 2)) &&
            checkUEC(placedBlock.offset(WEST, 2))
          ) {
            e.entity.getMainHandItem().count--
            placedBlock.mergeEntityData({ EnergyContainers: [{ Container: 0, stored: "18446744073709551615.9999" }] })
            placedBlock.offset(EAST, 2).mergeEntityData({ EnergyContainers: [{ Container: 0, stored: "0" }] })
            placedBlock.offset(WEST, 2).mergeEntityData({ EnergyContainers: [{ Container: 0, stored: "0" }] })

            e.server.runCommand(`/title ${e.entity.getName()} title {"text":"Cube filled!","color":"green"}`)
          } else {
            e.server.runCommand(`/title ${e.entity.getName()} title {"text":"Block formation is incorrect!","color":"dark_red"}`)
          }
        }
      }
    }
  }
})