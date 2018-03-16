var GameStart = {
    preload: function(){
        this.load.image("background", "assets/rosa.png");
        this.load.image("play", "assets/playbutt.png");
        this.load.image("end", "assets/endknapp.png");
        this.load.image("restart", "assets/restartknapp.png");
    },
    create: function(){
        this.add.sprite(0, 0,"background");
        
        var namn = this.add.text(game.world.centerX, 200, "Ordvändaren", {fontSize: "55px", fill: "#fff" });
        namn.anchor.setTo(0.5)
     
        var button = game.add.button(game.world.centerX, game.world.centerY, "play");
        button.anchor.setTo(0.5)
        
        //Lägger till start av GameState
        button.events.onInputUp.add(function(){
            this.state.start("GameState", true, false);
        },this);
    }
};