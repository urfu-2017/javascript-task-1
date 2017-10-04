'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function translate(arabNumber, firstNumeral) {
    var result = '';
    const romanDict = {
        0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII',
        8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L'
    };
    var secondNumeral = 0;
    if (firstNumeral > 9) {
        secondNumeral = firstNumeral % 10;
    }
    if (firstNumeral === 0) {
        result = 'N'
    } else {
        result = romanDict[firstNumeral - secondNumeral] + romanDict[secondNumeral];
    }

    return result;
}

function romanTime(time) {
    var reg = new RegExp('([0-2])?[0-9]:([0-5])?[0-9]');
    var rTime = reg.exec(time)[0];
    var romanDate = rTime.split(':');
    var roman = [];
    var hh = parseInt(romanDate[0], 10);
    var mm = parseInt(romanDate[1], 10);
    if (time.length === rTime.length && hh >= 0 && hh <= 23) {
        roman[0] = translate(romanDate[0], hh)
        roman[1] = translate(romanDate[1], mm)
    } else {
        throw new TypeError();
    }
    time = roman.join(':');

    return time;
}

module.exports = romanTime;
