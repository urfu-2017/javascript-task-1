'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    time = checkInput(time);
    var romanHours = getRoman(time.split(':')[0]);
    var romanMinutes = getRoman(time.split(':')[1]);

    return romanHours + ':' + romanMinutes;
}


function getRoman(number) {
    var romanString = '';
    if (number === '00') {
        return 'N';
    }
    var rules = [
        { symbol: 'L', value: 50 },
        { symbol: 'XL', value: 40 },
        { symbol: 'X', value: 10 },
        { symbol: 'IX', value: 9 },
        { symbol: 'V', value: 5 },
        { symbol: 'IV', value: 4 },
        { symbol: 'I', value: 1 }
    ];
    for (var i = 0; i < rules.length; i++) {
        var value = rules[i].value;
        var symbol = rules[i].symbol;
        if (value <= number) {
            romanString += getNumber(number, value, symbol, romanString);
            number -= value * Math.floor(number / value);
        }
    }

    return romanString;
}


function getNumber(number, value, symbol) {
    var repeatCount = Math.floor(number / value);
    var romanString = '';
    for (var i = 0; i < repeatCount; i++) {
        romanString += symbol;
        number -= value;
    }

    return romanString;
}

function checkInput(input) {
    var hours = parseInt(input.split(':')[0]);
    var minutes = parseInt(input.split(':')[1]);
    if (hours > 23 || minutes > 59 || !isInt(hours, minutes)) {
        throw new TypeError('TypeError: Неверное время');
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return hours + ':' + minutes;
}

function isInt(hours, minutes) {
    if (isNaN(hours) || isNaN(minutes) || minutes === null || hours === null) {
        return false;
    }

    return true;
}

module.exports = romanTime;
