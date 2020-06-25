
var wall,thickness;
var bullet,speed,weight ; 


function setup() {
  createCanvas(1600,400);
  speed = random (223,321); 
  weight = random (30,52);
  thickness = random (10,83); 
  bullet = createSprite (50,200,100,5);
  bullet.shapeColor = ('white')
  wall = createSprite (1200,200,thickness,200);
  wall.shapeColor = color (80,80,80);
  bullet.velocityX = speed ; 
 
}

function draw() {
  background(255,255,255);  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    
    bullet.velocityX  = 0 ; 
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

    if (damage>10){
      wall.shapeColor = color(0,255,0);
    }
    if (damage<10){
      wall.shapecolor = (255,0,0);
    }



  }
  drawSprites();
}