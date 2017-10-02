'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

const DOZENS = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
const UNITS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function romanTime(time) {
    var correctTime = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
    if (!correctTime.test(time)) {
        throw new TypeError('Invalid time');
    }
    var parseTime = time.match(correctTime);
    var hours = parseInt(parseTime[1], 10);
    var minuts = parseInt(parseTime[2], 10);

    return toRoman(hours) + ':' + toRoman(minuts);
}

function toRoman(digit) {
    if (digit === 0) {
        return 'N';
    }

    return DOZENS[Math.floor(digit / 10)] + UNITS[digit % 10];
}

module.exports = romanTime;
