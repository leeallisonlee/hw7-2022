var video = document.querySelector("#player1"); //this is grabbing to the video


//here everything that happens is done automatically

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//turn off autoplay
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay)
	//turn off looping
	video.loop = false;
	console.log("Looping is set to " + video.loop)
	
});

//here, everything that happens is due to a click or an action

document.querySelector("#play").addEventListener("click", function() { //event is at the click of #play button
	//check if this works
	console.log("Play Video");
	//get the actual video
	var vid = document.querySelector("#player1");

	//volume of video
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"

	//play the video
	vid.play();


});


document.querySelector("#pause").addEventListener("click", function() { //event is at the click of #pause button
	//check if this works clicking
	console.log("Pause Video")

	//pause the video
	video.pause();
	
})


document.querySelector("#slower").addEventListener("click", function() { //slow down
	//check if click is working
	console.log("Slow Down Video")

	//slow down video
	video.playbackRate *= 0.9;


	console.log("Slow Down Video at " + video.playbackRate)

})


document.querySelector("#faster").addEventListener("click", function() { //speed up
	//check if click is working
	console.log("Speed Up Video")

	//slow down video
	video.playbackRate /= 0.9;

	console.log("Speed Up Video at " + video.playbackRate)

})

document.querySelector("#skip").addEventListener("click", function() { //skip ahead
	//check if click is working
	console.log("Skip Ahead Video")


	//slow down video
	video.currentTime += 10;
	
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}

	console.log("Current Time Video at " + video.currentTime);

})

document.querySelector("#mute").addEventListener("click", function() { //skip ahead
	//check if click is working
	console.log("Mute Video")

	if (video.muted == false) {
		video.muted = true;
		console.log("Muted is " + video.muted);
		this.innerHTML = "Unmute"
	} else {
		video.muted = false
		console.log("Muted is " + video.muted);
		this.innerHTML = "Mute"
	}
	

})

//audio slider
document.querySelector("#slider").addEventListener("input", function () {
	console.log("Slider Volume")

	video.volume = (this.value / 100);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

	console.log("Volume set to " + (video.volume * 100))
})

//slider style change vintage

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Style Click")
	document.querySelector("#player1").classList.add("oldSchool")
	console.log("Changed Style to Old School")

})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Click")

	document.querySelector("#player1").classList.remove("oldSchool")

	console.log("Changed Style to Original")
})