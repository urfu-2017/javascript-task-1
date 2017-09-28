'use strict';

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
    if (typeof time !== 'string') {
        throw new TypeError();
    }

    const tokens = time.split(':');
    const hours = parseInt(tokens[0], 10);
    const minutes = parseInt(tokens[1], 10);

    if (hours < -1 || hours > 23 || minutes < -1 || minutes > 59) {
        throw new TypeError();
    }

    const romanHours = convertToRoman(hours);
    const romanMinutes = convertToRoman(minutes);

    return `${romanHours}:${romanMinutes}`;
}

module.exports = romanTime;
