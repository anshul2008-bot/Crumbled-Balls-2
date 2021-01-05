
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var dustbinSide1;

function setup() {
  createCanvas(2400, 1000);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(1000, 900, 4000, 50);
  paper = new Paper(200, 100, 150);
  dustbinSide1 = new Dustbin(2123 , 670, 600, 400);

  Engine.run(engine);

}


function draw() {

  background("orange");
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbinSide1.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paper.body, paper.body.position, { x: 5000, y: -5000 });
     }
}