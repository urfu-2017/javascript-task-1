'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    // Немного авторского кода и замечательной магии
    if (validateTime(time)) {

        var hours = time.split(':')[0];
        var minutes = time.split(':')[1];

        return romanize(hours) + ':' + romanize(minutes);
    }

    throw new TypeError('Неверное время');

}

function validateTime(time) {

    var x = new Date('09.11.2001 ' + time);
    x.setTime(x.getTime() - x.getTimezoneOffset() * 60 * 1000);

    return x > 0 && x.getUTCDate() === 11;
}


function romanize(digit) {

    var lookup = { L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1, N: 0 };
    var roman = '';
    var i;

    for (i in lookup) {
        while (digit >= lookup[i]) {
            if (digit === 0) {
                break;
            }
            roman += i;
            digit -= lookup[i];
        }
    }

    return roman;
}

module.exports = romanTime;
