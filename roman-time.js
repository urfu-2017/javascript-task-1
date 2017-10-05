'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var rules = [
        { symbol: 'L', value: 50 },
        { symbol: 'XL', value: 40 },
        { symbol: 'X', value: 10 },
        { symbol: 'IX', value: 9 },
        { symbol: 'V', value: 5 },
        { symbol: 'IV', value: 4 },
        { symbol: 'I', value: 1 }
    ];
    test(time);
    time = time.split(':');
    time[0] = Number(time[0]);
    time[1] = Number(time[1]);
    var line = '';
    testLength(time);
    for (var e = 0; e < 3; e++) {
        line = roman(Number(time[e]), rules, line);
    }

    return line.substr(0, line.length - 2);
}

function test(time) {
    if ((time === null) || (time === undefined)) {
        throw new TypeError('неверное время');
    }
}

function testLength(time) {
    if ((time[0] > 23) || (time[1] > 59) || (time[0].length > 2) || (time[1].length > 2)) {
        throw new TypeError('неверное время');
    }
}

function roman(time, rules, line) {
    if (time === 0) {
        line += 'N';
    }
    for (var i = 0; i < rules.length; i++) {
        var value = rules[i].value;
        var symbol = rules[i].symbol;
        var repeat = Math.floor(time / value);
        for (var j = 0; j < repeat; j++) {
            line += symbol;
            time -= value;
        }
    }
    line += ':';

    return line;
}

module.exports = romanTime;
