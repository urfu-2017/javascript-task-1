'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let timeString = time.toString();
    let matchTime = timeString.match(/^(\d\d):(\d\d)$/);

    if (matchTime === null) {
        throw new TypeError();
    }

    let arabicHours = parseInt(matchTime[1]);
    let arabicMinutes = parseInt(matchTime[2]);

    if (arabicHours < 0 || arabicMinutes < 0 || arabicHours > 23 || arabicMinutes > 59) {
        throw new TypeError();
    }

    let hours = arabicNumberToRoman(arabicHours);
    let minutes = arabicNumberToRoman(arabicMinutes);

    return `${hours}:${minutes}`;
}

/**
 * @param {Number} number
 * @returns {String}
 */
function arabicNumberToRoman(number) {
    let result = '';

    if (number === 0) {
        return 'N';
    }

    [result, number] = get50(number);
    [result, number] = get40(result, number);
    [result, number] = get10(result, number);

    if (number <= 5) {
        result = getLessOrEq5(result, number);
    } else {
        result = getMore5(result, number);
    }

    return result;
}

function get50(number) {
    if (number >= 50) {
        return ['L', number - 50];
    }

    return ['', number];
}

function get40(result, number) {
    if (number >= 40 && number < 50) {
        return [result + 'XL', number - 40];
    }

    return [result, number];
}

function get10(result, number) {
    let divResult = parseInt(number / 10);
    if (divResult >= 1) {
        return [result + 'X'.repeat(divResult), number - divResult * 10];
    }

    return [result, number];
}

function getLessOrEq5(result, number) {
    if (number === 5) {
        return result + 'V';
    }

    if (number === 4) {
        return result + 'IV';
    }

    return result + 'I'.repeat(number);
}

function getMore5(result, number) {
    if (number === 9) {
        return result + 'IX';
    }

    return result + 'V' + 'I'.repeat(number - 5);
}

module.exports = romanTime;
