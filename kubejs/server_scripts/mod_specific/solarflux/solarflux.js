onEvent('recipes', e => {
  e.shapeless('solarflux:sp_custom_allthemodium', 'solarflux:sp_6').id('kubejs:solar_conversion/tier_6')
  e.shapeless('solarflux:sp_custom_vibranium', 'solarflux:sp_7').id('kubejs:solar_conversion/tier_7')
  e.shapeless('solarflux:sp_custom_unobtainium', 'solarflux:sp_8').id('kubejs:solar_conversion/tier_8')
  e.shaped('2x solarflux:sp_custom_allthemodium', ['PPP', 'SAS', 'SDS'], {
    S: 'solarflux:sp_5',
    A: '#forge:storage_blocks/allthemodium',
    D: '#forge:storage_blocks/diamond',
    P: 'solarflux:photovoltaic_cell_4'
  }).id(`kubejs:solarflux/allthemodium_solar`)
  e.shaped('2x solarflux:sp_custom_vibranium', ['PPP', 'SAS', 'SAS'], {
    S: 'solarflux:sp_custom_allthemodium',
    A: '#forge:storage_blocks/vibranium',
    P: 'solarflux:photovoltaic_cell_5'
  }).id(`kubejs:solarflux/vibranium_solar`)
  e.shaped('2x solarflux:sp_custom_unobtainium', ['PPP', 'SAS', 'SAS'], {
    S: 'solarflux:sp_custom_vibranium',
    A: '#forge:storage_blocks/unobtainium',
    P: 'solarflux:photovoltaic_cell_6'
  }).id(`kubejs:solarflux/unobtainium_solar`)

  utils.listOf(['1', '2', '3', '4', '5', 'custom_allthemodium', 'custom_vibranium', 'custom_unobtainium']).forEach(solar => e.shapeless(`solarflux:sp_${solar}`, `solarflux:sp_${solar}`))

  modifyShaped(e, 'solarflux:mirror', 3, ['GGG', 'III'], {
    G: '#forge:glass',
    I: '#forge:ingots'
  })
  modifyShaped(e, 'solarflux:sp_1', 1, ['MMM', 'ILI', 'III'], {
    M: 'solarflux:mirror',
    L: '#forge:storage_blocks/lapis',
    I: '#forge:ingots/iron'
  })
})
