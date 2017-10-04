'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var romans = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var romansTeens = ['X', 'XX', 'XXX', 'XL', 'L'];
function convertTime(num) {
    var num1 = parseInt(num);
    if (num.length !== 2) {
        throw new TypeError('Неверный формат');
    }
    if (num === '00') {
        return (romans.indexOf(0));
    }
    if (num1 % 10 === 0) {
        num = romansTeens.indexOf((num1 / 10) - 1);

        return num;
    }
    if (num1 % 10 !== 0) {
        num = romansTeens.indexOf(Math.floor(num1 / 10) - 1) + romans.indexOf(num.slice(-1));

        return num;
    }
}
function testTime(num) {
    if (num === null) {
        throw new TypeError('Неверный формат');
    } else if (num === undefined) {
        throw new TypeError('Неверный формат');
    } else if (isNaN(num)) {
        throw new TypeError('Неверный формат');
    } else {
        convertTime(num);
    }
}
function splitTime(time) {
    if (time.length !== 5) {
        throw new TypeError('Неверный формат');
    }
    if (time.length === 5) {
        time.split(':');
    }
}
function romanTime(time) {
    splitTime(time);
    var hours = time[0];
    var minutes = time[1];
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new TypeError('Неверный формат');
    } else {
        testTime(hours);
        testTime(minutes);
        time = convertTime(hours) + ':' + convertTime(minutes);

        return time;
    }
}

module.exports = romanTime;
