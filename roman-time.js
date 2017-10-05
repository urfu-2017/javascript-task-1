'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (!time) {
        throw new TypeError('Parameter "time" is blank');
    }

    if (!(typeof time === 'string' || time instanceof String)) {
        throw new TypeError(`Wrong type of parameter "time": ${typeof time}`);
    }

    let timeValues = [];
    // instead of time.split(':').map(parseInt);
    time.split(':').forEach(function (value) {
        let parsed = parseInt(value);
        if (!isNaN(parsed)) {
            timeValues.push(parsed);
        }
    });

    if (!(timeValues.length === 2 &&
        timeValues[0] >= 0 && timeValues[0] < 24 &&
        timeValues[1] >= 0 && timeValues[1] < 60)) {
        throw new TypeError('Mismatching format');
    }

    let romanTimeValues = timeValues.map(romanNumber);

    return romanTimeValues.join(':');
}

// MARK: - Translating

let romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};

let lookup = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function romanNumber(number) {
    if (number === null) {
        throw new TypeError('Parameter "number" is null');
    }

    if (!(typeof number === 'number' || number instanceof Number)) {
        throw new TypeError(`Wrong type of parameter "number": ${typeof number}`);
    }

    let result = [];

    lookup.forEach(function (lookedup) {
        while (number >= lookedup) {
            result.push(romanNumerals[lookedup]);
            number -= lookedup;
        }
    });

    if (result.length === 0) {
        result.push('N');
    }

    return result.join('');
}

module.exports = romanTime;
