'use strict';
var associations = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L' };
var timeChecker = /^([01]\d|2[0-3]):([0-5]\d)$/;

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!timeChecker.test(time)) {
        throw new TypeError();
    }

    var hourAndMinute = timeChecker.exec(time);

    return convertToRomanTime(hourAndMinute[1] - 0) +
        ':' + convertToRomanTime(hourAndMinute[2] - 0);
}

function convertToRomanTime(intValue) {
    if (intValue === 0) {
        return 'N';
    }
    var usedNumbers = Object.keys(associations);
    var stringRepresentation = '';
    for (let i = usedNumbers.length - 1; i >= 0; i--) {
        while (intValue >= usedNumbers[i]) {
            stringRepresentation += associations[usedNumbers[i]];
            intValue -= usedNumbers[i];
        }
    }

    return stringRepresentation;
}

module.exports = romanTime;
