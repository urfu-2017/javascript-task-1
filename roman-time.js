'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 **/
function romanTime(time) {
    var reg = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
    if (!reg.test(time)) {
        throw new TypeError('Wrong format');
    }
    var arr = time.split(':');
    var hourArab = parseInt(arr[0]);
    var minuteArab = parseInt(arr[1]);
    var arrR = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
        'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
        'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX',
        'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL',
        'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'L'];
    var hourRoman = '';
    var minuteRoman = '';
    var remain = '';
    hourRoman = arrR[hourArab];
    function toDoRomanMinute(number) {
        if (number > 50) {
            remain = arrR[number - 50];
            minuteRoman = 'L' + remain;
        } else {
            minuteRoman = arrR[number];
        }

        return minuteRoman;
    }

    return hourRoman + ':' + toDoRomanMinute(minuteArab);
}

module.exports = romanTime;
