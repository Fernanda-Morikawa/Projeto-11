var ship, ship_img;
var fundo, fundo_img;

function preload(){
ship_img = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
fundo_img = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  fundo = createSprite(200, 200);
  fundo.addImage("Fundin", fundo_img);
  ship = createSprite(200, 220);
  ship.addAnimation("na", ship_img);
  ship.scale = 0.4;
  
}

function draw() {
  background("blue");
    drawSprites();

 
}
