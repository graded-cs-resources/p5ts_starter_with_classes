/** runs as soon as the assets are available */

import { Ball } from "./classes/ball.js";

let ball: Ball;

function setup() {
  // create a canvas
  createCanvas(800, 600);
  // set settings so everything is centered
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  // draw a background color (once) - pale yellow
  background("lightyellow");
  ball = new Ball(random(width - 50), random(height - 50), 50);
}

/** runs on a continuous loop after setup() runs */
function draw() {
  // make my circles black if the mouse is pressed
  // leave it white otherwise
  if (mouseIsPressed) {
    fill("black");
    stroke("white");
  } else {
    fill("white");
    stroke("black");
  }
  // draw a circle where the mouse is
  ellipse(mouseX, mouseY, 20, 20);
  // write our welcome text
  writeText();
  ball.draw();
  ball.move();
}
/** writes our welcome text and background rectangle */
function writeText() {
  //draw text background rectangle
  fill("pink");
  stroke("black");
  rect(width / 2, 50, 300, 50);
  //write the text
  fill("black");
  stroke("black");
  textSize(32);
  text("Welcome to p5js!", width / 2, 50);
}


window.draw = draw;
window.setup = setup;