'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @param {String} hour - часы
 * @param {String} minute - минуты
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time[2] !== ':') {
        throw new TypeError('Неверное время');
    }
    var arr = time.split(':');
    if (parseInt(arr[0], 10).isNaN || parseInt(arr[1], 10).isNaN ||
        parseInt(arr[0], 10) > 23 || parseInt(arr[1], 10) > 59) {
        throw new TypeError('Неверное время');
    }
    if (parseInt(arr[0], 10) === 0 && parseInt(arr[1], 10) === 0)  {
        time = 'N:N';
        return time;
    }
    var hour = arr[0];
    var minute = arr[1];
    // console.info(hour);
    // console.info(minute);

    hour = toRomanTime(hour);
    minute = toRomanTime(minute);
    
    time = hour + ':' + minute;
    return time;
}

function toRomanTime(arr) {
    var hours = ['X', 'XX', 'XXX', 'XL', 'L'];
    var minutes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    if (parseInt(arr, 10) === 0) {
        return 'N';
    }
    if (arr.length === 1) {
        for (var i = 1; i < 10; i++) {
            if (parseInt(arr, 10) === i) {
                return minutes[i-1];
            }
        }
    }
    if (arr.length === 2) {
        var num = arr.split('');
        for (var i = 1; i < 6; i++) {
            if (parseInt(num[0], 10) === i) {
                num[0] = hours[i-1];
                break;
            }
            if (parseInt(num[0], 10) === 0) {
                num[0] = '';
                break;
            }
        }
        for (var i = 1; i < 10; i++) {
            if (parseInt(num[1], 10) === i) {
                num[1] = minutes[i-1];
                break;
            }
            if (parseInt(num[1], 10) === 0) {
                num[1] = '';
                break;
            }
        }
        var tt = num.join('');
        return tt;
    }
}

module.exports = romanTime;
