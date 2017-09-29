'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (time==='24:00'){
        try {
            throw new TypeError('24:00');
        } catch (e) {
            console.log(e instanceof TypeError); // true
            console.log(e.message);
            console.log(e.name);                 // "TypeError"
        }
    }
    if (time==='00:00'){
        time='N : N';
    }
    // Функция перевода арабских десятков в римские десятки
    function arabicDozenToRoman(d){
        switch (String(d)){// Приводим к явному строчному типу
            case '0':
                d='';
                break;
            case '1':
                d='X';
                break;
            case '2':
                d='XX';
                break;
            case '3':
                d='XXX';
                break;
            case '4':
                d='XXXX';
                break;
            case '5':
                d='L';
                break; 
        }
        romanDozen=d;
        return romanDozen;
    }
    // Функция перевода арабских единиц в римские единицы
    function arabicUnitToRoman(u){
        switch (String(u)){
            case '0':
                u='';
                break;
            case '1':
                u='I';
                break;
            case '2':
                u='II';
                break;
            case '3':
                u='III';
                break;
            case '4':
                u='IV';
                break;
            case '5':
                u='V';
                break;
            case '6':
                u='VI';
                break;
            case '7':
                u='VII';
                break;
            case '8':
                u='VIII';
                break;
            case '9':
                u='IX';
                break
        
        }
        romanUnit=u;
        return romanUnit;
    }
    arabicDozenToRoman(time[0]);
    romanDozenHours=romanDozen;
    arabicDozenToRoman(time[3]);
    romanDozenMinutes=romanDozen;
    arabicUnitToRoman(time[1]);
    romanUnitHours=romanUnit;
    arabicUnitToRoman(time[4]);
    romanUnitMinutes=romanUnit;
    time=String(romanDozenHours)+String(romanUnitHours)+':'+String(romanDozenMinutes)+String(romanUnitMinutes);
    return time;
}
module.exports = romanTime;
