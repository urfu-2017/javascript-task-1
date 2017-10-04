'use strict';
function convert(tense) {
    var smallNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    var bigNumbers = ['X', 'XX', 'XXX', 'XL', 'L'];
    if (tense === 0) {

        return ('N');
    }

    return (bigNumbers[Math.floor(parseInt(tense) / 10)] + smallNumbers[parseInt(tense) % 10]);
}
function check(tense) {
    if (tense !== 2 || isNaN(parseInt(tense)) || tense === undefined || tense === null) {
        throw new TypeError('Неверное время');
    }
}
function romanTime(time) {
    time = time.split([':']);
    check(parseInt(time[0]));
    check(parseInt(time[1]));
    if (time[0] < 0 || time[0] > 23 || time[1] < 0 || time[1] > 59) {
        throw new TypeError('Неверное время');
    }

    return (convert(time[0]) + ':' + convert(time[1]));
}
module.exports = romanTime;
