import Player from "@vimeo/player";
const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

player.on("timeupdate", function () {
	player.getCurrentTime().then(function (seconds) {
		console.log(seconds);
		localStorage.setItem("videoplayer-current-time", seconds);
	});
});
