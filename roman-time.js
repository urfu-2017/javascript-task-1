'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    errorTime(time);
    return time;
}

function toRomanTime(arr) {
    var hours = ['X', 'XX', 'XXX', 'XL', 'L'];
    var minutes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    

}

function errorTime(time) {
    var colon = time.indexOf(':');
    if (colon !== 2 || time.length !== 5) {
        throw new TypeError('Неверное время');
    }
    var partTime = time.split(':');
    if (parseInt(partTime[0], 10) < 0 || parseInt(partTime[0], 10) > 23 ||
        parseInt(partTime[1], 10) < 0 || parseInt(partTime[1], 10) > 59) {
        throw new TypeError('Неверное время');
    }
}
module.exports = romanTime;
