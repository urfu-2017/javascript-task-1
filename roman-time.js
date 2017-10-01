'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var template = new RegExp(/^\d\d:\d\d$/);
    if (template.test(time) === false) {
        throw new TypeError();
    }
    var times = time.split(':');
    if (Number(times[0]) > 23 || Number(times[1]) > 59) {
        throw new TypeError();
    }
    var hours = (times[0] === '00') ? 'N' : returnRomanTime(times[0]);
    var minutes = (times[1] === '00') ? 'N' : returnRomanTime(times[1]);

    return hours + ':' + minutes;
}

function returnRomanTime(number) {
    var firstPart = number.charAt(0);
    var secondPart = number.charAt(1);
    if (firstPart === '1') {
        return 'X' + getSecondPart(secondPart);
    }
    if (firstPart === '2') {
        return 'XX' + getSecondPart(secondPart);
    }
    if (firstPart === '3') {
        return 'XXX' + getSecondPart(secondPart);
    }
    if (firstPart === '4') {
        return 'XL' + getSecondPart(secondPart);
    }
    if (firstPart === '5') {
        return 'L' + getSecondPart(secondPart);
    }

    return getSecondPart(secondPart);
}

function getSecondPart(number) {
    var dictionary = {
        '0': '',
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
    };

    return dictionary[number];
}
module.exports = romanTime;

