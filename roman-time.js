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

function validHours(HH) {
    let condition = true;
    if (HH < 0 || HH > 23) {
        condition = false;
    }

    return condition;
}

function validMinutes(MM) {
    let condition = true;
    if (MM < 0 || MM > 59) {
        condition = false;
    }

    return condition;
}

function validTime(HH, MM) {
    let hoursAreValid = validHours(HH);
    let minutesAreValid = validMinutes(MM);
    if (hoursAreValid === false || minutesAreValid === false) {
        throw new TypeError('Неверное время');
    }
}

function romanTime(time) {
    let timeSplitted = time.split(':');
    if (time[2] !== ':' || time.length !== 5 || timeSplitted.length !== 2) {
        throw new TypeError('Неверное время');
    }
    let hours = timeSplitted[0];
    let minutes = timeSplitted[1];
    validTime(hours, minutes);
    time = arabToRom(hours) + ':' + arabToRom(minutes);

    return time;
}

module.exports = romanTime;
