'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var romansTeens = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
function convertHours(hours) {
    var num = parseInt(hours);
    if (hours.length !== 2) {
        throw new TypeError('Неверный формат');
    }
    if (hours === '00') {
        return ('N');
    }
    if (num % 10 === 0) {
        hours = romansTeens[(num / 10)];

        return hours;
    }
    if (num % 10 !== 0) {
        hours = romansTeens[Math.floor(num / 10)] + romans[hours.slice(-1)];

        return hours;
    }
}
function convertMinutes(minutes) {
    var num = parseInt(minutes);
    if (minutes.length !== 2) {
        throw new TypeError('Неверный формат');
    }
    if (minutes === '00') {
        return ('N');
    }
    if (num % 10 === 0) {
        minutes = romansTeens[(num / 10)];

        return minutes;
    }
    if (num % 10 !== 0) {
        minutes = romansTeens[Math.floor(num / 10)] + romans[minutes.slice(-1)];

        return minutes;
    }
}
function testHours(hours) {
    if (hours === null) {
        throw new TypeError('Неверный формат');
    } else if (hours === undefined) {
        throw new TypeError('Неверный формат');
    } else if (isNaN(hours)) {
        throw new TypeError('Неверный формат');
    } else {
        convertHours(hours);
    }
}
function testMinutes(minutes) {
    if (minutes === null) {
        throw new TypeError('Неверный формат');
    } else if (minutes === undefined) {
        throw new TypeError('Неверный формат');
    } else if (isNaN(minutes)) {
        throw new TypeError('Неверный формат');
    } else {
        convertMinutes(minutes);
    }
}
function romanTime(time) {
    if (time.length !== 5) {
        throw new TypeError('Неверный формат');
    } else {
        time = time.split([':']);
        var hours = time[0];
        var minutes = time[1];
        if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
            throw new TypeError('Неверный формат');
        } else {
            testHours(hours);
            testMinutes(minutes);
            time = convertHours(hours) + ':' + convertMinutes(minutes);

            return time;
        }
    }
}

module.exports = romanTime;
