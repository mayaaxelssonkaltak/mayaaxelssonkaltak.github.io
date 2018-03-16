var GameOver = {
    create: function(){
        this.add.sprite(0, 0, "background");
        
    //textobjekt
    var stil = {font: "50px Arial", fill: "#fff"};
    var text = this.add.text(game.world.centerX, game.world.centerY, "Tack för ditt besök välkommen åter", stil);
        text.anchor.setTo(0.5);
    }
};