EntityEvents.checkSpawn(event => {
  if (event.entity.type.startsWith('scguns:')) {
    event.cancel()
  }
})