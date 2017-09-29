'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ROMAN_DICTIONARY = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII',
                       'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L'];
var ARABIC_DICTIONARY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];

function romanTime(time) {
    var hours = Number(time.split(':')[0]);
    var minutes = Number(time.split(':')[1]);

    if (!/^(?:[0-2][0-3]|[0-1][0-9]):[0-5][0-9]$/.test(time)) {
        throw new TypeError('Wrong time');
    }

    return getRomanTime(hours) + ':' + getRomanTime(minutes);
}

function getRomanTime(number) {
    if (number === 0) {
        return 'N';
    }

    var result = '';
    var i = ARABIC_DICTIONARY.length - 1;

    while (number > 0) {
        if (number >= ARABIC_DICTIONARY[i]) {
            result += ROMAN_DICTIONARY[i];
            number -= ARABIC_DICTIONARY[i];
        } else {
            i--;
        }
    }

    return result;
}


module.exports = romanTime;
