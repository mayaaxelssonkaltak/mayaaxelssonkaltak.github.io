var Vunnit = {
    create: function(){
        //teckenstil
        var stil = { font: "50px Arial", fill: "#fff"};
        
        //texten gameover
        var text = this.add.text(game.world.centerX,
                   game.world.centerY, "Grattis du vann!", stil);
        text.anchor.setTo(0.5);
    
    }
};