'use strict';

let romanMumbers = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII',
    'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV',
    'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 'XXXIII',
    'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL', 'XLI', 'XLII',
    'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'L', 'LI', 'LII', 'LIII',
    'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX'];

function checkTime(time) {
    if (time === undefined || time === null || time.length > 5) {
        throw new TypeError('Ooops');
    }
}

function checkHours(hours) {
    if (hours < 0 || hours > 23 || isNaN(hours)) {
        throw new TypeError('Ooops');
    }
}

function checkMinutes(minutes) {
    if (minutes < 0 || minutes > 59 || isNaN(minutes)) {
        throw new TypeError('Ooops');
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    checkTime(time);
    let splitedTime = time.split(':');
    const hours = parseInt(splitedTime[0]);
    const minutes = parseInt(splitedTime[1]);
    checkHours(hours);
    checkMinutes(minutes);
    splitedTime[0] = romanMumbers[hours];
    splitedTime[1] = romanMumbers[minutes];

    return splitedTime.join(':');
}

module.exports = romanTime;
