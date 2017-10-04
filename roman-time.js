'use strict';
function convert(tense) {
    var smallNumbers = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    var bigNumbers = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    if (tense === '00') {
 
        return ('N');
    }
    if (tense.lenght > 2 || tense.lenght < 2) {
        throw new TypeError('Неверное время не 2');
    } else {
 
        return (bigNumbers[Math.floor(parseInt(tense) / 10)] + smallNumbers[parseInt(tense) % 10]);
    }
}
function check(tense) {
    if (isNaN(tense) || tense === undefined || tense === null) {
        throw new TypeError('Неверное время');
    }
}
function romanTime(time) {
    time = time.split([':']);
    check(time[0]);
    check(time[1]);
    if (parseInt(time[0]) < 0 || parseInt(time[0]) > 23) {
        throw new TypeError('Неверное время: часы');
    }
    if (parseInt(time[1]) < 0 || parseInt(time[1]) > 59) {
        throw new TypeError('Неверное время: минуты');
    }
 
    return (convert(time[0]) + ':' + convert(time[1]));
}
module.exports = romanTime;
