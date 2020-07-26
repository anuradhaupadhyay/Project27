const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Bobs
	bob1=new Bob(400,350,15);
	Body.setMass(bob1.body,30);
	bob2=new Bob(430,350,15);
	Body.setMass(bob2.body,30);
	bob3=new Bob(370,350,15);
	Body.setMass(bob3.body,30);
	bob4=new Bob(460,350,15);
	Body.setMass(bob4.body,30);
	bob5=new Bob(340,350,15);
	Body.setMass(bob5.body,30);

	//roof
	roof=new Roof(400,150,300,50);

	//ropes
	chain1=new Rope(bob1.body,roof.body,0,0);
	chain2=new Rope(bob2.body,roof.body,30,0);
	chain3=new Rope(bob3.body,roof.body,-30,0);
	chain4=new Rope(bob4.body,roof.body,60,0);
	chain5=new Rope(bob5.body,roof.body,-60,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  drawSprites();

  //Display
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
 upArrow();
}



function upArrow(){
	if(keyCode===UP_ARROW){
		var options={
			x:-0.1,
			y:-3
		}
		Body.applyForce(bob5.body,bob5.body.position,options);
		keyCode=DOWN_ARROW;
	}
}