const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone, rubberball;
var ground

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(100,100,100,50);

    ground = new Ground(1000,600,10000,50)
    
    stone = new Stone(200,400,100,100);
    
    rubberball=new Rubberball(1000,500,75);
    

    
}

function draw(){
    background("lightBLUE");
    Engine.update(engine);
	hammer.display();
    stone.display();
    ground.display();
    
    rubberball.display();

    

    
}