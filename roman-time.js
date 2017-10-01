'use strict';
function getRomanNumber(arabicNumber) {
    if (arabicNumber === 0) {
        return 'N';
    }
    var numberPairs = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L' };
    var arabicNumbers = Object.keys(numberPairs).map(Number);
    var currentNumberIndex = arabicNumbers.length - 1;
    var newRomanNumber = '';
    while (arabicNumber > 0) {
        var itemNumber = arabicNumbers[currentNumberIndex];
        if (arabicNumber < itemNumber) {
            currentNumberIndex--;
            continue;
        }
        newRomanNumber += numberPairs[itemNumber];
        arabicNumber -= itemNumber;
    }

    return newRomanNumber;
}

function tryParseTime(time) {
    try {
        var expr = /^([01]\d|2[0-3]):([0-5]\d)$/;
        var timeTuple = time.match(expr).map(Number);
        var parsedTime = { hours: timeTuple[1], minutes: timeTuple[2] };

        return parsedTime;
    } catch (error) {
        throw new TypeError('Bad time format');
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var parsedTime = tryParseTime(time);

    return getRomanNumber(parsedTime.hours) + ':' + getRomanNumber(parsedTime.minutes);
}

module.exports = romanTime;
