/*
TEXT ON CIRCLE
Jeff Thompson | 2021 | jeffreythompson.org
*/

// text to display
// (note: the space at the end helps keep the first
// and last word from running into each other)
let str1 = "What makes you feel grateful everyday?";
let str2 = "What do you like to do for fun?";
let str3 = "Does anxiety dampen most of your days?";
let str4 = "What will people say about you at your funeral?";

let startAngle = 0; // angle where text should start
let distanceAngle = 360; // how far (in degrees) text will go

let radius; // set dynamically in setup()
let font;
let angleBetweenLetters;
let tap = 0;
let textButton = "Press here";
let sizeOfText = 10;
function preload() {}

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
  textFont("Oxygen");
  background(255, 255, 255);
  // the circle our text will go around
  noFill();
  stroke(228);
  // line(width / 5, height / 2 + 10, width / 5 + radius * 7.5, height / 2 + 10);
  textFont("Oxygen");
  noStroke();
  // display the text of first circle
  push();
  translate(width / 5, height / 2); // move to circle's center
  textCircle(str1, radius);
  pop();

  if (tap != 0) {
    push();
    translate(width / 5 + radius * 2.5, height / 2); // move to circle's center
    textCircle(str2, radius);
    pop();
    push();
    translate(width / 5 + radius * 5, height / 2); // move to circle's center
    textCircle(str3, radius);
    pop();
    push();
    translate(width / 5 + radius * 7.5, height / 2); // move to circle's center
    textCircle(str4, radius);
    pop();
  }

  startAngle += 0.5;
  if (tap == 0) {
    push();
    fill(0);
    textSize(sizeOfText);
    textAlign(CENTER);
    text(textButton, width / 5, height / 2);
    pop();
  }

  if (
    tap == 0 &&
    mouseIsPressed == true &&
    mouseX > width / 5 - (textButton.length / 2) * sizeOfText &&
    mouseX < width / 5 + (textButton.length / 2) * sizeOfText &&
    mouseY > height / 2 - sizeOfText &&
    mouseY < height / 2 + sizeOfText
  ) {
    tap += 1;
  }
}

function textCircle(str, radius) {
  angleBetweenLetters = (3.14 * 2) / (str.length + 10);
  rotate(radians(startAngle)); // rotate to where text starts
  for (let i = 0; i < str.length; i++) {
    // go through each letter in the text
    push();
    rotate(i * angleBetweenLetters); // rotate to angle
    translate(0, -radius); // and translate to edge of circle
    fill(0);
    noStroke();
    text(str[i], 0, 0); // draw character at location
    pop();
  }
}

// to make this sketch responsive to the window size
// being changed, the windowResized() function calls
// setup() so we can change the radius and font size
function windowResized() {
  setup();
}
