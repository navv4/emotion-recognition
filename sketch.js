let faces = [];
let numFaces = 7;
let myFont;

function preload(){

    //code referenced from: https://p5js.org/tutorials/loading-and-selecting-fonts/ -------
    myFont = loadFont('/typefaces/FormaDJRTextMedium.ttf');

    // ---------------------------------------------------------------

    let face1 = loadImage('/BW/emotion1.png');
    let face2 = loadImage('/BW/emotion2.png');
    let face3 = loadImage('/BW/emotion3.png');
    let face4 = loadImage('/BW/emotion4.png');
    let face5 = loadImage('/BW/emotion5.png');
    let face6 = loadImage('/BW/emotion6.png');
    let face7 = loadImage('/BW/emotion7.png');

    faces = [face1, face2, face3, face4, face5, face6, face7]
}



function setup(){
    createCanvas(windowWidth, windowHeight); 

    noLoop();

    // var button = createButton('ENTER');
    // button.mousePressed(resetSketch);
}

// code referenced from The Coding Train: https://youtu.be/lm8Y8TD4CTM?si=artUUp3bCUTPghZD
function resetSketch(){
    imageMode(CENTER);

let randoImg = random(faces);

image(randoImg, width / 2, height / 2.1, 340, 340);

myInput = createInput('answer');
myInput.position(width / 2.6, height / 1.3);

let button = createButton('ENTER');
button.position(width / 1.75, height / 1.3);
button.mousePressed(resetSketch);

// -------------------------------------------------------------------------------------
}

// code adapted from Jacob Rivkin: https://www.youtube.com/watch?v=hxjEl-pun7o
function draw(){
background('black');

imageMode(CENTER);

let randoImg = random(faces);

image(randoImg, width / 2, height / 2.1, 340, 340);

myInput = createInput('answer');
myInput.position(width / 2.6, height / 1.3);

//code remixed from The Coding Train: https://youtu.be/lm8Y8TD4CTM?si=0MVgcj6iI4xpxVwM
let button = createButton('ENTER');
button.position(width / 1.75, height / 1.3);
button.mousePressed(resetSketch);

//----------------------------------------------------------------------------


// code referenced from: https://p5js.org/reference/p5/text/
textFont(myFont);
  textSize(36);
  textAlign(CENTER, CENTER);
  fill('white');
  text('IDENTIFY THE FOLLOWING EMOTION ', width / 2, height / 7);

  textFont(myFont);
  textSize(13);
  textAlign(CENTER, CENTER);
  fill('white');
  text('STAGE 1 ', width / 2, height / 17);


}





