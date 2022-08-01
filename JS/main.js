import { Timer } from "./timer.js";
import { CssHandler } from "./cssHandler.js";
import { Buttons } from "./buttons.js";
import { SoundBoard } from "./soundBoard.js";
import {
    themeMode, toggleMode,
    minutesDisplay, secondsDisplay,
    playButton, pauseButton,
} from "./elements.js";

const cssHandler = CssHandler({
    themeMode, toggleMode,
    playButton, pauseButton
});

const soundBoard = SoundBoard({
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetCss : cssHandler.stop,
    timeEnd: soundBoard.timeEnd
});

Buttons({
    timer,
    cssHandler,
    soundBoard
});