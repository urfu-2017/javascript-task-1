'use strict';
function roman(time) {
    var arab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
    var roma = [
        'I', 'II', 'III', 'IV',
        'V', 'VI', 'VII', 'VIII', 'IX', 'X',
        'XX', 'XXX', 'XL', 'L'];
    var i = arab.length - 1;

    var result = '';

    if (time === 0) {
        result = 'N';
    }

    do {
        if (time >= arab[i]) {
            result += roma[i];
            time -= arab[i];
        } else {
            i--;
        }
    }

    while (time > 0);

    return result;
}

function romanTime(time) {
    wholeTime(time);
    var time12 = time.split(':');
    if (time12.length !== 2) {
        throw new TypeError('Неверное время');
    }
    var num = [parseInt(time12[0], 10), parseInt(time12[1], 10)];
    if (num[0] > 23 || num[1] > 59 ||
    num[0].isNaN || num[1].isNaN) {
        throw new TypeError('Неверное время');
    }

    return (roman(num[0]) + ':' + roman(num[1]));
}

function wholeTime(time) {
    if (time === null || time === undefined || typeof time !== 'string') {
        throw new TypeError('Неверное время');
    }

    if (time.length !== 5) {
        throw new TypeError('Неверное время');
    }
}
module.exports = romanTime;
