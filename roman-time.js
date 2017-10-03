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
    let highOrder = Number(num[0]);
    let lowOrder = Number(num[1]);
    if (num === '00') {
        return 'N';
    }
    return forHour(highOrder) + forMinutes(lowOrder);
}

function forHour(hour) {
    switch (hour) {
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

function forMinutes(Minutes) {
    if (Minutes < 4) {
        let per = '';
        for (let i = 0; i < Minutes; i++) {
            per = per + 'I';
        }
        return per;
    }
    if (Minutes < 9 & Minutes > 4) {
        let per = 'V';
        for (let i = 0; i < Minutes - 5; i++) {
            per = per + 'I';
        }
        return per;
    }
    switch (Minutes) {
        case 4:
            return 'IV';        
        case 9:
            return 'IX';
    }
    return '';
}
