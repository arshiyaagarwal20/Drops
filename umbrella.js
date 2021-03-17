class umbrella{
    constructor(x,y){
       var options={
        'isStatic':true 
        
        }
        this.umbrella=Bodies.circle(x,y,options);
        World.add(world,this.umbrella)

    this.image=loadImage(WalkingFrame/walking_1.png)
    } 
   

    display(){
 push()
imageMode(CENTER);
image(this.image,0,0);
pop()
 
        
    }
}