'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ROMAN_NUMERALS = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
var ARABIC_NUMERALS = ['1', '4', '5', '9', '10', '40', '50'];

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!isValitedString(time)) {
        throw new TypeError();
    }

    var splitedTime = time.split(':');
    var hour = convertNumber(splitedTime[0], 23);
    var minute = convertNumber(splitedTime[1], 59);
    console.info(hour + ':' + minute);

    return hour + ':' + minute;
}

function isValitedString(time) {
    var reg = /^\d{2}:\d{2}$/;

    return time.test(reg);
}

function convertNumber(number, maxValue) {
    number = parseInt(number, 10);
    if (number > maxValue) {
        throw new TypeError();
    }
    if (number === 0) {
        return 'N';
    }

    return getRomanNumber(number);
}

function getRomanNumber(number) {
    var romanNumber = '';
    var currentPosition = ARABIC_NUMERALS.length - 1;
    while (number > 0) {
        if (number >= ARABIC_NUMERALS[currentPosition]) {
            romanNumber += ROMAN_NUMERALS[currentPosition];
            number -= ARABIC_NUMERALS[currentPosition];
        } else {
            currentPosition--;
        }
    }

    return romanNumber;
}

module.exports = romanTime;
