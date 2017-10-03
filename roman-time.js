'use strict';
var associations = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 50: 'L' };

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (isNullOrUndefined(time)) {
        throw new TypeError();
    }

    var hourAndMinute = parseInput(time);

    if (!isValuableTime(hourAndMinute)) {
        throw new TypeError();
    }

    return convertToRomanTime(hourAndMinute[0]) + ':' + convertToRomanTime(hourAndMinute[1]);
}

function parseInput(time) {
    var preProcessedStrings = time.split(':');

    return [Number(preProcessedStrings[0]), Number(preProcessedStrings[1])];
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

function isValuableTime(hourAndMinute) {

    return isAppropriateHourValue(hourAndMinute[0]) && isAppropriateMinuteValue(hourAndMinute[1]);
}

function isNullOrUndefined(value) {
    if (value === null || value === undefined) {
        return true;
    }
}

function isAppropriateHourValue(intValue) {
    return intValue >= 0 && intValue < 24 && !isNaN(intValue);
}

function isAppropriateMinuteValue(intValue) {
    return intValue >= 0 && intValue < 60 && !isNaN(intValue);
}

module.exports = romanTime;
