'use strict';

// for (var i = 0; i < 24; i++) {
//     for (var j = 0; j < 60; j++) {
//         console.info(romanTime(i + ':' + j));
//     }
// }
console.info(romanTime('23:23'));


/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // if (time === null || time === undefined) {
    //     return new TypeError('Неверные входные данные');
    // }
    if (typeof time !== 'string') {
        throw new TypeError('Bad input');
    }
    var splittedTime = time.split(':');
    if (splittedTime.length !== 2) {
        throw new TypeError('Bad input');
    }
    var keyToRoman = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    var newHour = Number(splittedTime[0]);
    var newMinute = Number(splittedTime[1]);
    // var newHour = parseInt(splittedTime[0], 10);
    // var newMinute = parseInt(splittedTime[1], 10);
    if (isValidFormat(newHour, 24) && isValidFormat(newMinute, 60)) {
        return moveToRoman(newHour, keyToRoman) + ':' + moveToRoman(newMinute, keyToRoman);
    }
    throw new TypeError('Неверное время');
}

function isValidFormat(time, limit) {
    return !isNaN(parseInt(time, 10)) && time >= 0 && time < limit && Number.isInteger(time);
}

function moveToRoman(time, keyToRoman) {
    var newRomanTime = '';

    if (time <= 10) {
        return keyToRoman[time];
    }
    if (time >= 50) {
        newRomanTime += 'L';
        time -= 50;
    }
    if (time >= 40) {
        newRomanTime += 'XL';
        time -= 40;
    }
    while (time >= 10) {
        newRomanTime += 'X';
        time -= 10;
    }
    if (time === 0) {
        return newRomanTime;
    }

    return newRomanTime + keyToRoman[time];

}
module.exports = romanTime;
