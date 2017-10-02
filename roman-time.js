'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function checkValid(a, b) {
    return (a < 0 || a > 23 || b < 0 || b > 59 || isNaN(a) || isNaN(b));
}
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

function romanTime(time) {
    if (time.length < 5 || !time) {
        throw new TypeError('Неверное время');
    } else {
        var hours = Number(time.split(':')[0]);
        var minutes = Number(time.split(':')[1]);

        if (checkValid(hours, minutes)) {
            throw new TypeError('Неверное время');
        }

        return getRomeTime(hours) + ':' + getRomeTime(minutes);
    }
}

module.exports = romanTime;
