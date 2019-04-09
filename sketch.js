function Particle() {
  i = random(width/2);
  j = random(height/2);
  this.pos = createVector(width/4 + i, height/4 + j);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.max = 4;
  this.prevPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.max);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.follow = function(vectors) {
    x = floor(this.pos.x / s);
    y = floor(this.pos.y / s);

    this.applyForce(vectors[x + y * cols]);
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() {
    if (this.pos.x < 0) {this.pos.x = width; this.updatePrev();}
    if (this.pos.x > width) {this.pos.x = 0; this.updatePrev();}
    if (this.pos.y < 0) {this.pos.y = height; this.updatePrev();}
    if (this.pos.y > height) {this.pos.y = 0; this.updatePrev();}
  }

  this.show = function() {
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }
}


var s, flowfield, particles, rows, cols, zoff, zinc, inc;

function setup() {
  h = (9*min(windowWidth, windowHeight))/10;
  createCanvas(h, h);

  s = 10;
  inc = 0.1;
  zinc = random(0.000003, 0.00005);

  rows = round(width/s);
  cols = round(height/s);
  zoff = 0;

  particles = [];
  for (var i = 0; i <= random(2500, 3000); i++) {
    particles[i] = new Particle();
  }

  flowfield = new Array(cols * rows);

  background(255);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < cols; y++) {
    var xoff = 0;
    for (var x = 0; x < rows; x++) {
      theta = noise(xoff, yoff, zoff) * TWO_PI * 4
      v = p5.Vector.fromAngle(theta)
      v.setMag(1);

      flowfield[x + y * cols] = v

      xoff += inc
    }
    yoff += inc
  
    zoff += zinc;
  }

  for (var i = 0; i < particles.length; i++) {    
    stroke(0, 5);
    
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}
