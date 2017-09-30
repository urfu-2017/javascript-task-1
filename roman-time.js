'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var romanMatrix = [
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];
function toRoman(num) {
    if (num === 0) {
        return 'N';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + toRoman1(num - romanMatrix[i][0]);
        }
    }
}
function toRoman1(num) {
    if (num === 0) {
        return '';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + toRoman1(num - romanMatrix[i][0]);
        }
    }
}
function sanityCheck(hours, mins, vars) {
    return (isNaN(hours) || isNaN(mins) || hours > 23 || mins > 59 ||
    hours < 0 || mins < 0 );

}
function romanTime(time) {
    var vars = time.split(':');
    var hours = parseInt(vars[0]);
    var mins = parseInt(vars[1]);
    var ans;
    if (sanityCheck(hours, mins, vars) || vars.length > 2) {
        throw new TypeError('Incorrect input!');
    } else {
        ans = toRoman(hours) + ':' + toRoman(mins);
    }

    return ans;
}
module.exports = romanTime;
