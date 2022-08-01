export function SoundBoard({
}) {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
    const forestAudio = new Audio("../sound/Floresta.wav");
    const rainAudio = new Audio("../sound/Chuva.wav");
    const coffeeAudio = new Audio("../sound/Cafeteria.wav");
    const fireAudio = new Audio("../sound/Lareira.wav");

    forestAudio.loop = true;
    rainAudio.loop = true;
    coffeeAudio.loop = true;
    fireAudio.loop = true;

    buttonPressAudio.volume = 0.5;

    function buttonSound() {
        buttonPressAudio.play();
    }

    function timeEnd() {
        kitchenTimer.play();
    };

    return {
        buttonSound,
        timeEnd,
        forestAudio,
        rainAudio,
        coffeeAudio,
        fireAudio,
    }
}