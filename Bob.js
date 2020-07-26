class Bob{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.1
        }
        this.body = Matter.Bodies.circle(x,y,diameter);
        this.diameter=diameter;
        Matter.World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        ellipse(0, 0, this.diameter*2);
        pop();
    }
}