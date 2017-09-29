'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time[2] !== ':') {
        throw new TypeError('Неверный разделитель');
    }

    let ourTime = time.split(':');

    if (checkTime(ourTime) || checkTimeOnStrange(ourTime) ||
     ourTime[0].length !== 2 || ourTime[1].length !== 2) {
        throw new TypeError('Неверное время');
    }

    time = toRoman(ourTime[0]) + ':' + toRoman(ourTime[1]);

    return time;

}

function toRoman(num) {

    let Romans = ['', 'X', 'XX', 'XXX', 'XXXX', 'L'];
    let smallRomans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    if (num === '00') {

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

function checkTimeOnStrange(ourTime) {

    if (isNaN(ourTime[0]) || isNaN(ourTime[1]) || ourTime[0] === null || ourTime[1] === null) {
        return true;
    }

    return false;
}

module.exports = romanTime;
