const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, body;
var bg, player,forms,rules;
gameState="FORM";
var timer = 100; 
var timer2,x,y;

function preload() {
 
  
  bg= loadImage("bg.jpeg");
  bishop = loadImage("11 (1).png");
  rook = loadImage("9 (1).png");
  knight = loadImage("10 (1).png");
  queen = loadImage("0(1).png");
 
  
}

function setup() {
  createCanvas(600,600);

  form = new Form();
  engine=Engine.create();
  world=engine.world;
  rules = new Rule();

  timer2 = new Timer();
  player = new Player(0,0,50,50);
}

function draw() {
  background(bg);
  

  if (gameState==="FORM"){
    form.display();
  }
  if (gameState==="RULE"){
    rules.display();
  }
  if (gameState==="PLAY"){
    Engine.update(engine);
    engine.world.gravity.y=0;
    form.greeting.hide();

    timer2.display();
    if (mouseIsPressed){
      x=mouseX;
      y=mouseY;
      console.log(x,y);
      if (inBlackTile()){
        Matter.Body.setPosition(player.body,{x:0, y:0})
      }else{
        Matter.Body.setPosition(player.body,{x:x, y:y})
      }
    }
    player.display();
  }
  drawSprites()
}
function inBlackTile(){
  if((x>=290 && x<=375 && y>=75 && y<=150) || 
  (x>=70 && x<=145 && y>=150 && y<=225) || 
  (x>=525 && x<=600 && y>=300 && y<=370)|| 
  (x>=0 && x<=70 && y>=370 && y<=450) || 
  (x>=370 && x<=450 && y>=450 && y<=525)|| 
  (x>=145 && x<=220 && y>=525 && y<=600)) 
    {
     return true; 
    } else 
    { 
      return false; 
    }
}
function inYellowTile(){
   if((x>=73 && x<=147 && y>=0 && y<=74) || 
  (x>=225 && x<=298 && y>=152 && y<=224) || 
  (x>=450 && x<=524 && y>=78 && y<=147)|| 
  (x>=0 && x<=72 && y>=226 && y<=299) || 
  (x>=149 && x<=223 && y>=379 && y<=449)|| 
  (x>=376 && x<=447 && y>=304 && y<=374) ||
  (x>=526 && x<=600 && y>=453 && y<=525 )) 
    {
     return true; 
    } else 
    { 
      return false; 
    }
}
