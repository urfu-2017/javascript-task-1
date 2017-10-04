'use strict';

function arabicToRoman(arabicNumber) {
    var res = '';

    if (arabicNumber === 0) {
        return 'N';
    }

    var i = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var x = ['', 'X', 'XX', 'XXX', 'XL', 'L'];

    var n = arabicNumber;

    if (n >= 10) {
        res += x[Math.floor(n / 10)];
        n %= 10;
    }
    res += i[n];

    return res;
}

function isRightTimeFormat(time) {
    var hours = parseInt(time.split(':')[0]);
    var minutes = parseInt(time.split(':')[1]);
    var bad = isNaN(hours) || isNaN(minutes) || hours < 0 || hours >= 24 ||
              minutes < 0 || minutes > 59;

    return !bad;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var res = '';
    if (!isRightTimeFormat(time)) {
        throw new TypeError('Wrong time format');
    }
    try {
        var timeParts = String(time).split(':');
        var hours = parseInt(timeParts[0]);
        var minutes = parseInt(timeParts[1]);
        res = arabicToRoman(hours) + ':' + arabicToRoman(minutes);

        return res;
    } catch (e) {
        throw new TypeError('Wrong time format');
    }
}

module.exports = romanTime;
