'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var arr = time.split(':');
    var hourArab = parseInt(arr[0]);
    var minuteArab = parseInt(arr[1]);
    if (isNaN(hourArab) || isNaN(minuteArab) || hourArab >= 24 || hourArab < 0 || minuteArab < 0 || minuteArab > 60 ) {
        throw new TypeError;
    }
    function toRoman(number)
    {
        var rimNumber = '';
        var remain;
        if (Math.floor(number/50) === 1)
        {
            rimNumber = 'L';
            remain = number % 50;
        }
        if (Math.floor(number/10) === 4)
        {
            rimNumber = 'XL';
            remain = number % 40;
        }
        if (Math.floor(number/10) === 3)
        {
            rimNumber = 'XXX';
            remain = number % 30;
        }
        if (Math.floor(number/10) === 2)
        {
            rimNumber = 'XX';
            remain = number % 20;
        }
        if (Math.floor(number/10) === 1)
        {
            rimNumber = 'X';
            remain = number % 10;
        }
        if (Math.floor(number/10) === 0)
        {
            remain = number;
        }
        if (remain > 5 && remain < 9)
        {
            while (remain > 5)
            {
                rimNumber += 'I';
                remain--;
            }
        }
        if (remain === 9)
        {
            rimNumber += 'IX';
        }
        if (remain < 4)
        {
            while (remain !== 0)
            {
                rimNumber += 'I';
                remain--;
            }
        }
        if (remain === 4)
        {
            rimNumber += 'IV';
        }
        if (remain === 5)
        {
            rimNumber += 'V';
        }
        if (Math.floor(number/1) === 0)
        {
            rimNumber = 'NN';
        }
        return rimNumber;
    }
    return toRoman(hourArab) +  ':' + toRoman(minuteArab);
}

module.exports = romanTime;
