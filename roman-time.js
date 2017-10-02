'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var numbersNorm = ['1',
                       '2',
                       '3',
                       '4',
                       '5',
                       '6',
                       '7',
                       '8',
                       '9',
                       '0'];

    var numbersRome = ['I',
                       'II',
                       'III',
                       'IV',
                       'V',
                       'VI',
                       'VII',
                       'VIII',
                       'IX',
                       'N'];

    var numbersDecadeR = ['X',
                          'XX',
                          'XXX',
                          'XL',
                          'L'];

    var timeRome;
    if (isTimeCorrect(time)) {
        var timeNorm = time.split(':');
        timeRome = transmutation(numbersDecadeR, timeNorm, numbersNorm, numbersRome);
        delete timeRome[timeRome.length - 1];
        time = timeRome.join('');
    }
    else {
        time = 'TypeError: Неверное время';
    }
// Немного авторского кода и замечательной магии

    return time;
}

module.exports = romanTime;

function isTimeCorrect(time) {

    var timeCorrect = true;

    try {
        var timeNorm = time.split(':');

        if (timeNorm[0] >= 24 || timeNorm[1] > 59) {
            timeCorrect = false;
        }
        if (timeNorm[0] < 0 || timeNorm[1] < 0 || time.length !== 5) {
            timeCorrect = false;
        }
    }

    catch (err) {

        timeCorrect = false;

    }

    return timeCorrect;

}

function transmutation(numbersDecadeR, timeNorm, numbersNorm, numbersRome) {
    var timeRome = [];
    for (var i = 0; i < timeNorm.length; i ++) {
        var excessN = 0;
        for (let j = 0; j < numbersDecadeR.length; j++) {
            if (String(timeNorm[i])[0] === numbersNorm[j]) {
                excessN++;
                timeRome.push(numbersDecadeR[j]);
            }        
        }
        for (let j = 0; j < numbersNorm.length; j++) {
            if (String(timeNorm[i])[1] === numbersNorm[j]){
                timeRome.push(numbersRome[j]);
            }     
        }
        for (var k = 0; k < excessN; k++) {
            delete timeRome[timeRome.indexOf('N')];
        }

        timeRome.push(':');

    }

    return timeRome;
}


