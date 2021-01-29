let angle = 0;
let sentence = '1234567890!';
//let fontName = '';

function preload() {
  fontName = loadFont('assets/Hannari.otf');
}

function setup() {
  millisecond = millis();
  createCanvas(2068 / 4, 2068 / 4, WEBGL);
  pixelDensity(4);
  background(0);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textFont(fontName);
  textSize(24);
  frameRate(12);
}

function draw() {
  background(0);
  for (let i = 0; i < 12; i++) {
  	push();
  	for (let j = 0; j < 200; j++) {
	  	fill(200 - i);
	  	rotateX(6);
	  	rotateY(3);
	  	rotateZ(millis() % 12);
	  	text(sentence[j % 12], j, j, j);
  	}
  pop();
  rotateZ(millis());
  }
}