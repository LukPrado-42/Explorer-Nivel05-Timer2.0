import {
    toggleMode,
    playButton, pauseButton, stopButton, timeUpButton, timeDownButton,
    minutesDisplay,
    forestSound, forestSlider, rainSound, rainSlider,
    coffeeSound, coffeeSlider, fireSound, fireSlider
} from "./elements.js";

export function Buttons({
    timer,
    cssHandler,
    soundBoard
}) {
    let initialMinute = Number(minutesDisplay.textContent);

    toggleMode.addEventListener("click", () => {
        cssHandler.toggleLightDark();
        soundBoard.buttonSound();
    });

    playButton.addEventListener("click", () => {
        cssHandler.play();
        timer.countdown();
        soundBoard.buttonSound();
    });

    pauseButton.addEventListener("click", () => {
        cssHandler.pause();
        timer.hold();
        soundBoard.buttonSound();
    });

    stopButton.addEventListener("click", () => {
        cssHandler.stop();
        timer.reset(initialMinute);
        soundBoard.buttonSound();
    });

    timeUpButton.addEventListener("click", () => {
        initialMinute = timer.timeUp();
        timer.update(initialMinute, 0);
        soundBoard.buttonSound();
    });

    timeDownButton.addEventListener("click", () => {
        initialMinute = timer.timeDown();
        timer.update(initialMinute, 0);
        soundBoard.buttonSound();
    });

    forestSound.addEventListener("click", () => {
        cssHandler.toggleSelected(forestSound);
        forestSound.parentElement.classList.contains("selected") ?
        soundBoard.forestAudio.play() :
        soundBoard.forestAudio.pause();
    });
    forestSlider.addEventListener("input", () => {
        if(forestSlider.parentElement.classList.contains("selected")) {
            soundBoard.forestAudio.volume = forestSlider.value/100;
        }
    });
    forestSound.parentElement.addEventListener("click", (event) => {
        if (event.target == forestSound.closest("button")) {
            forestSlider.value = 50;
            soundBoard.forestAudio.volume = 0.5;
        }
    })
    
    rainSound.addEventListener("click", () => {
        cssHandler.toggleSelected(rainSound);
        rainSound.parentElement.classList.contains("selected") ?
            soundBoard.rainAudio.play() :
            soundBoard.rainAudio.pause();
    });
    rainSlider.addEventListener("input", () => {
        if(rainSlider.parentElement.classList.contains("selected")) {
            soundBoard.rainAudio.volume = rainSlider.value/100;
        }
    });
    rainSound.parentElement.addEventListener("click", (event) => {
        if (event.target == rainSound.closest("button")) {
            rainSlider.value = 50;
            soundBoard.rainAudio.volume = 0.5;
        }
    })

    coffeeSound.addEventListener("click", () => {
        cssHandler.toggleSelected(coffeeSound);
        coffeeSound.parentElement.classList.contains("selected") ?
            soundBoard.coffeeAudio.play() :
            soundBoard.coffeeAudio.pause();
    });
    coffeeSlider.addEventListener("input", () => {
        if(coffeeSlider.parentElement.classList.contains("selected")) {
            soundBoard.coffeeAudio.volume = coffeeSlider.value/100;
        }
    });
    coffeeSound.parentElement.addEventListener("click", (event) => {
        if (event.target == coffeeSound.closest("button")) {
            coffeeSlider.value = 50;
            soundBoard.coffeeAudio.volume = 0.5;
        }
    })

    fireSound.addEventListener("click", () => {
        cssHandler.toggleSelected(fireSound);
        fireSound.parentElement.classList.contains("selected") ?
            soundBoard.fireAudio.play() :
            soundBoard.fireAudio.pause();
    });
    fireSlider.addEventListener("input", () => {
        if(fireSlider.parentElement.classList.contains("selected")) {
            soundBoard.fireAudio.volume = fireSlider.value/100;
        }
    })
    fireSound.parentElement.addEventListener("click", (event) => {
        if (event.target == fireSound.closest("button")) {
            fireSlider.value = 50;
            soundBoard.fireAudio.volume = 0.5;
        }
    })

}