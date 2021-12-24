Peter_pansong= "";
Harry_Pottersong = "";

song1_status = "";
song2_status = "";


scoreLeftWrist = 0;



leftWristX = 0;
leftWristY = 0;


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    song1_status = Peter_pansong.isPlaying();
	song2_status = Harry_Pottersong.isPlaying();
}

function draw(){
    image(video,0,0,600,530);
    fill("#000000");
    stroke("#f70000");
    song1_status=Peter_pansong.isPlaying();
    console.log(song1_status);
    if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);

			Peter_pansong.stop();

		if(song2_status == false)
		{
			Harry_Pottersong.play();
			document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
		}
	}
}
function play(){
    song.play();
    song.rate(1.5);
    song.setVolume(1);
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0)
{
  console.log(results);
  
  scoreLeftWrist =  results[0].pose.keypoints[9].score;
  
  
         console.log("scoreLeftwrist="+scoreleftWrist);
         rightWristX = results[0].pose.rightWrist.x;
         rightWristY = results[0].pose.rightWrist.y;
         console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
       
         leftWristX = results[0].pose.leftWrist.x;
         leftWristY = results[0].pose.leftWrist.y;
         console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
             
       }
        
    
}

  
  
