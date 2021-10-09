onEvent('ponder.registry', e => {
  e.create('atm6:creative_energy_cube', 'mekanism:creative_energy_cube')
    .scene('creative_energy_cube',
      'How to charge the Creative Energy Cube',
      'allthemods:creative_cube',
      (scene, util) => {
        scene.showBasePlate()
        scene.idle(10)

        scene.addKeyframe();

        scene.world().showSection(util.select().position(1, 1, 3), Facing.south)
        scene.world().showSection(util.select().position(5, 1, 3), Facing.south)
        scene.overlay()
          .showSelectionWithText(util.select().position(1, 1, 3), 50)
          .text("Start by placing down two fully charged Ultimate Energy Cubes")
          .pointAt(util.vector().centerOf(1, 2, 3))
          .placeNearTarget()
        scene.idle(60)

        scene.world().showSection(util.select().position(2, 1, 3), Facing.south)
        scene.world().showSection(util.select().position(4, 1, 3), Facing.south)
        scene.overlay()
          .showSelectionWithText(util.select().position(2, 1, 3), 50)
          .text("After that, two more Ultimate Induction Providers")
          .pointAt(util.vector().centerOf(2, 2, 3))
          .placeNearTarget()
        scene.idle(60)

        scene.world().showSection(util.select().position(3, 1, 3), Facing.south)
        scene.overlay()
          .showSelectionWithText(util.select().position(3, 1, 3), 50)
          .text("And finally, your empty Creative Energy Cube")
          .pointAt(util.vector().centerOf(3, 2, 3))
          .placeNearTarget()
        scene.idle(60)

        scene.addKeyframe();

        scene.overlay()
          .showControls(new PonderInput([3.5, 2.5, 3.5], PonderPointing.DOWN).whileSneaking().rightClick().withItem('atmadditions:atm_star'), 60)
        scene.idle(60)
      }
    )
})
