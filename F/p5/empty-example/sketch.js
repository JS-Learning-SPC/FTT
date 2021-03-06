let sketch1 = function(p) {
      p.setup = function(){
	      p.createCanvas(600, 300);
	      p.background(0);
    }
  
	p.draw = function() {
	  if (p.mouseIsPressed) {
	  		p.fill('rgba(224,112,95, 1)');
	  	if (p.keyIsPressed) {
	  			p.fill('rgba(61, 64, 91, 1)');
	  		}
	  	} else if (p.keyIsPressed) {
	  		p.fill('rgba(129,178,154, 1)');
	  	} else {
	  		p.fill('rgba(242,204,143, 1)');
	  		//fill(255);
	  }
	  p.ellipse(p.mouseX, p.mouseY, 30, 30);
   }
};

let sketch2 = function(p) {
	p.setup = function() {
		p.createCanvas(600, 300);
		p.background(250,250,250);
	}
	p.touchMoved = function() {
	    //ドラッグかスワイプで線を描く
	    p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
	}
};

let sketch3 =  function(p) {
    p.setup = function(){
        p.createCanvas(2066 / 4, 2066 / 4);
		p.pixelDensity(4);
		p.noLoop();
		p.textFont('Sawarabi Mincho');
		p.background(255);
    }
  
	p.draw = function() {
		p.textAlign(p.CENTER, p.CENTER);
		p.fill(40, 70, 90);
		
		let fontSize = p.width / 1.5;
		let title = "睡眠は死からの負債である。";
		let words_num = title.length -2;
		
		for (let i = 0; i < title.length; i++) {
			for (let j = 0; j < words_num; j++) {
				p.textSize(fontSize);
				p.text(title[(j + i * words_num) % title.length], 
					p.width / words_num * j + p.width / 25,
					p.height / title.length * i + p.height / 40);
				fontSize -= 2.4;
				if (fontSize < p.width / 25) {
					fontSize = p.width / 25;
				}
			}
		}
	};
};

let sketch4 = function(p) { //動かん
	let angle = 0;
	let sentence = '1234567890!';
	//let fontName = '';
	
	p.preload = function(){
		fontName = p.loadFont('assets/Hannari.otf');
	}
	
    p.setup = function(){
		  p.millisecond = p.millis();
		  p.createCanvas(2068 / 4, 2068 / 4, p.WEBGL);
		  p.pixelDensity(4);
		  p.background(0);
		  p.angleMode(p.DEGREES);
		  p.textAlign(p.CENTER, p.CENTER);
		  textFont(fontName);
		  textSize(24);
		  p.frameRate(12);
    }
    
	p.draw = function() {
		  for (let i = 0; i < 12; i++) {
		  	p.push();
		  	for (let j = 0; j < 200; j++) {
			  	p.fill(200 - i);
			  	p.rotateX(6);
			  	p.rotateY(3);
			  	p.rotateZ(p.millis() % 12);
			  	p.text(p.sentence[j % 12], j, j, j);
		  	}
		  p.pop();
		  p.rotateZ(p.millis());
		  }
		
	}
};


  new p5(sketch1, "container1");
  new p5(sketch2, "container2");
  new p5(sketch3, "container3");
  //new p5(sketch4, "container4");