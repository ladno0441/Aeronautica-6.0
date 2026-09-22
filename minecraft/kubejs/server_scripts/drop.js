LootJS.modifiers(event => {
    event.addBlockModifier('drivebywire:controller_hub')
        .addLoot(LootEntry.of('drivebywire:controller_hub'))
    event.addBlockModifier('drivebywire:tweaked_controller_hub')
        .addLoot(LootEntry.of('drivebywire:tweaked_controller_hub'))
})