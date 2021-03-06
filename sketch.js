const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload(){
	
//}

function setup() {
	createCanvas(1400, 580);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Ball to hit these
	Hexa = new HexaHitter(200, 200);
	sling = new Sling(Hexa.body, {x: 250, y: 250});

	//Support1
	standLeft = new Stand(600, 350, 240, 20);
	//bottomLane
	block1 = new Block(600, 290);
	block2 = new Block(633, 290);
	block3 = new Block(666, 290);
	block4 = new Block(567, 290);
	block5 = new Block(534, 290);
	//2ndLane
	block6 = new Block(616, 260);
	block7 = new Block(650, 260);
	block8 = new Block(584, 260);
	block9 = new Block(551, 260);
	//3rdLane
	block10 = new Block(600, 230);
	block11 = new Block(633, 230);
	block12 = new Block(567, 230);
	//4th Lane
	block13 = new Block(616, 190);
	block14 = new Block(584, 190);
	//Top Lane
	block15 = new Block(600, 160);

	//StandRight
	standRight = new Stand(1000, 350, 240, 20);
	//BottomLane
	block21 = new Block(1000, 290);
	block22 = new Block(1033, 290);
	block23 = new Block(1066, 290);
	block24 = new Block(967, 290);
	block25 = new Block(934, 290);
	//2ndLane
	block26 = new Block(1016, 260);
	block27 = new Block(1050, 260);
	block28 = new Block(984, 260);
	block29 = new Block(951, 260);
	//3rdLane
	block30 = new Block(1000, 230);
	block31 = new Block(1033, 230);
	block32 = new Block(967, 230);
	//4th Lane
	block33 = new Block(1016, 190);
	block34 = new Block(984, 190);
	//Top Lane
	block35 = new Block(1000, 160);

	Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("lightblue");

  Hexa.display();
  sling.display();

  standLeft.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  standRight.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
}

function mouseDragged(){
	Matter.Body.setPosition(Hexa.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if(keyCode == 32){
		sling.attach(Hexa.body);
	}
}