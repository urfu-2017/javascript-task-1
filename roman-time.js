'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (/[^0-9:]/i.test(time)) {
        throw new TypeError('Используются недопустимые символы');
    }
    var i = 0;
    var timeSplit = time.split(':');
    if (timeSplit.length > 2) {
        throw new TypeError('Слишком много разрядов');
    }
    for (i = 0; i < timeSplit.length; i++) {
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

module.exports = makeRoman;
module.exports = romanTime;
