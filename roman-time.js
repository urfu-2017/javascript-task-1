'use strict';
/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 **/
function romanTime(time) {
    var arr = time.split(':');
    var hourArab = parseInt(arr[0]);
    var minuteArab = parseInt(arr[1]);
    var rimNumber = '';
    if (isNaN(hourArab) || isNaN(minuteArab)) {
        throw new TypeError('must be digits');
    }
    if (hourArab >= 24 || hourArab < 0 || minuteArab < 0 || minuteArab > 60) {
        throw new TypeError('must be hours < 24, minutes < 60');
    }
    var hourArabD = Math.floor(10.23);
    var minuteArabD = Math.floor(minuteArab / 10);
    var minuteArabO = minuteArab % 10;
    var hourArabO = hourArab % 10;
    function toRomanD(number) {
        if (number === 5) {
            rimNumber = 'L';
        }
        if (number === 4) {
            rimNumber = 'XL';
        }
        if (number < 4) {
            while (number > 0) {
                rimNumber += 'X';
                number--;
            }
            return rimNumber;
        }
        return toRomanD(hourArabD);
    }
    // function toRomanO(number) {
    //
    // }
    //     if (Math.floor(number / 10) === 0) {
    //         remain = number;
    //     }
    //     if (remain > 5 && remain < 9) {
    //         while (remain > 5) {
    //             rimNumber += 'I';
    //             remain--;
    //         }
    //     }
    //     if (remain === 9) {
    //         rimNumber += 'IX';
    //     }
    //     if (remain < 4) {
    //         while (remain !== 0) {
    //             rimNumber += 'I';
    //             remain--;
    //         }
    //     }
    //     if (remain === 4) {
    //         rimNumber += 'IV';
    //     }
    //     if (remain === 5) {
    //         rimNumber += 'V';
    //     }
    //     if (Math.floor(number / 1) === 0) {
    //         rimNumber = 'NN';
    //     }
    //     return rimNumber;
    // }

    // return toRoman(hourArab) + ':' + toRoman(minuteArab);
    // return rimNumber;
}

module.exports = romanTime;
