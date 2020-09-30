class Sling {
    constructor(A,B){
        var constraint_options={
            bodyA: A.body,
            bodyB: B.body,
            length: 100,
            stiffness: 0.1 
        }
        

        this.body = Constraint.create(constraint_options);
        World.add (world,this.body);
    }

    display(){
        var pointA=this.body.bodyA.position;
        var pointB=this.body.bodyB.position; 
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
