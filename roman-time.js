'use strict';

const MAP_TO_ROMAN = {
    0: 'N',
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L'
};

const NUMBERS_TO_MAP = [50, 40, 10, 9, 5, 4, 1];
const TIME_REG_EXP = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (typeof time !== 'string' && !TIME_REG_EXP.test(time)) {
        throw new TypeError('Ошибка при парсинге времени');
    }

    const splittedTime = time.match(TIME_REG_EXP);
    const hours = parseInt(splittedTime[1], 10);
    const minutes = parseInt(splittedTime[2], 10);

    return getRomanNumber(hours) + ':' + getRomanNumber(minutes);
}

function getRomanNumber(n) {
    if (n === 0) {
        return MAP_TO_ROMAN[n];
    }

    var res = '';
    var i = 0;
    while (n > 0) {
        const arabicValue = NUMBERS_TO_MAP[i];
        if (arabicValue > n) {
            i++;
        } else {
            n -= arabicValue;
            res += MAP_TO_ROMAN[arabicValue];
        }
    }

    return res;
}

module.exports = romanTime;
