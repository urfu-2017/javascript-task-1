'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) { // eslint-disable-line complexity
    if (time === null || time === undefined) {
        throw new TypeError('Переменная или параметр неправильного типа');
    }

    var hours = parseInt(time.split(':')[0], 10);
    var minutes = parseInt(time.split(':')[1], 10);

    if (isNaN(hours) || isNaN(minutes)) {
        throw new TypeError('Переменная или параметр неправильного типа');
    }

    if (hours >= 24 || minutes > 59) {
        throw new TypeError('Переданный параметр находится за границами допустимого диапазона');
    }

    var hoursToRoman = romanNumber(hours);
    var minutesToRoman = romanNumber(minutes);

    return hoursToRoman + ':' + minutesToRoman;
}

function romanNumber(num) { // eslint-disable-line complexity, max-statements
    var reminder = num;
    var result = '';

    if (num === 0) {
        result = 'N';
    }

    if (reminder >= 50) {
        result += 'L';
        reminder -= 50;
    }

    if (reminder >= 40) {
        result += 'XL';
        reminder -= 40;
    }

    while (reminder >= 10) {
        result += 'X';
        reminder -= 10;
    }

    if (reminder >= 9) {
        result += 'IX';
        reminder -= 9;
    }

    if (reminder >= 5) {
        result += 'V';
        reminder -= 5;
    }

    if (reminder >= 4) {
        result += 'IV';
        reminder -= 4;
    }

    while (reminder >= 1) {
        result += 'I';
        reminder -= 1;
    }

    return result;
}

module.exports = romanTime;
