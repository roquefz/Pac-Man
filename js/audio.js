// Background Music

const backgroundMusic = document.querySelector('audio');
const volumeButton = document.querySelector('.volume');


var starting = new Audio('./audio/pacman_beginning.wav');
var eating = new Audio("./audio/pacman_eatfruit.wav");
var death = new Audio("./audio/pacman_death.wav");


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