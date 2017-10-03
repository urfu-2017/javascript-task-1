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
    if (!time) {
        throw new TypeError();
    } else {
        var hours = time.split(':')[0];
        var minutes = time.split(':')[1];

        if (hours.trim().length < 2 || minutes.trim().length < 2) {
            throw new TypeError();
        }

        if (checkValid(parseInt(hours), parseInt(minutes))) {
            throw new TypeError();
        }

        time = getRomeTime(hours) + ':' + getRomeTime(minutes);
    }

    return time;
}

module.exports = romanTime;
