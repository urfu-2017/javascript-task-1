'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var arrayOfTime = String(time).split(':');
    if (arrayOfTime.length !== 2) {
        throw new TypeError();
    }
    var usualHour = parseInt(arrayOfTime[0], 10);
    var usualMinute = parseInt(arrayOfTime[1], 10);
    if (isNaN(usualHour) || isNaN(usualMinute)) {
        throw new TypeError();
    }
    if (usualHour > 23 || usualMinute > 59) {
        throw new TypeError();
    }
    time = romanNumber(usualHour) + ':';
    time += romanNumber(usualMinute);

    return time;
}
function romanNumber(usualNumber) {
    var result = romanDecade(parseInt(usualNumber / 10));
    result += romanUnits(parseInt(usualNumber % 10));
    if (result.length === 0) {
        result = 'N';
    }

    return result;
}

function romanDecade(decades) {
    switch (decades) {
        case 1:
            return 'X';
        case 2:
            return 'XX';
        case 3:
            return 'XXX';
        case 4:
            return 'XL';
        case 5:
            return 'L';
        default:
            return '';
    }
}

function romanUnits(units) {
    var romanDict = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    return romanDict[units];
}

module.exports = romanTime;
