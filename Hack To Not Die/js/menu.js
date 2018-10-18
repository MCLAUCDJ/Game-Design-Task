var menuState = {
  create: function() {
    //Add some title text
    title = game.add.text(game.world.centerX, game.world.centerY-100, '', {font: '50px Arial', fill: '#00ff00'});
    title.anchor.setTo(0.5, 0.5);

    //Add some help text (controls)
    help = game.add.text(80, game.world.centerY+50, '', {font: '25px Arial', fill: '#ffffff'});
    helpText = ' \n'; // Help Text
    helpText += ''; //Help Text
    help.text = helpText;

    instructions = game.add.text(80, game.world.height-80, '', {font: '25px Arial', fill: '#ffffff'});

    //Add a button to the menu
    button = game.add.button(game.world.centerX, game.world.centerY, '');
    button.anchor.setTo(0.5,0.5);
    button.onInputUp.add(this.start); //When the button is clicked, run the start function
    text = game.add.text(button.x,button.y,'');  //Some text for the button
    text.anchor.setTo(0.5,0.5);
  },

  start: function() {
    //game.global.score = 0;  //Reset the score
    game.state.start('level');
  },
};
