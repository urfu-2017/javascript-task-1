'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time === undefined || time === null || time.length !== 5) {
        throw new TypeError('Неверное время');
    }

    const [hours, minutes] = time.split(':').map(s => parseInt(s, 10));
    if (hours < 0 || minutes < 0 || hours > 23 || minutes > 59 ||
        isNaN(hours) || isNaN(minutes)) {
        throw new TypeError('Неверное время');
    }

    return toRoman(hours) + ':' + toRoman(minutes);
}

function toRoman(num) {
    if (num === 0) {
        return 'N';
    }

    const romanUnits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const romanDecimals = ['', 'X', 'XX', 'XXX', 'XL', 'L'];

    return romanDecimals[Math.floor(num / 10)] + romanUnits[Math.floor(num % 10)];
}

module.exports = romanTime;
