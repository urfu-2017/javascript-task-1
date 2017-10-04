/* eslint-disable complexity,max-statements */
'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 **/
function romanTime(time) {
    var arr = time.split(':');
    var hour = parseInt(arr[0]);
    var minute = parseInt(arr[1]);
    if (isNaN(minute) || minute < 0 || minute > 60) {
        throw new TypeError('must be digits');
    }
    if (isNaN(hour) || hour >= 24 || hour < 0) {
        throw new TypeError('must be hours < 24, minutes < 60');
    }
    function toRoman(number) {
        var rimNumber = '';
        var remain;
        if (Math.floor(number / 50) === 1) {
            rimNumber = 'L';
            remain = number % 50;
        }
        if (Math.floor(number / 10) === 4) {
            rimNumber = 'XL';
            remain = number % 40;
        }
        if (Math.floor(number / 10) === 3) {
            rimNumber = 'XXX';
            remain = number % 30;
        }
        if (Math.floor(number / 10) === 2) {
            rimNumber = 'XX';
            remain = number % 20;
        }
        if (Math.floor(number / 10) === 1) {
            rimNumber = 'X';
            remain = number % 10;
        }
        if (Math.floor(number / 10) === 0) {
            remain = number;
        }
        if (remain > 5 && remain < 9) {
            while (remain > 5) {
                rimNumber += 'I';
                remain--;
            }
        }
        if (remain === 9) {
            rimNumber += 'IX';
        }
        if (remain < 4) {
            while (remain !== 0) {
                rimNumber += 'I';
                remain--;
            }
        }
        if (remain === 4) {
            rimNumber += 'IV';
        }
        if (remain === 5) {
            rimNumber += 'V';
        }
        if (Math.floor(number / 1) === 0) {
            rimNumber = 'N';
        }

        return rimNumber;
    }

    return toRoman(hour) + ':' + toRoman(minute);
}

module.exports = romanTime;
