class ground {
    constructor(x,y,width,height){
        va
        options = {
            isStatic: true
        }
    

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(91, 153, 3);
    rect(pos.x, pos.y, this.width, this.height);
}
}
