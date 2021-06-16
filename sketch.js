
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var b1;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

    
	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,150,230,20);
	bob1 = new bob(320,375,40)
	bob2 = new bob(360,375,40)
	bob3 = new bob(400,375,40)
	bob4 = new bob(440,375,40)
	bob5 = new bob(480,375,40)

	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body, 0, 0)
	rope4=new rope(bob4.body,roofObject.body, 40, 0)
	rope5=new rope(bob5.body,roofObject.body, 80, 0)

	b1=createButton("dance");
	b1.mousePressed(dance);
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  keyPressed();
  
 
}

function keyPressed(){
	if(keyCode == UP_ARROW ){
		Matter.Body.applyForce(bob1.body,bob1.body.position , { x:-50,y:-45 } );
	 }

}


function dance(){
	bob1.body.position.x=random(320,360)
    bob2.body.position.x=random(440,480)
	bob3.body.position.x=random(400,440)
	bob4.body.position.x=random(320,440)
	bob5.body.position.x=random(320,480)

}

