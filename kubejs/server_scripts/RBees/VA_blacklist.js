//priority: 900

//removing Valid Apiary tags
events.listen('item.tags', e => {
  e.remove(VA, blacklistVA)
})

events.listen('block.tags', e => {
  e.remove(VA, blacklistVA)
})