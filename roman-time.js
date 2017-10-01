'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let arabToRoman = initDictionary();
    let timeObject = parseInput(time);
    let romanTimeArray = [transformValueToRoman(timeObject.hrs, arabToRoman),
        transformValueToRoman(timeObject.min, arabToRoman)];

    return romanTimeArray.join(':');
}

function initDictionary() {
    let arabToRoman = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    arabToRoman[20] = 'XX';
    arabToRoman[30] = 'XXX';
    arabToRoman[40] = 'XL';
    arabToRoman[50] = 'L';

    return arabToRoman;
}

function parseInput(time) {
    let pattern = /^(\d+):(\d+)$/;
    let match = pattern.exec(time);
    if (match === null) {
        throw new TypeError('Time format is invalid');
    }
    let hours = parseInt(match[1]);
    let minutes = parseInt(match[2]);
    if (!hoursAreValid(hours) || !minutesAreValid(minutes)) {
        throw new TypeError('Time format is invalid');
    }

    return { min: minutes, hrs: hours };
}

function transformValueToRoman(value, romanDict) {
    if (romanDict[value] !== undefined) {
        return romanDict[value];
    }
    let lowerDigit = value % 10;
    let higherDigit = value - lowerDigit;
    let romanLower = romanDict[lowerDigit];
    let romanHigher = romanDict[higherDigit];

    return romanHigher.toString() + romanLower.toString();

}

function hoursAreValid(hours) {
    return !isNaN(hours) && hours >= 0 && hours < 24;
}

function minutesAreValid(minutes) {
    return !isNaN(minutes) && minutes >= 0 && minutes < 60;
}

module.exports = romanTime;
