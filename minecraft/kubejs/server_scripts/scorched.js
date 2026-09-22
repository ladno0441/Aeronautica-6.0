ServerEvents.recipes(event => {

  event.remove({ mod: 'scguns' })
  event.remove({ mod: 'scgunsww1' })
  event.remove({ id: "createdeco:pressing/coins/iron_coin"})
  event.remove({ id: "minecraft:iron_hull_from_stonecutting"})

  // ==========================================
  // 1. CRAFT GUNS (MECHANICAL CRAFTING)
  // ==========================================

  //mauser
  event.shaped(
    'scgunsww1:mauser',
    [ 
      'FF ',
      'ACB',
      'D E'
    ], 
    {
      A:'scguns:firing_unit',
      B:'scguns:stone_gun_barrel',
      C:'scguns:gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:gun_magazine',
      F:'minecraft:iron_ingot'
    }
  )
  //luger
  event.shaped(
    'scgunsww1:luger',
    [ 
      'AF ',
      'DCB',
      'E  '
    ], 
    {
      A:'scguns:firing_unit',
      B:'scguns:stone_gun_barrel',
      C:'scguns:gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:gun_magazine',
      F:'minecraft:iron_ingot'
    }
  )
  //browning
  event.shaped(
    'scgunsww1:browning_pistol',
    [ 
      'AFF',
      'DCB',
      'E  '
    ], 
    {
      A:'scguns:firing_unit',
      B:'scguns:stone_gun_barrel',
      C:'scguns:gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:gun_magazine',
      F:'minecraft:iron_ingot'
    }
  )
  //nagant
  event.shaped(
    'scgunsww1:nagant',
    [ 
      'FC ',
      'AEB',
      'D  '
    ], 
    {
      A:'scguns:firing_unit',
      B:'scguns:stone_gun_barrel',
      C:'scguns:gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:gun_magazine',
      F:'minecraft:iron_ingot'
    }
  )
  //mosin
  event.recipes.create.mechanical_crafting(
    'scgunsww1:mosin_nagant',
    [ 
      'FEG ',
      'ACBB',
      'D G ' 
    ], 
    {
      A:'scguns:firing_unit',
      B:'scguns:heavy_gun_barrel',
      C:'scguns:heavy_gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:iron_gun_frame',
      F:'minecraft:iron_ingot',
      G:'#minecraft:planks'
    }
  )
  //fedorov
  event.recipes.create.mechanical_crafting(
    'scgunsww1:fedorov_rifle',
    [ 
      'FEG ',
      'ACBB',
      'D G ' 
    ], 
    {
      A:'scguns:rapid_firing_unit',
      B:'scguns:heavy_gun_barrel',
      C:'scguns:heavy_gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:iron_gun_frame',
      F:'minecraft:iron_ingot',
      G:'#minecraft:planks'
    }
  )
  //Shotgun
  event.shaped(
    'scgunsww1:sawnoff_shotgun',
    [ 
      '  B',
      'ACB',
      'D  '
    ], 
    {
      A:'scguns:firing_unit',
      B:'scguns:stone_gun_barrel',
      C:'scguns:gun_parts',
      D:'scguns:gun_grip'
    }
  )
  //Combat Winchester M1897
  event.recipes.create.mechanical_crafting(
    'scgunsww1:combat_winchester_shotgun',
    [ 
      'FEF',
      'ACB',
      'D G' 
    ], 
    {
      A:'scguns:firing_unit',
      B:'scguns:heavy_gun_barrel',
      C:'scguns:heavy_gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:iron_gun_frame',
      F:'minecraft:iron_ingot',
      G:'#minecraft:planks'
    }
  )
  //fedorov Automat
  event.recipes.create.mechanical_crafting(
    'scgunsww1:fedorov_avtomat',
    [ 
      'FEG ',
      'ACBB',
      'D H ' 
    ], 
    {
      A:'scguns:rapid_firing_unit',
      B:'scguns:heavy_gun_barrel',
      C:'scguns:heavy_gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:iron_gun_frame',
      F:'minecraft:iron_ingot',
      G:'#minecraft:planks',
      H:'scguns:gun_magazine'
    }
  )
  //Machine Gun
  event.recipes.create.mechanical_crafting(
    'scgunsww1:madsen',
    [ 
      ' F  ',
      'AECB',
      'D   ' 
    ], 
    {
      A:'scguns:rapid_firing_unit',
      B:'scguns:heavy_gun_barrel',
      C:'scguns:heavy_gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:iron_gun_frame',
      F:'scguns:gun_magazine'
    }
  )
  //Grenade Launcher
  event.recipes.create.mechanical_crafting(
    'scgunsww1:mosin_grenade_launcher',
    [ 
      'EBBB',
      'ACFF',
      'D   ' 
    ], 
    {
      A:'scguns:firing_unit',
      B:'scguns:heavy_gun_barrel',
      C:'scguns:heavy_gun_parts',
      D:'scguns:gun_grip',
      E:'scguns:iron_gun_frame',
      F:'#minecraft:planks'
    }
  )

  // ==========================================
  // 2. Crafts Components (SHAPED)
  // ==========================================

  //Magazine
  event.shaped(
    'scguns:gun_magazine',
    [
      'A  ',
      'BB ', 
      'AA '   
    ],
    {
      A: 'create:andesite_alloy',
      B: 'minecraft:iron_ingot'
    }
  )
  //Heavy Gun Barrel
  event.shaped(
    'scguns:heavy_gun_barrel',
    [
      '  A',
      ' AA', 
      'AA '   
    ],
    {
      A: 'createbigcannons:steel_ingot',
    }
  )
  //Gun Barrel
  event.shaped(
    'scguns:gun_barrel',
    [
      '  A',
      ' A ', 
      'A  '   
    ],
    {
      A: 'createbigcannons:steel_ingot',
    }
  )
  //Heavy Gun Parts
  event.recipes.create.sequenced_assembly(
    [
      Item.of('scguns:heavy_gun_parts', 2)
    ],
    'createbigcannons:steel_block',
    [
      event.recipes.create.cutting('scguns:unfinished_heavy_gun_parts', 'scguns:unfinished_heavy_gun_parts'), 
      event.recipes.create.pressing('scguns:unfinished_heavy_gun_parts', 'scguns:unfinished_heavy_gun_parts'),
      event.recipes.create.pressing('scguns:unfinished_heavy_gun_parts', 'scguns:unfinished_heavy_gun_parts'),
      event.recipes.create.pressing('scguns:unfinished_heavy_gun_parts', 'scguns:unfinished_heavy_gun_parts')
    ]
  ).transitionalItem('scguns:unfinished_heavy_gun_parts').loops(1)
  //Gun Parts
  event.recipes.create.sequenced_assembly(
    [
      Item.of('scguns:gun_parts', 2)
    ],
    'minecraft:iron_block',
    [
      event.recipes.create.cutting('scguns:unfinished_gun_parts', 'scguns:unfinished_gun_parts'), 
      event.recipes.create.pressing('scguns:unfinished_gun_parts', 'scguns:unfinished_gun_parts'),
      event.recipes.create.pressing('scguns:unfinished_gun_parts', 'scguns:unfinished_gun_parts'),
      event.recipes.create.pressing('scguns:unfinished_gun_parts', 'scguns:unfinished_gun_parts')
    ]
  ).transitionalItem('scguns:unfinished_gun_parts').loops(1)
  //Firing Unit
  event.shaped(
    'scguns:firing_unit',
    [
      '  C',
      ' A ', 
      'B  '   
    ],
    {
      A: 'create:andesite_alloy',
      B: 'minecraft:iron_ingot',
      C: 'minecraft:iron_nugget'
    }
  )
  //Rapid_Firing_Unit
  event.shaped(
    'scguns:rapid_firing_unit',
    [
      '  C',
      ' AD', 
      'BD '   
    ],
    {
      A: 'create:andesite_alloy',
      B: 'minecraft:iron_ingot',
      C: 'minecraft:iron_nugget',
      D: 'createbigcannons:steel_scrap'
    }
  )
  // Gun Grip
  event.shaped(
    'scguns:gun_grip',
    [
      'AB ',
      'A  ', 
      '   '   
    ],
    {
      A: '#minecraft:planks',
      B: 'minecraft:iron_nugget'
    }
  )
  //Stone Gun Barrel
  event.shaped(
    'scguns:stone_gun_barrel',
    [
      '  A',
      ' A ', 
      'A  '   
    ],
    {
      A: 'minecraft:stone',
    }
  )
  //Iron Gun Frame
  event.shaped(
    'scguns:iron_gun_frame',
    [
      ' A ',
      'A A', 
      'AAA'   
    ],
    {
      A: 'minecraft:iron_ingot',
    }
  )

  // ==========================================
  // 3. Crafts AMMO (Sequenced_Assembly)
  // ==========================================

  //Compact_copper_round
  event.shaped(
    'scguns:unfinished_compact_copper_round',
    [
      " A ",
      " B ",
      " C "
    ],
    {
      A: 'scguns:standard_bullet',
      B: 'createbigcannons:gunpowder_pinch',
      C: 'scguns:small_copper_casing'
    }
  )
  event.recipes.create.pressing(CreateItem.of('scguns:compact_copper_round', 0.5),'scguns:unfinished_compact_copper_round')

  event.recipes.create.sequenced_assembly(
      [
        Item.of('scguns:compact_copper_round')
      ],
      'scguns:small_copper_casing',
      [
        event.recipes.create.deploying('scguns:unfinished_compact_copper_bound', ['scguns:small_copper_casing', 'createbigcannons:gunpowder_pinch']),
        event.recipes.create.deploying('scguns:unfinished_compact_copper_bound', ['scguns:unfinished_compact_copper_bound', 'scguns:standard_bullet']),
        event.recipes.create.pressing('scguns:compact_copper_round', 'scguns:unfinished_compact_copper_bound')
      ]
  ).transitionalItem('scguns:unfinished_compact_copper_bound').loops(1)
  //Advanced Round
  event.recipes.create.sequenced_assembly(
      [
        Item.of('scguns:advanced_round')
      ],
      'scguns:medium_brass_casing',
      [
        event.recipes.create.deploying('scguns:unfinished_advanced_round', ['scguns:unfinished_advanced_round', 'createbigcannons:gunpowder_pinch']),
        event.recipes.create.deploying('scguns:unfinished_advanced_round', ['scguns:unfinished_advanced_round', 'scguns:hardened_bullet']),
        event.recipes.create.pressing('scguns:unfinished_advanced_round', 'scguns:unfinished_advanced_round')
      ]
  ).transitionalItem('scguns:unfinished_advanced_round').loops(1)
  //Shotgun Shell
  event.shaped(
    'scguns:unfinished_shotgun_shell',
    [
      " A ",
      " B ",
      " C "
    ],
    {
      A: 'minecraft:paper',
      B: 'scguns:buckshot',
      C: 'scguns:small_copper_casing'
    }
  )
  event.recipes.create.pressing(CreateItem.of('scguns:shotgun_shell', 0.5), 'scguns:unfinished_shotgun_shell')

  event.recipes.create.sequenced_assembly(
      [
        Item.of('scguns:shotgun_shell')
      ],
      'scguns:small_copper_casing',
      [
        event.recipes.create.deploying('scguns:unfinished_shotgun_shelll', ['scguns:small_copper_casing', 'scguns:buckshot']),
        event.recipes.create.deploying('scguns:unfinished_shotgun_shelll', ['scguns:unfinished_shotgun_shelll', 'minecraft:paper']),
        event.recipes.create.pressing('scguns:shotgun_shell', 'scguns:unfinished_shotgun_shelll')
      ]
  ).transitionalItem('scguns:unfinished_shotgun_shelll').loops(1)
  //He Grenade Round
  event.recipes.create.sequenced_assembly(
      [
        Item.of('scguns:he_grenade_round')
      ],
      'scguns:large_brass_casing',
      [
        event.recipes.create.deploying('scguns:unfinished_he_grenade_round', ['scguns:unfinished_he_grenade_round', 'createbigcannons:nitropowder']),
        event.recipes.create.deploying('scguns:unfinished_he_grenade_round', ['scguns:unfinished_he_grenade_round', 'createbigcannons:impact_fuze']),
        event.recipes.create.pressing('scguns:unfinished_he_grenade_round', 'scguns:unfinished_he_grenade_round')
      ]
  ).transitionalItem('scguns:unfinished_he_grenade_round').loops(1)

  // ==========================================
  // 4. Crafts AMMO Components(Sequenced_Assembly)
  // ==========================================

  //Small Copper Casing
  event.recipes.create.compacting('6x scguns:small_copper_casing', 'create:copper_sheet')
  event.recipes.create.deploying([
    '8x scguns:small_copper_casing',
    CreateItem.of('4x scguns:small_copper_casing', 0.2)
  ],
  [
    'create:copper_sheet',
    'scguns:small_casing_mold'     
  ]
  )
  //Medium Brass Casting
  event.recipes.create.compacting('4x scguns:medium_brass_casing', 'create:brass_sheet')
  event.recipes.create.deploying([
    '6x scguns:medium_brass_casing',
    CreateItem.of('2x scguns:medium_brass_casing', 0.2)
  ],
  [
    'create:brass_sheet',
    'scguns:medium_casing_mold'     
  ]
  )
  //Large Brass Casting
  event.recipes.create.deploying(
    '4x scguns:large_brass_casing', 
  [
    'create:brass_sheet',
    'scguns:large_casing_mold'     
  ]
  )
  //Slug Casing
  event.recipes.create.compacting('6x scgunsww1:slug_casing', 'createaddition:zinc_sheet')
  event.recipes.create.deploying([
    '8x scgunsww1:slug_casing',
    CreateItem.of('4x scgunsww1:slug_casing', 0.2)
  ],
  [
    'createaddition:zinc_sheet',
    'scguns:small_casing_mold'     
  ]
  )
  //Buckshot
  event.shaped(
    '4x scguns:buckshot',
    [
      'BAA',
      'AA ', 
      '   '   
    ],
    {
      A: 'scguns:standard_bullet',
      B: 'minecraft:gunpowder'
    }
  )
  //Hardened_bullet
  event.recipes.create.pressing('scguns:hardened_bullet', 'createbigcannons:steel_scrap')
  event.recipes.create.deploying([
    'scguns:hardened_bullet', 
    CreateItem.of('scguns:hardened_bullet', 0.5)
  ],
  [
    'createbigcannons:steel_scrap',
    'scguns:bullet_mold'     
  ]
  )
  //standard_bullet
  event.recipes.create.pressing('scguns:standard_bullet', 'minecraft:iron_nugget')
  event.recipes.create.deploying([
    'scguns:standard_bullet', 
    CreateItem.of('scguns:standard_bullet', 0.5)
  ],
  [
    'minecraft:iron_nugget',
    'scguns:bullet_mold'     
  ]
  )

  // ==========================================
  // 5. Attachmens(Shaped)
  // ==========================================

  //Reflex Sight
  event.shaped(
    'scguns:reflex_sight',
    [
      'AB ',
      'CC ', 
      '   '   
    ],
    {
      A: '#c:glass_panes',
      B: 'minecraft:redstone',
      C: 'createbigcannons:steel_scrap'
    }
  )
  //Medium Scope
  event.shaped(
    'scguns:medium_scope',
    [
      '   ',
      'ABA', 
      'CDC'   
    ],
    {
      A: '#c:glass_panes',
      B: 'minecraft:redstone',
      C: 'createbigcannons:steel_scrap',
      D: 'createbigcannons:steel_ingot'
    }
  )
  //Long Scope
  event.shaped(
    'scguns:long_scope',
    [
      '   ',
      'ABA', 
      'CDC'   
    ],
    {
      A: '#c:glass_blocks',
      B: 'minecraft:redstone',
      C: 'createbigcannons:steel_scrap',
      D: 'createbigcannons:steel_ingot'
    }
  )
  //Light Stock
  event.shaped(
    'scguns:light_stock',
    [
      '   ',
      'CAB', 
      'CA '   
    ],
    {
      A: 'minecraft:stick',
      B: 'createbigcannons:steel_ingot',
      C: '#minecraft:planks'
    }
  )
  //Weighted Stock
  event.shaped(
    'scguns:weighted_stock',
    [
      '   ',
      'BAA', 
      'BB '   
    ],
    {
      A: 'createbigcannons:steel_ingot',
      B: '#minecraft:planks'
    }
  )
  //Wooden Stock
  event.shaped(
    'scguns:wooden_stock',
    [
      '   ',
      'BBA', 
      'BB '   
    ],
    {
      A: 'createbigcannons:steel_ingot',
      B: '#minecraft:planks'
    }
  )
  //Bump Stock
  event.shaped(
    'scguns:bump_stock',
    [
      '   ',
      'BCA', 
      'BB '   
    ],
    {
      A: 'createbigcannons:steel_ingot',
      B: '#minecraft:planks',
      C: 'scguns:heavy_gun_parts'
    }
  )
  //Speed Mag
  event.shaped(
    'scguns:speed_mag',
    [
      '   ',
      'B  ', 
      'CA '   
    ],
    {
      A: '#minecraft:wool',
      B: 'minecraft:iron_ingot',
      C: 'scguns:gun_magazine'
    }
  )
  //Extended Mag
  event.shaped(
    'scguns:extended_mag',
    [
      '   ',
      'AA ', 
      'BB '   
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'scguns:gun_magazine'
    }
  )
  //Vertical Grip
  event.shaped(
    'scguns:vertical_grip',
    [
      '   ',
      'ABA', 
      ' C '   
    ],
    {
      A: 'createbigcannons:steel_scrap',
      B: 'minecraft:stick',
      C: 'minecraft:iron_nugget'
    }
  )
  //Light Grip
  event.shaped(
    'scguns:light_grip',
    [
      '   ',
      'ACA', 
      ' B '   
    ],
    {
      A: 'createbigcannons:steel_scrap',
      B: '#minecraft:planks',
      C: 'minecraft:iron_nugget'
    }
  )
  //Laser Sight
  event.shaped(
    'scguns:laser_sight',
    [
      '   ',
      'ABA', 
      '   '   
    ],
    {
      A: 'createbigcannons:steel_scrap',
      B: 'minecraft:redstone'
    }
  )
  //Muzzle Brake
  event.shaped(
    'scguns:muzzle_brake',
    [
      '  A',
      ' B ', 
      'A  '   
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:iron_nugget'
    }
  )
  //Advanced Silencer
  event.shaped(
    'scguns:advanced_silencer',
    [
      '  A',
      ' B ', 
      'A  '   
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:sponge'
    }
  )
  //Extended Barrel
  event.shaped(
    'scguns:extended_barrel',
    [
      '   ',
      ' B ', 
      'A  '   
    ],
    {
      A: 'createbigcannons:steel_ingot',
      B: 'scguns:gun_barrel'
    }
  )
  //Silencer
  event.shaped(
    'scguns:silencer',
    [
      '  A',
      ' B ', 
      'A  '   
    ],
    {
      A: 'minecraft:iron_ingot',
      B: '#minecraft:wool'
    }
  )

  // ==========================================
  // 6. Grenade(Shaped)
  // ==========================================

  //Grenade
  event.shaped(
    'scguns:grenade',
    [
      '   ',
      'CBC', 
      ' A '   
    ],
    {
      A: 'minecraft:stick',
      B: 'minecraft:flower_pot',
      C: 'scguns:buckshot'
    }
  )
  //Stun Grenade
  event.shaped(
    'scguns:stun_grenade',
    [
      '   ',
      'CBC', 
      ' A '   
    ],
    {
      A: 'minecraft:stick',
      B: 'minecraft:glass_bottle',
      C: 'minecraft:glowstone_dust'
    }
  )
  //Molotov Cocktail
  event.shaped(
    'scguns:molotov_cocktail',
    [
      'AB ',
      'DC ', 
      '   '   
    ],
    {
      A: 'minecraft:string',
      B: 'minecraft:iron_nugget',
      C: 'minecraft:glass_bottle',
      D: 'minecraft:blaze_powder'
    }
  )
  
  // ==========================================
  // 7. Blank Mold(stonecutting)
  // ==========================================
  
  event.stonecutting('scguns:small_casing_mold', 'scguns:blank_mold')
  event.stonecutting('scguns:medium_casing_mold', 'scguns:blank_mold')
  event.stonecutting('scguns:large_casing_mold', 'scguns:blank_mold')
  event.stonecutting('scguns:bullet_mold', 'scguns:blank_mold')
  event.shaped(
    'scguns:blank_mold',
    [
      ' A ',
      'AAA', 
      ' A '   
    ],
    {
      A: 'createbigcannons:steel_ingot'
    }
  )
  
  // ==========================================
  // 8. Ammo Box(shaped)
  // ==========================================

  //Pistol Ammo Box
  event.shaped(
    'scguns:pistol_ammo_box',
    [
      'AAA',
      'ABA', 
      'ACA'   
    ],
    {
      A: 'minecraft:paper',
      B: 'minecraft:red_dye',
      C: 'minecraft:iron_ingot'
    }
  )
  //Rifle Ammo Box
  event.shaped(
    'scguns:rifle_ammo_box',
    [
      'AAA',
      'ABA', 
      'ACA'   
    ],
    {
      A: 'minecraft:paper',
      B: 'minecraft:white_dye',
      C: 'minecraft:iron_ingot'
    }
  )
  //Shotgun Ammo Box
  event.shaped(
    'scguns:shotgun_ammo_box',
    [
      'AAA',
      'ABA', 
      'ACA'   
    ],
    {
      A: 'minecraft:paper',
      B: 'minecraft:green_dye',
      C: 'minecraft:iron_ingot'
    }
  )
  //Rocket Ammo Box
  event.shaped(
    'scguns:rocket_ammo_box',
    [
      'AAA',
      'B B', 
      'BBB'   
    ],
    {
      A: 'minecraft:iron_nugget',
      B: 'minecraft:iron_ingot'
    }
  )
  
  // ==========================================
  // 9. Items(shaped)
  // ==========================================

  //Bandage
  event.shaped(
    'scguns:enchanted_bandage',
    [
      'AB ',
      'CD ', 
      '   '   
    ],
    {
      A: 'minecraft:golden_apple',
      B: 'minecraft:lapis_lazuli',
      C: 'minecraft:paper',
      D: 'minecraft:dandelion'
    }
  )
})