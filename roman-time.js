'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var romanNumberTen = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
var romanNumber = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function romanTime(time) {
    let re = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!re.test(time)) {
        throw new TypeError('TimeError');
    } else {
        var hour = parseInt(time.slice(0, 2), 10);
        var minut = parseInt(time.slice(3, 5), 10);
        var romanTimeHour = (romanNumberTen[(hour - hour % 10) / 10] +
         romanNumber[hour % 10]).replace('N', '');
        var romanTimeminut = (romanNumberTen[(minut - minut % 10) / 10] +
         romanNumber[minut % 10]).replace('N', '');

        return romanTimeHour + ':' + romanTimeminut;
    }
}

module.exports = romanTime;
