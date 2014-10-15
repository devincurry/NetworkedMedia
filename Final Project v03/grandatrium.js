var x;
var y;
var size;
var division = 8;
var h = 90;
var s;
var b;
var gapHue = 90
var gap = 1;
var breatheRate = .3;
var gapMax = 10; //(mouseX/(division*5)
var isPink = true;

var bioPt1 = "Eclectic electronic producer Grand Atrium grew up as Devin Curry, tucked neatly in the canyons just outside LA where he could properly marinate in synths. As a teen, he began tinkering with his first analog synthesizer between indulging in kung fu films and video games. He continued to work on audio art on the West Coast for years. Now Curry lays his head and Moog in Brooklyn, primarily focusing on using vintage drum machines and synthesizers in his sensory-engaging, personal electronic music."
var bioPt2 = "The artist has stitched together official remixes for artists like Taken By Trees, Memoryy and others. His remix of Heartrevolution’s 'Pop Heart' also appeared on a compilation for Maison Kitsune Records, Kitsune America 2.";


function setup() {
	createCanvas(displayWidth, displayHeight);
	colorMode(HSB, 100, 100, 100, 100);
  	background(90, 0, 100,100);
  	//writeAbout();
  	//writeMusic();
	//noCursor();
}

function draw() {
  	size = displayWidth/division;
  	breathe();
  	strokeWeight(gap);
  	//stroke(0, 0, 100);
  	stroke(gapHue,100,100);
	squares();
	writeGrand();
	writeHome();
	writeMusic();
	writeAbout();
	//writeBio();
	//soundcloud();
	//breathe();
}

function squares() {
  for (var j = 0; j < division; j++) {
    checkHue();
    fill(h, s, b);
    x = size * j;
    for (var i = 0; i < division; i++) {
      checkHue();
      if (mouseY > (size*i)) {
        s = 75;
        //b = 100;
        b = random(80, 100);
        fill(h, s, b, 100);
        //rect(x, y, size, size);
      } else {
        s = 50+(size*i);
        b = 50;
        fill(h, b, b, 100);
        //rect(x, y, size, size);
      }
      y = displayHeight-size*i;
      rect(x, y, size, size);
    }
  }
}


function breathe() {
  gap = gap + breatheRate;
  if (gap < .1 || gap > gapMax) {
    breatheRate = breatheRate*-1;
  }
}

function homeButton() {
var homeDiv = createDiv("HOME");
homeDiv.parent('homebutton');
}

function writeGrand() { //make into divs so i can make events
	noStroke();
	strokeWeight(2);
	textSize(size/4);
	textStyle(BOLD);
	fill(0,0,100);
	text("GRAND ATRIUM", size, size*2/3); 
	//fill(0, 102, 153);
}

function writeHome() {
	noStroke();
	textSize(size/8);
	var buttonXmin = size*3;
	var buttonXmax = size*4;
	var buttonYmin = size/2;
	var buttonYmax = buttonYmin + size/4;
	if (mouseX >= buttonXmin && mouseX < buttonXmax && mouseY >= buttonYmin && mouseY <= buttonYmax){
	textStyle(BOLD);
	} else {
	textStyle(NORMAL);
	}
	fill(0,0,100);
	text("HOME", size*3.3, size*2/3);
}

function writeMusic() {
	noStroke();
	textSize(size/8);
	var buttonXmin = size*4;
	var buttonXmax = size*5;
	var buttonYmin = size/2;
	var buttonYmax = buttonYmin + size/4;
	if (mouseX >= buttonXmin && mouseX < buttonXmax && mouseY >= buttonYmin && mouseY <= buttonYmax) {
		textStyle(BOLD);
	} else {
		textStyle(NORMAL);
	}
	fill(0,0,100);	
	text("MUSIC", size*4.3, size*2/3);
}

function writeAbout() {
	noStroke();
	textSize(size/8);
	textStyle(NORMAL);
	fill(0,0,100);
	text("ABOUT", size*5.3, size*2/3);
}

function writeTextOld2() {
	noStroke();
	strokeWeight(2);
	//stroke(90,100,100);
	textSize(96);
	textStyle(BOLD);
	//fill(55,100,100);
	fill(0,0,100);
	text("GRAND ATRIUM", size/2, size*2/3); 
	//fill(0, 102, 153);
	textSize(48);
	textStyle(NORMAL);
	text("HOME", size/2, size*1.5);
	//fill(0, 102, 153, 51);
	text("MUSIC", size, size*2);
	text("ABOUT", size*1.5, size*2.5);
}

function checkHue() {
	if (isPink) {
      h = 90;
      //isPink = !isPink;
    } else {
      h = 60;
      isPink = !isPink;
    }
}

function writeBio() {
	var bioDiv = createDiv("Eclectic electronic producer Grand Atrium grew up as Devin Curry, tucked neatly in the canyons just outside LA where he could properly marinate in synths. As a teen, he began tinkering with his first analog synthesizer between indulging in kung fu films and video games. He continued to work on audio art on the West Coast for years. Now Curry lays his head and Moog in Brooklyn, primarily focusing on using vintage drum machines and synthesizers in his sensory-engaging, personal electronic music.</p>The artist has stitched together official remixes for artists like Taken By Trees, Memoryy and others. His remix of Heartrevolution's \"Pop Heart\" also appeared on a compilation for Maison Kitsune Records, Kitsune America 2.");
	//bioDiv.position(size+division*2,size+division*3);
	bioDiv.parent('bio');
	bioDiv.position(size+division*2,size+division*3);
}

// function writeAboutOld() {
// 	fill(h,50,100,80);
// 	rect(size, size, size*5, size*3);
// 	fill(0,0,100,100);
// 	textSize(24);
// 	textStyle(NORMAL);
// 	text(bioPt1, size/2, size);
// 	text(bioPt2, size/2, size*3);
// }

function soundcloud() {
	var soundcloudDiv = createDiv("<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/49426745&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>");
	soundcloudDiv.position(displayWidth/division+division,displayWidth/division+division);
}

function mouseClicked() {
	var homeXmin = size*3;
	var homeXmax = size*4;
	var homeYmin = size/2;
	var homeYmax = homeYmin + size/4;
	if (mouseX >= homeXmin && mouseX <= homeXmax && mouseY >= homeYmin && mouseY <= homeYmax){
		draw();
		writeBio();
	}
}
