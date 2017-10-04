'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 **/
function romanTime(time) {
    var reg = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
    if (!reg.test(time)) {
        throw new TypeError('Wrong format');
    }
    var arr = time.split(':');
    var hourArab = parseInt(arr[0]);
    var minuteArab = parseInt(arr[1]);
    function toRoman(number) {
        var rimNumber = '';
        var remain;
        var tens = Math.floor(number / 10);
        if (number === 0) {
            return 'N';
        }

        if (tens < 4) {
            rimNumber = repeatString('X', tens);
        } else {
            rimNumber = repeatString('X', 5 - tens) + 'L';
        }
        if (tens === 0) {
            remain = number;
        } else {
            remain = number % (tens * 10);
        }
        rimNumber += calcRemain(remain);

        return rimNumber;
    }

    function repeatString(string, count) {
        var result = '';
        while (count !== 0) {
            result += string;
            count--;
        }

        return result;
    }

    function calcRemain(remain) {
        if (remain > 5 && remain < 9) {
            return repeatString('I', remain - 5);
        }
        if (remain === 9) {
            return 'IX';
        }
        if (remain < 4) {
            return repeatString('I', remain);
        }
        if (remain === 4) {
            return 'IV';
        }
        if (remain === 5) {
            return 'V';
        }
    }

    return toRoman(hourArab) + ':' + toRoman(minuteArab);
}

module.exports = romanTime;
