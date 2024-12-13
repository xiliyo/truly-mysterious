/**
 * TRULY MYSTERIOUS🔎
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

// Code that will allow you to solve the game
const Code = {
  digit1: "0",
  digit2: "0",
  digit3: "0",
  digit4: "0",
  digit5: "0",
  digit6: "0"
}

// Initialize for later images
let bathroom_img;
let toilet_img;
let cabinetClosed_img;
let cabinetOpen_img;
let sink_img;
let underSink_img;
let bathub_img;

// Canvas size for modular coding
let canvasX = 1000;
let canvasY = 541;

// States for each screen of the game
let state = 'title';

const States = {
    TITLE: "title",
    BATHROOM: "bathroom",
    TOILET: "toilet",
    CABINET_CLOSED: "cabinet_closed",
    SINK:  "sink",
    UNDER_SINK:  "under_sink",
    BATHTUB: "bathtub",
    DOOR: "door",
    WIN: "win",
    LOSE: "lose"
};

// Boolean objects to show the user what items they have found
let Items = {
  CabinetKey: false,
  DirtyCloth: false,
  CleanCloth: false,
  Plunger: false,
  HydrogenPeroxide: false,
  PipeWrench: false,
  Hammer: false,
  
}

let commentaryString = "Look around to get clues.";

/**MODE VARIABLES**/

let mode = "default";

let modeCounter = 0;

const Modes = ["default", "timed", "flashlightd"];

/**TITLE STATE VARIABLES**/

let titleString = "TRULY MYSTERIOUS🔎";

let titleInstructions = "Click anywhere to begin."

let modeInstructions = "Press M to shift through game modes."  

/** CABINET STATE VARIABLES **/

let cabinetLocked = true;

/*CODE BEGINS---------------------------------------------------------*/ 

/**
* Preloads all the images
*/
function preload() {
  bathroom_img = loadImage('https://github.com/xiliyo/truly-mysterious/blob/main/assets/images/bathroom.jpg');
  toilet_img = loadImage('https://github.com/xiliyo/truly-mysterious/blob/main/assets/images/toilet.jpg');
  cabinetClosed_img = loadImage('https://github.com/xiliyo/truly-mysterious/blob/main/assets/images/cabinet_closed.jpg');
  cabinetOpen_img = loadImage('https://github.com/xiliyo/truly-mysterious/blob/main/assets/images/cabinet_open.jpg');
  sink_img = loadImage('https://github.com/xiliyo/truly-mysterious/blob/main/assets/images/sink.jpg');
  underSink_img = loadImage('https://github.com/xiliyo/truly-mysterious/blob/main/assets/images/under_sink.jpg');
  bathub_img = loadImage('https://github.com/xiliyo/truly-mysterious/blob/main/assets/images/bathtub.jpg');
}


/**
* Make canvas and set shape creation modes to center and generates the random code.
*/
function setup() {
   // Generate 6 random digits and store them in the Code object
   Code.digit1 = floor(random(10)); // random(10) gives a number between 0 and 9
   Code.digit2 = floor(random(10));
   Code.digit3 = floor(random(10));
   Code.digit4 = floor(random(10));
   Code.digit5 = floor(random(10));
   Code.digit6 = floor(random(10));
 
   // Output the final 6-digit code so I can cheat during debugging 
   console.log("Final Code:", Code.digit1, Code.digit2, Code.digit3, Code.digit4, Code.digit5, Code.digit6);

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
  drawBackButton();

  // Draw commentary if not in title, win, or lose state
  if (state != States.TITLE && state != States.WIN && state != States.LOSE){
    drawCommentary();
    }
  
  //DELETE LATER!! Draw coordinates
  drawCoordinates();
}

/**
* Draw the back button when the state isn't title, win, lose, or bathroom
*/
function drawBackButton() {
  // Draw back button
 if (state != States.BATHROOM && state != States.TITLE && state != States.WIN && state != States.LOSE){
  push();
  noStroke();
  fill(255, 255, 255, 102);
  triangle(52, 10, 12, 35, 52, 60);
  pop();
  }
}

/**
* Senses what mode the game is in.
*/
function modeDraw() {
  if (modeCounter === 0) {
    mode = 'default';
  } else if (modeCounter === 1) {
    mode = 'timed';
    drawTimed();
  } else if (modeCounter === 2) {
    mode = 'flashlight';
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
  
  if (cabinetLocked === true)
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
if (state === States.TITLE){
  if (key === 'M'){ // When M key is pressed in title state
    modeCounter += 1 ; // Increase modeCounter by 1
      if (modeCounter === 2) // If modeCounter is 2
        modeCounter = 0 ; // set to 0
    }
  }
}

function drawCommentary() {
    // When state is not title, win, or lose
    if (state != States.TITLE && state != States.WIN && state != States.LOSE) {
    // Style the text.
    push();
    textSize(14);
    textStyle(BOLDITALIC);
    textFont('Courier New');
    fill(255);
  
    // Display the mouse's coordinates.
    text(commentaryString, (canvasX/3), (canvasY/1.1), (canvasY));
    pop();
  }

  // Commentary in Bathroom State (when not clicking) ----------------------
  if (state === States.BATHROOM) {
      // Check if hovering over bathtub
        if (mouseX >= 130 && mouseX <= 521 && mouseY >= 311 && mouseY <= 420) {
        commentaryString = "The bathtub smells of death.";
      
      // Check if hovering over toilet
      } else if (mouseX >= 560 && mouseX <= 749 && mouseY >= 200 && mouseY <= 396){
        commentaryString = "The toilet has grime all over it.";
        
      // Check if hovering over sink
      } else if (mouseX >= 810 && mouseX <= 931 && mouseY >= 120 && mouseY <= 320){
        commentaryString = "The mirror is cloudy.";
      
        // Check if hovering under sink
      } else if (mouseX >= 810 && mouseX <= 970 && mouseY >= 321 && mouseY <= 452){
        commentaryString = "I wonder if I could use this plunger..";

       // Check if hovering over cabinet
      } else if (mouseX >= 0 && mouseX <= 145 && mouseY >= 50 && mouseY <= 250){
        commentaryString = "The glass is so dirty that I can't see what's inside.";
  
        // Check if close enough to border to go to door
      } else if (mouseX >= 40 && mouseX <= 960 && mouseY >= 30 && mouseY <= 507){
        commentaryString = "Hover to examine, click to interact.";
     
      } else {
        commentaryString = "What's behind me?";
      }
    }

  // // Commentary in Bathroom State (when not clicking) ----------------------  
  //   else if () {

  //   }

}



 /* MOUSE PRESSED FUNCTION (very long because I can't replicate this event handler) ---------------------------------------------------------*/ 
function mousePressed() {

/**
 * Reactions for Back Button ----------------------
 */
 if (state != States.BATHROOM && mouseX >= 12 && mouseX <= 52 && mouseY >= 10 && mouseY <= 60){
  state = States.BATHROOM;
}


/**
 * Reactions in Title State ----------------------
 */
  else if (state === States.TITLE) {
    // Transition to bathroom state when clicked on the title screen
    state = States.BATHROOM;

  }
  
/**
 * Reactions in Bathroom State ----------------------
 */
   else if (state === States.BATHROOM) {

    // Check if clicking bathtub
    if (mouseX >= 130 && mouseX <= 521 && mouseY >= 311 && mouseY <= 420) {
      // Change to BATHTUB state
      state = States.BATHTUB;
    
    // Check if clicking toilet
    } else if (mouseX >= 560 && mouseX <= 749 && mouseY >= 200 && mouseY <= 396){
      // Change to TOILET state
      state = States.TOILET;
      
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

      // Check if close enough to border to go to door, if not do nothing
    } else if (mouseX >= 40 && mouseX <= 960 && mouseY >= 30 && mouseY <= 507){
      

    } else {
      commentaryString = "What's behind me?";
      state = States.DOOR;
    }

  }



/**
 * Reactions in Toilet State ----------------------
 */
   else if (state === States.TOILET) {

  }



/**
 * Reactions in Cabinet State ----------------------
 */
   else if (state === States.CABINET) {

  }



/**
 * Reactions in Sink State ----------------------
 */
   else if (state === States.SINK) {

  }



/**
 * Reactions in Under Sink State ----------------------
 */
   else if (state === States.UNDER_SINK) {

  }



  /**
 * Reactions in Bathtub State ----------------------
 */
   else if (state === States.BATHTUB) {

   // Check if clicking bloodstain in tub
    if (mouseX >= 341 && mouseX <= 521 && mouseY >= 151 && mouseY <= 345) {
      // Change 
      state = States.BATHTUB;
    
    // Check if clicking toilet
    } else if (mouseX >= 560 && mouseX <= 679 && mouseY >= 200 && mouseY <= 396){
      // Change to TOILET state
      state = States.TOILET;

    }
  }



  /**
 * Reactions in Door State ----------------------
 */
   else if (state === States.DOOR) {

  }



  /**
 * Reactions in Win State ----------------------
 */
   else if (state === States.WIN) {

  }



  /**
 * Reactions in Lose State ----------------------
 */
   else if (state === States.LOSE) {

  }

}

/*ERROR HANDLING ---------------------------------------------------------*/ 

/**
 * Temporary function so I can map out coordinates
 */
function drawCoordinates() {
  // Style the text.
  textSize(24);
  textFont('Courier New');
  fill(255);

  // Display the mouse's coordinates.
  text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
}