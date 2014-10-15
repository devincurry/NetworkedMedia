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

var newsOn = false;
var playerOn = false;
var bioOn = false;

var newsDiv;
var bioDiv;
var soundcloudDiv;

var bioPt1 = "Eclectic electronic producer Grand Atrium grew up as Devin Curry, tucked neatly in the canyons just outside LA where he could properly marinate in synths. As a teen, he began tinkering with his first analog synthesizer between indulging in kung fu films and video games. He continued to work on audio art on the West Coast for years. Now Curry lays his head and Moog in Brooklyn, primarily focusing on using vintage drum machines and synthesizers in his sensory-engaging, personal electronic music."
var bioPt2 = "The artist has stitched together official remixes for artists like Taken By Trees, Memoryy and others. His remix of Heartrevolution’s 'Pop Heart' also appeared on a compilation for Maison Kitsune Records, Kitsune America 2.";


function setup() {
	createCanvas(displayWidth, displayHeight);
	colorMode(HSB, 100, 100, 100, 100);
  	background(90, 0, 100,100);
}

function draw() {
  	size = displayWidth/division;
  	breathe();
  	strokeWeight(gap);
  	stroke(gapHue,100,100);
	squares();
	writeGrand();
	writeHome();
	writeMusic();
	writeAbout();
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

function writeGrand() {
	noStroke();
	strokeWeight(2);
	textSize(size/4);
	textStyle(BOLD);
	fill(0,0,100);
	text("GRAND ATRIUM", size, size*2/3); 
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
	var buttonXmin = size*5;
	var buttonXmax = size*6;
	var buttonYmin = size/2;
	var buttonYmax = buttonYmin + size/4;
	if (mouseX >= buttonXmin && mouseX < buttonXmax && mouseY >= buttonYmin && mouseY <= buttonYmax) {
		textStyle(BOLD);
	} else {
		textStyle(NORMAL);
	}
	fill(0,0,100);
	text("ABOUT", size*5.3, size*2/3);
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

function writeNews() {
	newsDiv = createDiv("Upcoming Shows:");
	//newsDiv.parent('news');
	newsDiv.position(size+division*2,size+division*3);
	newsOn = !newsOn;
}

function writeBio() {
	bioDiv = createDiv("Eclectic electronic producer Grand Atrium grew up as Devin Curry, tucked neatly in the canyons just outside LA where he could properly marinate in synths. As a teen, he began tinkering with his first analog synthesizer between indulging in kung fu films and video games. He continued to work on audio art on the West Coast for years. Now Curry lays his head and Moog in Brooklyn, primarily focusing on using vintage drum machines and synthesizers in his sensory-engaging, personal electronic music.</p>The artist has stitched together official remixes for artists like Taken By Trees, Memoryy and others. His remix of Heartrevolution's \"Pop Heart\" also appeared on a compilation for Maison Kitsune Records, Kitsune America 2.");
	bioDiv.parent('bio');
	bioDiv.position(size+division*2,size+division*3);
	bioOn = !newsOn;
}

function soundcloud() {
	soundcloudDiv = createDiv("<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/49426745&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>");
	soundcloudDiv.position(displayWidth/division+division,displayWidth/division+division);
	playerOn = true;
}

function mouseClicked() {
	var buttonYmin = size/2;
	var buttonYmax = buttonYmin + size/4;
	var homeXmin = size*3;
	var homeXmax = size*4;
	var musicXmin = size*4;
	var musicXmax = size*5;
	var aboutXmin = size*5;
	var aboutXmax = size*6;

	if (mouseY >= buttonYmin && mouseY <= buttonYmax){
		if (mouseX >= homeXmin && mouseX < homeXmax){ //home
			if (playerOn){
				soundcloudDiv.hide();
			}
			if (bioOn){
				bioDiv.hide();
				bioOn = !bioOn;
			}
			writeNews();
		}
		if (mouseX >= musicXmin && mouseX < musicXmax){ //music
			if (newsOn){
				newsDiv.hide();
				newsOn = !newsOn;
			}
			if (bioOn){
				bioDiv.hide();
				bioOn = !bioOn;
			}

			if (!playerOn){
				soundcloud();
				//playerOn = !playerOn;
			} else {
				soundcloudDiv.show();
			}
		}
		if (mouseX >= aboutXmin && mouseX < aboutXmax){ //about
			if (newsOn){
				newsDiv.hide();
				newsOn = !newsOn;
			}
			if (playerOn) {
				soundcloudDiv.hide();
			}
			writeBio();
		}
	}
}

