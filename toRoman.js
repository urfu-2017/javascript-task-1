'use strict';

/**
 * @param {Number} num
 * @returns {String}
 */
module.exports = function (num) {
    if (num === 0) {
        return 'N';
    }
    var roman = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var arabic = [50, 40, 10, 9, 5, 4, 1];
    var result = '';
    var i = 0;
    while (i < 7) {
        var value = arabic[i];
        var symbol = roman[i];
        if (value <= num) {
            result += symbol;
            num -= value;
        } else {
            i++;
        }
    }

    return result;
};
