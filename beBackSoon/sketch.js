var x = 0;
var y = 0;
var a = 0;
var b = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //colorMode(HSB, windowWidth);
  colorMode(HSB, windowWidth);
  background(255, 0 , 255);
  smooth();
}

function draw() {
  noStroke();
  fill(255);
  rect(0,0,windowWidth,windowHeight);
  
  stroke(255);
  
  var i = 0;
    
    while (i < windowWidth){
      strokeWeight(touchY/10 * sin(a + i/5) * noise(a + i/5));
      stroke(map(sin(a + i/50) * noise(a + i/50), -1, 1, windowWidth - windowWidth/10 * touchX/100, windowWidth), windowWidth - windowWidth/10, windowWidth);
      point(i, windowHeight/2 + 200 * sin(a + i/250) * noise(a + i/75) * touchX/250);
      i++;
    }
  
  a = a + 0.03;
  b = b + 0.03;
}
