onEvent('block.right_click', e => {
  const NORTH = Facing.north
  const WEST = Facing.west
  const SOUTH = Facing.south
  const EAST = Facing.east
  const placedBlock = e.getBlock()

  //check full ultimate energy cube
  function checkUEC(targetBlock) {
    if (targetBlock.getId().equals('mekanism:ultimate_energy_cube')) {
      const entity = targetBlock.getEntityData()
      if (!!entity.EnergyContainers &&
        !!entity.EnergyContainers[0] &&
        !!entity.EnergyContainers[0].stored &&
        entity.EnergyContainers[0].stored == 4096000000) {
        return true
      }
    }
    return false
  }

  function blockPosition(block) {
    return `${block.getX()} ${block.getY()} ${block.getZ()} ${block.getX()} ${block.getY()} ${block.getZ()}`
  }

  if (e.entity.isPlayer() && e.entity.isCrouching()) {
    let heldItem = e.entity.getHeldItem(MAIN_HAND).getId()
    if (placedBlock.getId().equals('mekanism:creative_energy_cube')) {
      if (heldItem.equals('atmadditions:atm_star')) {
        if (
          placedBlock.offset(SOUTH, 1).getId().equals('mekanism:ultimate_induction_provider') &&
          placedBlock.offset(NORTH, 1).getId().equals('mekanism:ultimate_induction_provider') &&
          checkUEC(placedBlock.offset(NORTH, 2)) &&
          checkUEC(placedBlock.offset(SOUTH, 2))
        ) {
          e.entity.getMainHandItem().count--
          let creativeCubeData = placedBlock.getEntityData()
          creativeCubeData.EnergyContainers.push({ Container: 0, stored: "18446744073709551615.9999" })
          placedBlock.getEntityData().putAll(creativeCubeData)

          e.server.runCommand(`/fill ${blockPosition(placedBlock.offset(NORTH, 2))} minecraft:air replace`)
          e.server.runCommand(`/fill ${blockPosition(placedBlock.offset(SOUTH, 2))} minecraft:air replace`)
          e.server.runCommand(`/fill ${blockPosition(placedBlock.offset(NORTH, 2))} mekanism:ultimate_energy_cube{mekData:{}} replace`)
          e.server.runCommand(`/fill ${blockPosition(placedBlock.offset(SOUTH, 2))} mekanism:ultimate_energy_cube{mekData:{}} replace`)

          e.server.runCommand('/title @a title {"text":"Cube filled!","color":"green"}')

        } else if (
          placedBlock.offset(EAST, 1).getId().equals('mekanism:ultimate_induction_provider') &&
          placedBlock.offset(WEST, 1).getId().equals('mekanism:ultimate_induction_provider') &&
          checkUEC(placedBlock.offset(EAST, 2)) &&
          checkUEC(placedBlock.offset(WEST, 2))
        ) {
          e.entity.getMainHandItem().count--
          let creativeCubeData = placedBlock.getEntityData()
          creativeCubeData.EnergyContainers.push({ Container: 0, stored: "18446744073709551615.9999" })
          placedBlock.getEntityData().putAll(creativeCubeData)

          e.server.runCommand(`/fill ${blockPosition(placedBlock.offset(WEST, 2))} minecraft:air replace`)
          e.server.runCommand(`/fill ${blockPosition(placedBlock.offset(EAST, 2))} minecraft:air replace`)
          e.server.runCommand(`/fill ${blockPosition(placedBlock.offset(WEST, 2))} mekanism:ultimate_energy_cube{mekData:{}} replace`)
          e.server.runCommand(`/fill ${blockPosition(placedBlock.offset(EAST, 2))} mekanism:ultimate_energy_cube{mekData:{}} replace`)

          e.server.runCommand('/title @a title {"text":"Cube filled!","color":"green"}')
        } else {
          e.server.runCommand('/title @a title {"text":"Block formation is incorrect!","color":"dark_red"}')
        }
      }
    }
  }
})