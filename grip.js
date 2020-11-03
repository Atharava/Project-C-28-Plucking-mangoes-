class grip{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 15
        }
        this.hold = Matter.Constraint.create(options);
        World.add(world, this.hold);
    }

    fly(){
        this.hold.pointB = null;
    }

    holdAgain(a){
        this.hold.pointB = a;
    }

    display(){
        var pointA = this.hold.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(5);
        line(pointA.x, pointA.y, pointB);
    }
}