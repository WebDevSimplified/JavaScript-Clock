setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const numbers = document.getElementsByClassName("number");

function setClock() {
    const currentDate = new Date();
    const second = currentDate.getSeconds();
    const secondsRatio = second / 60;

    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

    if (second % 5 === 0) {
        const index = second === 0 ? numbers.length - 1 : ((second / 5) - 1);
        numbers[index].style.color = '#11aa37';
        numbers[index].classList = `number number${index + 1} glow`;
    } else if ((second - 1) % 5 === 0) {
        const index = second === 1 ? numbers.length - 1 : (((second - 1) / 5) - 1);
        numbers[index].style.color = 'black';
        numbers[index].classList = `number number${index + 1}`;
    }
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);

}

setClock();