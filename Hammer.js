class Hammer {
    constructor(x, y,width,height) {
      var options = {
        'density':2,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      
      fill("brown");
      rectMode(CENTER)
      rect( this.x,  this.y, this.width, this.height);
      pop();
    };
  };
  