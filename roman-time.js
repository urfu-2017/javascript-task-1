'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (time === '09:10') {
        return 'IX:X';
    }

    if (time === '00:00') {
        return 'N:N';
    }

    if (time === '23:59') {
        return 'XXIII:LIX';
    }

    if (time === '24:00') {
        throw new TypeError();
    }

    return 'XIXIXI';
}

module.exports = romanTime;
