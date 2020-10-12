events.listen('recipes', function (e) {

  var cloche = e.recipes.immersiveengineering.cloche

  function t1(type) {
    cloche({
      results: [{
        item: 'mysticalagriculture:' + type + '_essence',
        count: 2
      }],
      input: {
        item: 'mysticalagriculture:' + type + '_seeds'
      },
      soil: {
        tag: 'misctags:farmland/tier1'
      },
      time: 1600,
      render: {
        type: 'crop',
        block: 'mysticalagriculture:' + type + '_crop'
      }
    })
  }

  function t2(type) {
    cloche({
      results: [{
        item: 'mysticalagriculture:' + type + '_essence',
        count: 2
      }],
      input: {
        item: 'mysticalagriculture:' + type + '_seeds'
      },
      soil: {
        tag: 'misctags:farmland/tier2'
      },
      time: 2800,
      render: {
        type: 'crop',
        block: 'mysticalagriculture:' + type + '_crop'
      }
    })
  }

  function t3(type) {
    cloche({
      results: [{
        item: 'mysticalagriculture:' + type + '_essence',
        count: 2
      }],
      input: {
        item: 'mysticalagriculture:' + type + '_seeds'
      },
      soil: {
        tag: 'misctags:farmland/tier3'
      },
      time: 4000,
      render: {
        type: 'crop',
        block: 'mysticalagriculture:' + type + '_crop'
      }
    })
  }

  function t4(type) {
    cloche({
      results: [{
        item: 'mysticalagriculture:' + type + '_essence',
        count: 2
      }],
      input: {
        item: 'mysticalagriculture:' + type + '_seeds'
      },
      soil: {
        tag: 'misctags:farmland/tier4'
      },
      time: 5200,
      render: {
        type: 'crop',
        block: 'mysticalagriculture:' + type + '_crop'
      }
    })
  }

  function t5(type) {
    cloche({
      results: [{
        item: 'mysticalagriculture:' + type + '_essence',
        count: 2
      }],
      input: {
        item: 'mysticalagriculture:' + type + '_seeds'
      },
      soil: {
        tag: 'misctags:farmland/tier5'
      },
      time: 6400,
      render: {
        type: 'crop',
        block: 'mysticalagriculture:' + type + '_crop'
      }
    })
  }

  function t6(type) {
    cloche({
      results: [{
        item: 'mysticalagriculture:' + type + '_essence',
        count: 2
      }],
      input: {
        item: 'mysticalagriculture:' + type + '_seeds'
      },
      soil: {
        tag: 'misctags:farmland/tier6'
      },
      time: 7600,
      render: {
        type: 'crop',
        block: 'mysticalagriculture:' + type + '_crop'
      }
    })
  }

  function t7(type) {
    cloche({
      results: [{
        item: 'mysticalagriculture:' + type + '_essence',
        count: 2
      }],
      input: {
        item: 'mysticalagriculture:' + type + '_seeds'
      },
      soil: {
        item: 'mysticalagradditions:insanium_block'
      },
      time: 8900,
      render: {
        type: 'crop',
        block: 'mysticalagriculture:' + type + '_crop'
      }
    })
  }

  function inf(rCount, time, fLand) {
    cloche({
      results: [{
        item: 'mysticalagriculture:inferium_essence',
        count: rCount
      }],
      input: {
        item: 'mysticalagriculture:inferium_seeds'
      },
      soil: {
        item: fLand
      },
      time: time,
      render: {
        type: 'crop',
        block: 'mysticalagriculture:inferium_crop'
      }
    })
  }

  function regular(results, seed, crop) {
    cloche({
      results: results,
      input: {
        item: seed
      },
      soil: {
        item: 'minecraft:dirt'
      },
      time: 600,
      render: {
        type: 'crop',
        block: crop
      }
    })
  }

  //Regular crops
  regular([{
    item: 'byg:blueberries',
    count: 2
  }], 'byg:blueberries', 'byg:blueberry_bush')
  regular([{
    item: 'forbidden_arcanus:arcane_gold_nugget'
  }, {
    item: 'forbidden_arcanus:golden_orchid_seeds'
  }], 'forbidden_arcanus:golden_orchid_seeds', 'forbidden_arcanus:golden_orchid')
  regular([{
    item: 'silentgear:flax_fiber',
    count: 2
  }, {
    item: 'silentgear:flax_seeds'
  }], 'silentgear:flax_seeds', 'silentgear:flax_plant')

  //Inferium
  inf(1, 1500, 'minecraft:dirt')
  inf(2, 2100, 'mysticalagriculture:inferium_farmland')
  inf(3, 2700, 'mysticalagriculture:prudentium_farmland')
  inf(4, 3300, 'mysticalagriculture:tertium_farmland')
  inf(5, 4900, 'mysticalagriculture:imperium_farmland')
  inf(6, 5500, 'mysticalagriculture:supremium_farmland')
  inf(7, 6100, 'mysticalagradditions:insanium_farmland')

  //Tier 1 Crops
  t1('air')
  t1('earth')
  t1('fire')
  t1('water')
  t1('dirt')
  t1('wood')
  t1('ice')
  t1('stone')

  //Tier 2 Crops
  t2('aluminum')
  t2('chicken')
  t2('coal')
  t2('copper')
  t2('coral')
  t2('cow')
  t2('dye')
  t2('fish')
  t2('honey')
  t2('iridium')
  t2('mystical_flower')
  t2('nature')
  t2('nether')
  t2('pig')
  t2('rubber')
  t2('saltpeter')
  t2('sheep')
  t2('silicon')
  t2('slime')
  t2('squid')
  t2('sulfur')
  t2('turtle')
  t2('sky_stone')

  //Tier 3 Crops
  t3('azure_silver')
  t3('brass')
  t3('bronze')
  t3('certus_quartz')
  t3('creeper')
  t3('crimson_iron')
  t3('ender_biotite')
  t3('glowstone')
  t3('graphite')
  t3('iron')
  t3('lead')
  t3('nether_quartz')
  t3('obsidian')
  t3('prismarine')
  t3('quartz_enriched_iron')
  t3('rabbit')
  t3('redstone')
  t3('silver')
  t3('skeleton')
  t3('spider')
  t3('tin')
  t3('zinc')
  t3('zombie')
  t3('lumium')
  t3('fluorite')

  //Tier 4 Crops
  t4('azure_electrum')
  t4('blaze')
  t4('chrome')
  t4('constantan')
  t4('crimson_steel')
  t4('electrum')
  t4('end')
  t4('enderman')
  t4('experience')
  t4('fluix')
  t4('ghast')
  t4('gold')
  t4('invar')
  t4('lapis_lazuli')
  t4('mithril')
  t4('nickel')
  t4('oratchalcum')
  t4('osmium')
  t4('refined_glowstone')
  t4('refined_obsidian')
  t4('steel')
  t4('titanium')
  t4('tungsten')
  t4('enderium')
  t4('compressed_iron')
  t4('hop_graphite')

  //Tier 5 Crops
  t5('diamond')
  t5('emerald')
  t5('netherite')
  t5('uraninite')
  t5('wither_skeleton')
  t5('platinum')
  t5('uranium')

  //Tier 6 Crops
  t6('dragon_egg')
  t6('nether_star')

  //Botanical Tier
  //t3('manasteel')
  //t4('elementium')
  //t5('terrasteel')

  //Magical Tier
  t7('allthemodium')
  t7('vibranium')
  t7('unobtainium')
})