'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let conversionTable = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L' };
    let keyNumbers = [50, 40, 10, 9, 5, 4, 1];
    let timePattern = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/;

    let parsedTime = parseTime(time, timePattern);
    let hours = transformToRomanNumber(parsedTime.hours, conversionTable, keyNumbers.slice(2));
    let minutes = transformToRomanNumber(parsedTime.minutes, conversionTable, keyNumbers);

    return `${hours}:${minutes}`;
}

function parseTime(time, timePattern) {
    if (typeof time !== 'string') {
        throw new TypeError(`argument is ${isNaN(time) ? 'NaN' : typeof time}, required string`);
    }

    if (!timePattern.test(time)) {
        throw new TypeError(`time = ${time}, but required time in format HH:MM`);
    }

    let numbers = time.split(':');
    let hours = parseInt(numbers[0], 10);
    let minutes = parseInt(numbers[1], 10);

    return { 'hours': hours, 'minutes': minutes };
}


function transformToRomanNumber(decimalNumber, conversionTable, keyNumbers) {
    if (decimalNumber === 0) {
        return 'N';
    }

    let romanNumber = '';
    for (let i = 0; i < keyNumbers.length; i++) {
        let keyNumber = keyNumbers[i];
        while (decimalNumber >= keyNumber) {
            decimalNumber -= keyNumber;
            romanNumber += conversionTable[keyNumber];
        }
    }

    return romanNumber;
}

module.exports = romanTime;
