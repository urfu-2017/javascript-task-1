'use strict';

const ARABIC_TO_ROMAN = {
    0: 'N',
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L'
};

const timeFormat = /^\d\d:\d\d$/;
const timeTemplate = 'HH:MM';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
module.exports = function romanTime(time) {
    let timeTokens = time.split(':');

    if (!timeFormat.test(time)) {
        throw new TypeError('Time format should be HH:MM');
    }

    let hours = Number(timeTokens[0]);
    let minutes = Number(timeTokens[1]);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new TypeError('Time should be in range from 00:00 to 23:59');
    }

    return timeTemplate
        .replace('HH', convertArabicToRoman(hours))
        .replace('MM', convertArabicToRoman(minutes));
};

function convertArabicToRoman(number) {
    if (number === 0) {
        return 'N';
    }

    let arabicNumbers = Object.keys(ARABIC_TO_ROMAN);
    let index = arabicNumbers.length - 1;

    let result = '';
    while (number > 0) {
        while (arabicNumbers[index] > number) {
            index--;
        }

        let subtrahend = arabicNumbers[index];
        number -= subtrahend;
        result += ARABIC_TO_ROMAN[subtrahend];
    }

    return result;
}
