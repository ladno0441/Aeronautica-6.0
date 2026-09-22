ServerEvents.recipes(event => {
    event.remove({ id: 'railways:stonecutting/riveted_locometal' })
    //railways:riveted_locometal Block recipe 1
    event.recipes.create.compacting(
        [
            'railways:riveted_locometal',
        ],
        [
            '2x s_a_b:lightsteelblock',
            'createbigcannons:steel_ingot',
        ]
    ).heated()
    //railways:riveted_locometal Block recipe 2
    event.recipes.create.compacting(
        [
            'railways:riveted_locometal',
        ],
        [
            's_a_b:doublesteelblock',
            'createbigcannons:steel_ingot',
        ]
    ).heated()
})