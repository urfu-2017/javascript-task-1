'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var arrayOfStrings = time.split(':');
    if (Number(arrayOfStrings[0]) > 23 || Number(arrayOfStrings[1]) > 59) {

        throw new TypeError('Задан не верный формат времени", "index.js');
    }
    time = translation(arrayOfStrings[0]) + ':' + translation(arrayOfStrings[1]);

    return time;
}

module.exports = romanTime;

function translation(num) {
    if (num === '00') {

        return 'N';
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
    if (lowOrder === 1 || lowOrder === 2 || lowOrder === 3) {

        return for123(lowOrder);
    }
    if (lowOrder === 5 || lowOrder === 6 || lowOrder === 7 || lowOrder === 8) {

        return for5678(lowOrder);
    }
    switch (lowOrder) {
        case 4:
            return 'IV';        
        case 9:
            return 'IX';
    }

    return '';
}

function for123 (lowOrder) {
    let per = '';
    for (let i = 0; i < lowOrder; i++) {
        per = per + 'I';
    }

    return per;
}

function for5678 (lowOrder) {
    let per = 'V';
    for (let i = 0; i < lowOrder - 5; i++) {
        per = per + 'I';
    }

    return per;
}
