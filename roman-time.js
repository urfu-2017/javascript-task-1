'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
const ROMAN_DECADES = [' ', 'X', 'XX', 'XXX', 'XL', 'L'];
const ROMAN_DIGITS = [' ', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
function isHoursCorrect(hours) {
    return hours < 0 || hours > 23 || isNaN(hours);
}
function isMinutesCorrect(minutes) {
    return minutes < 0 || minutes > 59 || isNaN(minutes);
}
function checkTime(hours, minutes) {
    if (isHoursCorrect(parseInt(hours)) || isMinutesCorrect(parseInt(minutes))) {
        throw new TypeError('Время введено неверно');
    }
}
function fromArabToRoman(number) {
    let roman = '';
    if (number === '00' || number === '0') {
        roman = 'N';

        return roman;
    }
    //  Функция для преобразования каждого символа в римскую цифру
    function transformEveryChar(stringToTransform, digitsArray, index) {
        for (let i = 0; i < digitsArray.length; i++) {
            if (parseInt(stringToTransform[index]) === i) {
                return digitsArray[i];
            }
        }
    }
    let romanFirst = transformEveryChar(number, ROMAN_DECADES, 0);
    let romanSecond = transformEveryChar(number, ROMAN_DIGITS, 1);
    if (number.length === 2) {
        roman = (romanFirst + romanSecond).replace(' ', '');
    } else {
        roman = transformEveryChar(number, ROMAN_DIGITS, 0);
    }

    return roman;
}
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    const HOURS = time.split(':')[0];
    const MINUTES = time.split(':')[1];
    checkTime(HOURS, MINUTES);

    return fromArabToRoman(HOURS) + ':' + fromArabToRoman(MINUTES);
}
module.exports = romanTime;
