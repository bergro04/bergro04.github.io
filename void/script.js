function loadFile(href){
	$("#main")
		//.fadeOut(1000)
		.load("http://robertberger5.github.io/void/"+href)
		//.fadeIn(1000)
	;
};

function millisecondToTime(millisecondz){ //TODO:this
	var time=millisecondz;
	return time;
}



//SOUNDCLOUD SHIT
SC.initialize({
	client_id: "8ee7b3067929d0440f7065ad8874cad8", //needs this to do anything
	redirect_uri: "http://robertberger5.github.io/void/callback.html", //need this if users log in for anythins
});

var userId = 205809940; //OUR FUCKING USER ID YAY
  
$(document).ready(function() {
	SC.get("/tracks", { //get all tracks from us
		user_id: userId
	}, function (tracks) { //tracks is an array
		for(var a in tracks){
			//console.log(a+": "+tracks[a].title)
		}
		//for noobs, iframe imbedding
		//SC.oEmbed(tracks[0].permalink_url,document.getElementById('player')) //change the index of the array for different songs

		//for pros like me, streaming
		SC.stream(tracks[2].stream_url,{
			autoPlay:true //SoundManager 2 options
		},function(sound){ //sound is the center of attention now, it's the actual song
        		
        		$("#soundButton").click(function(e){
        			if(sound.paused){
        				sound.resume();
        				document.getElementById("buttonSound").src="http://image005.flaticon.com/1/png/512/0/375.png";
        			}else if(!sound.paused){
        				sound.pause();
        				document.getElementById("buttonSound").src="https://cdn1.iconfinder.com/data/icons/material-audio-video/20/pause-circle-outline-128.png";
        			}else{
        				console.log("wat");
        			}
        		});
        		
        		var percentPlayed=0;
        		//console.log(sound.duration);
        		setInterval(function(){ //every so often it changes the widths of how much we've heard and not heard
        			percentPlayed=100*(sound.position/sound.duration);
        			document.getElementById("heard").style.width=percentPlayed + "%";
        			document.getElementById("unheard").style.width=(100-percentPlayed) + "%";
        			document.getElementById("timePlayed").innerHTML=millisecondToTime(sound.position);
        			document.getElementById("timeLeft").innerHTML=millisecondToTime(sound.duration);
        		},100);
        		//TODO: give the player the ability to change sound.position easily
        		//TODO: Song Selector button drops down something as wide as the screen is, list of songs to choose from
        		
        		
    		});
	});
});
