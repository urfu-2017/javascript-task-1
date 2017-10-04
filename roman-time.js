'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function checkNumber(number, min, max) {
    if (isNaN(number) || number < min || number > max) {
        throw new TypeError();
    }
}

function convertToRoman(nummber) {
    var numbersArray = [50, 40, 10, 9, 5, 4, 1];
    var romanNumerals = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L' };
    var strInRoman = '';
    var count = 0;
    if (nummber === 0) {
        return 'N';
    }
    while (count < numbersArray.length) {
        if (nummber === 0) {
            return strInRoman;
        }
        var num = numbersArray[count];
        if (nummber >= num) {
            strInRoman += romanNumerals[num];
            nummber -= num;
        } else {
            count++;
        }
    }

    return strInRoman;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var numbers = time.split(':');
    if (time === undefined || time === null || numbers.length !== 2) {
        throw new TypeError();
    }
    var hours = Number(numbers[0]);
    var minutes = Number(numbers[1]);
    checkNumber(hours, 0, 23);
    checkNumber(minutes, 0, 59);
    time = convertToRoman(hours) + ':' + convertToRoman(minutes);

    return time;
}

module.exports = romanTime;
