var playerspeed = 300
var levelState = {
  create: function() {
    //Add a background
    game.add.sprite(0,0,'bg');

    //Some basic controls for the game
    this.controls = game.input.keyboard.addKeys(
      {
        'Up':Phaser.KeyCode.W,
        'Down':Phaser.KeyCode.S,
        'Left':Phaser.KeyCode.A,
        'Right':Phaser.KeyCode.D,
        'Use':Phaser.KeyCode.SPACEBAR,
      }
    );

    //Add any other objects that need to exist
    //Setting up the Player
    player = game.add.sprite(50,300,'player')
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.anchor.setTo(0.5,0.5)
    //Setting up the Enemies

    //Add any display elements (score, lives etc)
  },

  update: function() {  //This function runs every frame
    this.CollisionDetect();
    this.PlayerMove();
  //Other code
  },

  GainPoint: function() {
    game.global.score++;  //Increase the score

    if(game.global.score >= 10) { //Does the player have enough points to win?
      this.Win();
    }
  },

  Win: function() {
    game.state.start('win');  //Go to the win state
  },

  CollisionDetect: function(){
  //  game.physics.arcade.Damage(stab, player, this.bounce, null, this);
  },

  PlayerMove: function(){
      if(this.controls.Up.isDown && this.controls.Left.isDown){
        player.body.velocity.y = -playerspeed;
        player.body.velocity.x = -playerspeed;

      }else if(this.controls.Up.isDown && this.controls.Right.isDown){
        player.body.velocity.y = -playerspeed;
        player.body.velocity.x = playerspeed;

      }else if(this.controls.Down.isDown && this.controls.Right.isDown){
        player.body.velocity.y = playerspeed;
        player.body.velocity.x = playerspeed;

      }else if(this.controls.Down.isDown && this.controls.Left.isDown){
        player.body.velocity.y = playerspeed;
        player.body.velocity.x = -playerspeed;

      }else if(this.controls.Up.isDown){
        player.body.velocity.y = -playerspeed;
        player.body.velocity.x = 0;

      }else if(this.controls.Down.isDown){
        player.body.velocity.y = playerspeed;
        player.body.velocity.x = 0;

      }else if(this.controls.Right.isDown){
        player.body.velocity.x = playerspeed;
        player.body.velocity.y = 0;

      }else if(this.controls.Left.isDown){
        player.body.velocity.x = -playerspeed;
        player.body.velocity.y = 0;
      }else{
        player.body.velocity.y = 0;
        player.body.velocity.x = 0;
      }

  }

};
