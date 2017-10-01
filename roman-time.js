'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time) {
        const hour = Number(time.split(':')[0]);
        const minute = Number(time.split(':')[1]);
        if (hour >= 0 && hour < 24 && minute >= 0 && minute < 60) {
            let answer = '';
            answer += hour === 0 ? 'N' : firstChanger(parseInt(hour / 10)) + secondChanger(hour % 10);
            answer += ':';
            answer += minute === 0 ? 'N' : firstChanger(parseInt(minute / 10)) + secondChanger(minute % 10);

            return answer;
        }
        throw new TypeError('Error!');
    } else {
        throw new TypeError('Error!');
    }
}

function firstChanger(numFirst) {
    switch (numFirst) {
        case 0:
            return '';
        case 1:
            return 'X';
        case 2:
            return 'XX';
        case 3:
            return 'XXX';
        case 4:
            return 'XL';
        case 5:
            return 'L';
        default:
            return '';
    }
}

function secondChanger(numSecond) {
    switch (numSecond) {
        case 0:
            return '';
        case 1:
            return 'I';
        case 2:
            return 'II';
        case 3:
            return 'III';
        case 4:
            return 'IV';
        case 5:
            return 'V';
        case 6:
            return 'VI';
        case 7:
            return 'VII';
        case 8:
            return 'VIII';
        case 9:
            return 'IX';
        default:
            return '';
    }
}

module.exports = romanTime;
