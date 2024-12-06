/**
 * Truly Mysterious!
 * Carael Bandojo
 * 
 * A point and click escape room, 
 * Find the code to escape the room!
 * If you guess the code wrong thrice, you die!
 * 
 * Instructions:
 * - Click to interact with objects
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 * this 3D model
 * https://www.turbosquid.com/3d-models/horror-bathroom-bath-3d-model-1331670
 */

"use strict";

/*VARIABLES---------------------------------------------------------*/ 

// Canvas size for modular coding
let canvasX = '1000';
let canvasY = '541';

// States for each screen of the game
let state = "title";

const States = {
    TITLE: "title",
    BATHROOM: "bathroom",
    TOILET: "toilet",
    CABINET_CLOSED: "cabinet_closed",
    CABINET_OPEN: "cabinet_open",
    SINK:  "sink",
    UNDER_SINK:  "under_sink",
    BATHTUB: "bathtub",
    DOOR: "door",
    WIN: "win",
    LOSE: "lose"
};

/**MODE VARIABLES**/

let mode = "default";

let modeIndex = '0' ;

const Modes = ["default", "timed", "flashlightd"];

/**TITLE STATE VARIABLES**/

let titleString = "TRULY MYSTERIOUS🔎";

let titleInstructions = "Click anywhere to begin."

let modeInstructions = "Press M to shift through game modes."  

/*CODE BEGINS---------------------------------------------------------*/ 

/**
* Preloads all the images and generates the random code
*/
function preload() {
  createCanvas(canvasX, canvasY);
}


/**
* Make canvas and set shape creation modes to center.
*/
function setup() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  createCanvas(canvasX, canvasY);
}

/**
 * Sense what state the game is in and draw it
*/
function draw() {
  background(200);
  
  push();
  rectMode(CENTER);
  text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
  pop();
  
  modeDraw();
  
  // State-based rendering
  switch(state) {
    case States.TITLE:
      title();
      break;
    case States.BATHROOM:
      bathroom();
      break;
    case States.CABINET_CLOSED:
      cabinetClosed();
      break;
    case States.CABINET_OPEN:
      cabinetOpen();
      break;
    case States.SINK:
      sink();
      break;
    case States.UNDER_SINK:
      underSink();
      break;
    case States.BATHTUB:
      bathtub();
      break;
    case States.DOOR:
      door();
      break;
    case States.WIN:
      win();
      break;
    case States.LOSE:
      lose();
      break;
  }
}


/**
* Senses what mode the game is in.
*/

function modeDraw(){
Modes[modeCounter];

   if (Modes[0]){
     mode === 'default';
     modeInstruction = "";

   } else if (Modes[1]){
     mode === 'timed';
     drawTimed();
     modeInstruction = "";
   
    } else if (Modes[2){
     mode === 'flashlight';
     drawFlashlight();
     modeInstruction = "";

   }  
}

/**
* Draw a timer when timed mode is active.
*/
function drawTimed(){

}

/**
* Draw a flashlight when flashlight mode is active.
*/
function drawFlashlight(){
  
}

/**
* Draw title state.
*/
function title(){
  background('maroon');
  
  // Draw title
  push();
  textFont('Courier New', 50)
  textSize(40);
  text(titleString, (canvasX/3.5), (canvasY/2));
  pop();
  
  // Draw subtitle
  push();
  textFont('Courier New', 50)
  textSize(20);
  text(titleInstructions, (canvasX/3), (canvasY/1.9));
  pop();
  
  // Draw mode instructions
  push();
  textFont('Courier New', 50)
  textSize(20);
  text(modeInstructions, (canvasX/3.5), (canvasY/1.1));
  pop();
  
  
}

/**
 * Bathroom state
 */
function bathroom() {
  // Placeholder for bathroom scene
}

/**
 * Toilet state
 */
function toilet() {
  // Placeholder for toilet scene
}

/**
 * Closed cabinet state
 */
function cabinetClosed() {
  // Placeholder for closed cabinet scene
}

/**
 * Open cabinet state
 */
function cabinetOpen() {
  // Placeholder for open cabinet scene
}

/**
 * Sink state
 */
function sink() {
  // Placeholder for sink scene
}

/**
 * Under sink state
 */
function underSink() {
  // Placeholder for under sink scene
}

/**
 * Bathtub state
 */
function bathtub() {
  // Placeholder for bathtub scene
}

/**
 * Door state
 */
function door() {
  // Placeholder for door interaction scene
}

/**
 * Win state
 */
function win() {
  // Placeholder for win scene
}

/**
 * Lose state
 */
function lose() {
  // Placeholder for lose scene
}

/**
 * Handles Key being pressed
 */
function keyPressed() {
  if (key === 'M' && state === 'title'){ // When M key is pressed in title state
    modeCounter += 1 ; // Increase modeCounter by 1
    if (modeCounter === 2) // If modeCounter is 2
      modeCounter = 0 ; // set to 0
  }
}

/**
 * Handles mouse being pressed
 */
function mousePressed() {

}