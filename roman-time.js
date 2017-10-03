'use strict';

var toRoman = require('./toRoman.js');
var isValidTime = require('./isValidTime.js');

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time === null || time === undefined) {
        throw new TypeError();
    }
    var regexArabicTime = new RegExp('^[0-9][0-9]:[0-9][0-9]$');
    if (time.search(regexArabicTime) === -1) {
        throw new TypeError();
    }
    var splittedTime = time.split(':');
    var hours = Number(splittedTime[0]);
    var minutes = Number(splittedTime[1]);
    if (!isValidTime(hours, minutes)) {
        throw new TypeError();
    }

    return toRoman(hours) + ':' + toRoman(minutes);
}

module.exports = romanTime;
