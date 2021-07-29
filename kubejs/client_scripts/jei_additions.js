//#region ITEMS
onEvent(`jei.add.items`, e => {
  const eggs = ['dragonic', 'allthemodium', 'vibranium', 'unobtainium', 'soul_lava', 'netherite']
  eggs.forEach(type => {
    e.add([`resourcefulbees:${type}_bee_spawn_egg`])
  })

  e.add([`minecraft:dragon_egg`])
})
//#endregion
