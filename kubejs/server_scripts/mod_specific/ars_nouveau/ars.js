onEvent('recipes', e => {
  e.shaped(Item.of('ars_nouveau:creative_spell_book', {
    mode: 0,
    spells: 'intangible,ignite,flare,strength,craft,cold_snap,rune,snare,slowfall,freeze,split,crush,smelt,summon_steed,accelerate,summon_vex,lightning,grow,dampen,touch,invisibility,extract,delay,light,duration_down,exchange,place_block,summon_wolves,shield,conjure_water,cut,harm,interact,blink,amplify,phantom_block,fell,extend_time,heal,leap,redstone_signal,pierce,harvest,fortune,break,pickup,launch,dispel,haste,ender_inventory,pull,explosion,fangs,aoe,gravity,self,aquatic,projectile,wither,gust'
  }),
    ['BSG', 'GGE', 'EER'],
    {
      B: 'ars_nouveau:archmage_spell_book',
      S: 'atmadditions:atm_star',
      G: 'astralsorcery:resonating_gem',
      E: 'minecraft:ender_eye',
      R: 'tombstone:soul_receptacle'
    }
  )

  e.shaped('ars_nouveau:creative_mana_jar', ['GMG', 'GSG', 'GGG'], {
    G: '#forge:glass',
    S: 'atmadditions:atm_star',
    M: 'ars_nouveau:mana_gem_block'
  })
})
