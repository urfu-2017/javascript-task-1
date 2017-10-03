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
    let dicH1 = {
        '0': '',
        '1': 'X',
        '2': 'XX'
    };
    let dicH2 = {
        '0': '',
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
    };
    if ((h1 === 0) && (h2 === 0)) {

        return 'N';
    }

    return dicH1[h1] + dicH2[h2];
}
function minutesToRoman(time) {
    // перевод минут
    var arrayOfTime = time.split(':'); // Делим входное время на две части
    var MM = arrayOfTime[1]; // Минуты
    var m1 = parseInt(MM[0]); // разбиваем поэлементно минуты, преобразуя к Int
    var m2 = parseInt(MM[1]); // ---
    let dicM1 = {
        '0': '',
        '1': 'X',
        '2': 'XX',
        '3': 'XXX',
        '4': 'XL',
        '5': 'L'
    };
    let dicM2 = {
        '0': '',
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
    };
    if ((m1 === 0) && (m2 === 0)) {

        return 'N';
    }

    return dicM1[m1] + dicM2[m2];
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
