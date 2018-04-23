var sprite;
var Bags;
var veggies;
var cursors;
var frukt = 0;
var skott = 53;
var scoreText;
var BagTime = 0;
var Bag;

var GameState = {
    
    //Bakgrund och scorevisare
    create: function(){
        game.stage.backgroundColor = '#2d2d2d';
        scoreText = game.add.text(32, 550, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });

    // När påsarna tar varorna
    veggies = game.add.group();
    veggies.enableBody = true;
    veggies.physicsBodyType = Phaser.Physics.ARCADE;

    // Antalet varor och placering
    for (var i = 0; i < 50; i++)
    {
        var c = veggies.create(game.world.randomX, Math.random() * 500, 'veggies', game.rnd.integerInRange(0, 36));
        c.name = 'veg' + i;
        c.body.immovable = true;
    }
    // Påsarna 
    Bags = game.add.group();
    Bags.enableBody = true;
    Bags.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 20; i++)
    {
        var b = Bags.create(0, 0, 'Bag');
        b.name = 'Bag' + i;
        b.exists = false;
        b.visible = false;
        b.checkWorldBounds = true;
        b.events.onOutOfBounds.add( this.resetBag, this);
    }

    sprite = game.add.sprite(400, 550, 'phaser');
    game.physics.enable(sprite, Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
        
      

},
    update: function (){
    console.log(frukt);
    game.physics.arcade.overlap(Bags, veggies, this.collisionHandler, null, this);

    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;
    
    //styrning av påsen    
    if (cursors.left.isDown)
    {
        sprite.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        sprite.body.velocity.x = 300;
    }
    
    //skjuter påsar
    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        
        this.fireBag(); 
        console.log(skott);
    }

},
    
    minskaskott: function () {
        skott--;
    },
    fireBag: function (){
         if (game.time.now > BagTime)
    {
        Bag = Bags.getFirstExists(false);

        if (Bag)
        {
            Bag.reset(sprite.x + 6, sprite.y - 8);
            Bag.body.velocity.y = -300;
            BagTime = game.time.now + 150;
            this.minskaskott();
        }
        }
        
},
     resetBag: function(Bag){
            Bag.kill();
},
        
    //poängvisare 
    collisionHandler:function(Bag, veg){
            
            Bag.kill();
            veg.kill();
            frukt++;
            scoreText.text = 'score: ' + frukt;
            skott--;
        
        // om man fångar 5 varor = level2
        if (frukt >= 5 ){
            game.state.start('Level2');
        }
        // om man slösar sina 50 skott utan att fånga antalet varor = GameOver
        if (skott <= 0 ){
            game.state.start('GameOver');
        }
            
            }
};
