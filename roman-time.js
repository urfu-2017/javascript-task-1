'use strict';

const TIME_REGEXP = new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
const ROMAN_DIGITS = [
    Object.freeze({ value: 50, letter: 'L' }),
    Object.freeze({ value: 10, letter: 'X' }),
    Object.freeze({ value: 5, letter: 'V' }),
    Object.freeze({ value: 1, letter: 'I' })
];

function isValidTime(time) {
    return TIME_REGEXP.test(time);
}

function numberPartToResult(number, result, romanDigit, digitsCount) {
    switch (number) {
        case 4:
            result += 'IV';
            number -= 4;
            break;
        case 9:
            result += 'IX';
            number -= 9;
            break;
        case 40:
            result += 'XL';
            number -= 40;
            break;
        default:
            result += romanDigit.letter.repeat(digitsCount);
            number -= romanDigit.value * digitsCount;
    }

    return [number, result];
}

function toRoman(number) {
    if (number === 0) {
        return 'N';
    }

    var result = '';

    for (var i = 0; i < ROMAN_DIGITS.length; i++) {
        var romanDigit = ROMAN_DIGITS[i];
        var digitsCount = Math.floor(number / romanDigit.value);

        if (digitsCount === 0) {
            continue;
        }

        [number, result] = numberPartToResult(number, result, romanDigit, digitsCount);
    }

    return result;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (isValidTime(time)) {
        var hoursAndMinutes = time.split(':');
        var hours = parseInt(hoursAndMinutes[0], 10);
        var minutes = parseInt(hoursAndMinutes[1], 10);

        return toRoman(hours) + ':' + toRoman(minutes);
    }

    throw new TypeError('Неверное время');
}

module.exports = romanTime;
