'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

// w a d d u p b i g p i m p s
function rangeCheckHours(h) {

    if (h < 0 || h > 23 || isNaN(h) || h === undefined) {
        throw new TypeError();
    }

    return h;
}

function rangeCheckMinutes(m) {

    if (m < 0 || m > 59 || isNaN(m) || m === undefined) {
        throw new TypeError();
    }

    return m;
}

function hoursToRoman(hh) {
    var firstNumArr = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var secNumArr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var firstNum;
    var secNum;
    if (hh === 0) {
        firstNum = 'N';
        secNum = '';
    } else {
        firstNum = firstNumArr[parseInt((hh / 10), 10)];
        secNum = secNumArr[hh % 10];
    }

    return [firstNum + secNum];

}
function minutesToRoman(mm) {
    var firstNumArr = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var secNumArr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var firstNum;
    var secNum;
    if (mm === 0) {
        firstNum = 'N';
        secNum = '';
    } else {
        firstNum = firstNumArr[parseInt((mm / 10), 10)];
        secNum = secNumArr[mm % 10];
    }

    return [firstNum + secNum];

}

function romanTime(time) {
    var hoursRoman;
    var minutesRoman;
    var timeArr = time.split(':');
    var hours = timeArr[0];
    var minutes = timeArr[1];
    if ((hours.length === 2) && (minutes.length === 2)) {
        var hoursParsed = parseInt(hours, 10);
        var minutesParsed = parseInt(minutes, 10);
        var hoursRangeChecked = rangeCheckHours(hoursParsed);
        var minutesRangeChecked = rangeCheckMinutes(minutesParsed);
        hoursRoman = hoursToRoman(hoursRangeChecked);
        minutesRoman = minutesToRoman(minutesRangeChecked);
    } else {
        throw new TypeError();
    }

    return [hoursRoman] + ':' + [minutesRoman];
}
module.exports = romanTime;
