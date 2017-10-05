/* eslint linebreak-style: ["error", "unix"] */
'use strict';

let fontAr = [1, 4, 5, 9, 10, 40, 50, 60];
let fontRom = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
function toRoman(time, number) {
    let rezult = '';
    let n = number;
    while (time > 0) {
        if (time >= fontAr[n]) {
            rezult += fontRom[n];
            time -= fontAr[n];
        } else {
            n--;
        }
    }

    return rezult;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    let mas = time.split(':');
    let clock = parseInt(mas[0], 10);
    let minutes = parseInt(mas[1], 10);
    let strClock = 'N';
    let strMinutes = 'N';
    let numMas = mas.length;
    let result = '';
    if ((numMas < 3) && (clock < 24) && (minutes < 60) && (clock >= 0) && (minutes >= 0)) {
        if (clock > 0) {
            strClock = toRoman(clock, 4);
        }
        if (clock > 0) {
            strMinutes = toRoman(minutes, 7);
        }

        result = strClock + ':' + strMinutes;
        // Немного авторского кода и замечательной магии
    } else {
        throw new TypeError();
    }

    return result;
}

module.exports = romanTime;
