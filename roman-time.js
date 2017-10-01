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

    var reg = /\D/;
    var x = new Date('09.11.2001 ' + time);
    x.setTime(x.getTime() - x.getTimezoneOffset() * 60 * 1000);

    var timeArray = time.split(':');

    if (timeArray.length !== 2 ||
        reg.test(timeArray[0]) ||
        reg.test(timeArray[1]) ||
        isNaN(parseInt(timeArray[0], 10)) || isNaN(parseInt(timeArray[1], 10))) {

        throw new TypeError('Неверное время');
    }


    return x > 0 && x.getUTCDate() === 11;
}


function romanize(digit) {

    if (digit === '00') {

        return ('N');
    }
    var roman = '';
    var arabicDigits = [50, 40, 10, 9, 5, 4, 1];
    var romanDigits = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (var i = 0; i < arabicDigits.length; i++) {
        while (digit >= arabicDigits[i]) {
            roman += romanDigits[i];
            digit -= arabicDigits[i];
        }
    }

    return roman;

}


module.exports = romanTime;
