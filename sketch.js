var boy_running,boy_collided, boy
var rock
var squirrel
var bird
var backgroundImage

function preload() {
boy_running = loadAnimation("boyrunning1.png","boyrunning2.png","boyrunning3.png");
boy_collided = loadAnimation("boy_collided.png")

rock = loadImage("rock.jpg");
squirrel = loadImage("squirrel.jpg");
bird = loadImage("bird.png");
backgroundImage = loadImage("Background.jpg");
}


function setup () {
   createCanvas(600,200);
   boy = createSprite(50,180,20,50);

   boy.addAnimation("running", boy_running);
   boy.addAnimation("collided", boy_collided);

}

function draw() {
  background(backgroundImage);
  text(mouseX + ',' + mouseY, 20, 30);
  drawSprites();
}