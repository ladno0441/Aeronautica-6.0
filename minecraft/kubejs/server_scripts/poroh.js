ServerEvents.recipes(event => {
    // Жесткое удаление оригинального рецепта по его ID
    event.remove({ id: 'create:milling/charcoal' })
    event.remove({ id: 'create:milling/coal' })
})

