'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var ARABIC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];
var ROMAN = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII',
        'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
var romanHour = '';
var romanMinute = '';
var romanNumber = '';

function translate(number) {
    if (number === 0) {
        romanNumber += 'N';

        return romanNumber;
    }

    romanNumber += ROMAN[findLeftBorder(number)[1]];
    number -= findLeftBorder(number)[0];
    if (number !== 0) {
        translate(number);
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

function checkInputValueCorrect(time) {
    return /\d+:\d+/.test(time);
}

function checkInputLengthCorrect(time) {
    if (time.length >= 3 && time.length <= 5) {
        return true;
    }

    return false;
}

function checkTimeCorrect(hours, minutes) {
    if (!(hours < 24 && minutes < 60)) {
        throw new TypeError('Неверное время');
    }

    return hours < 24 && minutes < 60;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    time = time.replace(/\s+/g, '');
    if (checkInputValueCorrect(time) && checkInputLengthCorrect(time)) {
        time = time.split(':');
        var hours = Number(time[0]);
        var minutes = Number(time[1]);
        if (checkTimeCorrect(hours, minutes)) {
            romanHour = translate(hours);
            romanNumber = '';
            romanMinute = translate(minutes);
            romanNumber = '';

            return romanHour + ':' + romanMinute;
        }
    } else {
        throw new TypeError('Неверное время');
    }
}
module.exports = romanTime;
