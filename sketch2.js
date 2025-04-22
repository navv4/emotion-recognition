let faces = [];
let objects = [];
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
    let face8 = loadImage('BW/emotion15.png');
    let face9 = loadImage('BW/emotion16.png');
    let face10 = loadImage('BW/emotion17.png');
    let face11 = loadImage('BW/emotion18.png');
    let face12 = loadImage('BW/emotion19.png');


    faces = [face1, face2, face3, face4, face5, face6, face7, face8, face9, face10, face11, face12]

    let object1 = loadImage('/BW2/object1.png');
    let object2 = loadImage('/BW2/object2.png');
    let object3 = loadImage('/BW2/object3.png');
    let object4 = loadImage('/BW2/object4.png');
    let object5 = loadImage('/BW2/object5.png');
    let object6 = loadImage('/BW2/object6.png');
    let object7 = loadImage('/BW2/object7.png');
    let object8 = loadImage('/BW2/object8.png');
    let object9 = loadImage('/BW2/object9.png');
    let object10 = loadImage('/BW2/object10.png');
    let object11 = loadImage('/BW2/object11.png');
    let object12 = loadImage('/BW2/object12.png');

    objects = [object1, object2, object3, object4, object5, object6, object7, object8, object9, object10, object11, object12]
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
let rundoImg = random(objects);



image(randoImg, width / 3, height / 2.1, 240, 240);
image(rundoImg, width / 1.5, height / 2.1, 240, 240);

myInput = createInput('answer');
myInput.mousePressed(' ');
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
let rundoImg = random(objects);


image(randoImg, width / 3, height / 2.1, 240, 240);
image(rundoImg, width / 1.5, height / 2.1, 240, 240);

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
  text('STAGE 2 ', width / 2, height / 17);

//   textFont(myFont);
//   textSize(10);
//   textAlign(CENTER, CENTER);
//   fill('white');
//   text('NEXT STAGE ', width / 2, height / 1.08);
//   textFont.mousePressed(window.open('https://www.w3schools.com/jsref/met_win_open.asp'));



}





