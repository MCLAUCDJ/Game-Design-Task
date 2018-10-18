var bootState = {
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);  //Start the physics engine
    game.state.start('load'); //Load the load state
  }
};
