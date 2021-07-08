var sea
var shipImage
var ship
var seaImage
function preload(){
 shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(1000,1200);
  ship = createSprite(200,200,100,100)
ship.addAnimation("ship",shipImage)


sea = createSprite(400,400)
sea.addImage("sea",seaImage)

}

function draw() {
  background("blue");
 drawSprites();
}



