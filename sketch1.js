function setup() {
  var canvas = createCanvas(1520, 300);
  canvas.parent("sketch-holder");

  // radius is set dynamically depending on the
  // sketch's size – the min() function gives
  // us the smaller of two numbers, ensuring
  // that the circle won't get cut off
  radius = min(width, height) / 2.5;

  // font size is also dynamic!
  textSize(radius / 4);
  // textFont(font);
  textAlign(CENTER, BASELINE);
  frameRate(500);
}

function draw() {
  background(200);
}