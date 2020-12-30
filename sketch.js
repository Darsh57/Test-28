var boy;
var constraint;
var launchingForce = 100;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(590, 550);
	ground = new Ground(400, 690, 800, 20);

	mango1 = new Mango(580, 300, 50);
	mango2 = new Mango(590, 200, 50);
	mango3 = new Mango(500, 275, 50);
	mango4 = new Mango(700, 290, 50);
	mango5 = new Mango(650, 250, 50);

	stone = new Stone(95, 545, 20);
	constraint = new Launcher(stone.body, {x:95, y:545});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(155);
  image(boyImg, 59, 465, 200, 300)
	tree.display();
	ground.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	stone.display();
	constraint.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);

  drawSprites();
 
}

function detectCollision(lstone, lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body, false);
	}
}

function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    constraint.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:95, y:545})
		constraint.attach(stone.body);
	}
}