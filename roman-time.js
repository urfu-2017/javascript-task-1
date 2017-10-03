'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    try {
        // проверяем на null или undefined
        if ((time === undefined) || (time === null)){
            throw new TypeError('Неверный формат времени', 'roman-time.js');
        }
        var arrayOfTime = time.split(':'); // Делим входное время на две части
        var HH = arrayOfTime[0]; // Часы
        var MM = arrayOfTime[1]; // Минуты
        var h1 = parseInt(HH[0]); // разбиваем поэлементно часы, преобразуя к Int
        var h2 = parseInt(HH[1]); // ---
        var m1 = parseInt(MM[0]); // разбиваем поэлементно минуты, преобразуя к Int
        var m2 = parseInt(MM[1]); // ---
        // проверяем валидность строк
        if (!(HH.length === 2 && MM.length === 2) || // часы и минуты состоят ровно из 2 символов
        (isNaN(h1)) || (isNaN(h2)) || (isNaN(m1)) || (isNaN(m2))) { // символы могут быть приведены к числу
            throw new TypeError('Неверный формат времени', 'roman-time.js');
        }
        // проверяем валиднось чисел
        if ((h1 * 10 + h2 > 23) || (h1 < 0) || (h2 < 0) || (m1<0) || (m1>5) || (m2<0)) {
            throw new TypeError('Неверный формат времени', 'roman-time.js');
        }
        var rh1 = '';
        var rh2 = '';
        var rm1 = '';
        var rm2 = ''; // часы и минуты в римском формате
        // перевод часов
        switch(h1) {
            case 0:
                break;
            case 1:
                rh1 = 'X';
                break;
            case 2:
                rh1 = 'XX';
                break;
        }
        switch(h2) {
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
        }
        if ((h1===0) && (h2===0)) {
            rh1='N';
            rh2='';
        }
        // перевод минут
        switch(m1) {
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
        }
        switch(m2) {
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
        }
        if ((m1===0) && (m2===0)) {
            rm1='N';
            rm2='';
        }
        time = rh1 + rh2 + ':' + rm1 + rm2;
    } catch(err) {
        console.log(err.message);
    }
    return time;
}

module.exports = romanTime;
