'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    function romanizeDigit(digit, ones, fives, tens) {
        if (digit === 0) {
            return '';
        }
        if (digit < 4) {
            return ones.repeat(digit);
        }
        if (digit === 4) {
            return ones + fives;
        }
        if (digit === 9) {
            return ones + tens;
        }

        return fives + (ones.repeat(digit - 5));
    }

    function romanizeNumber(number) {
        if (number === 0) {
            return 'N';
        }
        var tens = romanizeDigit(Math.floor(number / 10), 'X', 'L', 'C');

        return tens + romanizeDigit(number % 10, 'I', 'V', 'X');
    }

    var hhMm = time.split(':');
    if (hhMm.length !== 2) {
        throw new TypeError();
    }

    var hour = Number(hhMm[0]);
    var minut = Number(hhMm[1]);

    if (hour !== Math.floor(hour) || minut !== Math.floor(minut)) {
        throw new TypeError();
    }

    if (hour >= 0 && hour <= 23 && minut >= 0 && minut <= 59) {
        return romanizeNumber(hour) + ':' + romanizeNumber(minut);
    }
    throw new TypeError();
}

module.exports = romanTime;
