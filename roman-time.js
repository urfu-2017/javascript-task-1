'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
var arab = [1, 4, 5, 9, 10, 40, 50];

function arabToRoman(number) {
    if (number === 0) {
        return 'N';
    }

    var ret = '';
    var i = arab.length - 1;
    while (number > 0) {
        if (number >= arab[i]) {
            ret += roman[i];
            number -= arab[i];
        } else {
            i--;
        }
    }

    return ret;
}

function romanTime(time) {
    var newTime = '';
    var timeArray = time.split(':');
    if (isNaN(Number(timeArray[0])) ||
        isNaN(Number(timeArray[1])) ||
        Number(timeArray[0]) > 23 ||
        Number(timeArray[1]) > 59) {
        throw new TypeError();
    } else {
        newTime = arabToRoman(Number(timeArray[0])) + ':' + arabToRoman(Number(timeArray[1]));
    }

    return newTime;
}

module.exports = romanTime;
