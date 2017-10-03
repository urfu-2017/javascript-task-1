'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time[2] !== ':') {
        throw new TypeError("Неверное время");
    }
    var arr = time.split(':');
    var hour = arr[0];
    var minute = arr[1];
    
    hour = toHour(hour);
    minute = toMinute(minute);
    
    time = hour + ':' + minute;
    return time;
}

function toHour(arr) {
    var hours = ['', 'X', 'XX'];
    var minutes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var hour = 'N';
    if (arr.length == 2 && parseInt(arr) >= 0 && parseInt(arr) < 24) {
        var num = arr.split('');
        if (parseInt(num[0]) === 0 && parseInt(num[1]) === 0) {
            return hour;
        }
        for (var i = 0; i < 3; i++) {
            if (parseInt(num[0]) === i) {
                num[0] = hours[i];
                for (var j = 0; j < 10; j++) {
                    if (parseInt(num[1]) === j) {
                        num[1] = minutes[j];
                    }
                }
                hour = num.join('');
                return hour;
            }
        }
    }
    throw new TypeError('Неверное время');
}

function toMinute(arr) {
    var hours = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var minutes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var minute = 'N';

    if (arr.length === 2 && parseInt(arr) >= 0 && parseInt(arr) < 60) {
        var num = arr.split('');
        if (parseInt(num[0]) === 0 && parseInt(num[1]) === 0) {
            return minute;
        }
        for (var i = 0; i < 6; i++) {
            if (parseInt(num[0]) === i) {
                num[0] = hours[i];
                for (var j = 0; j < 10; j++) {
                    if (parseInt(num[1]) === j) {
                        num[1] = minutes[j];
                    }
                }
                minute = num.join('');
                return minute;
            }
        }
    }
    throw new TypeError('Неверное время');
}

module.exports = romanTime;
