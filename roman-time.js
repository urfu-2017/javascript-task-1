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
    time = translation(arrayOfStrings[0]) + ":" + translation(arrayOfStrings[1]);
     
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
        break;
        case 2:
        return 'XX';
        break;
        case 3:
        return 'XXX';
        break;
        case 4:
        return 'XL';
        break;
        case 5:
        return 'L';
        break;
        default:
        return '';
        break;
    }
}

function forMinutes(Minutes) {
    switch (Minutes) {
        case 1:
        return 'I';
        break;
        case 2:
        return 'II';
        break;
        case 3:
        return 'III';
        break;
        case 4:
        return 'IV';
        break;
        case 5:
        return 'V';
        break;
        case 6:
        return 'VI';
        break;
        case 7:
        return 'VII';
        break;
        case 8:
        return 'VIII';
        break;
        case 9:
        return 'IX';
        break;
        default:
        return '';
        break;
    }
}
