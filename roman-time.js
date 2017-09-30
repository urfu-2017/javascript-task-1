'use strict';
var arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

function arabToRoman(number) {
    if (number === 0) {
        return 'N';
    }
    if (!number) {
        return '';
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

function parseTime(string) {
    let time = string.match(/(0\d|1\d|2[0-3]):([0-5]\d)/);
    if (time) {
        return { hours: Number(time[1]), minutes: Number(time[2]) };
    }
    throw new TypeError();
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let { hours, minutes } = parseTime(time);

    return arabToRoman(hours) + ':' + arabToRoman(minutes);
}

module.exports = romanTime;
