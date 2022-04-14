function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(66,80,147);
  rect(1920, 500, 55, 55);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);