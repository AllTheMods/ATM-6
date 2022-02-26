onEvent('recipes', e => {

  const slurries = [
    'uranium',
    'copper',
    'osmium',
    'lead',
    'tin'
  ]

  slurries.forEach(type => e.remove({id: `alltheores:mek_processing/${type}/slurry/dirty`}))
});
