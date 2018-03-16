
var GameState ={
    create: function(){
        this.add.sprite(0, 0, "background");
        var namn = prompt("Skriv en mening");
        this.bakfram(namn);
        console.log(namn);
     },
    bakfram: function(old){
        var ny = [];
        for(var i= old.length-1; i >= 0; i-- ){
            
            if(old [i]==" "){
                ny.push("_");
                }
            else {
                ny.push(old[i]);
        }
          
        }
        
        text= game.add.text(315, 200, "Nu är det: " + ny.join(""));
        
        text1= game.add.text(315, 250, "Innan var det: " + old);
        
        var restart = game.add.button(game.world.centerX, game.world.centerY, "restart");
        restart.anchor.setTo(1,0)
        
        var avslut = game.add.button(game.world.centerX, game.world.centerY, "end");
        restart.anchor.setTo(1,0)
        
        //Lägger till start av GameState
        restart.events.onInputUp.add(function(){
            this.state.start("GameStart", true, false);
        },this);
    
        avslut.events.onInputUp.add(function(){
            this.state.start("GameOver", true, false);
        },this);
    
    },
    
       
    
    //startom: function(){
        
    
    //update: function() {
    /*
        //bollrörelse i sidledd
        if(pil.right.isDown){
            boll.x += 2;
        }else if(pil.left.isDown){
            boll.x -= 2;
        }
        //läs av kollision 
        this.physics.arcade.collide(boll, [platform1, platform2]);
        
        //Bollhopp
        if (jumpBotton.isDown && boll.body.touching.down){
            boll.body.velocity.y = -500;
        }
        //lägger till start av GameOver
            if(boll.y > game.world.height){
                this.state.start("GameOVer", true, false);
            }
        */
        //}
        
};