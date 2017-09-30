'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    let ourTime = time.split(':');
    if (time.length !== 5) {
        throw new TypeError('Неверное время');
    }

    if (checkTime(ourTime)) {
        throw new TypeError('Неверное время');
    }

    time = toRoman(ourTime[0]) + ':' + toRoman(ourTime[1]);

    return time;

}

function toRoman(num) {

    let Romans = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    let smallRomans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    if (num === '00' || num === '0') {

        return 'N';
    }
    num = Romans[Number(num[0])] + smallRomans[Number(num[1])];

    return num;
}

function checkTime(ourTime) {

    if (ourTime[0] > 23 || ourTime[0] < 0 || ourTime[1] > 59 || ourTime[1] < 0) {

        return true;
    }

    return false;
}

module.exports = romanTime;
