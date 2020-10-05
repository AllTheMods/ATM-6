events.listen("player.chat", function(event) {
    if (event.message.indexOf("{item}") != -1) {
        event.cancel()
        event.server.scheduleInTicks(1, function(callbackEvent) {
            var mainItem = event.player.mainHandItem;
            var tooltip = text.of( "User: " + event.player.name +
            "\nName: " + mainItem.name +
            "\nID: " + mainItem.id.toString()) +
            "\nLore: " + mainItem.lore +
            "\nEnchantments: " + mainItem.enchantments +
            "\nNBT: " + mainItem.nbt;
            event.server.tell(text.of(event.player.name + ": " +mainItem.name + " " + mainItem.count + "x").hover(text.of(tooltip)).blue());
        });
    }
});