//priority: 997
onEvent('recipes', e => {
  // #region Metal Unification
  function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    e.replaceOutput(`#forge:dusts/${name}`, dustItem)
    e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)

    e.remove({ input: `#forge:ores/${name}`, type: 'immersiveengineering:crusher' })
    e.remove({ input: `#forge:ingots/${name}`, type: 'immersiveengineering:crusher' })
    e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:smelting' })
    e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:blasting' })
    e.remove({ id: `appliedenergistics2:grinder/${name}_dust_ingot` })

    if (name !== 'iron' && name !== 'gold' && name !== 'azure_silver' && name !== 'crimson_iron') {
      e.remove({ input: `#forge:ores/${name}`, output: `mekanism:dust_${name}`, type: 'mekanism:enriching' })
      e.remove({ input: `mekanism:dirty_dust_${name}`, output: `mekanism:dust_${name}`, type: 'mekanism:enriching' })
      e.remove({ input: `#mekanism:clumps/${name}`, output: `mekanism:dirty_dust_${name}`, type: 'mekanism:crushing' })
      e.remove({ input: `#forge:ores/${name}`, output: `mekanism:clump_${name}`, type: 'mekanism:purifying' })
      e.remove({ input: `mekanism:shard_${name}`, output: `mekanism:clump_${name}`, type: 'mekanism:purifying' })
      e.remove({ input: `#forge:ores/${name}`, output: `mekanism:shard_${name}`, type: 'mekanism:injecting' })
      e.remove({ input: `#mekanism:crystals/${name}`, output: `mekanism:shard_${name}`, type: 'mekanism:injecting' })
    }

    e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    e.recipes.pedestals.pedestal_crushing({ ingredient: { tag: `forge:ingots/${name}` }, result: { item: dustItem, count: 1 } })
    e.recipes.appliedenergistics2.grinder({ input: { tag: `forge:ingots/${name}` }, result: { primary: { item: dustItem } }, turns: 8 })
    e.recipes.immersiveengineering.crusher({ secondaries: [], result: { base_ingredient: { item: dustItem } }, input: { tag: `forge:ingots/${name}` }, energy: 3000 })

    if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
      e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1)
      e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1)
      e.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`)
      if (name !== 'allthemodium' && name !== 'vibranium' && name !== 'unobtainium') {
        e.remove({ id: `engineerstools:crushing/${name}_grit_crushing_recipe` })
        e.recipes.engineerstools.crafting_extended_shapeless({
          group: 'grit',
          ingredients: [
            { tag: `forge:ores/${name}` },
            { item: 'engineerstools:crushing_hammer' }
          ],
          result: { item: dustItem, count: 2 },
          aspects: { tool: 'engineerstools:crushing_hammer', tool_damage: 10 }
        })
      }
      e.recipes.immersiveengineering.crusher({
        secondaries: [],
        result: { count: 2, base_ingredient: { item: dustItem } },
        input: { tag: `forge:ores/${name}` },
        energy: 3000
      })
      e.remove({ id: `pedestals:pedestal_crushing/dust${name}` })
      e.recipes.pedestals.pedestal_crushing({
        ingredient: { tag: `forge:ores/${name}` },
        result: { item: dustItem, count: 2 }
      })
      e.remove({ id: `appliedenergistics2:grinder/${name}_dust_ore` })
      e.recipes.appliedenergistics2.grinder({
        input: { tag: `forge:ores/${name}` },
        result: { primary: { item: dustItem, count: 2 } },
        turns: 8
      })
    }

    e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    e.replaceInput(dustItem, `#forge:dusts/${name}`)
    e.replaceInput(ingotItem, `#forge:ingots/${name}`)
    e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)
  }
  function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    e.replaceInput(dustItem, `#forge:dusts/${name}`)
    e.replaceInput(ingotItem, `#forge:ingots/${name}`)
    e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)

    e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    e.replaceOutput(`#forge:dusts/${name}`, dustItem)
    e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
  }
  //Vanilla MC
  unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget')
  unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget')

  //Multiple Mods
  unifyMetal('aluminum', 'alltheores:aluminum_ingot', 'alltheores:aluminum_dust', 'alltheores:aluminum_block', 'alltheores:aluminum_nugget')
  unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget')
  unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget')
  unifyMetal('nickel', 'alltheores:nickel_ingot', 'alltheores:nickel_dust', 'alltheores:nickel_block', 'alltheores:nickel_nugget')
  unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget')
  unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget')
  unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget')
  unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget')
  unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget')

  //Mekanism
  unifyMetal('osmium', 'alltheores:osmium_ingot', 'alltheores:osmium_dust', 'alltheores:osmium_block', 'alltheores:osmium_nugget')

  //Silent Gear
  unifyMetal('azure_silver', 'silentgear:azure_silver_ingot', 'silentgear:azure_silver_dust', 'silentgear:azure_silver_block', 'silentgear:azure_silver_nugget')
  unifyMetal('crimson_iron', 'silentgear:crimson_iron_ingot', 'silentgear:crimson_iron_dust', 'silentgear:crimson_iron_block', 'silentgear:crimson_iron_nugget')

  //Craft only metals
  unifyCraftMetal('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel')

  //Thermal
  unifyCraftMetal('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget')
  unifyCraftMetal('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget')
  unifyCraftMetal('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget')
  // #endregion Metal Unification
  // #region Plate Unification
  function plateCasting(material, coolingTime, result) {
    let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
    let fluid = alltheores.includes(material) ? { tag: `forge:molten_${material}`, amount: 144 } : { name: `tconstruct:molten_${material}`, amount: 144 }

    e.custom({
      type: 'tconstruct:casting_table',
      conditions: [
        {
          value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        }
      ],
      cast: { tag: 'tconstruct:casts/multi_use/plate' },
      fluid: fluid,
      result: { item: result },
      cooling_time: coolingTime
    }).id(`kubejs:smeltery/casting/metal/${material}/plate_gold_cast`)
    e.custom({
      type: 'tconstruct:casting_table',
      conditions: [
        {
          value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        }
      ],
      cast: { tag: 'tconstruct:casts/single_use/plate' },
      cast_consumed: true,
      fluid: fluid,
      result: { item: result },
      cooling_time: coolingTime
    }).id(`kubejs:smeltery/casting/metal/${material}/plate_sand_cast`)
  }

  function platePressing(material, result) {
    e.custom({
      type: 'immersiveengineering:metal_press',
      mold: { item: 'immersiveengineering:mold_plate' },
      result: { item: result },
      conditions: [
        {
          value: { tag: `forge:ingots/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        },
        {
          value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        }
      ],
      input: { tag: `forge:ingots/${material}` },
      energy: 2400
    }).id(`kubejs:metalpress/plate_${material}`)
  }

  function plateProcessing(types) {
    types.forEach(([material, coolingTime, result]) => {
      e.replaceInput(`thermal:${material}_plate`, `#forge:plates/${material}`)
      e.replaceInput(`immersiveengineering:plate_${material}`, `#forge:plates/${material}`)
      e.replaceInput(material === 'gold' ? `create:${material}en_sheet` : `create:${material}_sheet`, `#forge:plates/${material}`)

      result = result ? result : `thermal:${material}_plate`

      e.remove({ id: `immersiveengineering:crafting/plate_${material}_hammering` });
      e.shapeless(result, [`#forge:ingots/${material}`, '#misctags:immersive_engineering_hammer']).id(`kubejs:crafting/plate_${material}_hammering`);

      e.remove({ id: `create:pressing/${material}_ingot` })
      e.recipes.create.pressing(result, `#forge:ingots/${material}`).id(`kubejs:pressing/${material}_ingot`)

      if (coolingTime !== null) {
        e.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_gold_cast` })
        e.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_sand_cast` })
        plateCasting(material, coolingTime, result)
      }

      e.remove({ id: `immersiveengineering:metalpress/plate_${material}` })
      platePressing(material, result)

      e.remove({ id: `thermal:machine/press/press_${material}_ingot_to_plate` })
      e.recipes.thermal.press(result, `#forge:ingots/${material}`).id(`kubejs:machine/press/press_${material}_ingot_to_plate`)
    })
  }

  plateProcessing([
    ['aluminum', 47, 'immersiveengineering:plate_aluminum'],
    ['steel', 50, 'immersiveengineering:plate_steel'],
    ['uranium', 50, 'immersiveengineering:plate_uranium'],
    ['iron', 60],
    ['gold', 57],
    ['copper', 50],
    ['tin', 39],
    ['lead', 43],
    ['silver', 60],
    ['nickel', 65],
    ['bronze', 57],
    ['electrum', 59],
    ['invar', 63],
    ['constantan', 64],
    ['signalum', null],
    ['lumium', null],
    ['enderium', null],
    ['brass', 57, 'create:brass_sheet']
  ])
  // #endregion Plate Unification
  // #region Tinkers Unification
  function tinkerMelting(material, type, typeValues, temperature, time, byproduct) {
    let recipe = {
      type: 'tconstruct:melting',
      ingredient: { tag: `forge:${type}/${material}` },
      result: { fluid: `alltheores:molten_${material}`, amount: typeValues.amount },
      temperature: temperature,
      time: time * typeValues.multiplier
    }
    e.custom(type != 'ores' ? recipe : Object.assign({ byproducts: byproduct }, recipe)).id(`kubejs:melting/${type}/${material}`)
  }
  function tinkerAlloys(entries) {
    entries.forEach(([output, outputAmount, temperature, inputs]) => {
      e.remove({ id: `tconstruct:smeltery/alloys/molten_${output}` })
      e.custom({
        type: 'tconstruct:alloy',
        inputs: inputs,
        result: { fluid: `tconstruct:molten_${output}`, amount: outputAmount },
        temperature: temperature
      }).id(`kubejs:melting/alloys/${output}`)
    })
  }
  function unifyTinkers(entries) {
    let meltingTypes = ['block', 'can', 'coin', 'dust', 'gear', 'ingot', 'nugget', 'ore', 'plates', 'rod', 'sheetmetal']
    let meltingTypeValues = {
      storage_blocks: { amount: 1296, multiplier: 88.125 },
      dusts: { amount: 144, multiplier: 21.75 },
      gears: { amount: 576, multiplier: 58.8 },
      ingots: { amount: 144, multiplier: 29.4 },
      nuggets: { amount: 16, multiplier: 10.0 },
      ores: { amount: 288, multiplier: 44.1 },
      plates: { amount: 144, multiplier: 29.4 },
      rods: { amount: 72, multiplier: 5.88 },
      sheetmetals: { amount: 144, multiplier: 29.4 }
    }
    let meltingParts = ['broad_axe_head', 'broad_blade', 'hammer_head', 'large_plate', 'pickaxe_head', 'repair_kit', 'small_axe_head', 'small_blade', 'tool_binding', 'tool_handle', 'tough_handle']

    entries.forEach(([material, temperature, time, types, byproduct]) => {
      e.replaceInput(`tconstruct:${material}_ingot`, `#forge:ingots/${material}`)
      e.replaceInput(`tmechworks:${material}_ingot`, `#forge:ingots/${material}`)
      e.replaceInput(`tconstruct:${material}_block`, `#forge:storage_blocks/${material}`)
      e.replaceInput(`tmechworks:${material}_block`, `#forge:storage_blocks/${material}`)
      e.replaceOutput(`tconstruct:${material}_ingot`, `alltheores:${material}_ingot`)
      e.replaceOutput(`tmechworks:${material}_ingot`, `alltheores:${material}_ingot`)
      e.replaceOutput(`tconstruct:${material}_block`, `alltheores:${material}_block`)
      e.replaceOutput(`tmechworks:${material}_block`, `alltheores:${material}_block`)

      meltingTypes.forEach(meltingType => {
        e.remove({ id: `tconstruct:smeltery/melting/metal/${material}/${meltingType}` })
        for (let type in meltingTypeValues) if (types.includes(type)) tinkerMelting(material, type, meltingTypeValues[type], temperature, time, byproduct)
      })
      meltingParts.forEach(meltingPart => e.remove({ id: `tconstruct:tools/parts/melting/${meltingPart}/tconstruct/${material}` }))
    })
  }
  function tinkerAlloyMelting(entries) {
    entries.forEach(([input, outputItem, outputBlock, outputNugget]) => {
      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/block` })

      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_gold_cast` })
      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_sand_cast` })

      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_gold_cast` })
      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_sand_cast` })

      e.custom({
        type: 'tconstruct:casting_basin',
        fluid: { tag: `tconstruct:molten_${input}`, amount: 1296 },
        result: { item: `${outputBlock}` },
        cooling_time: 171
      }).id(`kubejs:smeltery/casting/metal/${input}/block`)

      e.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/ingot' },
        fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
        result: { item: `${outputItem}` },
        cooling_time: 57
      }).id(`kubejs:smeltery/casting/metal/${input}/ingot_gold_cast`)
      e.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/ingot' },
        cast_consumed: true,
        fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
        result: { item: `${outputItem}` },
        cooling_time: 57
      }).id(`kubejs:smeltery/casting/metal/${input}/ingot_sand_cast`)

      e.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/nugget' },
        fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
        result: { item: `${outputNugget}` },
        cooling_time: 19
      }).id(`kubejs:smeltery/casting/metal/${input}/nugget_gold_cast`)
      e.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/nugget' },
        cast_consumed: true,
        fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
        result: { item: `${outputNugget}` },
        cooling_time: 19
      }).id(`kubejs:smeltery/casting/metal/${input}/nugget_sand_cast`)
    })
  }

  tinkerAlloyMelting([
    ['bronze', 'thermal:bronze_ingot', 'thermal:bronze_block', 'thermal:bronze_nugget'],
    ['constantan', 'thermal:constantan_ingot', 'thermal:constantan_block', 'thermal:constantan_nugget'],
    ['electrum', 'thermal:electrum_ingot', 'thermal:electrum_block', 'thermal:electrum_nugget']
  ])

  unifyTinkers([
    [
      'aluminum',
      425,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'plates', 'rods', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
    ],
    [
      'copper',
      500,
      1.7,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_gold', amount: 16 }]
    ],
    [
      'lead',
      330,
      1.4,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'alltheores:molten_silver', amount: 48 }]
    ],
    [
      'nickel',
      950,
      2.2,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'alltheores:molten_platinum', amount: 16 }]
    ],
    [
      'osmium',
      975,
      2.2,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
    ],
    [
      'platinum',
      970,
      2.2,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'tconstruct:molten_gold', amount: 48 }]
    ],
    [
      'silver',
      790,
      2.0,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'alltheores:molten_lead', amount: 48 }]
    ],
    [
      'tin',
      225,
      1.3,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates'],
      [{ fluid: 'alltheores:molten_copper', amount: 48 }]
    ],
    [
      'uranium',
      830,
      2.0,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'alltheores:molten_lead', amount: 48 }]
    ],
    [
      'zinc',
      420,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'alltheores:molten_tin', amount: 48 }]
    ]
  ])

  tinkerAlloys([
    [
      'brass', 288, 605, [
        { tag: 'forge:molten_copper', amount: 144 },
        { tag: 'forge:molten_zinc', amount: 144 }
      ]
    ],
    [
      'bronze', 576, 700, [
        { tag: 'forge:molten_copper', amount: 432 },
        { tag: 'forge:molten_tin', amount: 144 }
      ]
    ],
    [
      'constantan', 288, 920, [
        { tag: 'forge:molten_copper', amount: 144 },
        { tag: 'forge:molten_nickel', amount: 144 }
      ]
    ],
    [
      'electrum', 288, 760, [
        { tag: 'tconstruct:molten_gold', amount: 144 },
        { tag: 'forge:molten_silver', amount: 144 }
      ]
    ],
    [
      'hepatizon', 288, 1400, [
        { tag: 'forge:molten_copper', amount: 288 },
        { tag: 'tconstruct:molten_cobalt', amount: 144 },
        { tag: 'tconstruct:molten_obsidian', amount: 1000 }
      ]
    ],
    [
      'invar', 432, 900, [
        { tag: 'tconstruct:molten_iron', amount: 288 },
        { tag: 'forge:molten_nickel', amount: 144 }
      ]
    ],
    [
      'pewter', 288, 400, [
        { tag: 'tconstruct:molten_iron', amount: 144 },
        { tag: 'forge:molten_lead', amount: 144 }
      ]
    ],
    [
      'rose_gold', 576, 550, [
        { tag: 'forge:molten_copper', amount: 432 },
        { tag: 'tconstruct:molten_gold', amount: 144 }
      ]
    ],
    [
      'tinkers_bronze', 432, 700, [
        { tag: 'forge:molten_copper', amount: 432 },
        { tag: 'tconstruct:molten_glass', amount: 1000 }
      ]
    ]
  ])

  // #endregion Tinkers Unification

  e.replaceInput('appliedenergistics2:certus_quartz_dust', '#forge:dusts/certus_quartz')
  e.replaceInput('thermal:bitumen', '#forge:bitumen')
  e.replaceInput('immersivepetroleum:bitumen', '#forge:bitumen')
  e.replaceInput('lazierae2:coal_dust', '#forge:dusts/coal')
  e.replaceInput('mekanism:dust_coal', '#forge:dusts/coal')
  e.replaceInput('iceandfire:sapphire', '#forge:gems/sapphire')
  e.replaceInput('iceandfire:sapphire_block', '#forge:storage_blocks/sapphire')
  e.replaceInput('minecraft:stick', '#forge:rods/wooden')
  e.replaceInput('pneumaticcraft:plastic', '#forge:plastic')
  e.replaceInput('thermal:coal_coke', '#forge:coal_coke')
  e.replaceInput('immersiveengineering:coal_coke', '#forge:coal_coke')

  e.replaceOutput('immersivepetroleum:bitumen', 'thermal:bitumen')
  e.replaceOutput('lazierae2:coal_dust', 'mekanism:dust_coal')
  e.replaceOutput('iceandfire:sapphire_gem', 'projectred-core:sapphire')
  e.replaceOutput('iceandfire:sapphire_block', 'projectred-core:sapphire_block')
  e.replaceOutput('mekanism:sawdust', 'thermal:sawdust')
  e.replaceOutput('mekanism:dust_sulfur', 'thermal:sulfur_dust')
  e.replaceOutput('immersiveengineering:dust_sulfur', 'thermal:sulfur_dust')
  e.replaceOutput('mekanism:dust_quartz', 'thermal:quartz_dust')
  e.replaceOutput('appliedenergistics2:nether_quartz_dust', 'thermal:quartz_dust')
  e.replaceOutput('thermal:coal_coke', 'immersiveengineering:coal_coke')
  e.replaceOutput('thermal:coal_coke_block', 'immersiveengineering:coke')
  e.replaceOutput('mekanism:dust_diamond', 'thermal:diamond_dust')
  e.replaceOutput('createaddition:diamond_grit', 'thermal:diamond_dust')
  e.remove({ id: 'thermal:storage/coal_coke_block' })

  // #region Honey
  let simpleHoneys = ['cofh_core:honey', 'resourcefulbees:honey', 'cyclic:honey', 'create:honey']
  let customHoneys = ['resourcefulbees:catnip_honey', 'resourcefulbees:rainbow_honey']

  function cyclicHoneyMelter(entries) {
    entries.forEach(([input, honey, honeyAmount]) => {
      e.custom({
        type: 'cyclic:melter',
        inputFirst: { item: input },
        result: { fluid: honey, count: honeyAmount }
      }).id(`kubejs:melter/${input.substring(input.indexOf(':') + 1)}/0`)
      e.custom({
        type: 'cyclic:melter',
        inputFirst: { item: input },
        inputSecond: { item: input },
        result: { fluid: honey, count: honeyAmount * 2 }
      }).id(`kubejs:melter/${input.substring(input.indexOf(':') + 1)}/1`)
    })
  }
  function createHoneyMixing(entries) {
    entries.forEach(([output, amount, honey, inputs, id]) => {
      let honeyMixingRecipe = { type: 'create:mixing', results: [{ item: output, amount: amount }] }
      let honeyMixingInputs = [{ fluidTag: 'forge:honey', amount: honey }]

      inputs.forEach(([input, type]) => honeyMixingInputs.push(type == 0 ? { item: input } : { tag: input }))
      honeyMixingRecipe = Object.assign({ ingredients: honeyMixingInputs }, honeyMixingRecipe)
      e.custom(honeyMixingRecipe).id(
        id
          ? `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}/${id}`
          : `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}`
      )
    })
  }

  e.recipes.create.emptying(['minecraft:glass_bottle', Fluid.of('resourcefulbees:honey', 250)], 'minecraft:honey_bottle').id('kubejs:emptying/honey_bottle')

  e.recipes.thermal.centrifuge(Fluid.of('resourcefulbees:honey', 100), '#forge:simple_honeycombs').id(`kubejs:thermal/centrifuge/centrifuge_honeycomb`)
  e.recipes.thermal.centrifuge(Fluid.of('resourcefulbees:honey', 900), '#forge:simple_honeycomb_blocks').id(`kubejs:thermal/centrifuge/centrifuge_honeycomb_block`)
  e.recipes.thermal.crucible(Fluid.of('resourcefulbees:honey', 1000), 'minecraft:honey_block').id('kubejs:thermal/crucible/crucible_honey_block_to_honey')

  simpleHoneys.forEach((honey, index) => {
    e.recipes.thermal.chiller('minecraft:honey_block', Fluid.of(honey, 1000)).id(`kubejs:thermal/chiller/honey_block/${index}`)
    e.recipes.thermal.bottler('minecraft:honey_bottle', [Fluid.of(honey, 250), 'minecraft:glass_bottle']).id(`kubejs:thermal/bottler/honey_bottle/${index}`)
  })
  customHoneys.forEach(honey => {
    e.recipes.thermal.chiller(`${honey}_block`, Fluid.of(honey, 1000)).id(`kubejs:thermal/chiller/chiller_honey_to_honey_block/${honey.substring(honey.indexOf(':') + 1)}`)
    e.recipes.thermal.bottler(`${honey}_bottle`, [Fluid.of(honey, 250), 'minecraft:glass_bottle']).id(`kubejs:thermal/bottler/bottler_honey_bottle/${honey.substring(honey.indexOf(':') + 1)}`)
    e.recipes.thermal.centrifuge(Fluid.of(honey, 100), honey.includes('rainbow') ? 'resourcefulbees:rgbee_honeycomb' : `${honey}comb`).id(`kubejs:thermal/centrifuge/centrifuge_honeycomb/${honey.substring(honey.indexOf(':') + 1)}`)
    e.recipes.thermal.centrifuge(Fluid.of(honey, 900), honey.includes('rainbow') ? 'resourcefulbees:rgbee_honeycomb_block' : `${honey}comb_block`).id(`kubejs:thermal/centrifuge/centrifuge_honeycomb_block/${honey.substring(honey.indexOf(':') + 1)}`)
    e.recipes.thermal.crucible(Fluid.of(honey, 1000), `${honey}_block`).id(`kubejs:thermal/crucible/crucible_honey_block_to_honey/${honey.substring(honey.indexOf(':') + 1)}`)
  })

  cyclicHoneyMelter([
    ['minecraft:honey_bottle', 'resourcefulbees:honey', 250],
    ['minecraft:honey_block', 'resourcefulbees:honey', 1000],
    ['resourcefulbees:catnip_honey_bottle', 'resourcefulbees:catnip_honey', 250],
    ['resourcefulbees:catnip_honey_block', 'resourcefulbees:catnip_honey', 1000],
    ['resourcefulbees:rainbow_honey_bottle', 'resourcefulbees:rainbow_honey', 250],
    ['resourcefulbees:rainbow_honey_block', 'resourcefulbees:rainbow_honey', 1000]
  ])

  createHoneyMixing([
    [
      'minecraft:bee_nest', 1, 1000, [
        ['resourcefulbees:resourceful_honeycomb_block', 1],
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['resourcefulbees:resourceful_honeycomb_block', 1]
      ]
    ],
    [
      'minecraft:cookie', 16, 50, [
        ['minecraft:wheat', 0],
        ['minecraft:cocoa_beans', 0],
        ['minecraft:wheat', 0]
      ]
    ],
    [
      'minecraft:glistering_melon_slice', 2, 100, [
        ['minecraft:melon_slice', 0],
        ['forge:nuggets/gold', 1],
        ['minecraft:melon_slice', 0]
      ]
    ],
    [
      'minecraft:beehive', 3, 100, [
        ['forge:chests', 1],
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['forge:rods/wooden', 1]
      ]
    ],
    [
      'cyclic:gem_amber', 1, 500, [
        ['minecraft:fire_charge', 0],
        ['forge:dusts/redstone', 1],
        ['minecraft:magma_block', 0]
      ]
    ],
    [
      'minecraft:honeycomb_block', 1, 100, [
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['resourcefulbees:resourceful_honeycomb', 1]
      ]
    ],
    [
      'minecraft:honey_block', 1, 1000, [
        ['forge:rods/wooden', 1],
        ['forge:rods/wooden', 1],
        ['forge:rods/wooden', 1]
      ],
      1
    ],
    [
      'cyclic:apple_honey', 3, 300, [
        ['minecraft:apple', 0],
        ['minecraft:apple', 0],
        ['minecraft:apple', 0]
      ],
      1
    ],
    [
      'minecraft:pumpkin_pie', 1, 100, [
        ['minecraft:egg', 0],
        ['minecraft:pumpkin', 0],
        ['minecraft:egg', 0]
      ]
    ],
    [
      'minecraft:cake', 1, 500, [
        ['minecraft:egg', 0],
        ['minecraft:wheat', 0],
        ['minecraft:egg', 0]
      ]
    ],
    [
      'minecraft:golden_carrot', 2, 100, [
        ['minecraft:carrot', 0],
        ['forge:nuggets/gold', 1],
        ['minecraft:carrot', 0]
      ]
    ],
    [
      'minecraft:honey_bottle', 3, 750, [
        ['minecraft:glass_bottle', 0],
        ['minecraft:glass_bottle', 0],
        ['minecraft:glass_bottle', 0]
      ]
    ],
    ['cyclic:apple_honey', 1, 100, [['minecraft:apple', 0]], 2],
    ['minecraft:honey_block', 1, 1000, [['forge:rods/wooden', 1]], 2]
  ])
  // #endregion Honey
  // #region Oil
  // crude
  e.recipes.thermal.centrifuge([Fluid.of('pneumaticcraft:oil', 100), 'minecraft:sand', 'thermal:bitumen', 'thermal:tar'], 'thermal:oil_sand').id('kubejs:machine/centrifuge/centrifuge_oil_sand')
  e.recipes.thermal.centrifuge([Fluid.of('pneumaticcraft:oil', 100), 'minecraft:red_sand', 'thermal:bitumen', 'thermal:tar'], 'thermal:oil_red_sand').id('kubejs:machine/centrifuge/centrifuge_oil_red_sand')
  e.custom({
    type: 'thermal:refinery',
    ingredient: { fluid: 'pneumaticcraft:oil', amount: 100 },
    result: [
      { fluid: 'thermal:heavy_oil', amount: 40 },
      { fluid: 'thermal:light_oil', amount: 60 },
      { item: 'thermal:bitumen', chance: 0.1 }
    ],
    energy: 6000
  }).id('kubejs:machine/refinery/pneumatic_crude_oil')
  e.custom({
    type: 'thermal:refinery',
    ingredient: { fluid: 'immersivepetroleum:oil', amount: 100 },
    result: [
      { fluid: 'thermal:heavy_oil', amount: 40 },
      { fluid: 'thermal:light_oil', amount: 60 },
      { item: 'thermal:bitumen', chance: 0.1 }
    ],
    energy: 6000
  }).id('kubejs:machine/refinery/immersive_crude_oil')
  e.custom({
    type: 'pneumaticcraft:amadron',
    input: { type: 'FLUID', id: 'thermal:crude_oil', amount: 5000 },
    output: { type: 'ITEM', id: 'minecraft:emerald', amount: 1 },
    static: true,
    level: 0
  }).id('kubejs:amadron/thermal/oil_to_emerald')
  e.custom({
    type: 'pneumaticcraft:amadron',
    input: { type: 'FLUID', id: 'immersivepetroleum:oil', amount: 5000 },
    output: { type: 'ITEM', id: 'minecraft:emerald', amount: 1 },
    static: true,
    level: 0
  }).id('kubejs:amadron/immersive/oil_to_emerald')

  // creosote
  e.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:creosote', 250), 'minecraft:charcoal'], '#minecraft:logs').id('kubejs:thermal/pyrolyzer/charcoal')
  e.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:creosote', 5000), 'immersiveengineering:coke'], '#forge:storage_blocks/coal').id('kubejs:thermal/pyrolyzer/coke_block')
  e.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:creosote', 250), 'immersiveengineering:coal_coke'], '#minecraft:coals').id('kubejs:thermal/pyrolyzer/coal_coke')
  e.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [{ tag: 'minecraft:planks' }],
    inputFluid: "{ FluidName: \"immersiveengineering:creosote\", Amount: 125 }",
    processingTime: 5,
    output: { item: 'immersiveengineering:treated_wood_horizontal' }
  }).id('kubejs:dissolution_chamber/immersiveengineering/treated_wood_horizontal')
  e.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [{ tag: 'minecraft:planks' }],
    inputFluid: "{ FluidName: \"thermal:creosote\", Amount: 125 }",
    processingTime: 5,
    output: { item: 'immersiveengineering:treated_wood_horizontal' }
  }).id('kubejs:dissolution_chamber/thermal/treated_wood_horizontal')
  // #endregion Oil
})
