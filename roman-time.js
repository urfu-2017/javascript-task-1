'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function isTimeValidate(time) {
    var timePattern = new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');

    return timePattern.test(time);
}
function changeToRomanNumber(num) {
    if (Number(num) === 0) {
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
    var result = '';
    for (var i = 0; i < rules.length; i++) {
        var value = rules[i].value;
        var symbol = rules[i].symbol;
        var repeatCount = Math.floor(num / value);
        for (var j = 0; j < repeatCount; j++) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}
function romanTime(time) {
    if (!isTimeValidate(time)) {

        throw new TypeError('Invalid time format');
    }
    var hours = time.split(':')[0];
    var minutes = time.split(':')[1];

    return changeToRomanNumber(hours) + ':' + changeToRomanNumber(minutes);
}


module.exports = romanTime;
