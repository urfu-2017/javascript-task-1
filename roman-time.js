'use strict';

var mapToRoman = {
    0: 'N',
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L'
};

var numbersToMap = [50, 40, 10, 9, 5, 4, 1];

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    const splittedTime = time.split(':');
    const hours = parseInt(splittedTime[0], 10);
    const minutes = parseInt(splittedTime[1], 10);
    if (isNaN(hours) || isNaN(minutes) || !inRange(hours, 0, 23) || !inRange(minutes, 0, 59)) {
        throw new TypeError('Ошибка при парсинге времени');
    }

    return getRomanNumber(hours) + ':' + getRomanNumber(minutes);
}

function getRomanNumber(n) {
    if (n === 0) {
        return mapToRoman[n];
    }

    var res = '';

    for (var i = 0; i < numbersToMap.length; i++) {
        var decimalValue = numbersToMap[i];
        while (n >= decimalValue) {
            res += mapToRoman[decimalValue];
            n -= decimalValue;
        }
    }

    return res;
}

function inRange(x, start, end) {
    return start <= x && x <= end;
}

module.exports = romanTime;
