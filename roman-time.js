'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!time) {
        throw new TypeError('Неверное время');
    }
    let splitTime = time.toString().split(':');
    if (splitTime.length !== 2) {
        throw new TypeError('Неверное время');
    }
    let hours = parseInt(splitTime[0], 10);
    let minutes = parseInt(splitTime[1], 10);
    if (isNaN(hours) || isNaN(minutes) || !isValid(hours, minutes)) {
        throw new TypeError('Неверное время');
    }

    return convertToRoman(hours) + ':' + convertToRoman(minutes);
}

function isValid(hours, minutes) {
    if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0) {
        return false;
    }

    return true;
}

function convertToRoman(number) {
    let arab = [0, 1, 4, 5, 9, 10, 40, 50];
    let roman = ['N', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    let i = arab.length;
    let result = '';
    if (number === 0) {
        return 'N';
    }
    while (number > 0) {
        if (number >= arab[i]) {
            result += roman[i];
            number -= arab[i];
        } else {
            --i;
        }
    }

    return result;
}

module.exports = romanTime;
