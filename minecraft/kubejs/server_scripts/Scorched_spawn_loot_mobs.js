EntityEvents.spawned(event => {
    const entity = event.entity;
    if (entity.isLiving()) {

        let mainHand = entity.getMainHandItem();
        if (mainHand.mod === 'scorched_guns') {
            entity.setMainHandItem('minecraft:air');
        }

        let offHand = entity.getOffHandItem();
        if (offHand.mod === 'scorched_guns') {
            entity.setOffHandItem('minecraft:air');
        }
    }
})