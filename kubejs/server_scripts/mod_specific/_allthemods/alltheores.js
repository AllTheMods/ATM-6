onEvent('recipes', e => {
  mekanismMetals.forEach(type => e.remove({id: `alltheores:mek_processing/${type}/slurry/dirty`}))
});
