class rock{
    constructor(x, y){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.stone = Bodies.circle(x, y, 20, options);
        this.stone.radius = 20;
        this.image = loadImage("pebble.png");
        World.add(world, this.stone);
    }
    display(){;
        imageMode(CENTER);
        image(this.image, this.stone.position.x, this.stone.position.y, 80, 80);
    }
}