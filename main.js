song="";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,350);
canvas.position(350,300);

video=createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video , modeloaded);
poseNet.on("pose", gotPoses);
}

function modeloaded(){
    console.log("PoseNet is Initialized");
    
}



function draw(){
image(video,0,0,600,350);
fill('red');
stroke('black');
if(scoreleftWrist > 0.2){
circle(leftWristx,leftWristy,20);
InnumberleftWristy=Number(leftWristy);
remove_decimels=floor(InnumberleftWristy);
volume=remove_decimels/500;
document.getElementById("volume").innerHTML="volume =" + volume;
song.setVolume(volume);
}
}



function play(){
song.play();
song.setVolume(1);
song.rate(1);
}



function stop(){
    song.stop();
}



function  gotPoses(results){
    if(results.length > 0){
     console.log(results);
     scoreleftWrist = results[0].pose.keypoints[9].score;
     console.log("scoreleftWrist ="+ scoreleftWrist)

     leftWristx=results[0].pose.leftWrist.x;
     leftWristy=results[0].pose.leftWrist.y;
     console.log("leftWristx =" + leftWristx + "leftWristy =" + leftWristy);

    rightWristy=results[0].pose.rightWrist.y;
    rightWristx=results[0].pose.rightWrist.x;
    console.log("rightWristx =" + rightWristx + "rightWristy =" + rightWristy);

    }

}