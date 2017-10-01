'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var arab = [1, 4, 5, 9, 10, 40, 50];
var rim = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

function convert(number) {
    if (!number) {
        return '';
    }
    var solution = '';
    var i = arab.length - 1;
    while (number > 0) {
        if (number >= arab[i]) {
            solution += rim[i];
            number -= arab[i];
        } else {
            i--;
        }
    }

    return solution;
}
function nullCheck(number) {
    var result;
    if (number === 0) {
        result = 'N';
    } else {
        result = convert(number);
    }

    return result;
}
function romanTime(time) {
    var hours;
    var minutes;
    if (time.split(':')) {
        time = time.split(':');
        if ((time[0] || time[1]) < 0 || time[0] > 23 || time[1] > 59) {
            throw new TypeError('Что-то не так');
        }
        hours = Number(time[0]);
        minutes = Number(time[1]);
    } else {
        throw new TypeError('Что-то не так');
    }

    return nullCheck(hours) + ':' + nullCheck(minutes);
}

module.exports = romanTime;
