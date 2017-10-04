'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

const romanNumbers = ['N', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

const presentNumbers = [0, 1, 4, 5, 9, 10, 40, 50];


function checkString(string) {
    if (typeof string !== 'string') {
        throw new TypeError('Такого времени не может быть');
    }
}

function romanTime(time) {

    checkString(time);

    let hoursAndMinuts = time.split(':');

    // Варианты неправильного ввода
    if (hoursAndMinuts.length !== 2 ||
        hoursAndMinuts.forEach((string) => (string.isNaN)) ||
        hoursAndMinuts.forEach((clock) => (clock < 0)) ||
        hoursAndMinuts[0] > 23 ||
        hoursAndMinuts[1] > 59) {
        throw new TypeError('Такого времени не может быть');
    }

    // Переводим в roman time
    hoursAndMinuts = hoursAndMinuts.map((number) => {

        number = parseInt(number);
        let iter = presentNumbers.length - 1;
        let result = '';

        if (number === 0) {
            return romanNumbers[0];
        }

        while (number > 0) {
            if (number >= presentNumbers[iter]) {
                result += romanNumbers[iter];
                number -= presentNumbers[iter];
            } else {
                iter--;
            }

        }

        return result;
    });

    time = hoursAndMinuts.join(':');

    return time;
}

module.exports = romanTime;
