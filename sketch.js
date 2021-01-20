const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var wall1,ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1 = new Ground(400,100,300,30);
	ball1 = new Bob(300,300,50);
	ball2 = new Bob(350,300,50);
	ball3 = new Bob(400,300,50);
	ball4 = new Bob(450,300,50);
	ball5 = new Bob(500,300,50);
	rope1 = new Rope(ball1.body,{x:300,y:100});
	rope2 = new Rope(ball2.body,{x:350,y:100});
	rope3 = new Rope(ball3.body,{x:400,y:100});
	rope4 = new Rope(ball4.body,{x:450,y:100});
	rope5 = new Rope(ball5.body,{x:500,y:100});
	//rope1 = new Rope(ball1.body,130);
	/*rope2 = new Rope(ball2.body,)
	rope3 = new Rope(ball3.body,wall1.body)
	rope4 = new Rope(ball4.body,wall1.body)
	rope5 = new Rope(ball5.body,wall1.body)*/
	//rope();
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	})
	Engine.run(engine);
	//var chain1=Constraint.create(options)
   // World.add(world,chain1)
}


function draw() {
 // rectMode(CENTER);
  background("lavender");
  wall1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //mouseDragged();
 // mouseReleased();
 // keyPressed();
  //drawLine();
 // Pressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:105,y:-105});
	}
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    rope1.fly();
   // gameState = "launched";
}


function drawLine(){
	strokeWeight(3)
	line(wall1.body.position.x-100,wall1.body.position.y,ball1.body.position.x,ball1.body.position.y-25)
	strokeWeight(3)
	line(wall1.body.position.x-50,wall1.body.position.y,ball2.body.position.x,ball2.body.position.y-25)
	strokeWeight(3)
	line(wall1.body.position.x,wall1.body.position.y,ball3.body.position.x,ball3.body.position.y-25)
	strokeWeight(3)
	line(wall1.body.position.x+50,wall1.body.position.y,ball4.body.position.x,ball1.body.position.y-25)
	strokeWeight(3)
	line(wall1.body.position.x+100,wall1.body.position.y,ball5.body.position.x,ball5.body.position.y-25)
}

function rope(){
	
}