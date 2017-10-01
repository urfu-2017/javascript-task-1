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
            hour === 0 ? answer += 'N' : answer = answer +
                                                firstChanger(parseInt(hour / 10)) +
                                                secondChanger(hour % 10);
            answer += ':';
            minute === 0 ? answer += 'N' : answer = answer +
                                                    firstChanger(parseInt(minute / 10)) +
                                                    secondChanger(minute % 10);

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
            break;
        case 1:
            return 'X';
            break;
        case 2:
            return 'XX';
            break;
        case 3:
            return 'XXX';
            break;
        case 4:
            return 'XL';
            break;
        case 5:
            return 'L';
            break;
        default:
            return '';
            break;
    }
}

function secondChanger(numSecond) {
    switch (numSecond) {
        case 0:
            return '';
            break;
        case 1:
            return 'I';
            break;
        case 2:
            return 'II';
            break;
        case 3:
            return 'III';
            break;
        case 4:
            return 'IV';
            break;
        case 5:
            return 'V';
            break;
        case 6:
            return 'VI';
            break;
        case 7:
            return 'VII';
            break;
        case 8:
            return 'VIII';
            break;
        case 9:
            return 'IX';
            break;
        default:
            return '';
            break;
    }
}

module.exports = romanTime;
