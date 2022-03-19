class Player{
    constructor(x,y,width,height){
        var options={
          frcition:0,
          density:0.001,
          frictionAir:0.098
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
        this.image=loadImage("0(1).png");
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    moveLeft(){
        Matter.Body.setVelocity(this.body,{x:-4,y:0});
    }
    moveRight(){
        Matter.Body.setVelocity(this.body,{x:4,y:0});
    }
    moveUp(){
        Matter.Body.setVelocity(this.body,{x:0,y:-4});
    }
    moveBottom(){
        Matter.Body.setVelocity(this.body,{x:0,y:4});
    }
}