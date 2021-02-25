const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,groundObject;
var paper;
var engine;
var world;

function setup() {
	createCanvas(1200, 600);
	
	engine = Engine.create();
	world = engine.world;
	
	groundObject = new Ground(600, 600, width,20);
	dustbinObj = new Dustbin(1000,580);
	paper = new Paper(80, 450, 70, 70);
}

function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x : 130, y : -145});
	}
}