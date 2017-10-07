'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

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

function validTime(HHMM) {
    let regulars = new RegExp('^((0[0-9])|(1[0-9])|(2[0-3])):[0-5][0-9]$');
    let timeIsValid = regulars.test(HHMM);
    if (timeIsValid === false || HHMM[2] !== ':' || HHMM.length !== 5) {
        throw new TypeError('Неверное время');
    }

    return HHMM;
}

function romanTime(time) {
    time = validTime(time);
    let timeSplitted = time.split(':');
    let hours = timeSplitted[0];
    let minutes = timeSplitted[1];
    time = arabToRom(hours) + ':' + arabToRom(minutes);

    return time;
}

module.exports = romanTime;
