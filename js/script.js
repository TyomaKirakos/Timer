// Константы и переменные
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
let destinyDay = new Date(2022, 1, 3, 0 , 0, 0 );
let timeInterval;
let currentDate;

// Функции
// Функция для склонения
function declNum(number, text_forms) {  
    number = Math.abs(number) % 100; 
    let number1 = number % 10;
    if (number > 10 && number < 20) {
        return text_forms[2];
    } else if (number1 > 1 && number1 < 5) {
        return text_forms[1];
    } else if (number1 == 1) {
        return text_forms[0];
    }
    
    return text_forms[2];
}

// функция вставки чисел в верстку
function inputDigits(number, numberPlace){
    if (String(number).length == 1){
        numberPlace.textContent = '0' + number;
    } else{
        numberPlace.textContent = number;
    }
}

// общая функция работы таймера
function calculatingTime(){
    currentDate = new Date();
    timeInterval = destinyDay - currentDate;

    seconds = Math.floor((timeInterval / 1000) % 60);
    minutes = Math.floor((timeInterval / 1000 / 60 ) % 60);
    hours = Math.floor((timeInterval / 1000 / 60 / 60) % 24);
    days = Math.floor(timeInterval / 1000 / 60 / 60 / 24);
    console.log(seconds);

    secondsText.textContent = declNum(seconds, ['секунда', 'секунды', 'секунд']);
    minutesText.textContent = declNum(minutes, ['минута', 'минуты', 'минут']);
    hoursText.textContent = declNum(hours, ['час', 'часа', 'часов']);
    daysText.textContent = declNum(days, ['день', 'дня', 'дней']);

    inputDigits(seconds, secondsBlock);
    inputDigits(minutes, minutesBlock);
    inputDigits(hours, hoursBlock);

    daysBlock.textContent = days;
};

// функция, что позволяет изменять время каждую секунду
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