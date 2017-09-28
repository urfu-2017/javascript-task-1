'use strict';

const isValidNumber = (value, a, b) => isFinite(value) && value >= a && value <= b;

const parseTime = (time) => {
    if (typeof time !== 'string' || time.length > 5) {
        throw new TypeError();
    }

    const tokens = time.split(':');
    const hours = parseInt(tokens[0], 10);
    const minutes = parseInt(tokens[1], 10);

    if (!isValidNumber(hours, 0, 23) || !isValidNumber(minutes, 0, 59)) {
        throw new TypeError();
    }

    return { hours, minutes };
};

const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

const convertToRoman = (number) => {
    const indexOfTens = parseInt(number / 10, 10);
    const indexOfOnes = parseInt(number % 10, 10);

    if (indexOfTens === 0 && indexOfOnes === 0) {
        return 'N';
    }

    return tens[indexOfTens] + ones[indexOfOnes];
};

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    const parsedTime = parseTime(time);

    const romanHours = convertToRoman(parsedTime.hours);
    const romanMinutes = convertToRoman(parsedTime.minutes);

    return `${romanHours}:${romanMinutes}`;
}

module.exports = romanTime;
