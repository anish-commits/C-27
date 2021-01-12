class Chain{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:20,
            stiffness:0.0004
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
        var pos = this.chain.bodyA.position
        var poss = this.chain.bodyB.position
        stroke("red");
        strokeWeight(5);
        line(pos.x,pos.y,poss.x,poss.y);
    }
}
