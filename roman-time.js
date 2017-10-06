'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

let wrongTimeError = new TypeError('Неверное время');

function transform(source) {
    let result = '';
    let romanesEuntDomus = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let arabicNums = [50, 40, 10, 9, 5, 4, 1];
    let counter = source;
    for (let i = 0; i < arabicNums.length; i++) {
        while (counter >= arabicNums[i]) {
            result = result + romanesEuntDomus[i];
            counter -= arabicNums[i];
        }
    }

    return result;
}

function arabToRom(arabic) {
    let roman = '';
    if (parseInt(arabic) === 0) {
        roman = 'N';
    } else {
        roman = transform(arabic);
    }

    return roman;
}

function validTime(HH, MM) {}

function romanTime(time) {
    let timeSplitted = time.split(':');
    if (time[2] !== ':' || time.length !== 5 || timeSplitted.length !== 2) {
        throw wrongTimeError;
    }
    let hours = timeSplitted[0];
    let minutes = timeSplitted[1];
    // validTime(hours, minutes);
    time = arabToRom(hours) + ':' + arabToRom(minutes);

    return time;
}

module.exports = romanTime;
