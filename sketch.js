var leftWall,rightWall;
var leftWallGroup,rightWallGroup;
var topWall;
var ball,ball_img;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var wallSpeed = -4;

function preload(){
  ball_img = loadImage("redBall.png");
}

function setup(){
  createCanvas(400,600);

  ball = createSprite(250,595,20,20);
  ball.addImage("ball",ball_img)
  ball.scale = 0.14;

  leftWallGroup = new Group();
  rightWallGroup = new Group();

  topWall = createSprite(200,10,400,20);
  topWall.visible = false;

  ball.setCollider("circle",0,0,75);
  ball.debug = false
}
function draw(){
  background(255);

  if(gameState === PLAY){
    
    if(keyDown(LEFT_ARROW)){
      ball.x -= 4;
    }

    if(keyDown(RIGHT_ARROW)){
      ball.x += 4;
    }
      spawnWalls();
      if(ball.isTouching(leftWallGroup)){
      ball.collide(leftWallGroup);
      }
      if(ball.isTouching(rightWallGroup)){
      ball.collide(rightWallGroup);
      }
  }
  drawSprites();
}

function spawnWalls(){

    if(frameCount% 20===0){
      var randomWidth = random(50,300);
      leftWall = createSprite(randomWidth/2,600,randomWidth,20);
      leftWall.shapeColor = "black";
      leftWall.velocityY = wallSpeed;

      rightWall = createSprite(randomWidth+40+(400-40-randomWidth)/2,leftWall.y,400-40-randomWidth,20);
      rightWall.shapeColor = "black";
      rightWall.velocityY = leftWall.velocityY;

      leftWall.lifetime = 200;
      rightWall.lifetime = 200;

     leftWall.depth = rightWall.depth;
     ball.depth = rightWall.depth;
     
      leftWallGroup.add(leftWall);
      rightWallGroup.add(rightWall);

    }
}