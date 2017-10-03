'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var ARABIC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];
var ROMAN = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII',
        'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
var ROMANHOUR = '';
var ROMANMINUTE = '';
var ROMANNUMBER = '';

function translate(number) {
    if (number === 0) {
        ROMANNUMBER += 'N';

        return ROMANNUMBER;
    }

    ROMANNUMBER += ROMAN[findLeftBorder(number)[1]];
    number -= findLeftBorder(number)[0];
    if (number !== 0) {
        translate(number);
    }

    return ROMANNUMBER;

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

function checkInputCorrect(time) {
    if (!(/^[0-1][0-9]|[2][2-3]:[0-5][0-9]$/.test(time))) {
        throw new TypeError('Неверное время');
    }

    return true;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии 0:0
    if (checkInputCorrect(time)) {
        var timeParts = time.split(':');
        var hours = Number(timeParts[0]);
        var minutes = Number(timeParts[1]);
        ROMANHOUR = translate(hours);
        ROMANNUMBER = '';
        ROMANMINUTE = translate(minutes);
        ROMANNUMBER = '';

        return ROMANHOUR + ':' + ROMANMINUTE;
    }
}
module.exports = romanTime;
