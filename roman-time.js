'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    validateInput(time);
    const [hours, minutes] = time.split(':').map(s => parseInt(s, 10));

    if (hours >= 0 && minutes >= 0 && hours < 24 && minutes < 60) {
        return toRoman(hours) + ':' + toRoman(minutes);
    }

    throw new TypeError('Неверное время');
}

function validateInput(time) {
    var timeFormat = /^[0-9]{2}:[0-9]{2}$/;
    if (time === undefined || time === null || !timeFormat.test(time)) {
        throw new TypeError('Неверное время');
    }
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
