const toggleMode = document.querySelector(".toggle-mode")
const themeMode = document.documentElement;

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const playButton = document.querySelector(".button-play");
const pauseButton = document.querySelector(".button-pause");
const stopButton = document.querySelector(".button-stop");
const timeUpButton = document.querySelector(".button-time-up");
const timeDownButton = document.querySelector(".button-time-down");

const forestSound = document.querySelector(".image-wrapper.forest");
const forestSlider = document.querySelector(".soundboard-forest .slider");

const rainSound = document.querySelector(".image-wrapper.rain");
const rainSlider = document.querySelector(".soundboard-rain .slider");

const coffeeSound = document.querySelector(".image-wrapper.coffee");
const coffeeSlider = document.querySelector(".soundboard-coffee .slider");

const fireSound = document.querySelector(".image-wrapper.fire");
const fireSlider = document.querySelector(".soundboard-fire .slider");


export {
    toggleMode,
    themeMode,
    minutesDisplay,
    secondsDisplay,
    playButton,
    pauseButton,
    stopButton,
    timeUpButton,
    timeDownButton,
    forestSound,
    forestSlider,
    rainSound,
    rainSlider,
    coffeeSound,
    coffeeSlider,
    fireSound,
    fireSlider
}