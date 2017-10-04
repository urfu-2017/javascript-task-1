'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    errorTime(time);
    var partTime = time.split(':');
    var leftPart = '';
    var rightPart = '';

    if (parseInt(partTime[0], 10) === 0 && parseInt(partTime[1], 10) === 0) {

        return 'N:N';
    }

    if (parseInt(partTime[0], 10) === 0) {
        rightPart = toRomanRight(partTime[1]);

        return 'N:' + rightPart;
    }

    if (parseInt(partTime[1], 10) === 0) {
        leftPart = toRomanLeft(partTime[0]);

        return leftPart + ':N';
    }
    leftPart = toRomanLeft(partTime[0]);
    rightPart = toRomanRight(partTime[1]);

    return leftPart + ':' + rightPart;
}

function toRomanLeft(time) {
    var hours = ['', 'X', 'XX'];
    var minutes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var result = 'N';
    var num = time.split('');
    for (var i = 0; i < 3; i++) {
        if (parseInt(num[0], 10) === i) {
            result = hours[i];
        }
    }
    for (var j = 0; j < 10; j++) {
        if (parseInt(num[1], 10) === j) {
            result += minutes[j];

            return result;
        }
    }

    return result;
}

function toRomanRight(time) {
    var hours = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var minutes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var result = 'N';
    var num = time.split('');
    for (var i = 0; i < 6; i++) {
        if (parseInt(num[0], 10) === i) {
            result = hours[i];
        }
    }
    for (var j = 0; j < 10; j++) {
        if (parseInt(num[1], 10) === j) {
            result += minutes[j];

            return result;
        }
    }

    return result;
}

function errorTime(time) {
    var colon = time.indexOf(':');
    if (colon !== 2 || time.length !== 5 || time  === 'null' || time === 'undefined') {
        throw new TypeError('Неверное время');
    }
    parseTime(time);
}

function parseTime(time) {
    var partTime = time.split(':');
    if (parseInt(partTime[0], 10) < 0 || parseInt(partTime[0], 10) > 23 ||
        parseInt(partTime[1], 10) < 0 || parseInt(partTime[1], 10) > 59) {
        throw new TypeError('Неверное время');
    }
}

module.exports = romanTime;
