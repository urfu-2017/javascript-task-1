'use strict';
function roman(time) {
    var arab = [1, 4, 5, 9, 10, 40, 50];
    var roma = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var i = arab.length - 1;

    var result = '';

    if (time === 0) {
        result = 'N';
    }

    while (time > 0) {
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
    var num1 = Number(time12[0]);
    var num2 = Number(time12[1]);
    if (num1 > 23 || num2 > 59 || isNaN(num1) || isNaN(num2)) {
        throw new TypeError('Неверное время');
    }

    return (roman(num1) + ':' + roman(num2));
}

function wholeTime(time) {
    if (time.length !== 5) {
        throw new TypeError('Неверное время');
    }
}
module.exports = romanTime;
