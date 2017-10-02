'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function convert(number) {

    let arabicDigits = [1, 4, 5, 9, 10, 40, 50];
    let romanDigits = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

    if (Number(number) === 0) {
        return 'N';
    }

    let res = '';
    let idx = arabicDigits.length - 1;
    while (idx >= 0) {
        while (number >= arabicDigits[idx]) {
            number -= arabicDigits[idx];
            res += romanDigits[idx];
        }
        --idx;
    }

    return res;
}

function romanTime(time) {

    if (time === null || undefined) {
        throw new TypeError('incorrect value');
    }

    let pattern = /^(\d{1,2}):(\d{2})$/;
    let timePars = time.match(pattern);

    if (!timePars) {
        throw new TypeError('incorrect value');
    }

    let hours = timePars[1];
    let minutes = timePars[2];

    if (hours > 23 || minutes > 59) {
        throw new TypeError('incorrect value');
    }

    return convert(hours) + ':' + convert(minutes);
}

module.exports = romanTime;
