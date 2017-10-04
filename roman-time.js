
'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeChecked = checkingRange(time);
    var timeArr = timeChecked.split(':');
    var hours = timeArr[0];
    var minutes = timeArr[1];
    var hoursRoman;
    var minutesRoman;
    hoursRoman = toRoman(hours);
    minutesRoman = toRoman(minutes);

    return hoursRoman + ':' + minutesRoman;
}

function checkingRange(time1) {
    var rangeCheck = new RegExp('((0[0-9])|(1[0-9])|(2[0-3])):[0-5][0-9]');
    var rangeChecked = rangeCheck.test(time1);
    if (rangeChecked === false) {
        throw new TypeError();
    }

    return time1;
}

function toRoman(hh) {
    var firstNumArr = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var secNumArr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var firstNum;
    var secNum;
    if ((parseInt(hh)) === 0) {
        firstNum = 'N';
        secNum = '';
    } else if ((parseInt(hh)) < 10) {
        firstNum = '';
        secNum = secNumArr[parseInt(hh)];
    } else {
        firstNum = firstNumArr[parseInt((hh / 10), 10)];
        secNum = secNumArr[(parseInt(hh)) % 10];
    }

    return firstNum + secNum;
}

module.exports = romanTime;
