class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    mouseDragged () {
        Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY})
        }

    fly (){
        this.chain.bodyA = null;
        }
}
