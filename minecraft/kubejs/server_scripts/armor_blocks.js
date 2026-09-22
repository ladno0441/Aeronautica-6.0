ServerEvents.recipes(event => {
    //Light block
    event.recipes.create.compacting(
        [
            's_a_b:lightsteelblock',
        ],
        [
            '2x createbigcannons:steel_ingot',
        ]
    ).heated()
    //Steel block
    event.recipes.create.compacting(
        [
            's_a_b:steelblock',
        ],
        [
            's_a_b:lightsteelblock',
            'createbigcannons:steel_ingot',
        ]
    ).heated()
    //Dauble block
    event.recipes.create.compacting(
        [
            's_a_b:doublesteelblock',
        ],
        [
            's_a_b:steelblock',
            'createbigcannons:steel_ingot',
        ]
    ).heated()
    //Dauble block recipe 2
    event.recipes.create.compacting(
        [
            's_a_b:doublesteelblock',
        ],
        [
            '2x s_a_b:lightsteelblock',
        ]
    ).heated()
    //Hard block
    event.recipes.create.compacting(
        [
            's_a_b:hardsteelblock',
        ],
        [
            's_a_b:doublesteelblock',
            's_a_b:steelblock',
        ]
    ).heated()
    //Hard block recipe 2
    event.recipes.create.compacting(
        [
            's_a_b:hardsteelblock',
        ],
        [
            '3x s_a_b:lightsteelblock',
            'createbigcannons:steel_ingot',
        ]
    ).heated()
})