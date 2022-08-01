export function Timer({
    minutesDisplay,
    secondsDisplay,
    resetCss,
    timeEnd
}) {

    let minutesNumber = minutesDisplay.textContent;
    let secondsNumber = secondsDisplay.textContent;
    let timeout;

    function update(minutes, seconds) {
        minutesNumber = (minutes === undefined ? minutesNumber : minutes);
        secondsNumber = (seconds === undefined ? 0 : seconds);
        minutesDisplay.textContent = String(minutesNumber).padStart(2, 0);
        secondsDisplay.textContent = String(secondsNumber).padStart(2, 0);
    };

    function countdown() {
        timeout = setTimeout(() => {

            let minutes = Number(minutesDisplay.textContent);
            let seconds = Number(secondsDisplay.textContent);

            
            if(seconds <= 0 && minutes > 0) {
                    seconds = 60;
                    minutes = minutes - 1;
            }

            seconds = seconds -1;
            
            update(minutes, seconds);

            if(minutes <= 0 && seconds <= 0) {
                timeEnd();
                update(25, 0);
                resetCss();
                return;
            }

            countdown();
        }, 1000);
    };

    function hold() {
        clearTimeout(timeout);
    };
 
    function reset(minutes) {
        update(minutes, 0);
        clearTimeout(timeout);
    }

    function timeUp() {
        let minute = Number(minutesDisplay.textContent);
        minute = minute + 5;

        return minute;
    }

    function timeDown() {
        let minute = Number(minutesDisplay.textContent);
        minute = minute - 5;

        return minute;
    }

    return {
        update,
        countdown,
        hold,
        reset,
        timeUp,
        timeDown
    }
}