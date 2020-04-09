


var floorY;
var holeX, holeY, holeW, holeH;

let things = [];

function setup() {

  createCanvas(600, 600);


  reset();

  // create objects
  for (let i  = 0; i < 40; i++) {
    things.push(new Thing(-random(50, 150)*i));
  }
}


function draw() {



  background(255);
  noFill();
  stroke(0);
  strokeWeight(40);
  rect(0, 0, width, height);
  fill(0);

  //floor
  rect(0, 0, width, floorY);

  //hole
  fill(0);
  noStroke();
  ellipse(holeX, holeY, holeW, holeH);

  // things  
  for (let i = 0; i < things.length; i++) {
    things[i].move();
    things[i].display();
  }
}



function mousePressed() {
  reset();
}


function reset() {
  floorY = random(height * 0.4, height * 0.6);
  holeX = random(width*0.25, width*0.75);
  holeY = floorY + 100;
  holeW = random(width*0.2, width*0.5);
  holeH = random(0.2*holeW, 0.4*holeW);
}


class Thing {
  constructor(h) {
    this.x = random(holeX-holeW*0.4, holeX+holeW*0.4);
    this.y = h;
    this.diameter = random(10, 40);
    this.speed = random(2, 5);
  }

  move() {
    this.y += this.speed;
    if (this.y > floorY + 100) {
      this.y = -random(100, 200);
      this.x = random(holeX-holeW*0.4, holeX+holeW*0.4);
      this.speed = random(2, 5);
    }
  }

  display() {
    fill(255);
    noStroke();
    //strokeWeight(5);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
