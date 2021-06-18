onEvent('item.modification', e => {
    e.modify('immersivepetroleum:bitumen', item => {
        item.setBurnTime(1600)
    })
})
