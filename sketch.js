
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,200)
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,180,400,20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  
  background(180);
  
  //stroke("white");
  //textSize = 20;
  //fill("white");
  //text("Score: " + score,500,50);
  
  
  
  
  if(keyDown("space")&& monkey.y >= 160) {
    monkey.velocityY = -12;
  }

  if(ground.x < 0){
    ground.x = ground.width/2;  
  }
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  spawnBananas();

              //spawn obstacles on the ground
              spawnObstacles();             
  
  drawSprites();
  
  stroke("black");
  textSize = 20;
  fill("black");
  
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 500, 25)
}

function spawnObstacles(){
      if (frameCount %  200 === 0){
         var obstacle = createSprite(600,160,10,40);//local
         obstacle.velocityX = -6;
         obstacle.addImage(obstacleImage);
         obstacle.scale = 0.1;
       
      obstacle.lifetime = 300;

       //add each obstacle to the group
        obstacleGroup.add(obstacle);
      }    
}       
  
function spawnBananas() {
      //write code here to spawn the clouds
      if (frameCount % 80 === 0) {
        
            var banana = createSprite(600,120,40,10);//local
            banana.y = Math.round(random(20, 100));
            banana.addImage(bananaImage);
            banana.scale = 0.1;
            banana.velocityX = -3;

             //assign lifetime to the variable
            banana.lifetime = 200;

            //adjust the depth
            banana.depth = monkey.depth;
            monkey.depth = monkey.depth + 1;

            //add each cloud to the group
            bananaGroup.add(banana);
        
      }







}