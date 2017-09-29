'use strict';

/*
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRoman(inn) {
    if (inn === 0) {

        return ('N');
    }
    var answ = '';
    var a1 = [50, 40, 10, 9, 5, 4, 1];
    var a2 = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (var i = 0; i < a1.length; i++) {
        while (inn >= a1[i]) {
            answ += a2[i];
            inn -= a1[i];
        }
    }

    return (answ);
}

function romanTime(time) {
    if (time === null || time === undefined || typeof(time) !== 'string') {
        throw new TypeError('Неверное время: ' + time);
    }
    var regular = /\d\d[:]\d\d/;
    var List = time.split(':');
    var Hour = Number(List[0]);
    var Minuets = Number(List[1]);
    if (regular.test(time) && Hour >= 0 && Hour <= 23 && Minuets >= 0 && Minuets < 60) {

        return (toRoman(Hour) + ':' + toRoman(Minuets));
    }
    throw new TypeError('Неверное время: ' + time);
    // Немного авторского кода и замечательной магии
}
module.exports = romanTime;
