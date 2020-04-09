

var tiles = [];

var nTiles = 6;

var tileWidth;

var swivelCounter = 50;

var eyeHeight = 30;

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
    swivelCounter = int(random(150));
  }
}


function spinTile() {
  var randomTile = int(random(nTiles*nTiles));
  tiles[randomTile].eD = 0;

  var randomTile = int(random(nTiles*nTiles));
  tiles[randomTile].pXD = random(-20, 20);

  var randomTile = int(random(nTiles*nTiles));
  tiles[randomTile].eD = 0;

  var randomTile = int(random(nTiles*nTiles));
  tiles[randomTile].pXD = random(-20, 20);
}



class Tile {

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.ease = random(0.8, 0.9);
    this.e = eyeHeight;

    this.pEase = random(0.92, 0.99);
    this.pX = 0; // pupil movement
    this.pXD = 0; // pupil destination

    this.eD = eyeHeight;
  }

  update() {
    this.e = this.ease * this.e + (1-this.ease)* this.eD;
    if (this.e < 1) this.eD = eyeHeight;

    this.pX = this.pEase * this.pX + (1-this.pEase)*this.pXD;
  }


  display() {

    push();
    translate(this.x, this.y);

    rectMode(CENTER);
    fill(0);
    noStroke();
    rect(0, 0, tileWidth, tileWidth); 
    noFill();
    strokeWeight(1);
    strokeCap(SQUARE);
    stroke(255);


    let e = this.e;  // eye openess
    let w = 40;  // eye width
    let p = 0.5; // pointiness

    fill(255);
    noStroke();
    stroke(255);
    bezier(-w, 0, -w*p, -e, w*p, -e, w, 0);
    bezier(-w, 0, -w*p, e, w*p, e, w, 0);

    // PUPIL
    noStroke();
    fill(0);
    ellipse(this.pX, 0, 25, 25);
    pop();
  }
}
