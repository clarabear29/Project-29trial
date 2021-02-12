
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground1;
var tree1, treeImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload()
{
	//treeImg=loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new ground (800,680,1600,50);
	tree1=new ground(1450,350,80,250);
	//tree1=createSprite(1050,350,100,350);
	//tree1.addImage(treeImg);
	mango1=new mango(1500,350);
	mango2=new mango(1400,330);
	mango3=new mango(1440,250);
	mango4=new mango(1480,220);
	mango5=new mango(1425,300);
	mango6=new mango(1475,290);
	mango7=new mango(1456,309);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(154,233,237);
  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  
  drawSprites();
 
}



