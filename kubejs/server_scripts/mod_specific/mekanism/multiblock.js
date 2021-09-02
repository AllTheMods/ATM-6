onEvent('block.right_click', e => {
  const NORTH = Facing.north
  const WEST = Facing.west
  const SOUTH = Facing.south
  const EAST = Facing.east
  const placedBlock = e.getBlock()

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
    let heldItem = e.entity.getHeldItem(MAIN_HAND).id
    if (placedBlock.id.equals('mekanism:creative_energy_cube')) {
      if (heldItem.equals('kubejs:atm_star')) {
        if (
          placedBlock.offset(SOUTH, 1).id.equals('mekanism:ultimate_induction_provider') &&
          placedBlock.offset(NORTH, 1).id.equals('mekanism:ultimate_induction_provider') &&
          checkUEC(placedBlock.offset(NORTH, 2)) &&
          checkUEC(placedBlock.offset(SOUTH, 2))
        ) {
          e.entity.getMainHandItem().count--
          let creativeCubeData = placedBlock.entityData
          let UECData1 = placedBlock.offset(SOUTH, 2).entityData
          let UECData2 = placedBlock.offset(NORTH, 2).entityData
          creativeCubeData.EnergyContainers.push({ Container: 0, stored: "18446744073709551615.9999" })
          UECData1.EnergyContainers[0] = { Container: 0, stored: "0" }
          UECData2.EnergyContainers[0] = { Container: 0, stored: "0" }
          placedBlock.entityData.putAll(creativeCubeData)
          placedBlock.offset(SOUTH, 2).entityData.putAll(UECData1)
          placedBlock.offset(NORTH, 2).entityData.putAll(UECData2)

          e.server.runCommand('/title @a title {"text":"Cube filled!","color":"green"}')

        } else if (
          placedBlock.offset(EAST, 1).id.equals('mekanism:ultimate_induction_provider') &&
          placedBlock.offset(WEST, 1).id.equals('mekanism:ultimate_induction_provider') &&
          checkUEC(placedBlock.offset(EAST, 2)) &&
          checkUEC(placedBlock.offset(WEST, 2))
        ) {
          e.entity.getMainHandItem().count--
          let creativeCubeData = placedBlock.entityData
          let UECData1 = placedBlock.offset(WEST, 2).entityData
          let UECData2 = placedBlock.offset(EAST, 2).entityData
          creativeCubeData.EnergyContainers.push({ Container: 0, stored: "18446744073709551615.9999" })
          UECData1.EnergyContainers[0] = { Container: 0, stored: "0" }
          UECData2.EnergyContainers[0] = { Container: 0, stored: "0" }
          placedBlock.entityData.putAll(creativeCubeData)
          placedBlock.offset(WEST, 2).entityData.putAll(UECData1)
          placedBlock.offset(EAST, 2).entityData.putAll(UECData2)

          e.server.runCommand('/title @a title {"text":"Cube filled!","color":"green"}')
        } else {
          e.server.runCommand('/title @a title {"text":"Block formation is incorrect!","color":"dark_red"}')
        }
      }
    }
  }
})