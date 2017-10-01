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

    if (digit === '00') {

        return ('N');
    }
    var roman = '';
    var romanDigits = [50, 40, 10, 9, 5, 4, 1];
    var arabicDigits = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (var i = 0; i < romanDigits.length; i++) {
        while (digit >= romanDigits[i]) {
            roman += arabicDigits[i];
            digit -= romanDigits[i];
        }
    }

    return roman;

}


module.exports = romanTime;
