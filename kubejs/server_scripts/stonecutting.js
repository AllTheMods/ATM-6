onEvent('recipes', e => {
  function stonecutting(inputs, formatter) {
    inputs.forEach(metal => {
      let output = formatter(metal);
      e.stonecutting(output, `#forge:storage_blocks/${metal}`)
        .id(`kubejs:stonecutting/${output.replace(':', '/')}`)
    });
  }

  stonecutting(immersiveMetals.concat(immersiveAlloys), metal => `immersiveengineering:storage_${metal}`)
  stonecutting(mekanismMetals.concat(mekanismAlloys), metal => `mekanism:block_${metal}`)
  stonecutting(thermalMetals.concat(thermalAlloys), metal => `thermal:${metal}_block`)
  stonecutting(createMetals.concat(createAlloys), metal => `create:${metal}_block`)
  stonecutting(atoMetals, metal => `alltheores:${metal}_block`)
  stonecutting(projectRedMetals, metal => `projectred-exploration:${metal}_block`)
  stonecutting(tmechworksMetals, metal => `tmechworks:${metal}_block`)
  stonecutting(iceAndFireMetals, metal => `iceandfire:${metal}_block`)
  stonecutting(tconstructMetals, metal => `tconstruct:${metal}_block`)
  stonecutting(eidolonMetals, metal => `eidolon:${metal}_block`)
})
