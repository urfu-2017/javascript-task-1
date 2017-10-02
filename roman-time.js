'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

const regExp = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;

const romanLower = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const romanUpper = ['', 'X', 'XX', 'XXX', 'XL', 'L'];

function edToRoman(number) {
    return romanLower[number];
}


function desToRoman(number) {
    return romanUpper[number];
}

function romanTime(time) {
    if (!time.match(regExp)) {
        throw new TypeError('Incorrect format!');
    }

    let splitedTime = time.split(':');
    let hours = splitedTime[0];
    let minutes = splitedTime[1];

    if (parseInt(hours) === 0) {
        hours = 'N';
    } else {
        hours = desToRoman(parseInt(hours[0])) + edToRoman(parseInt(hours[1]));
    }
    if (parseInt(minutes) === 0) {
        minutes = 'N';
    } else {
        minutes = desToRoman(parseInt(minutes[0])) + edToRoman(parseInt(minutes[1]));
    }

    time = hours + ':' + minutes;

    return time;
}

module.exports = romanTime;
