'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var numbers = time.split(':');
    var result;
    if (numbers.length === 2) {
        var arabTime = getValue(numbers);
        var hours = arabTime[0];
        var minutes = arabTime[1];
        var romanHours = convertToRoman(hours);
        var romanMinutes = convertToRoman(minutes);
        result = romanHours + ':' + romanMinutes;
    } else {
        throw new TypeError('Invalid argument');
    }

    return result;
}

function getValue(numbers) {
    var hours = Number(numbers[0]);
    var minutes = Number(numbers[1]);
    if (!Number.isInteger(hours) || !Number.isInteger(minutes) || !isValidTime(hours, minutes)) {
        throw new TypeError('Invalid argument');
    }

    return [hours, minutes];
}

function isValidTime(hours, minutes) {
    return hours < 24 && hours >= 0 && minutes >= 0 && minutes < 60;
}

function convertToRoman(arabNumber) {
    var arabToRoman = { '0': 'N', '1': 'I', '2': 'II', '3': 'III', '4': 'IV', '5': 'V', '6': 'VI',
    '7': 'VII', '8': 'VIII', '9': 'IX', '10': 'X', '20': 'XX', '30': 'XXX',
    '40': 'XL', '50': 'L', '60': 'LX' };
    var romanNumber;
    if (arabNumber in arabToRoman) {
        romanNumber = arabToRoman[arabNumber];
    } else {
        var decade = parseInt(String(arabNumber)[0] + '0');
        var unit = parseInt(String(arabNumber)[1]);
        romanNumber = arabToRoman[decade] + arabToRoman[unit];
    }

    return romanNumber;
}

module.exports = romanTime;
