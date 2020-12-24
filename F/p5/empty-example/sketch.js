function setup() {
  createCanvas(1000, 480);
  background(0);
}

function draw() {
  //ellipse(50,50,80,80);
  if (mouseIsPressed) {
  		//fill(0);
  		fill('rgba(224,112,95, 1)');
  	if (keyIsPressed) {
  			fill('rgba(61, 64, 91, 1)');
  		}
  	} else if (keyIsPressed) {
  		fill('rgba(129,178,154, 1)');
  	} else {
  		fill('rgba(242,204,143, 1)');
  		//fill(255);
  }
  ellipse(mouseX, mouseY, 30, 30);
}