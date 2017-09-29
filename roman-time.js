'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    let regexp = /[0-2][0-9]:[0-6][0-9]/;

    if (time.match(regexp) === null) {
        throw new TypeError();
    }

    let hours = parseInt(time.split(':')[0]);
    let minutes = parseInt(time.split(':')[1]);

    if ((hours < 0 || hours > 23) || (minutes < 0 || minutes > 59)) {
        throw new TypeError();
    }

    return getRoman(hours) + ':' + getRoman(minutes);
}

function getRoman(time) {
    if (time === 0) {
        return 'N';
    }

    return getUpperDigit(Math.floor(time / 10)) + getLowDigit(time % 10);
}

function getLowDigit(number) {
    let digits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    return digits[number];

    /*
    switch (number) {
        case 1: return 'I';
        case 2: return 'II';
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        case 6: return 'VI';
        case 7: return 'VII';
        case 8: return 'VIII';
        case 9: return 'IX';
        default: return '';
    }
    */
}

function getUpperDigit(number) {
    let digits = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];

    return digits[number];

    /*
    switch (number) {
        case 1: return 'X';
        case 2: return 'XX';
        case 3: return 'XXX';
        case 4: return 'XL';
        case 5: return 'L';
        case 6: return 'LX';
        default: return '';
    }
    */
}

module.exports = romanTime;
