ServerEvents.recipes(event => {
    
    event.remove({ id: "vista:hollow_cassette"})
    
    event.shaped(
    'vista:hollow_cassette',
    [ 
      '   ',
      'ABA',
      '   '
    ], 
    {
      A:'glaidens_radio_mod:circuit_board',
      B:'glaidens_radio_mod:cassette',
    }
  )
})