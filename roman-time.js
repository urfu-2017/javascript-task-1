'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время a цифрами (IX:V)
 */
function romanTime(time) {
    if (!/^[0-9]{2}:[0-9]{2}$/.test(time)) {
        throw new TypeError('Invalid time');
    }
    let splited = time.split(':');
    let hours = splited[0];
    let minutes = splited[1];
    if (!isInRange(hours, -1, 24)) {
        throw new TypeError('Hours should be less than 24 and non negative');
    }
    if (!isInRange(minutes, -1, 60)) {
        throw new TypeError('Minutes should be less than 60 and non negative');
    }

    return convertToRomanNumber(hours) + ':' + convertToRomanNumber(minutes);
}

function isInRange(number, min, max) {
    return number > min && number < max;
}

function convertToRomanNumber(stringArabicNumber) {
    let romanLetters = ['I', 'V', 'X', 'L', 'C'];
    let result = '';
    for (var i = 0; i < stringArabicNumber.length; i++) {
        let currentDigit = stringArabicNumber[stringArabicNumber.length - i - 1];
        result = convertToRomanDigit(currentDigit, romanLetters, i * 2) + result;
    }
    if (result === '') {
        return 'N';
    }

    return result;
}

function convertToRomanDigit(digit, letters, index) {
    let numberDigit = Number(digit);
    if (numberDigit === 0) {
        return '';
    }
    if (numberDigit <= 3) {
        return letters[index].repeat(numberDigit);
    }
    if (numberDigit <= 5) {
        return letters[index].repeat(5 - numberDigit) + letters[index + 1];
    }
    if (numberDigit <= 8) {
        return letters[index + 1] + letters[index + 0].repeat(numberDigit - 5);
    }

    return letters[index] + letters[index + 2];
}

module.exports = romanTime;
