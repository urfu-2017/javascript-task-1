'use strict';


const TENS = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
const UNITS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let timePattern = /^([0,1][0-9]|2[0-3]):([0-5][0-9])$/;
    if (!timePattern.test(time)) {
        throw new TypeError('invalid time');
    }
    time = time.match(timePattern);
    let hours = parseInt(time[1], 10);
    let minutes = parseInt(time[2], 10);

    return convertToRoman(hours) + ':' + convertToRoman(minutes);
}

function convertToRoman(number) {
    if (number === 0) {
        return 'N';
    }

    return TENS[Math.floor(number / 10)] + UNITS[number % 10];
}

module.exports = romanTime;
