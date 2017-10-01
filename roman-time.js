'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var regex = /\d\d:\d\d/;

function isValidation(hour, minute) {
    return hour >= 0 && minute >= 0 && hour < 24 && minute < 60;
}

function numberToriman(hour, minut) {
    var res = '';
    var romanUnits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var romanDozens = ['', 'X', 'XX', 'XXX', 'XL', 'L'];

    res = (hour === 0) ? 'N' : (romanDozens[(hour - hour % 10) / 10] + romanUnits[hour % 10]);

    res += ':';

    res += (minut === 0) ? 'N' : (romanDozens[(minut - minut % 10) / 10] + romanUnits[minut % 10]);

    return res;
}

function romanTime(time) {
    if (typeof time !== 'string' || time.length !== 5 || time.match(regex) === null) {
        throw new TypeError('Неверное вреимя');
    }
    time = time.split(':');
    var hour = Number(time[0]);
    var minute = Number(time[1]);
    if (isValidation(hour, minute)) {
        time = numberToriman(hour, minute);
    } else {
        throw new TypeError('Неверное время');
    }

    return time;
}

module.exports = romanTime;
