// Background Music

const backgroundMusic = document.querySelector('audio');
const volumeButton = document.querySelector('.volume');


var starting = new Audio('./audio/pacman_beginning.wav');
var eating = new Audio("./audio/pacman_chomp.wav");
var death = new Audio("./audio/pacman_death.wav");
var intermission = new Audio("./audio/pacman_intermission.wav");


// Music Button Right-Panel 

function toggleButton () {
    if(backgroundMusic.paused) {
        backgroundMusic.play();
        volumeButton.src = `./img/volume.png`;
    } else {
        backgroundMusic.pause();
        volumeButton.src = `./img/no-volume.webp`;
    }
}

volumeButton.onclick = () => {
    toggleButton() 
};