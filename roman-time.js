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

function isRightHoursFormat(hours) {
    var h = parseInt(hours);

    return !isNaN(h) && String(hours).match(/^[0-9]{2}/) && String(hours).length === 2 &&
            h >= 0 && h < 24;
}

function isRightMinutesFormat(minutes) {
    var m = parseInt(minutes);

    return !isNaN(m) && String(minutes).match(/^[0-9]{2}/) && String(minutes).length === 2 &&
            m >= 0 && m < 60;
}

function isRightTimeFormat(stringHours, stringMinutes) {
    try {
        return isRightHoursFormat(stringHours) && isRightMinutesFormat(stringMinutes);
    } catch (e) {
        throw new TypeError('Wrong type format');
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var res = '';
    try {
        var timeParts = String(time).split(':');
        var hours = parseInt(timeParts[0]);
        var minutes = parseInt(timeParts[1]);
        if (!isRightTimeFormat(timeParts[0], timeParts[1]) || timeParts.length !== 2) {
            throw new TypeError('Wrong time format');
        }
        res = String(arabicToRoman(hours)) + ':' + String(arabicToRoman(minutes));

        return res;
    } catch (e) {
        throw new TypeError('Wrong time format');
    }
}

module.exports = romanTime;
