var loadState = {
  preload: function() {
    //Add a line of text to the screen
    loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

    //Load all the assets
    //(the size and number of assets will slow this process down)
    game.load.image('bg', 'assets/background.png');
    game.load.spritesheet('player', 'assets/player.png', 32, 48)


  },

  create: function() {
    game.state.start('level'); //Load the menu
  }

};
