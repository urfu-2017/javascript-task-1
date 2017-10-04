'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    if (time === null || time === undefined) {
        throw new TypeError('Неверное время');
    }
    var listTime = time.split(':');
    var hours = listTime[0];
    var minutes = listTime[1];
    if (isNaN(Number(hours)) || isNaN(Number(minutes))) {
        throw new TypeError('Неверное время');
    }
    if (!checkTime(hours, minutes)) {
        throw new TypeError('Неверное время');
    }
    var newHours = toRoman(Number(hours));
    var newMinutes = toRoman(Number(minutes));
    time = newHours + ':' + newMinutes;

    return time;
}

module.exports = romanTime;

function checkTime(hours, minutes) {
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return false;
    }

    return true;
}

function toRoman(num) {
    var rules = [
        { symbol: 'L', value: 50 },
        { symbol: 'XL', value: 40 },
        { symbol: 'X', value: 10 },
        { symbol: 'IX', value: 9 },
        { symbol: 'V', value: 5 },
        { symbol: 'IV', value: 4 },
        { symbol: 'I', value: 1 },
        { symbol: 'N', value: 0 }
    ];
    var result = '';
    if (num === rules[rules.length - 1].value) {
        return rules[rules.length - 1].symbol;
    }
    for (var i = 0; i < rules.length; i++) {
        var value = rules[i].value;
        var symbol = rules[i].symbol;
        if (value <= num) {
            var repeatCount = Math.floor(num / value);
            result += symbol.repeat(repeatCount);
            num -= value * repeatCount;
        }
    }

    return result;
}
