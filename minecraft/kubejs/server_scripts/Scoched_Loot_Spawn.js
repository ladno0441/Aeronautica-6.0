LootJS.modifiers((event) => {
    event.addTableModifier(/.*/)
         .removeLoot(Ingredient.of('@scguns'));
});