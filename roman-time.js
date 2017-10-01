'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function div(num, by) { 
    // Целочисленное деление
    return (num - num % by) / by;
}

function parseTime(time, iter) {   
    // Разделение времени на часы и минуты 
    let parsedNum = parseInt(time[iter], 10);
    
    if (isNaN(parsedNum)) {
        throw TypeError;
    } 

    return parsedNum;
}

function arabToRoman(tens, units) {
    let romanNums = {
        0:"",
        1:"I",
        2:"II",
        3:"III",
        4:"IV",
        5:"V",
        6:"VI",
        7:"VII",
        8:"VIII",
        9:"IX",
        10:"X",
        20:"XX",
        30:"XXX",
        40:"XL",
        50:"L"
    }

    let romanTime = '';

    if (tens === 0 && units === 0) {
        romanTime += 'N';
    } else {
        romanTime += romanNums[tens * 10];
        romanTime += romanNums[units];
    }

    return romanTime;
}

function changeTime(hours, minutes) {
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw TypeError;
    }

    let romanTime = '';

    let tensHour = div(hours, 10);    
    let unitsHour = hours % 10;
    
    let tensMinutes = div(minutes, 10);
    let unitsMinutes = minutes % 10;

    romanTime += arabToRoman(tensHour, unitsHour) + ':' + arabToRoman(tensMinutes, unitsMinutes);

    return romanTime
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    try {
        let romanTime = '';
        
        time = time.split(':');

        let hours = parseTime(time, 0);
        let minutes = parseTime(time, 1);

        romanTime = changeTime(hours, minutes);

        return romanTime;

    } catch (TypeError) {
        return 'TypeError: Неверное время';
    }
}

module.exports = romanTime;
