'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
        // Немного авторского кода и замечательной магии
    var strTime;
    strTime = time.split(':');
    var firstArray = parseInt(strTime[0], 10);
    var secondArray = parseInt(strTime[1], 10);

    return getHours(firstArray) + ':' + getMinutes(secondArray);
}
function getHours(firstArray) {
    var romH = '';
    var Unit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX '];
    var Ten = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
    if (firstArray >= 1 && firstArray <= 23) {
        firstArray %= 100; // 2,5
        romH += Ten[Math.floor(firstArray / 10)]; // 2
        firstArray %= 10; // 5
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
    var Unit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX '];
    var Ten = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
    if (secondArray >= 1 && secondArray <= 60) {
        secondArray %= 100; // 2,5
        romM += Ten[Math.floor(secondArray / 10)]; // 2
        secondArray %= 10; // 5
        romM += Unit[secondArray];
    } else if (secondArray === 0) {
        romM += 'N';
    } else {
        throw new TypeError('Неверное время// \r\n ');
    }

    return romM;
}
module.exports = romanTime;
