'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeSplit = time.split(':');
    if (timeSplit.length > 2) {
        throw new TypeError('Слишком много разрядов');
    }
    for (var i = 0; i < timeSplit.length; i++) {
        checkFormat(timeSplit[i]);
        timeSplit[i] = makeRoman(timeSplit[i], i);
    }

    return timeSplit.join(':');
}

function makeRoman(numString, ind) {
    var arrayOfRom = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
                     'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX',
                     'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII',
                     'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV',
                     'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL', 'XLI',
                     'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII',
                     'XLIX', 'L', 'LI', 'LII', 'LIII', 'LIV', 'LV', 'LVI',
                     'LVII', 'LVIII', 'LIX'];
    var currentNum = parseInt(numString, 10);
    if (currentNum > (ind === 0 ? 23 : 59) || currentNum < 0) {
        throw new TypeError('Неправильные числа');
    }

    return arrayOfRom[currentNum];
}

function checkFormat(time) {
    if (/[^0-9:]/i.test(time) || time.length != 2) {
        throw new TypeError('Используются недопустимые символы или их слишком много');
    }
}

module.exports = makeRoman;
module.exports = romanTime;
