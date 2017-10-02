'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function isCorrectTime(time) {
    var reg1 = /[01]\d:[0-5]\d/;
    var reg2 = /2[0-3]:[0-5]\d/;
    var answer = ((reg1.test(time) || reg2.test(time)) && time.length === 5);

    return answer;
}

function getMapping(isFirstSymbol) {
    if (isFirstSymbol) {

        return {
            '0': '',
            '1': 'X',
            '2': 'XX',
            '3': 'XXX',
            '4': 'XL',
            '5': 'L'
        };
    }

    return {
        '0': 'N',
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
    };
}

function replaceSymbol(symbol, isFirst) {
    var map = getMapping(isFirst);

    return map[symbol];
}

function replacePartTime(str) {
    return replaceSymbol(str.charAt(0), true) + replaceSymbol(str.charAt(1), false);
}

function romanTime(time) {
    if (isCorrectTime(time)) {
        var hour = replacePartTime(time.substr(0, 2));
        var min = replacePartTime(time.substr(3));
        // для минут типа 00, 10, ... 50
        // min будет иметь неверный формат
        if (min.length !== 1 && /N/.test(min)) {
            min = min.replace('N', '');
        }

        return hour + ':' + min;
    }
    throw new TypeError();
}
module.exports = romanTime;
