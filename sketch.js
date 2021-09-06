var fixedRec, movingRec;
var rec1,rec2;
function setup() {
  createCanvas(800,400);
  fixedRec = createSprite(200,300); 
  movingRec = createSprite(600,300);
  

}

function draw() {
  background(255,255,255);
  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;
  if(movingRec.x - fixedRec.x<= movingRec.width/2+fixedRec.width/2 &&
    fixedRec.x-movingRec.x<= fixedRec.width/2 + movingRec.width/2 &&
    movingRec.y - fixedRec.y<= movingRec.height/2+fixedRec.height/2 &&
    fixedRec.y-movingRec.y<= fixedRec.height/2 + movingRec.height/2
    ){
    movingRec.shapeColor = "Red";
    fixedRec.shapeColor = "Red"; 
  }
  else {
    movingRec.shapeColor = "Green";
    fixedRec.shapeColor = "Green"; 
  }
  drawSprites();
}