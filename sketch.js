const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var i=0;
var maxDrops=100;
drops=[];
function preload(){
    
}

function setup(){
var canvas=createCanvas(1200,600);
engine = Engine.create();
    world = engine.world;   
    
   //this.array.push(position);
    for(i=0;i<maxDrops;i++){
drops.push(new drop(random(0,1200),random(0,600)))

umbrella1=new umbrella(300,300);

        
}
}
function draw(){
background("black");
   for(var i=0;i<maxDrops;i++)
  {
    drops[i].display()
    drops[i].updateY()
 umbrella.display();

  } 
}
