'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @throws {TypeError} в случае передачи времени в неверном формате
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    const TIME_RE = /^([01]\d|2[0-3]):([0-5]\d)$/;
    let [hours, minutes] = TIME_RE.exec(time)
        .slice(1, 3);

    return `${convertNumber(hours)}:${convertNumber(minutes)}`;
}


const PRECEDINGS_BY_ORDER = ['', 'V', 'X', '', 'L', 'C', '', 'D', 'M'];
const ONES_BY_ORDER = 'IXC'.split('');


function convertRoundNumber(number) {
    let order = Math.floor(Math.log10(number));
    let power = 10 ** order;
    // берём целое и остаток от деления числа на 5 с учётом порядка
    let quot = Math.floor(number / (5 * power));
    let rem = number % (5 * power);
    // остаток от деления на 4 поможет узнать количество единиц
    let fourRemainder = Math.floor(rem / power) % 4;
    // 4 и 9 имеют одну единицу, 5 - 0.
    // У остальных число единиц равно остатку от деления на 4
    let onesCount = fourRemainder || rem && 1;
    let oneDigit = ONES_BY_ORDER[order];
    let precPosition = order * 3 + quot;
    if (Math.floor(rem / power) === 4) {
        precPosition++;
    }
    let precedingDigit = PRECEDINGS_BY_ORDER[precPosition];
    let result = oneDigit.repeat(onesCount) + precedingDigit;
    // если число находится во второй половине десятка и != 9, разворачиваем его
    if (quot && fourRemainder) {
        result = result.split('').reverse()
            .join('');
    }

    return result;
}


function convertNumber(number) {
    const ALL_ZEROES_RE = /^0+$/;
    if (ALL_ZEROES_RE.test(number)) {
        return 'N';
    }
    let result = [];
    let order = 10 ** 2;
    while (order) {
        let quot = Math.floor(number / order);
        if (quot) {
            result.push(convertRoundNumber(quot * order));
        }
        number %= order;
        order = Math.floor(order / 10);
    }

    return result.join('');
}

module.exports = romanTime;
