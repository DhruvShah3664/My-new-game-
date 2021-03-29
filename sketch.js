var nobita, gian;
var ground;
var obstcales, obstcalesGroup;
var nobitaAni;

function preload(){
  nobitaAni = loadAnimation("Nobita_1.png", "Nobita_2.png");
}
  


function setup(){
    createCanvas(600, 300);

    nobita  = createSprite(100, 250, 15, 50);
    nobita.addAnimation(nobitaAni);

    gian = createSprite(50, 245, 50, 100);
    
    ground  = createSprite(200, 295, 1500, 10);
    ground.shapeColor = "Brown";

    obstcalesGroup = new Group();
}

function draw() {
  background(0);

    nobita.collide(ground);
    gian.collide(ground);

  ground.velocityX = -3;

    if(ground.x <0){
    ground.x = ground.width/2;
    }

 if (keyDown("space")){
  nobita.velocityY = -6;
  }
  nobita.velocityY = nobita.velocityY+0.6;
 
  spawnObstcales();

 drawSprites();
}

function spawnObstcales(){
    if(frameCount%50 === 0){
        obstcales = createSprite(500,Math.round(random(100, 280)), 30, 10);
        obstcales.velocityX = -5;
        obstcales.lifetime = 100;

       obstcalesGroup.add(obstcales)
    }
}