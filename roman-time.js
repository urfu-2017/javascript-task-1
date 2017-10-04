'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var hours = time.split(':')[0];
    var minutes = time.split(':')[1];
    
    if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60 
        || isNaN(Number(hours)) || isNaN(Number(minutes)) 
        || hours === null || minutes === null || hours === 'undefined' 
        || minutes === 'undefined')
        throw new TypeError('Неверное время');

    var newHours = toRoman(Number(hours));
    var newMinutes = toRoman(Number(minutes));
    time = newHours + ':' + newMinutes;
    return time;
}

module.exports = romanTime;

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

    if (num === rules[rules.length - 1].value)
        return rules[rules.length - 1].symbol

    for (var i = 0; i < rules.length; i++) {
        var value = rules[i].value;
        var symbol = rules[i].symbol;

        if (value <= num) {
            var repeatCount = Math.floor(num / value);

            for (var j = 0; j < repeatCount; j++) {
                result += symbol;
                num -= value;
            }
        }
    }
    return result;
};
