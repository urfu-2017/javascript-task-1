'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let answerRoman = '';
    if (time) {
        const hour = time.split(':')[0];
        const minute = time.split(':')[1];
        if (Number(hour) >= 0 && Number(hour) < 24 && Number(minute) >= 0 && Number(minute) < 60) {
            let hourFirst = hour[0];
            let hourSecond = hour[1];
            let minuteFirst = minute[0];
            let minuteSecond = minute[1];
            answerRoman = answerRoman + romanChanger(hourFirst, hourSecond) +
                                        ':' +
                                        romanChanger(minuteFirst, minuteSecond);

            return answerRoman;
        }
        throw new TypeError('Error!');
    } else {
        throw new TypeError('Error!');
    }
}

function romanChanger(numFirst, numSecond) {
    if (numFirst === '0' && numSecond === '0') {
        return 'N';
    } else {
        let returnAns = '';
        switch (numFirst) {
            case '0':
                break;
            case '1':
                returnAns = returnAns + 'X';
                break;
            case '2':
                returnAns = returnAns + 'XX';
                break;
            case '3':
                returnAns = returnAns + 'XXX';
                break;
            case '4':
                returnAns = returnAns + 'XL';
                break;
            case '5':
                returnAns = returnAns + 'L';
                break;
            default:
                break;
        }
        switch (numSecond) {
            case '0':
                break;
            case '1':
                returnAns = returnAns + 'I';
                break;
            case '2':
                returnAns = returnAns + 'II';
                break;
            case '3':
                returnAns = returnAns + 'III';
                break;
            case '4':
                returnAns = returnAns + 'IV';
                break;
            case '5':
                returnAns = returnAns + 'V';
                break;
            case '6':
                returnAns = returnAns + 'VI';
                break;
            case '7':
                returnAns = returnAns + 'VII';
                break;
            case '8':
                returnAns = returnAns + 'VIII';
                break;
            case '9':
                returnAns = returnAns + 'IX';
                break;
            default:
                break;
        }

        return returnAns;
    }
}

module.exports = romanTime;
