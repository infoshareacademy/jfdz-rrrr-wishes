var context;
var queue;
var WIDTH = 1024;
var HEIGHT = 600;
var stage;
var animation;
var deathAnimation;
var spriteSheet;
var enemyXPos = 100;
var enemyYPos = 100;
var enemyXSpeed = 1.5;
var enemyYSpeed = 1.75;
var score = 0;
var scoreText;
var gameTimer;
var gameTime = 0;
var timerText;
var gameFinished = false;
var crossHair;

window.onload = function() // start when everything is loaded on the website
{
    /*
     *      Set up the Canvas with Size and height
     *
     */
    var canvas = document.getElementById('myCanvas');// set canvas
    context = canvas.getContext('2d');//set environment
    context.canvas.width = WIDTH;// use constans from variable
    context.canvas.height = HEIGHT;// use constans from variable
    stage = new createjs.Stage("myCanvas");//create stage using the element of library createjs

    /*
     *      Set up the Asset Queue and load sounds
     *
     */
    queue = new createjs.LoadQueue(false);// we want to use our local files - not uploaded through ajax
    queue.installPlugin(createjs.Sound);//install plugin from create.js library
    queue.on("complete", queueLoaded, this);// if queue is complete we will use function queueLoaded (line 68)
    createjs.Sound.alternateExtensions = ["ogg"];// If our browser does not support mp3 we can use ogg music file

    /*
     *      Create a load manifest for all assets
     *
     */
    queue.loadManifest([
        {id: 'backgroundImage', src: 'assets/background.png'},
        {id: 'crossHair', src: 'assets/crosshair.png'},
        {id: 'shot', src: 'assets/shot.mp3'},
        {id: 'background', src: 'assets/countryside.mp3'},
        {id: 'gameOverSound', src: 'assets/gameOver.mp3'},
        {id: 'tick', src: 'assets/tick.mp3'},
        {id: 'deathSound', src: 'assets/die.mp3'},
        {id: 'cupidSpritesheet', src: 'assets/cupidSpritesheet.png'},
        {id: 'cupidDeath', src: 'assets/cupidDeath.png'},
    ]);
    queue.load();// load queue with all files

    /*
     *      Create a timer that updates once per second
     *
     */
    gameTimer = setInterval(updateTime, 1000);// it will update time every second

}


function queueLoaded(event)// it will take all loaded thing and set them on the screen.
{
    // Add background image
    var backgroundImage = new createjs.Bitmap(queue.getResult("backgroundImage"));//we create variable with bg image which is egual to achieved bg image from queue
    stage.addChild(backgroundImage);// than we add it to the stage as child element

    //Add Score
    scoreText = new createjs.Text("1UP: " + score.toString(), "36px Arial", "#FFF");// variable that is equal to new function, we translate the value to string and give it a style
    scoreText.x = 10;// set position x of score
    scoreText.y = 10;// set position y of score
    stage.addChild(scoreText);// add to stage our score variable

    //Ad Timer
    timerText = new createjs.Text("Time: " + gameTime.toString(), "36px Arial", "#FFF");
    timerText.x = 800;// set position x of timer
    timerText.y = 10;// set position y of timer
    stage.addChild(timerText);// add to stage our time variable

    // Play background sound
    createjs.Sound.play("background", {loop: -1});

    // Create cupid spritesheet
    spriteSheet = new createjs.SpriteSheet({
        "images": [queue.getResult('cupidSpritesheet')],//type id to select
        "frames": {"width": 198, "height": 117},
        "animations": {"flap": [0, 4]}// animation frames from image one to four
    });

    // Create cupid death spritesheet
    cupidDeathSpriteSheet = new createjs.SpriteSheet({
        "images": [queue.getResult('cupidDeath')],// take the image from loaded ones - type id to select
        "frames": {"width": 198, "height": 148},
        "animations": {"die": [0, 7, false, 1]}// animation frames from image one to seven, then false and one to break cycle
    });

    // Create cupid sprite
    createEnemy(); // in this place we call our function with our enemy-player (npc) - it will appear on the screen


    // Add ticker
    createjs.Ticker.setFPS(15);// define how fast we will go to animate our objects in game
    createjs.Ticker.addEventListener('tick', stage);// every 15 fps the stage will be refreshed
    createjs.Ticker.addEventListener('tick', tickEvent);// and on tick- the time of 15 fps- and it will cause tickEvent

    // Set up events AFTER the game is loaded

    window.onmousedown = handleMouseDown;// it's callback, and it will be updating the stage as the user will move with the mouse
}

function createEnemy()// we have the function that will create our enemy
{
    animation = new createjs.Sprite(spriteSheet, "flap");// we have to define the animation which is placed on 89 line
    animation.regX = 99;//we set the registration points of the object
    animation.regY = 58;//we set the registration points of the object
    animation.x = enemyXPos;//set the x position // based on global values
    animation.y = enemyYPos;//set the y position
    animation.gotoAndPlay("flap");//play animation
    stage.addChildAt(animation, 1);//add animated enemy to the stage // add child to object with index 1
}

function cupidDeath()//animation after the cupid death
{
    deathAnimation = new createjs.Sprite(cupidDeathSpriteSheet, "die");
    deathAnimation.regX = 99;
    deathAnimation.regY = 58;
    deathAnimation.x = enemyXPos;
    deathAnimation.y = enemyYPos;
    deathAnimation.gotoAndPlay("die");
    stage.addChild(deathAnimation);
}

function tickEvent()// we define tick event in line 116 and now we will use it to move our enemy
{
    //Make sure enemy bat is within game boundaries and move enemy cupid
    if (enemyXPos < WIDTH && enemyXPos > 0)// we make sure that our enemy is in the field FOR X POSITION
    {
        enemyXPos += enemyXSpeed;// it the enemy is in the field- we will give it a speed
    } else {
        enemyXSpeed = enemyXSpeed * (-1);// if it's out of the field we will multiply speed by negative one it will change the direction of the bat
        enemyXPos += enemyXSpeed;
    }
    if (enemyYPos < HEIGHT && enemyYPos > 0)// we make sure that our enemy is in the field FOR Y POSITION
    {
        enemyYPos += enemyYSpeed;
    } else {
        enemyYSpeed = enemyYSpeed * (-1);// the same like in the code above
        enemyYPos += enemyYSpeed;
    }

    animation.x = enemyXPos;// we define our enemy as animation, so we set that the enemyXPos is equal to animation position x
    animation.y = enemyYPos;// and so on the enemyXPos is equal to animation position y


}


function handleMouseDown(event) {

// This will only work if the game is not finished
    if (!gameFinished) {
        //Display CrossHair
        crossHair = new createjs.Bitmap(queue.getResult("crossHair"));
        crossHair.x = event.clientX - 45;
        crossHair.y = event.clientY - 45;
        stage.addChild(crossHair);
        createjs.Tween.get(crossHair).to({alpha: 0}, 1000);

        //Play Gunshot sound
        createjs.Sound.play("shot");

        //Increase speed of enemy slightly
        enemyXSpeed *= 1.05;
        enemyYSpeed *= 1.06;

        //Obtain Shot position
        var shotX = Math.round(event.clientX);
        var shotY = Math.round(event.clientY);
        var spriteX = Math.round(animation.x);
        var spriteY = Math.round(animation.y);

        // Compute the X and Y distance using absolte value
        var distX = Math.abs(shotX - spriteX);
        var distY = Math.abs(shotY - spriteY);

        // Anywhere in the body or head is a hit - but not the wings
        if (distX < 30 && distY < 59) {
            //Hit
            stage.removeChild(animation);
            cupidDeath();
            score += 100;
            scoreText.text = "1UP: " + score.toString();
            createjs.Sound.play("deathSound");

            //Make it harder next time
            enemyYSpeed *= 1.25;
            enemyXSpeed *= 1.3;

            //Create new enemy
            var timeToCreate = Math.floor((Math.random() * 3500) + 1);
            setTimeout(createEnemy, timeToCreate);

        } else {
            //Miss
            score -= 10;
            scoreText.text = "1UP: " + score.toString();

        }
    }
}

function updateTime() {
    gameTime += 1;
    if (gameTime > 10) {
        //End Game and Clean up
        timerText.text = "GAME OVER";
        stage.removeChild(deathAnimation);
        stage.removeChild(animation);
        stage.removeChild(crossHair);
        scoreText.text = score.toString() + " Points";
        createjs.Sound.removeSound("shot");
        createjs.Sound.removeSound("background");
        var si = createjs.Sound.play("gameOverSound");
        clearInterval(gameTimer);
        $("#alert").show();
        gameFinished = true; // game has finished
         }
    else {
        timerText.text = "Time: " + gameTime
        createjs.Sound.play("tick");
    }
}
$("button.exit").click(function() {
    $("#alert").hide();
    $( "canvas").hide();
    });







/*
$(function() {
    $("button.play").click(function(evt) {
        $("#alert").hide();
        $(hmtl).load();
        evt.preventDefault();
    })
});
    */

