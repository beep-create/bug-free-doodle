
noseX=0;
noseY=0;

function setup() {
canvas=createCanvas(650,600);
canvas.center();
video = createCapture(VIDEO);
video.size(550,500);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded() {
console.log("posenet is initialized");
}

function gotPoses(results) {
if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y+50;
} 
}

function preload() {
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function draw() {
image(video, 0,0,650,600);
image(mustache,noseX,noseY,100,100);
}



function take_snapshot() {
    save('funnypicture.png');
}