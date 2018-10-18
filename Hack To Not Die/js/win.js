var winState = {
  create: function() {
    //Congratulations text
    winLabel = game.add.text(80, 80, 'Congratulations!', {font: '50px Arial', fill: '#00ff00'});

    //Show the player their final score
    scoreLabel = game.add.text(game.world.centerX, game.world.centerY, 'Score: ' + game.global.score, {font: '45px Arial', fill: '#00ff00'});
    scoreLabel.anchor.setTo(0.5, 0.5);

    //Add a button to the scene
    button = game.add.button(game.world.centerX, game.world.centerY+100, 'button');
    button.anchor.setTo(0.5,0.5);
    button.onInputUp.add(this.restart); //When the button is clicked, run the 'restart' function
    text = game.add.text(button.x,button.y,'PLAY AGAIN');
    text.anchor.setTo(0.5,0.5);
  },

  restart: function() {
    game.state.start('menu'); //Go to the menu state
  }
};
