'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var ROMAN_MINUTES = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var ROMAN_HOURS = ['', 'X', 'XX', 'XXX', 'XL', 'L'];

function toRomanNumbers(arabic) {
    var roman = '';
    if (arabic === 0) {
        roman += 'N';
    } else {
        roman = roman + ROMAN_MINUTES[(arabic % 10)];
        roman = ROMAN_HOURS[parseInt (arabic / 10, 10)] + roman;
    }

    return roman;

}


function romanTime(time) {
    var hours = parseInt (time.split(':')[0], 10);
    var minutes = parseInt (time.split(':')[1], 10);
    if (isNaN (hours) && isNaN (minutes) && (hours + ':' + minutes) === time) {
        throw new TypeError();
    } else if ((hours < 24 && hours >= 0) && (minutes < 60 && minutes >= 0)) {
        time = toRomanNumbers(hours) + ':' + toRomanNumbers(minutes);
    } else {
        throw new TypeError();
    }

    return time;

}

module.exports = romanTime;
