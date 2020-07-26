class Rope{
    constructor(body1,body2,offsetA,offsetB){
        this.offsetX=offsetA;
        this.offsetY=offsetB;

        var options={
         bodyA:body1,
         bodyB:body2,
         length:100,
         stiffness:1,
         pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
     push();
     stroke("blue");
     line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x+this.offsetX,this.chain.bodyB.position.y+this.offsetY)
     pop();
    }
}