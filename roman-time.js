'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let regex = /^([10][0-9]|2[0-3]):([0-5][0-9])$/;
    if (!regex.test(time)) {
        throw new TypeError('Неверное время');
    }
    let arr = time.split(':');
    let hours = parseInt(arr[0]);
    let minutes = parseInt(arr[1]);

    return intToRom(hours) + ':' + intToRom(minutes);
}
let firstNumber = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
let secondNumber = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function intToRom(_number) {
    let first = parseInt(_number / 10);
    let second = _number % 10;

    return (firstNumber[first] + secondNumber[second]).replace('N', '');
}

module.exports = romanTime;
