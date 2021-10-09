onEvent('recipes', e => {
  removeRecipeByID(e, [
    'projectred-exploration:copper_block',
    'projectred-exploration:silver_block',
    'projectred-exploration:tin_block'
  ])
})
