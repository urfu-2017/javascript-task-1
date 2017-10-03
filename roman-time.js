/* eslint-disable complexity */
'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
const Roman1to9 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XL', 'L'];
const Roman10 = ['', 'X', 'XX', 'XXX', 'XL', 'L'];


function romanTime(time) {
    // Немного авторского кода и замечательной магии
    let t = time.split([':']);
    if (t.length > 2) {
        throw new TypeError('Неверное время: ' + time);
    }
    let min = parseInt(t[1], 10);
    let hour = parseInt(t[0], 10);
    if (min > 59 || min < 0 || hour > 23 || hour < 0 || isNaN(min) || isNaN(hour)) {
        throw new TypeError('Неверное время: ' + time);
    } else {
        let romanMin = Roman10[Math.floor(min / 10)] + Roman1to9[min % 10];
        let romanHour = Roman10[Math.floor(hour / 10)] + Roman1to9[hour % 10];

        if (min === 0 && hour !== 0) {
            romanMin = 'N';
        } else if (hour === 0 && min !== 0) {
            romanHour = 'N';
        } else if (min === 0 && hour === 0) {
            romanHour = 'N';
            romanMin = 'N';
        }

        return (`${romanHour}:${romanMin}`);
    }
}

module.exports = romanTime;
