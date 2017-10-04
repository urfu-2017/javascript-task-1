'use strict';

function validateMinutes(minutes) {
    if (isNaN(minutes)) {
        throw new TypeError();
    }

    if (minutes < 0 || minutes > 59) {
        throw new TypeError();
    }
}

function validateHours(hours) {
    if (isNaN(hours)) {
        throw new TypeError();
    }

    if (hours < 0 || hours > 23) {
        throw new TypeError();
    }
}


/**
 * @param {Number} num – любое число
 * @returns {String} – представление числа в виде римской цифры
 */
function toRoman(num) {
    if (num === 0) {
        return 'N';
    }

    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i <= decimal.length; i++) {
        while (num % decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
        }
    }

    return result;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let [hours, minutes, ...otherData] = time.split(':').map(Number);

    validateMinutes(minutes);
    validateHours(hours);
    if (otherData.length !== 0) {
        throw new TypeError();
    }

    return `${toRoman(hours)}:${toRoman(minutes)}`;
}

module.exports = romanTime;
