var boy,boyImg, cave,caveImg, Dino,DinoImg, TreeStumpGroup;
var TreeStumpImg,TreeStump; //GameOverSound, BackgroundSound;
var PLAY = 0 ; 
var gameState = "play";
var score ; 
var Ground ;

function preload(){
boyImg= loadImage("Boy.gif") 
caveImg= loadImage("Cave.jpg") 
TreeStumpImg= loadImage("Tree Stump.png") 
DinoImg= loadImage("Dino.jpg")
GameOverSound= loadSound("Game Over Sound.wav")
}
function setup() { 
  createCanvas(700,600);
  cave = createSprite(300,300)
  cave.addImage("cave",caveImg)
  cave.velocityX =1
  

  TreeStumpGroup = new Group()

  boy = createSprite(90,410,20,50);
  boy.addImage("boy",boyImg)
  boy.scale=0.2
  
  
  Dino = createSprite(50,410,20,50)
  Dino.addImage("dino",DinoImg)
  Dino.scale=0.1
  
  score = 0
  
  Ground=createSprite(200,550,1000,20)


}

function draw() {
  background("black")
  if(gameState=="end"){
    fill("yellow")
    textSize(20)
    text("GAME OVER",250,300)
    
     }
  if(gameState=="play"){
  boy.velocityX=boy.velocityX+0.4
  //Dino.velocityX =Dino.velocityX+0.2  


  if(cave.x > 400){
    cave.x = 300;
  }

  if(keyDown("space") && boy.y >= 155){
    boy.velocityY = -5
  } 

  if(boy.isTouching(TreeStumpGroup)||boy.isTouching(Dino)){
    boy.destroy
    gameState = "end"
  }
  boy.velocityY = boy.velocityY + 0.8
  score = score + Math.round(getFrameRate()/60)
  
  spawnTreeStumps()

  }
  
  Ground.visible = false  
  boy.collide(Ground)
  drawSprites()


}


function spawnTreeStumps(){
if(frameCount % 200==0){
TreeStump=createSprite(random(100),500,0,10,10)
TreeStump.velocityX=2
TreeStump.addImage(TreeStumpImg)
TreeStump.lifetime=800
TreeStumpGroup.add(TreeStump)
TreeStump.depth=1
TreeStump.scale=0.4
boy.depth=1 

}   


}