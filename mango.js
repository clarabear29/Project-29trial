class mango{
    constructor(x, y) {
        var options = {
            
            isStatic:true,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
      
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(this.x, this.y, 20,20, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);

      }
      display(){
        var mangoPos=this.body.position;
        //var angle = this.body.angle;
        push();
        translate(mangoPos.x, mangoPos.y);
        //rotate(angle);
        rectMode(CENTER);
        fill(222,126,27);
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 20);
        ellipse(0,0,20,20);
        pop();
      }
}