'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function getRomeTime(a) {
    var listOfDecimal = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var listOfUnit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    var decimal = Math.floor(a / 10);
    var unit = a % 10;

    if (decimal === 0 && unit === 0) {
        return 'N';
    }

    return listOfDecimal[decimal] + listOfUnit[unit];
}

function checkValid(a, b) {
    return (isNaN(a) || isNaN(b) || a > 23 || a < 0 || b > 59 || b < 0);
}

function romanTime(time) {
    if (!time || time.trim() === '' || time.length !== 5) {
        throw new TypeError();
    }

    var hours = time.split(':')[0].trim();
    var minutes = time.split(':')[1].trim();

    if (hours.length !== 2 || minutes.length !== 2) {
        throw new TypeError();
    }

    hours = Number(hours);
    minutes = Number(minutes);
    if (checkValid(hours, minutes)) {
        throw new TypeError();
    }

    time = getRomeTime(hours) + ':' + getRomeTime(minutes);

    return time;
}

module.exports = romanTime;
