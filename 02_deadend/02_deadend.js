

var tiles = [];

var nTiles = 6;

var tileWidth;

var swivelCounter = 50;

function setup() {

  createCanvas(600, 600);

  tileWidth = width/nTiles;

  for (let x = 0; x < nTiles; x++) {
    for (let y = 0; y < nTiles; y++) {
      tiles.push(new Tile(x*tileWidth+tileWidth/2, y*tileWidth+tileWidth/2));
    }
  }
}


function draw() {

  background(0);

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].display();
    tiles[i].update();
  }

  swivelCounter--;

  if (swivelCounter < 0) {
    spinTile();
    swivelCounter = int(random(100));
  }
}

function keyPressed() {

  spinTile();
  spinTile();
  spinTile();
}


function spinTile() {
  var randomTile = int(random(nTiles*nTiles));

  tiles[randomTile].rD = int(random(4)) * HALF_PI;
}



class Tile {

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.t = int(random(4)); //tile type
    this.r = int(random(4)) * HALF_PI;
    this.rD = this.r;
    this.ease = random(0.9612, 0.9797);
  }

  update() {
    this.r = this.ease * this.r + (1-this.ease)* this.rD;
  }


  display() {

    push();
    translate(this.x, this.y);
    rotate(this.r);
    rectMode(CENTER);
    fill(0);
    noStroke();
    rect(0, 0, tileWidth, tileWidth); 
    noFill();
    strokeWeight(40);
    strokeCap(SQUARE);
    stroke(255);
    switch(this.t) {
    case 0:
      arc(-tileWidth*0.5, -tileWidth*0.5, tileWidth, tileWidth, 0, HALF_PI);
      break;
    case 1:
      line(-tileWidth*0.5, 0, tileWidth*0.5, 0);
      break;
    case 2:
      arc(-tileWidth*0.5, -tileWidth*0.5, tileWidth, tileWidth, 0, HALF_PI);
      rotate(PI);
      arc(-tileWidth*0.5, -tileWidth*0.5, tileWidth, tileWidth, 0, HALF_PI);
      break;
    case 3:
      line(-tileWidth*0.5, 0, tileWidth*0.5, 0);
      rotate(HALF_PI);
      line(-tileWidth*0.5, 0, tileWidth*0.5, 0);
      break;
    default:
    }
    pop();
  }
}
