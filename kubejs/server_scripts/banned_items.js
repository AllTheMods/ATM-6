onEvent('recipes', e => {
  e.remove({
      output: [
          'darkutils:ender_hopper' //Tics every second a item is dropped
      ]
  })
})
