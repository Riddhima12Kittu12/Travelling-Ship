var sea ,seaImage;
var ship;

function preload(){
  seaImage = loadImage("sea.png")

  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup() {
  createCanvas(400,400);
  
  //create a sea sprite
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.scale = 0.3
  sea.velocityX = +4;

//create a ship sprite
  ship = createSprite(140,200,20,50);
  ship.addAnimation("running", ship_running);
  ship.scale = 0.2;

  
}

function draw() {
  background("white")
 console.log(sea.x)

  
  if (sea.x > 600){
    sea.x = width/2;
  }
  
  drawSprites();
}
