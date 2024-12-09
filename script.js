let numSegments = 12; 
let angle;
let radius;
let showEllipse = false;
let showSquare = false;
let shouldDraw = false;

function setup() {
    createCanvas(windowWidth * 0.8, windowHeight);
    angle = TWO_PI / numSegments; 
    // TWO_PI = 360 degrees
    radius = min(width, height) / 2; 
    frameRate(10); 
    // refresh 10 times per second

    document.getElementById('showEllipse').addEventListener('click', () => {
        shouldDraw = true;
        showEllipse = true;
        showSquare = false;
    });

    document.getElementById('showSquare').addEventListener('click', () => {
        shouldDraw = true;
        showSquare = true;
        showEllipse = false;
    });
}


function draw() {
    translate(width / 2, height / 2); 
    background(0); 

    for (let i = 0; i < numSegments; i++) {
        push();
        rotate(angle * i); 
        // rotate the segment for 11 times
        drawSegment();
        scale(1, -1); 
        // flip the segment vertically
        drawSegment();
        // more asymentric
        pop();
    }
}

function drawSegment() {
    if (!shouldDraw) return;

    let x = mouseX - width / 2; 
    let y = mouseY - height / 2; 

    fill(random(100, 255), random(100, 255), random(100, 255), 0);
    // alpha value is 0
    stroke(random(100, 255), random(100, 255), random(100, 255), 100);

    if (showEllipse) {
        ellipse(x * random(0.2, 0.5), y * random(0.2, 1), 200, 200);     
    } else if (showSquare) {
        square(x * random(0, 0.5), y * random(0, 0.5), 200);
    }
}

function windowResized() {
    resizeCanvas(windowWidth * 0.8, windowHeight);
}