'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var romanNumberTen = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
var romanNumber = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function romanTime(time) {
    var hour = parseInt(time.slice(0, 2), 10);
    var minute = parseInt(time.slice(3, 5), 10);
    if (time.length !== 5 ||
        time === (null || undefined) ||
        Number.isNaN(hour) ||
        Number.isNaN(minute) ||
        hour >= 24 ||
        minute >= 60) {
        throw new TypeError('TimeError');
    } else {
        var romanTimeHour = romanNumberTen[hour / 10] + romanNumber[hour % 10];
        var romanTimeMinute = romanNumberTen[minute / 10] + romanNumber[minute % 10];

        return romanTimeHour + ':' + romanTimeMinute;
    }
}

module.exports = romanTime;
