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

function toRoman(number) {
    if (number === 0) {
        return 'N';
    }

    var result = '';
    var isPrevNumberStartWithNine = false;

    for (var i = 0; i < ROMAN_DIGITS.length; i++) {
        var romanDigit = ROMAN_DIGITS[i];
        var digitsCount = Math.floor(number / romanDigit.value);

        switch (digitsCount) {
            case 0:
                continue;
            case 4:
                result = isPrevNumberStartWithNine
                ? result.slice(0, -1) + romanDigit.letter + ROMAN_DIGITS[i - 2].letter
                : result + romanDigit.letter + ROMAN_DIGITS[i - 1].letter;
                break;
            default:
                result += romanDigit.letter.repeat(digitsCount);
        }

        isPrevNumberStartWithNine = number.toString()[0] === '9';
        number -= romanDigit.value * digitsCount;
    }

    return result;
}

function parseTime(time) {
    if (typeof(time) === 'string' && isValidTime(time)) {
        var parsedTime = time.split(':');

        return [parseInt(parsedTime[0], 10), parseInt(parsedTime[1], 10)];
    }

    throw new TypeError('Неверное время');
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var [hours, minutes] = parseTime(time);

    return toRoman(hours) + ':' + toRoman(minutes);
}

module.exports = romanTime;
