
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstaclesGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  obstaclesGroup = createGroup();
  foodGroup = createGroup();

 
 score=0; 
}


function draw() {
background(255);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY=-12;
  }
    monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
    spawnBanana();
    spawnObstacles();
    
  
  obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  drawSprites();
  
}

function spawnBanana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
    banana.scale = 0.1;
    banana.lifetime = 200;
    
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    foodGroup.add(banana);
  }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,315,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6 
          
    obstacle.scale = 0.2;
    obstacle.lifetime = 0;
   //obstacle.y=310;
   
    obstaclesGroup.add(obstacle);
 }
}






