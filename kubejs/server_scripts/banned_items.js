events.listen('recipes', function (e) {
  //====== Ban List (Chunkloaders) ======
//  e.remove({
//	  output: [
//    'Mekanism:upgrade_anchor' //Already removed
//	  ]
//  })
  //====== Ban List (Greifing/Lag) ======
  e.remove({
	output: [
    'darkutils:ender_hopper' //Tics every second a item is dropped
//	  'rftoolsbuilder:builder' //Claim bypass
	]
  })
  //====== Ban List (CUSTOM) ======
  //To remove an minecraft item ingame find the item ID by using F3 + H 
  //Then hover over item you wish to remoave and add the item ID inside ''
  //If removing multiple items the prervious removed items needs an , at the end of the ''
//  e.remove({
//    output: [
//    ''
//	  ]
//  })
})