'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var rankOfTensToRomanNumber = {
    '0': '',
    '1': 'X',
    '2': 'XX',
    '3': 'XXX',
    '4': 'XL',
    '5': 'L'
};

var rankOfUnitsToRomanNumber = {
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

function romanTime(time) {
    var isValid = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/.test(time);
    if (!isValid) {
        throw new TypeError();
    }
    var pieces = time.split(':');
    var hours = pieces[0];
    var minutes = pieces[1];

    return getRomanNumber(hours) + ':' + getRomanNumber(minutes);
}

function getRomanNumber(number) {
    if (number === '00') {
        return 'N';
    }
    var rankOfTens = number[0];
    var rankOfUnits = number[1];

    return rankOfTensToRomanNumber[rankOfTens] + rankOfUnitsToRomanNumber[rankOfUnits];
}

module.exports = romanTime;
