var GameStart = {
    //Bilder som används i spelet
    preload: function(){
        this.load.image('background', 'assets/bakgrund.png');
        this.load.image('slutet', 'assets/slutet.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('phaser', 'assets/shopwoman.png');
        this.load.image('Bag', 'assets/bag.png');
        this.load.spritesheet('veggies', 'assets/fruitnveg32wh37.png', 32, 32);

    },
    //Bakgrunden 
    create: function(){
        this.add.tileSprite(0, 0, 950, 800, "background");
        
        //var namn = this.add.text(game.world.centerX, 200, "spelet", {fontSize: "55px", fill: "#fff" });
        //namn.anchor.setTo(0.5)
     
        //Startknappen
        var button = game.add.button(game.world.centerX, game.world.centerY, "play");
        button.anchor.setTo(0.5)
        //Lägger till start av GameState
        button.events.onInputUp.add(function(){
            this.state.start("GameState", true, false);
        },this);
    }
};