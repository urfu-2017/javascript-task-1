'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var regExp = /^((\b[0-1]+\d)|(\b2([0-3])))\:(\b[0-5]?(\d))$/;
    var rimDigits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    checkIfTimeIsCorrect(time);
    time = time.split(':');
    time = convertNumberToRim(time[0]) + ':' + convertNumberToRim(time[1]);

    return time;
    function convertNumberToRim(number) {
        var convertedNumber = '';
        if (number === '00') {
            return 'N';
        } else if (number.charAt(0) === '4') {
            convertedNumber = 'XL';
        } else if (number.charAt(0) === '5') {
            convertedNumber = 'L';
        } else {
            convertedNumber += 'X'.repeat(Number(number.charAt(0)));
        } 
            convertedNumber += rimDigits[Number(number.charAt(1))];   

        return convertedNumber;
    }
    function checkIfTimeIsCorrect(checkingTime) {
        if ((checkingTime === null) || (checkingTime === undefined) || !regExp.test(checkingTime)) {
            throw new TypeError('Неверное время');
        }
    }
}

module.exports = romanTime;
