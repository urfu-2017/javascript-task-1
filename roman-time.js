'use strict';

/**
 * @param {String} time
 * @returns {String}
 */
function romanTime(time) {
    if (time === null || time === undefined) {
        throw new TypeError('Invalid time format.');
    }
    var numbers = time.split(':');
    var firstNumber = parseInt(numbers[0]);
    var secondNumber = parseInt(numbers[1]);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new TypeError('Invalid time format');
    }
    if (firstNumber < 0 || firstNumber > 23) {
        throw new TypeError('Invalid time format');
    }
    if (secondNumber < 0 || secondNumber > 59) {
        throw new TypeError('Invalid time format');
    }
    time = numberToRomanStyle(firstNumber) + ':' + numberToRomanStyle(secondNumber);

    return time;
}

module.exports = romanTime;

function numberToRomanStyle(num) {
    var firstDigit = Math.floor(num / 10);
    var secondDigit = num % 10;
    var answer = '';
    if (firstDigit === 0 && secondDigit === 0) {
        answer += 'N';
    }
    if (firstDigit < 4) {
        while (firstDigit > 0) {
            answer += 'X';
            --firstDigit;
        }
    } else if (firstDigit === 4) {
        answer += 'XL';
    } else if (firstDigit === 5) {
        answer += 'L';
    } else {
        answer += 'LX';
    }
    if (secondDigit < 4) {
        while (secondDigit > 0) {
            answer += 'I';
            --secondDigit;
        }
    } else if (secondDigit < 9) {
        answer += 'V';
        while (secondDigit % 5 > 0) {
            answer += 'I';
            --secondDigit;
        }
    } else {
        answer += 'IX';
    }

    return answer;
}
