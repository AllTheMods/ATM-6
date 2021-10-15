onEvent('recipes', e => {
  modifyShapeless(e, 'framedblocks:framed_inner_corner_slope', 1,
    [
      'framedblocks:framed_corner_slope',
      'framedblocks:framed_corner_slope',
      'framedblocks:framed_corner_slope'
    ]
  )
  modifyShapeless(e, 'framedblocks:framed_inner_prism_corner', 1,
    [
      'framedblocks:framed_prism_corner',
      'framedblocks:framed_prism_corner',
      'framedblocks:framed_prism_corner'
    ]
  )

  e.shaped('framedblocks:framed_cube', ['B', 'B'], {
    B: [
      'framedblocks:framed_slope',
      'framedblocks:framed_slab',
      'framedblocks:framed_panel'
    ]
  }).id('kubejs:framedblocks/recycle/framed_cube_2')
  e.shaped('framedblocks:framed_cube', ['BB', 'BB'], {
    B: [
      'framedblocks:framed_corner_slope',
      'framedblocks:framed_prism_corner',
      'framedblocks:framed_slab_edge',
      'framedblocks:framed_corner_pillar',
      'framedblocks:framed_trapdoor',
      'framedblocks:framed_lattice_block'
    ]
  }).id('kubejs:framedblocks/recycle/framed_cube_4')
  e.shaped('framedblocks:framed_cube', ['BBB', 'B B', 'BBB'], {
    B: [
      'framedblocks:framed_slab_corner',
      'framedblocks:framed_pressure_plate',
      'framedblocks:framed_floor_board',
      'framedblocks:framed_bars',
      'framedblocks:framed_pane'
    ]
  }).id('kubejs:framedblocks/recycle/framed_cube_8')

  woodcutting(e,
    [
      ['framedblocks:framed_cube', 'framedblocks:framed_slope', 2],
      ['framedblocks:framed_cube', 'framedblocks:framed_corner_slope', 4],
      ['framedblocks:framed_cube', 'framedblocks:framed_prism_corner', 4],
      ['framedblocks:framed_cube', 'framedblocks:framed_slab', 2],
      ['framedblocks:framed_cube', 'framedblocks:framed_slab_edge', 4],
      ['framedblocks:framed_cube', 'framedblocks:framed_slab_corner', 8],
      ['framedblocks:framed_cube', 'framedblocks:framed_panel', 2],
      ['framedblocks:framed_cube', 'framedblocks:framed_corner_pillar', 4],
      ['framedblocks:framed_cube', 'framedblocks:framed_stairs', 1],
      ['framedblocks:framed_cube', 'framedblocks:framed_wall', 1],
      ['framedblocks:framed_cube', 'framedblocks:framed_fence', 1],
      ['framedblocks:framed_cube', 'framedblocks:framed_gate', 1],
      ['framedblocks:framed_cube', 'framedblocks:framed_trapdoor', 4],
      ['framedblocks:framed_cube', 'framedblocks:framed_pressure_plate', 8],
      ['framedblocks:framed_cube', 'framedblocks:framed_ladder', 3],
      ['framedblocks:framed_cube', 'framedblocks:framed_double_slope', 1],
      ['framedblocks:framed_cube', 'framedblocks:framed_double_corner', 1],
      ['framedblocks:framed_cube', 'framedblocks:framed_double_prism_corner', 1],
      ['framedblocks:framed_cube', 'framedblocks:framed_double_threeway_corner', 1],
      ['framedblocks:framed_cube', 'framedblocks:framed_floor_board', 8],
      ['framedblocks:framed_cube', 'framedblocks:framed_lattice_block', 4],
      ['framedblocks:framed_cube', 'framedblocks:framed_vertical_stairs', 1],
      ['framedblocks:framed_cube', 'framedblocks:framed_bars', 8],
      ['framedblocks:framed_cube', 'framedblocks:framed_pane', 8],
    ]
  )

  removeRecipeByID(e, [
    'framedblocks:framed_inner_corner_slope',
    'framedblocks:framed_inner_prism_corner',
    'framedblocks:framed_slope',
    'framedblocks:framed_corner_slope',
    'framedblocks:framed_prism_corner',
    'framedblocks:framed_slab',
    'framedblocks:framed_slab_edge',
    'framedblocks:framed_slab_corner',
    'framedblocks:framed_panel',
    'framedblocks:framed_corner_pillar',
    'framedblocks:framed_stairs',
    'framedblocks:framed_wall',
    'framedblocks:framed_fence',
    'framedblocks:framed_gate',
    'framedblocks:framed_trapdoor',
    'framedblocks:framed_pressure_plate',
    'framedblocks:framed_ladder',
    'framedblocks:framed_double_slope',
    'framedblocks:framed_double_corner',
    'framedblocks:framed_double_prism_corner',
    'framedblocks:framed_double_threeway_corner',
    'framedblocks:framed_floor_board',
    'framedblocks:framed_lattice_block',
    'framedblocks:framed_vertical_stairs',
    'framedblocks:framed_bars',
    'framedblocks:framed_pane'
  ])
})
