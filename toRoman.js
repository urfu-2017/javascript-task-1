'use strict';

/**
 * @param {Number} num
 * @returns {String}
 */
module.exports = function (num) {
    if (num === 0) {
        return 'N';
    }
    var result = '';
    var l = Math.floor(num / 50);
    result += new Array(l + 1).join('L');
    num %= 50;
    var x = Math.floor(num / 10);
    num %= 10;
    result = x > 3 ? 'X' + result : result;
    var firstTen = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    result += num > 8 ? firstTen[num - 1] : '';
    result += new Array(x + 1).join('X');
    result += num <= 8 && num > 0 ? firstTen[num - 1] : '';

    return result;
};
