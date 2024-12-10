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

// Initialize for later images
let bathroom_img;
let toilet_img;
let cabinetClosed_img;
let cabinetOpen_img;
let sink_img;
let underSink_img;
let bathub_img;

// Canvas size for modular coding
let canvasX = '1000';
let canvasY = '541';

// States for each screen of the game
let state = 'title';

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

let commentaryString = "Look around to get clues.";

/**MODE VARIABLES**/

let mode = "default";

let modeCounter = '0' ;

const Modes = ["default", "timed", "flashlightd"];

/**TITLE STATE VARIABLES**/

let titleString = "TRULY MYSTERIOUS🔎";

let titleInstructions = "Click anywhere to begin."

let modeInstructions = "Press M to shift through game modes."  

/*CODE BEGINS---------------------------------------------------------*/ 

/**
* Preloads all the images
*/
function preload() {
  bathroom_img = loadImage('/assets/images/bathroom.jpg');
  toilet_img = loadImage('/assets/images/toilet.jpg');
  cabinetClosed_img = loadImage('/assets/images/cabinet_closed.jpg');
  cabinetOpen_img = loadImage('/assets/images/cabinet_open.jpg');
  sink_img = loadImage('/assets/images/sink.jpg');
  underSink_img = loadImage('/assets/images/under_sink.jpg');
  bathub_img = loadImage('/assets/images/bathtub.jpg');
}


/**
* Make canvas and set shape creation modes to center and generates the random code.
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
 
  modeDraw();
  
  // State-based rendering
    if (state === States.TITLE) {
    title();
  } else if (state === States.BATHROOM) {
    bathroom();
  } else if (state === States.TOILET) {
    toilet();
  } else if (state === States.CABINET) {
    cabinet();
  } else if (state === States.SINK) {
    sink();
  } else if (state === States.UNDER_SINK) {
    underSink();
  } else if (state === States.BATHTUB) {
    bathtub();
  } else if (state === States.DOOR) {
    door();
  } else if (state === States.WIN) {
    win();
  } else if (state === States.LOSE) {
    lose();
  }

// Draw back button
 if (state != States.BATHROOM && state != States.TITLE && state != States.WIN && state != States.LOSE){
  push();
  noStroke();
  fill('maroon');
  triangle(12, 490, 52, 510, 12, 530);
  pop();
  }

  commentary();
}

/**
* Senses what mode the game is in.
*/
function modeDraw(){
Modes[modeCounter];

   if (Modes[0]){
     mode === 'default';

   } else if (Modes[1]){
     mode === 'timed';
     drawTimed();
   
    } else if (Modes[2]){
     mode === 'flashlight';
     drawFlashlight();

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
  //Load the background image
  background(bathroom_img);
  describe('An image a bloodied bathroom.');

    // Style the text.
    textSize(24);
    textFont('Courier New');
    fill(255);
  
    // Display the mouse's coordinates.
    text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
  
}

/**
 * Toilet state
 */
function toilet() {
  //Load the toilet image
  background(toilet_img);
  describe('An dirty toilet.');
}

/**
 * Closed cabinet state
 */
function cabinet() {
  //Load the cabinet closed image
  background(cabinetClosed_img);
  describe('A cabinet, it is closed.');
}


/**
 * Sink state
 */
function sink() {
  //Load the sink image
  background(sink_img);
  describe('A dity sink and mirror.');
}

/**
 * Under sink state
 */
function underSink() {
   //Load the sink image
   background(underSink_img);
   describe('Under the sink. A gross jar and plunger.');
}

/**
 * Bathtub state
 */
function bathtub() {
  //Load the bathtub image
  background(bathub_img);
  describe('A bloodied bath, and a bucket.');
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
if (state = States.TITLE){
  if (key === 'M'){ // When M key is pressed in title state
    modeCounter += 1 ; // Increase modeCounter by 1
      if (modeCounter === 2) // If modeCounter is 2
        modeCounter = 0 ; // set to 0
    }
  }
}

function commentary() {

  // Commentary in Bathroom State ----------------------
  if (state === States.BATHROOM) {
      // Check if hovering over bathtub
      if (mouseX >= 130 && mouseX <= 521 && mouseY >= 311 && mouseY <= 420) {
        
      
      // Check if hovering over toilet
      } else if (mouseX >= 560 && mouseX <= 679 && mouseY >= 200 && mouseY <= 396){
     
      
      // Check if hovering over sink
      } else if (mouseX >= 810 && mouseX <= 931 && mouseY >= 120 && mouseY <= 320){
      
        
      // Check if hovering over sink
      } else if (mouseX >= 810 && mouseX <= 931 && mouseY >= 120 && mouseY <= 320){
      
  
      // Check if hovering under sink
      } else if (mouseX >= 810 && mouseX <= 970 && mouseY >= 321 && mouseY <= 452){
        
  
       // Check if hovering over cabinet
      } else if (mouseX >= 0 && mouseX <= 145 && mouseY >= 50 && mouseY <= 250){
      
  
      }
      
    }
}

/**
 * Handles mouse being pressed
 */
function mousePressed() {
  // Reactions on Title State ----------------------
  if (state === States.TITLE) {
    // Transition to bathroom state when clicked on the title screen
    state = States.BATHROOM;

  // Reactions in Bathroom State ----------------------
  } else if (state === States.BATHROOM) {
    // Check if clicking bathtub
    if (mouseX >= 130 && mouseX <= 521 && mouseY >= 311 && mouseY <= 420) {
      // Change to BATHTUB state
      state = States.BATHTUB;
    
    // Check if clicking toilet
    } else if (mouseX >= 560 && mouseX <= 679 && mouseY >= 200 && mouseY <= 396){
      // Change to TOILET state
      state = States.TOILET;
    
    // Check if clicking sink
    } else if (mouseX >= 810 && mouseX <= 931 && mouseY >= 120 && mouseY <= 320){
      // Change to CABINET state
      state = States.SINK;
      
    // Check if clicking sink
    } else if (mouseX >= 810 && mouseX <= 931 && mouseY >= 120 && mouseY <= 320){
      // Change to CABINET state
      state = States.SINK;

    // Check if clicking under sink
    } else if (mouseX >= 810 && mouseX <= 970 && mouseY >= 321 && mouseY <= 452){
      // Change to CABINET state
      state = States.UNDER_SINK;

     // Check if clicking cabinet
    } else if (mouseX >= 0 && mouseX <= 145 && mouseY >= 50 && mouseY <= 250){
      // Change to CABINET state
      state = States.CABINET;

    }
  // Reactions when not in bathroom
  } else if (state != States.BATHROOM && mouseX >= 12 && mouseX <= 52 && mouseY >= 490 && mouseY <= 530){
    state = States.BATHROOM;
  }
}

/**
 * In case of image loading Error
 */
function handleError(event) {
  console.error('Failed to load:', event);
}
