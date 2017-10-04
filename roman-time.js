'use strict';
var ret = [];
function arabToRoman(num) {
    var arab = [1, 4, 5, 9, 10, 40, 50];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var i = arab.length - 1;
    if (num === 0) {
        ret += 'N';
    }
    while (num > 0) {
        if (num >= arab[i]) {
            ret += roman[i];
            num -= arab[i];
        } else {
            i--;
        }

    }
}
function tryToRoman(sp) {
    for (var q = 0; q < 2; q++) {
        if (q === 1) {
            ret += ':';
        }
        var a = parseInt(sp[q], 10);
        arabToRoman(a);
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var splits = time.split(':');
    if (parseInt(splits[0], 10) >= 24 || parseInt(splits[1], 10) >= 60 ||
    time.match(/^\d\d:\d\d$/) === null) {
        throw new TypeError('Type Error!.......');
    }
    ret = [];
    try {
        tryToRoman(splits);

        return ret;
    } catch (err) {
        throw new TypeError('Type Error!.......');
    }
}


module.exports = romanTime;
