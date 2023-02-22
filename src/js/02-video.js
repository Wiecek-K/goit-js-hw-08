import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector("iframe");
const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

function playerCT() {
	player.getCurrentTime().then(function (seconds) {
		localStorage.setItem("videoplayer-current-time", seconds);
	});
}
player.on("timeupdate", throttle(playerCT, 1000));
