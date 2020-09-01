song="";

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,350);
canvas.position(350,300);

video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,600,350);
}

function play(){
song.play();
}

function stop(){
    song.stop();
}