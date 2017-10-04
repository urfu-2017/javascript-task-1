'use strict';


/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    let parsedTime = /(\d+):(\d+)/.exec(time);

    if (!parsedTime || !parsedTime[1] || !parsedTime[2]) {
        throw new TypeError();
    }

    let [hours, minutes] = [Number(parsedTime[1]), Number(parsedTime[2])];

    if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0) {
        throw new TypeError();
    }

    return toRoman(hours) + ':' + toRoman(minutes);
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

module.exports = romanTime;
