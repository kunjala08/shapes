var movingRect;
var fixedRect;

function setup() {
  createCanvas(1200,800);
 movingRect= createSprite(400, 200, 50, 50);
 movingRect.shapeColor="red";

 fixedRect=createSprite(200,200,50,50);
 fixedRect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 && 
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  drawSprites();
}