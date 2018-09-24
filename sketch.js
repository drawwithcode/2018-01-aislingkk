var x = 3;
var y = 3;
var m = 250;
var n = 0;

function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(0.5);
	stroke(254, 254, 255);
	//noStroke();
}

function draw() {
	background(0,0,0);
	ellipseMode(CENTER);
	rectMode(CENTER);
	colorMode(RGB);

	var r, g, b;
	r = random(200,255);
	g = random(2);
	b = random(2);

  strokeWeight(0.2);
	line(235+x,143,235+x,208);

  //headline
	fill(r,255,b,10);
	ellipse(250,85, x, y);
	ellipse(200,475, x+2, y+2);
	ellipse(300,475, x+2, y+2);
	ellipse(mouseX,mouseY, x+300, y+300);
	x = x + 1;
	y = y + 2;
	if (x > 30) {
		x = 3;
	}
	if (y > 30) {
		y = 3;
	}

  //HEAD
	fill(r,g,155,50);
	rect(250, 175, 36, 65,5);
	rect(250, 175, 30, 72,5);

  //NECK
	line(250,211,250,245);

  //body
  stroke(254, 254, 255);
	rect(250, 350, 1,180,5);
	rect(250, 350, 6,180,5);
	rect(250, 350, 12,180,5);
	rect(250, 350, 18,180,5);
	rect(250, 350, 24,180,5);
	rect(250, 350, 32,180,5);
	rect(250, 350, 40,180,5);
	rect(250, 350, 48,180,5);
	rect(250, 350, 56,180,5);
	fill(r,255,b,5);
	rect(250, 350, 64,180,5);
	rect(250, 350, 68,180,5);

  //eyes
	fill(r,g,b,100);

	ellipse(250,175, 8, 8);
	fill(255,255,254,80);
	ellipse(248,173, 3, 3);

	ellipse(250, 175, 18, 18);
	ellipse(250, 175, 10, 10);

	//NECK
	fill(r,255,b,5);
	fill(r,g,255,50);
	ellipse(250, 245, 18, 18);
	ellipse(250, 245, 10, 10);
	ellipse(250, 245, 5, 5);

//headline
	fill(r,255,255,50);
  line(250,139,250,93);

	ellipse(250, 85, 16, 16);
	ellipse(250, 85, 12, 12);
	ellipse(250, 85, 8, 8);
	ellipse(250, 85, 5, 5);

	ellipse(250, 297, 10, 10);
	ellipse(250, 297, 8, 8);
	ellipse(250, 297, 5, 5);

//left hand
	ellipse(200, 325, 10, 10);
	ellipse(200, 325, 5, 5);
	ellipse(200, 325, 2, 2);

	ellipse(210, 275, 10, 10);
	ellipse(210, 275, 5, 5);
	ellipse(210, 275, 2, 2);

	ellipse(200, 475, 12, 12);
	ellipse(200, 475, 10, 10);
	ellipse(200, 475, 5, 5);
	ellipse(200, 475, 2, 2);

//right hand
	ellipse(300, 325, 10, 10);
	ellipse(300, 325, 5, 5);
	ellipse(300, 325, 2, 2);

	ellipse(290, 275, 10, 10);
	ellipse(290, 275, 5, 5);
	ellipse(290, 275, 2, 2);

	ellipse(300, 475, 12, 12);
	ellipse(300, 475, 10, 10);
	ellipse(300, 475, 5, 5);
	ellipse(300, 475, 2, 2);

	//Handline
  line(210,275,200,325);
	line(290,275,200,325);
	line(290,275,300,325);
	line(210,275,300,325);

	line(300,475,200,325);
	line(200,475,300,325);

	//feet

	fill(r,255,b,80);
	ellipse(mouseX, mouseY,18, 18);
	ellipse(mouseX, mouseY, 10, 10);
	ellipse(mouseX, mouseY, 5, 5);



}
