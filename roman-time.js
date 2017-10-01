'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

let romanNumbers = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
let romanDecade = ['X', 'XX', 'XXX', 'XL', 'L'];

function checkFormat(time) {
    if (time.length !== 5 || time === null || time === undefined) {
        throw new TypeError('Неверное время');
    }
}

function checkHours(hours) {
    if (hours >= 24 || hours < 0 || isNaN(hours)) {
        throw new TypeError('Неверное время');
    }
}

function checkMinutes(minutes) {
    if (minutes >= 60 || minutes < 0 || isNaN(minutes)) {
        throw new TypeError('Неверное время');
    }
}

function getRomanType(number) {
    let decade = (number - number % 10) / 10;
    let units = number % 10;
    let time = '';
    if (number === 0) {
        time += romanNumbers[0];

        return time;
    }
    if (decade > 0) {
        time += romanDecade[decade - 1];
    }
    if (units > 0) {
        time += romanNumbers[units];
    }

    return time;
}

function romanTime(time) {
    checkFormat(time);
    let numbers = time.split(':');
    let hours = Number(numbers[0]);
    let minutes = Number(numbers[1]);
    checkHours(hours);
    checkMinutes(minutes);
    time = getRomanType(hours) + ':' + getRomanType(minutes);

    return time;
}

module.exports = romanTime;
