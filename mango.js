class mango{
    constructor(x, y){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.fruit = Bodies.circle(x, y, 50, options);
        this.fruit.radius = 50;
        this.image = loadImage("Mango.png");
        World.add(world, this.fruit);
    }
    display(){;
        imageMode(CENTER);
        image(this.image, this.fruit.position.x, this.fruit.position.y, 130, 150);
        // this.image.depth = this.image.depth+1;
    }
}