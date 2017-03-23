var co;
var img;

function setup() {
  createCanvas(screen.width/2, screen.height, P2D);
  
  var co = get(mouseX, mouseY);
  
  img = createGraphics(width, height);
}

function draw() {
  img.clear();
  background(255);
  img.blendMode(SCREEN);
  img.fill(255, 0, 255);
  img.noStroke();
  img.rect(0, 0, width/2, height);
  img.fill(25,255, 0);
  img.textSize(220);
  img.text("Hello", mouseX, mouseY);
  
  image(img, 0, 0);
  
}