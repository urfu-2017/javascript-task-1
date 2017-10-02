'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var unitsRoman = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var tensRoman = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];

function romanTime(time) {
    var formatMatch = time.match(/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/);
    if (formatMatch === null) {
        throw new TypeError('Неверное время');
    }
    var hoursArabian = formatMatch[1];
    var minutesArabian = formatMatch[2];
    var hoursRoman = convertNumber(hoursArabian);
    var minutesRoman = convertNumber(minutesArabian);

    return hoursRoman + ':' + minutesRoman;
}

function convertNumber(number) {
    var decimalPart = number.charAt(0);
    var unitPart = number.charAt(1);
    var romanNumber = (tensRoman[decimalPart] + unitsRoman[unitPart]).replace('N', '');

    return romanNumber;
}

module.exports = romanTime;
