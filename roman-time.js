'use strict';

/* global Map */

const ArabicToRoman = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
]);

function toRoman(number) {
    if (number === 0) {
        return 'N';
    }

    let result = [];
    ArabicToRoman.forEach(function (value, key) {
        let div = Math.floor(number / key);
        let mod = number % key;
        for (var i = 0; i < div; i++) {
            result.push(value);
        }
        number = mod;
    });

    return result.join('');
}

function assertInBound(number, min, max) {
    if (number < min) {
        throw new TypeError();
    }
    if (number > max) {
        throw new TypeError();
    }
}

function assertNotNaN(number) {
    if (isNaN(number)) {
        throw new TypeError();
    }
}

/*
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let [hours, minutes] = time.split(':').map(Number);

    assertNotNaN(hours);
    assertNotNaN(minutes);

    assertInBound(minutes, 0, 59);
    assertInBound(hours, 0, 23);

    return `${toRoman(hours)}:${toRoman(minutes)}`;
}

module.exports = romanTime;
