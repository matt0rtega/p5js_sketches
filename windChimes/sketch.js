
function Ball(x, y, r, mass) {
  this.position = new p5.Vector(x, y);
  this.velocity = new p5.Vector(0, 0);
  this.acceleration = new p5.Vector(0, 0);
  this.center = new p5.Vector(x, y);
  
  this.velocity.mult(3);
  this.r = r;
  this.m = mass;
  
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }
  
  this.display = function() {
    stroke(0);
    strokeWeight(2);
    line(this.center.x, this.center.y, this.position.x, this.position.y);
    ellipse(this.position.x, this.position.y, this.r*2, this.r*2);
  }
  
  this.applyForce = function(force) {
    this.force = new p5.Vector.div(force, this.m);
    this.acceleration.add(force);
  }
}

var ball;
var wind;

function setup() {
  createCanvas(500, 500);
  var position = new p5.Vector(width/2, height/2);
  ball = new Ball(width/2, height/2, 100, 0.0002);
  
   wind = new p5.Vector(0, 0);
}

function touchStarted(){
  console.log("Hello");
  wind = new p5.Vector(0.4, 0.4);
  
  
  return false;
}

function mouseIsPressed(){
  return false;
}

function draw() {
  background(255);
  
 
  
  // Creating the friction force
  var c = 0.05;
  var friction = ball.velocity;
  //console.log(friction);
  friction.mult(-1);
  friction.normalize();
  friction.mult(c);
  
  // Get center force point
  var center = new p5.Vector.sub(ball.center, ball.position);
  center.mult(0.005);
  
  //ball.centerForce();
  ball.applyForce(center);
  ball.applyForce(wind);
  ball.applyForce(friction);
  ball.update();
  ball.display();
  
  
  
  //console.log(location);
}

