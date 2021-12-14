import MediaPlayer from "./Mediaplayer.js";

const video = document.querySelector("video");
const button = document.querySelector("button");
button.onclick = () => player.togglePlay();

const player = new MediaPlayer( { el: video });
// this guarda un valor en la instancia de un objeto, y con prototype podemos acceder a ese valor