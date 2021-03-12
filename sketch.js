const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

function setup(){
	createCanvas(1000,600);

	engine=Engine.create();
	world=engine.world;

	roof=new Roof(500, 50, 700, 50);

	bob1=new Bob(300,300, 50,50, {density:10});
	bob2=new Bob(400, 300, 50, 50);
	bob3=new Bob(500, 300, 50, 50);
	bob4=new Bob(600, 300, 50, 50);
	bob5=new Bob(700, 300, 50, 50);

	// rope1=new Chain(bob1.body, {x:200,y:100}); 
	slingshot1=new SlingShot(bob1.body,{x:300, y:55});
	slingshot2=new SlingShot(bob2.body,{x:400, y:55});
	slingshot3=new SlingShot(bob3.body,{x:500, y:55});
	slingshot4=new SlingShot(bob4.body,{x:600, y:55});
	slingshot5=new SlingShot(bob5.body,{x:700, y:55});

	Engine.run(engine);
}

function draw(){
	background(220);

	fill("grey");
	roof.display();

	slingshot1.display();
	slingshot2.display();
	slingshot3.display();
	slingshot4.display();
	slingshot5.display();

	fill("#FF00FE");
	stroke("grey");
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	// rope1.display();	

	Engine.update(engine);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-1500,y:0.5});
	}
}