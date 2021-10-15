onEvent('recipes', e => {
  function coinUpgrade(name, type) {
    e.recipes.allthemodium.atmshapeless_crafting({
      ingredients: [
        { item: `pedestals:coin/${name}` },
        { item: `minecraft:${type == 'xp' ? 'experience_bottle' : 'redstone_block'}` }
      ],
      result: { item: `pedestals:coin/${type}${name}` }
    })
  }
  function pedestalCrush(result, count, ingred, type) {
    e.recipes.pedestals.pedestal_crushing({
      result: {
        item: result,
        count: count
      },
      ingredient: (type == 1) ? { tag: ingred } : { item: ingred }
    })
  }
  function pedestalSaw(result, count, ingred, type) {
    e.recipes.pedestals.pedestal_sawing({
      result: {
        item: result,
        count: count
      },
      ingredient: (type == 1) ? { tag: ingred } : { item: ingred }
    })
  }

  coinUpgrade('import', 'rf')
  coinUpgrade('export', 'rf')
  coinUpgrade('crusher', 'rf')
  coinUpgrade('smelter', 'rf')
  coinUpgrade('sawmill', 'rf')
  coinUpgrade('dropper', 'xp')
  coinUpgrade('magnet', 'xp')

  pedestalCrush('pamhc2foodcore:flouritem', 1, 'forge:flour_plants', 1)
  pedestalCrush('appliedenergistics2:fluix_dust', 1, 'appliedenergistics2:fluix_crystal', 0)
  pedestalCrush('appliedenergistics2:certus_quartz_dust', 1, 'forge:gems/certus_quartz', 1)
  pedestalCrush('thermal:quartz_dust', 1, 'forge:gems/quartz', 1)

  pedestalSaw('thermal:sawdust', 1, 'forge:rods/wooden', 1)
  pedestalSaw('minecraft:stick', 4, 'minecraft:planks', 1)
  pedestalSaw('minecraft:stick', 2, 'minecraft:wooden_slabs', 1)

  removeRecipeByID(e, [
    'pedestals:pedestal_crushing/dustnethergold',
    'pedestals:dustflour'
  ])
})
