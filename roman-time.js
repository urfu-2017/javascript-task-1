'use strict';

var ROMAN_NUMERALS = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var ARABIC_NUMERALS = [50, 40, 10, 9, 5, 4, 1];


/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time === null) {
        throw new TypeError('Неверное время');
    }

    var hoursAndMinutes = time.split(':', 2);

    var hours = parseInt(hoursAndMinutes[0]);
    var minutes = parseInt(hoursAndMinutes[1]);

    if (isNaN(hours) || isNaN(minutes)) {
        throw new TypeError('Неверное время');
    }

    checkTimeRange(hours, minutes);

    var romanHours = convertToRoman(hours);
    var romanMinutes = convertToRoman(minutes);

    return romanHours + ':' + romanMinutes;
}

function checkTimeRange(hours, minutes) {
    if (hours >= 24 || hours < 0 || minutes >= 60 || minutes < 0) {
        throw new TypeError('Неверное время');
    }
}


function convertToRoman(number) {
    if (number === 0) {
        return 'N';
    }

    var romanNumber = '';
    for (var i = 0; i < ARABIC_NUMERALS.length; i++) {
        var quantity = Math.floor(number / ARABIC_NUMERALS[i]);
        for (var j = 0; j < quantity; j++) {
            romanNumber += ROMAN_NUMERALS[i];
        }
        number = number % ARABIC_NUMERALS[i];
    }

    return romanNumber;
}


module.exports = romanTime;
