'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var ROMAN_ONES = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var ROMAN_TENS = ['', 'X', 'XX', 'XXX', 'XL', 'L'];

function toRomanNumbers(arabic) {
    var roman = '';
    arabic = parseInt(arabic);
    if (arabic === 0) {
        roman += 'N';
    } else {
        roman = roman + ROMAN_ONES[(arabic % 10)];
        roman = ROMAN_TENS[parseInt (arabic / 10, 10)] + roman;
    }

    return roman;

}


function romanTime(time) {
    if (time.split(':').length === 2) {
        var hours = time.split(':')[0];
        var minutes = time.split(':')[1];
        if (isNaN (hours) && isNaN (minutes) && hours.lengs !== 2 && hours.lengs !== 2) {
            throw new TypeError();
        } else if ((hours < 24 && hours >= 0) && (minutes < 60 && minutes >= 0)) {
            time = toRomanNumbers(hours) + ':' + toRomanNumbers(minutes);
        } else {
            throw new TypeError();
        }
    } else {
        throw new TypeError();
    }

    return time;

}

module.exports = romanTime;
