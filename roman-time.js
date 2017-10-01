'use strict';

/**
 * @param {String} time
 * @returns {String}
 */
function romanTime(time) {
    checkInput(time);
    var numbers = time.split(':');
    if (numbers[0].length !== 2 || numbers[1].length !== 2) {
        throw new TypeError('Invalid time format');
    }
    var firstNumber = parseInt(numbers[0]);
    var secondNumber = parseInt(numbers[1]);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new TypeError('Invalid time format');
    }
    checkValidityOfTime(firstNumber, secondNumber);
    time = numberToRomanStyle(firstNumber) + ':' + numberToRomanStyle(secondNumber);

    return time;
}

module.exports = romanTime;

var ROMAN_DIGIT = { 0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI',
7: 'VII', 8: 'VIII', 9: 'IX' };
var ROMAN_DOZENS = { 0: '', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L' };

function numberToRomanStyle(num) {
    var firstDigit = Math.floor(num / 10);
    var secondDigit = num % 10;
    var answer = '';
    if (firstDigit === 0 && secondDigit === 0) {
        answer += 'N';
    } else {
        answer += ROMAN_DOZENS[firstDigit] + ROMAN_DIGIT[secondDigit];
    }

    return answer;
}

function checkInput(data) {
    if (data === null || data === undefined) {
        throw new TypeError('Invalid time format.');
    }
    var regExp = new RegExp('^.*[A-zА-яЁё]+.*$');
    if (regExp.test(data)) {
        throw new TypeError('Invalid time format.');
    }
}

function checkValidityOfTime(firstNumber, secondNumber) {
    if (firstNumber < 0 || firstNumber > 23) {
        throw new TypeError('Invalid time format');
    } else if (secondNumber < 0 || secondNumber > 59) {
        throw new TypeError('Invalid time format');
    }
}
