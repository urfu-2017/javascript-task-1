'use strict';

var ARABIC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];
var ROMAN = [
    'N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII',
    'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'
];

function translate(number) {
    var romanNumber = '';
    if (number === 0) {
        romanNumber += 'N';

        return romanNumber;
    }

    romanNumber += ROMAN[findLeftBorder(number)[1]];
    var remainder = number - findLeftBorder(number)[0];
    if (remainder !== 0) {
        romanNumber += ROMAN[remainder];
    }

    return romanNumber;
}

function findLeftBorder(number) {
    var leftBorder = 0;
    for (var i = 0; i < ARABIC.length; i += 1) {
        var elem = ARABIC[i];
        if (elem > number) {
            leftBorder = ARABIC[i - 1];

            return [leftBorder, i - 1];
        }
    }
}

function assertInputCorrect(time) {
    if (!/^[0-1][0-9]:[0-5][0-9]$|^[2][0-3]:[0-5][0-9]$/.test(time)) {
        throw new TypeError('Неверное время');
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии 0:0
    assertInputCorrect(time);
    var timeParts = time.split(':');
    var hours = Number(timeParts[0]);
    var minutes = Number(timeParts[1]);
    var romanHour = translate(hours);
    var romanMinute = translate(minutes);

    return romanHour + ':' + romanMinute;
}
module.exports = romanTime;
