const daysBlock = document.querySelector('.days-block__number');
const daysText = document.querySelector('.days-block__subtitle');

const hoursBlock = document.querySelector('.hours-block__number');
const hoursText = document.querySelector('.hours-block__subtitle');

const minutesBlock = document.querySelector('.minutes-block__number');
const minutesText = document.querySelector('.minutes-block__subtitle');

const secondsBlock = document.querySelector('.seconds-block__number');
const secondsText = document.querySelector('.seconds-block__subtitle');

let days;
let hours;
let minutes;
let seconds;
let destinyDay = new Date(2022, 0, 31, 16 , 20, 50 );
let timeInterval;
let currentDate;

function calculatingTime(){
    currentDate = new Date();
    timeInterval = destinyDay - currentDate;

    seconds = Math.floor((timeInterval / 1000) % 60);
    minutes = Math.floor((timeInterval / 1000 / 60 ) % 60);
    hours = Math.floor((timeInterval / 1000 / 60 / 60) % 24);
    days = Math.floor(timeInterval / 1000 / 60 / 60 / 24);
    console.log(seconds);

    if (String(seconds)[String(seconds).length-1] == '1'){
        secondsText.textContent = 'секунда'
    } else if (String(seconds)[String(seconds).length-1] == '2' || String(seconds)[String(seconds).length-1] == '3' || String(seconds)[String(seconds).length-1] == '4'){
        secondsText.textContent = 'секунды';
    } else{
        secondsText.textContent = 'секунд';
    }

    if (String(seconds).length == 1){
        secondsBlock.textContent = '0' + seconds;
    } else{
        secondsBlock.textContent = seconds;
    }

    if (String(minutes)[String(minutes).length-1] == '1'){
        minutesText.textContent = 'минута'
    } else if (String(minutes)[String(minutes).length-1] == '2' || String(minutes)[String(minutes).length-1] == '3' || String(minutes)[String(minutes).length-1] == '4'){
        minutesText.textContent = 'минуты';
    } else{
        minutesText.textContent = 'минут';
    }

    if (String(minutes).length == 1){
        minutesBlock.textContent = '0' + minutes;
    } else{
        minutesBlock.textContent = minutes;
    }

    if (String(hours)[String(hours).length-1] == '1'){
        hoursText.textContent = 'час'
    } else if (String(hours)[String(hours).length-1] == '2' || String(hours)[String(hours).length-1] == '3' || String(hours)[String(hours).length-1] == '4'){
        hoursText.textContent = 'часа';
    } else{
        hoursText.textContent = 'часов';
    }

    if (String(hours).length == 1){
        hoursBlock.textContent = '0' + hours;
    } else{
        hoursBlock.textContent = hours;
    }

    if (String(days)[String(days).length-1] == '1'){
        daysText.textContent = 'день'
    } else if (String(days)[String(days).length-1] == '2' || String(days)[String(days).length-1] == '3' || String(days)[String(days).length-1] == '4'){
        daysText.textContent = 'дня';
    } else{
        daysText.textContent = 'дней';
    }

    daysBlock.textContent = days;
};


let timerWorking = setInterval(() => {
    calculatingTime();
    if (timeInterval <= 1000){
        daysBlock.textContent = '0';
        daysText.textContent = 'дней';

        hoursBlock.textContent = '00';
        hoursText.textContent = 'часов';

        minutesBlock.textContent = '00';
        minutesText.textContent = 'минут';

        secondsBlock.textContent = '00';
        secondsText.textContent = 'секунд';

        console.log("очищаем");
        clearInterval(timerWorking);
    }
}, 1000);