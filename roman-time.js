'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (typeof time === 'undefined' || typeof time === 'object') {

        throw new TypeError('Задан не верный формат времени', 'index.js');
    }
    if (isNaN(time) === true) {

        throw new TypeError('Задан не верный формат времени', 'index.js');
    }
    var elemOfTypes = time.split(':');
    if (elemOfTypes.length > 2) {

        throw new TypeError('Задан не верный формат времени', 'index.js');
    }
    test1(elemOfTypes);
    test2(elemOfTypes);
    time = translation(elemOfTypes[0]) + ':' + translation(elemOfTypes[1]);

    return time;
}

module.exports = romanTime;

function test1(elemOfTypes) {
    if (Number(elemOfTypes[0]) > 23 || Number(elemOfTypes[1]) > 59) {

        throw new TypeError('Задан не верный формат времени', 'index.js');
    }
}
function test2(elemOfTypes) {
    if (elemOfTypes[0].length > 2 || elemOfTypes[1].length > 2) {

        throw new TypeError('Задан не верный формат времени', 'index.js');
    }
}

function translation(num) {
    if (num === '00') {

        return 'N';
    }
    if (Number(num[1]) < 4) {

        return forHighOrder(Number(num[0])) + for123(Number(num[1]));
    }
    if (Number(num[1]) > 4 && Number(num[1]) < 9) {

        return forHighOrder(Number(num[0])) + for5678(Number(num[1]));
    }

    return forHighOrder(Number(num[0])) + forLowOrder(Number(num[1]));
}

function forHighOrder(highOrder) {
    switch (highOrder) {
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

function forLowOrder(lowOrder) {
    switch (lowOrder) {
        case 4:
            return 'IV';
        case 9:
            return 'IX';
        default:
            return;
    }
}

function for123(lowOrder) {
    let per = '';
    for (let i = 0; i < lowOrder; i++) {
        per = per + 'I';
    }

    return per;
}

function for5678(lowOrder) {
    let per = 'V';
    for (let i = 0; i < lowOrder - 5; i++) {
        per = per + 'I';
    }

    return per;
}
