const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world,engine;
var ground;
var paperBall, dustBin1, dustBin2, dustBin3


function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,380,1600,20);

  paperBall = new Paper(110,50,10,40);
  dustBin1 = new Dustbin(1400,295,150,150);
  dustBin1.scale =0.5;
  dustBin2 = new Dustbin(1320,295,20,150);
  dustBin3 = new Dustbin(1470,295,20,70);

	Engine.run(engine);
  
}

function draw() {
	background(224,174,109);
	Engine.update(engine);
	strokeWeight(4);
  
	ground.display();
  paperBall.display();
  dustBin1.display();
  //dustBin2.display();
  //dustBin3.display();
  
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:30, y:-38});
  }
}


