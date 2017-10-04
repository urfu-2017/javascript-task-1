'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var romanValues = parseTime(time).map(intToRoman);

    return romanValues[0] + ':' + romanValues[1];
}

function parseTime(time) {
    if (typeof time !== 'string') {
        throw new TypeError();
    }
    var tokens = time.split(':');
    var hours = Number(tokens[0]);
    var minutes = Number(tokens[1]);
    if (tokens[0] === '' || tokens[1] === '' || !isValidTime(hours, minutes)) {
        throw new TypeError();
    }

    return [hours, minutes];
}

function isValidTime(hours, minutes) {

    return !isNaN(hours) && !isNaN(minutes) && inRange(0, hours, 23) && inRange(0, minutes, 59);
}

function intToRoman(value) {
    var rules = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L'
    };
    if (value === 0) {
        return 'N';
    }
    var result = '';
    var arabicValues = Object.keys(rules).sort((a, b) => (a - b))
        .reverse();
    for (var i = 0; i < arabicValues.length; i++) {
        var arabicValue = arabicValues[i];
        if (value >= arabicValue) {
            value -= arabicValue;
            result += rules[arabicValue];
            break;
        }
    }

    if (value > 0) {
        result += intToRoman(value);
    }

    return result;
}

function inRange(lowerBound, value, upperBound) {

    return lowerBound <= value && value <= upperBound;
}

module.exports = romanTime;
