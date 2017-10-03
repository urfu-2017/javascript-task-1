'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var timeNorm;
    var timeRome;
    var answer = [];
    if (isTimeCorrect(time) && time.length === 5) {
        timeNorm = time.split(':');
        timeNorm = timeNorm.join('');
        timeNorm = timeNorm.slice();
        timeRome = transmutation(timeNorm);
        answer = correction(timeRome);
        time = answer.join('');
    } else {
        throw new TypeError('TypeError: Неверное время');
    }


    return time;
}

module.exports = romanTime;

function isTimeCorrect(time) {
    try {
        var timeNorm = time.split(':');
        var isCorrect = true;
        if (timeNorm[0] < 0 || timeNorm[1] < 0) {
            isCorrect = false;
        }
        if (timeNorm[0] > 23 || timeNorm[1] > 59) {
            isCorrect = false;
        }

        return isCorrect;
    } catch (err) {
        var isntCorrect = false;

        return isntCorrect;
    }
}

function transmutation(timeNorm) {

    var numbersRome = ['N',
                        'I',
                        'II',
                        'III',
                        'IV',
                        'V',
                        'VI',
                        'VII',
                        'VIII',
                        'IX',
                        'N',
                        'X',
                        'XX',
                        'XXX',
                        'XL',
                        'L'];
    var timeRome = [];
    for (let i = 0; i < timeNorm.length; i++) {
        var exN = 0;
        if (i % 2 === 0) {
            timeRome.push(numbersRome[parseInt(timeNorm[i]) + 10]);

        } else {
            timeRome.push(numbersRome[timeNorm[i]]);
            exN ++;
        }
        for (let k = 0; k < exN; k++) {
            delete timeRome[timeRome.indexOf('N')];
        }
        if (i === 1) {
            timeRome.push(':');
        }
    }

    return timeRome;
}

function correction(timeRome) {
    timeRome = timeRome.join(' ');
    timeRome = timeRome.replace(/\s+/g, ' ');
    timeRome = timeRome.replace(/^\s*/, '').replace(/\s*$/, '');
    timeRome = timeRome.split(' ');
    var answer = [];
    for (let i = 0; i < timeRome.length; i++) {
        if (timeRome[0] === ':' && i === 0) {
            continue;
        } else {
            answer.push(timeRome[i]);
        }
        if (timeRome[0] === ':' && i === 1) {
            answer.push(':');
        }
    }

    return answer;
}
