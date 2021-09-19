class Stone {
constructor (x, y, raidus) {
this.body = Bodies.ellipse(x, y, raidus);
World.add(World, this.body)
    };
    show() {
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
         ellipseMode(CENTER);
         ellipse(this.x, this.y, raidus);
         pop();
    };
};