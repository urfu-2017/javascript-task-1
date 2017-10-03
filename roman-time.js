'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function hoursToRoman(time) {
    // перевод часов
    var arrayOfTime = time.split(':'); // Делим входное время на две части
    var HH = arrayOfTime[0]; // Часы
    var h1 = parseInt(HH[0]); // разбиваем поэлементно часы, преобразуя к Int
    var h2 = parseInt(HH[1]);
    var rh1 = '';
    var rh2 = '';
    switch (h1) {
        case 0:
            break;
        case 1:
            rh1 = 'X';
            break;
        case 2:
            rh1 = 'XX';
            break;
        default:
            break;
    }
    switch (h2) {
        case 0:
            break;
        case 1:
            rh2 = 'I';
            break;
        case 2:
            rh2 = 'II';
            break;
        case 3:
            rh2 = 'III';
            break;
        case 4:
            rh2 = 'IV';
            break;
        case 5:
            rh2 = 'V';
            break;
        case 6:
            rh2 = 'VI';
            break;
        case 7:
            rh2 = 'VII';
            break;
        case 8:
            rh2 = 'VIII';
            break;
        case 9:
            rh2 = 'IX';
            break;
        default:
            break;
    }
    if ((h1 === 0) && (h2 === 0)) {
        rh1 = 'N';
        rh2 = '';
    }
    return rh1 + rh2;
}
function minutesToRoman(time){
    // перевод минут
    var arrayOfTime = time.split(':'); // Делим входное время на две части
    var MM = arrayOfTime[1]; // Минуты
    var m1 = parseInt(MM[0]); // разбиваем поэлементно минуты, преобразуя к Int
    var m2 = parseInt(MM[1]); // ---
    var rm1 = '';
    var rm2 = '';
    switch (m1) {
        case 0:
            break;
        case 1:
            rm1 = 'X';
            break;
        case 2:
            rm1 = 'XX';
            break;
        case 3:
            rm1 = 'XXX';
            break;
        case 4:
            rm1 = 'XL';
            break;
        case 5:
            rm1 = 'L';
            break;
        default:
            break;
    }
    switch (m2) {
        case 0:
            break;
        case 1:
            rm2 = 'I';
            break;
        case 2:
            rm2 = 'II';
            break;
        case 3:
            rm2 = 'III';
            break;
        case 4:
            rm2 = 'IV';
            break;
        case 5:
            rm2 = 'V';
            break;
        case 6:
            rm2 = 'VI';
            break;
        case 7:
            rm2 = 'VII';
            break;
        case 8:
            rm2 = 'VIII';
            break;
        case 9:
            rm2 = 'IX';
            break;
        default:
            break;
    }
    if ((m1 === 0) && (m2 === 0)) {
        rm1 = 'N';
        rm2 = '';
    }
    return rm1 + rm2;
}
function romanTime(time) {
    // проверяем формат времени
    let valid = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
    if (!valid.test(time)) {
        throw new TypeError('Неверное время', 'roman-time.js');
    }
    
    time = hoursToRoman(time) + ':' + minutesToRoman(time);
    return time;
}

module.exports = romanTime;
