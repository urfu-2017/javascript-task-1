'use strict';
function roman(time) {
    var arab = [1, 4, 5, 9, 10, 40, 50];
    var roma = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var i = arab.length - 1;

    var result = '';

    if (time === 0) {
        result = 'N';
    }

    while (time > 0)
    {
        if (time >= arab[i]) {
            result += roma[i];
            time -= arab[i];
        } else {
            i--;
        }
    }

    return result;
}

function romanTime(time) {
    wholeTime(time);
    var time12 = time.split(':');
    var num = [parseInt(time12[0], 10), parseInt(time12[1], 10)];
    if (num[0] > 23 || num[1] > 59 || isNaN(num[0]) || isNaN(num[1])) {
        throw new TypeError('Неверное время');
    }

    return (roman(num[0]) + ':' + roman(num[1]));
}

function wholeTime(time) {
    if (time.length !== 5) {
        throw new TypeError('Неверное время');
    }
}
module.exports = romanTime;
