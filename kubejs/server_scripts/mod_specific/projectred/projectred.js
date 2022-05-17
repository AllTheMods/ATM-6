onEvent('recipes', e => {
  projectRedMetals.forEach(metal => {
    removeRecipeByID(e, [
      `projectred-exploration:${metal}_block`,
      `projectred-exploration:${metal}_from_block`,
    ])
  });
})
