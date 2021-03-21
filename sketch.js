
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
bob=createClass

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(300,350,50);
	bob2=new Bob(350,350,50);
	bob3=new Bob(400,350,50);
	bob4=new Bob(450,350,50);
	bob5=new Bob(500,350,50);
	
	  ground1 = new Ground(400,100,300,40);
	  sling1= new Suspender(bob1.body,ground1.body,);
	  sling2= new Suspender(bob2.body,ground1.body,);
	  sling3= new Suspender(bob3.body,ground1.body,);
	  sling4= new Suspender(bob4.body,ground1.body,);
	  sling5= new Suspender(bob5.body,ground1.body,);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  constructer(body1,body2,offsetX,offsetY)
  {this.offsetX=offsetY
	this.offsetX=offsetY
	var options={
		bodyA:body1
		bodyB:body2
		pointB:{x:this.offsetX y:this.offsetY}}
	}
this.rope=Contraint.create(options)
World.add(World,this.rope)
	}

  }
  display();
  {
	  var pointA=this.rope.bodyA.position;
	  var pointB=this.rope.bodyB.position;
	  strokeWeight(2);
	  var Anchor1X=pointA.x
	  var Anchor1Y=pointA.y
	  var Anchor2X=pointB.x+this.offsetX
	  var Anchor2Y=pointB.y+this.offset
  }
  drawSprites();
 
}



