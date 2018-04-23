var game = new Phaser.Game(1000, 700, Phaser.AUTO);

game.state.add("GameStart", GameStart);
game.state.add("GameState", GameState);
game.state.add("Level2", Level2);
game.state.add("GameOver", GameOver);
game.state.add("Vunnit", Vunnit);
game.state.start("GameStart");





// 
// 