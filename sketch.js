const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg, treeImg, bgImg;

var boy;
var ground, groundSprite, tree;
var grip1, rock1;
var m1, m2, m3, m4;

var gameState;
	var held = 1;
	var threw = 0;

// var argument;
// 	var TRUE = 0;
// 	var FALSE = 1;

function preload(){
	boyImg = loadImage("boy.png");
	treeImg = loadImage("Tree.png");
	bgImg = loadImage("backyard.jpg")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	gameState = held;

	tree = createSprite(550, 350, 50, 200);
	tree.addImage(treeImg);
	tree.scale = 0.7;
	tree.depth = 0;

	// argument = FALSE;

	groundSprite = createSprite(400, 650 , 800, 20, {isStatic: true});
	ground = rect(400, 650 , 800, 20, {isStatic: true});

	rock1 = new rock(164, 489);

	boy = createSprite(100, 515, 100, 100);
	boy.addImage(boyImg);
	boy.scale = 0.5;
	boy.depth = -1;

	m1 = new mango(410, 180);
	Matter.Body.setStatic(m1.fruit, true);

	m2 = new mango(512, 115);
	Matter.Body.setStatic(m2.fruit, true);

	m3 = new mango(560, 239);
	Matter.Body.setStatic(m3.fruit, true);

	m4 = new mango(689, 128);
	Matter.Body.setStatic(m4.fruit, true);

	grip1 = new grip(rock1.stone, {x: 164, y: 489});

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(bgImg);
	// background(255);

	// console.log("x: "+mouseX);
	// console.log("y: "+mouseY);

	// if(argument === TRUE){
	// 	Matter.Body.setPosition(rock1.stone, {x: mouseX, y: mouseY});
	// }else{
	// 	argument = FALSE;
	// }

	ifTouching(rock1, m1);
	ifTouching(rock1, m2);
	ifTouching(rock1, m3);
	ifTouching(rock1, m4);

	findMousePos();

	drawSprites();

	

	m1.display();
	m2.display();
	m3.display();
	m4.display();

	grip1.display();

	rock1.display();
}

function mouseDragged(){
	// argument = TRUE;
	if(gameState === held){
		Matter.Body.setPosition(rock1.stone, {x: mouseX, y: mouseY});
	}
}

function mouseReleased(){
	// argument = FALSE;
	grip1.fly();
	gameState = threw;
}

function keyPressed(){
	if(keyCode === 32 && gameState === threw){
		grip1.holdAgain({x: 164, y: 489});
		Matter.Body.setPosition(rock1.stone, {x: 164, y: 489});
		Matter.Body.setVelocity(rock1.stone, {x: 0, y: 0});
		gameState = held;
	}
}

function ifTouching(lstone, lmango){
	x1 = lstone.stone.position.x;
	y1 = lstone.stone.position.y;

	x2 = lmango.fruit.position.x;
	y2 = lmango.fruit.position.y;

	var distance = int(dist(x1, y1, x2, y2));
		if(distance<=100){
			Matter.Body.setStatic(lmango.fruit, false);
		}

	var argument;
	argument = 1;
	if(keyWentDown(32) && argument === 1){
		print(distance);
		argument = 0;
		argument = 1;
	}

}

function findMousePos(){
	var argument;
	argument = 1;
	if(keyWentDown(32) && argument === 1){
		print("{"+"x: "+ mouseX + ", y: "+ mouseY+"}");
		argument = 0;
		argument = 1;
	}
}