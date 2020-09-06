var fixedRect,movingRect,GameObject1,GameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,80);
fixedRect.shapeColor="green";
movingRect=createSprite(200,400,80,30);
movingRect.shapeColor="green";
GameObject1=createSprite(100,100,50,50);
GameObject1.shapeColor="blue";
GameObject2=createSprite(300,200,60,60);
GameObject2.shapeColor="magenta"
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
if(isTouching(movingRect,GameObject2)){
movingRect.shapeColor="indigo";
GameObject2.shapeColor="silver";
}

  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2){
    return true;
    }
    else{
    return false;
  }
}