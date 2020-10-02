
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var bob1,bob2,bob3,bob4;
var roof,rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 =new Bob(230,350)
bob2=new Bob(230,350)
roof=new Roof(230,100,200,20)
bob3=new Bob(230,350)
bob4 = new Bob(230,350)
bob5 =new Bob(230,350)
	Engine.run(engine);
  rope= new Rope(bob2.body,{x:220,y:100})
  rope2= new Rope(bob1.body,{x:240,y:100})
  rope3= new Rope(bob3.body,{x:280,y:100})
  rope4= new Rope(bob4.body,{x:180,y:100})
  rope5= new Rope(bob5.body,{x:140,y:100})
}


function draw() {
  rectMode(CENTER);
  background(225);
  bob1.display();
 bob2.display();
 roof.display();
 bob3.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display()
 drawSprites();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
		console.log("working..")
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-45})
	

    }
}



