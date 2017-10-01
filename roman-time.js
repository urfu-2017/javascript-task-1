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
            answer += hour === 0 ? 'N' : firstChanger(parseInt(hour / 10)) +
                                            secondChanger(hour % 10);
            answer += ':';
            answer += minute === 0 ? 'N' : firstChanger(parseInt(minute / 10)) +
                                            secondChanger(minute % 10);

            return answer;
        }
        throw new TypeError('Error!');
    } else {
        throw new TypeError('Error!');
    }
}

function firstChanger(numFirst) {
    let romanFirst = ['','X','XX','XXX','XL','L']

    return romanFirst[numFirst];
}

function secondChanger(numSecond) {
    let romanSecond = ['','I','II','III','IV','V','VI','VII','VIII','IX']
    
    return romanSecond[numSecond];
}

module.exports = romanTime;
