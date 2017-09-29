'use strict';

function getRomanNumber(number, isFirstNumber) {
    var romanNumbers = [
        { number: 'L', value: 50 }, { number: 'XL', value: 40 },
        { number: 'X', value: 10 }, { number: 'IX', value: 9 },
        { number: 'V', value: 5 }, { number: 'IV', value: 4 },
        { number: 'I', value: 1 }
    ];
    for (var i = 0; i < romanNumbers.length; i++) {
        if (number >= romanNumbers[i].value) {
            return romanNumbers[i].number + getRomanNumber(number - romanNumbers[i].value, false);
        }
    }
    if (number === 0 && isFirstNumber) {
        return 'N';
    }

    return '';
}

function numberIsBetween(number, valueMin, valueMax) {
    return valueMin <= number && number <= valueMax;
}

function parseToInt(number) {
    if (/^[0-9]+$/.test(number) && !isNaN(parseInt(number))) {
        return parseInt(number);
    }

    return NaN;
}


function romanTime(time) {
    var splittedTime = time.split(':');
    if (splittedTime.length !== 2) {
        throw new TypeError();
    }
    var hours = parseToInt(splittedTime[0]);
    var minutes = parseToInt(splittedTime[1]);
    if (isNaN(hours) || isNaN(minutes) ||
        !numberIsBetween(hours, 0, 23) || !numberIsBetween(minutes, 0, 59)) {
        throw new TypeError();
    }

    return getRomanNumber(hours) + ':' + getRomanNumber(minutes);
}

module.exports = romanTime;
