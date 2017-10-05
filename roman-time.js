'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
        // Немного авторского кода и замечательной магии
    var regexp = /^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/;
    if (regexp.test(time) !== 1) {
        throw new TypeError('Неверное время');
    }
    var strTime;
    strTime = time.split(':');
    var firstArray = parseInt(strTime[0], 10);
    var secondArray = parseInt(strTime[1], 10);

    return getHours(firstArray) + ':' + getMinutes(secondArray);
}
function getHours(firstArray) {
    var romH = '';
    var Unit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var Ten = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
    if (firstArray >= 1 && firstArray <= 23) {
        firstArray %= 100;
        romH += Ten[Math.floor(firstArray / 10)];
        firstArray %= 10;
        romH += Unit[firstArray];
    } else if (firstArray === 0) {
        romH += 'N';
    } else {
        throw new TypeError('Неверное время');
    }

    return romH;
}
function getMinutes(secondArray) {
    var romM = '';
    var Unit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var Ten = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
    if (secondArray >= 1 && secondArray <= 60) {
        secondArray %= 100;
        romM += Ten[Math.floor(secondArray / 10)];
        secondArray %= 10;
        romM += Unit[secondArray];
    } else if (secondArray === 0) {
        romM += 'N';
    } else {
        throw new TypeError('Неверное время// \r\n ');
    }

    return romM;
}
module.exports = romanTime;
