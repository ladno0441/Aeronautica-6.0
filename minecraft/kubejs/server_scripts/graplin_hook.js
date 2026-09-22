ServerEvents.recipes(event => {
    event.remove({ mod: 'grapplemod' })
    
    event.shapeless('grapplemod:grappling_hook', [
        'minecraft:lead', 
        'minecraft:iron_pickaxe'
    ])
})
