var licens;
var elev;
var GameOver = {
    create: function(){
        
        //skapar textstilar
        var stil = { font: "50px Arial", fill: "#fff"};
        
        //Text och placeringen 
        var text = this.add.text(game.world.centerX, game.world.centerY, "GameOver", stil);
        text.anchor.setTo(0.5);
        
        //Licenser bilder
        //var lincens = this.add.text(game.world.centerX,420)
        
        //Namn och skola
        //var elev = this.add.text(game.world.centerX,500, "Maya Axelsson Kaltak Ullvigymnasiet", stil4);
        //elev.anchor.setTo(0.5);
    }
};