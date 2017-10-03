'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var arr = time.split(':');
    var hourArab = parseInt(arr[0]);
    var minuteArab = parseInt(arr[1]);
    var ten = 10;
    var five = 5;
    var one = 1;
    var fifty = 50;
    var fourty = 40;
    var thirty = 30;
    var twenty = 20;
    var time;

    var hourRim, minuteRim, remainH, remainM;
    if (isNaN(hourArab) || isNaN(minuteArab) || hourArab >= 24 || hourArab < 0 || minuteArab < 0 || minuteArab > 60 ) {
        throw new TypeError;
    }
    if (Math.floor(minuteArab/fifty) === 1)
    {
        minuteRim = 'L';
        remainM = minuteArab % fifty;
    }
    if (Math.floor(minuteArab/ten) === 4)
    {
        minuteRim = 'XL';
        remainM = minuteArab % fourty;
    }
    if (Math.floor(minuteArab/ten) === 3)
    {
        minuteRim = 'XXX';
        remainM = minuteArab % thirty;
    }
    if (Math.floor(minuteArab/ten) === 2)
    {
        minuteRim = 'XX';
        remainM = minuteArab % twenty;
    }
    if (Math.floor(minuteArab/ten) === 1)
    {
        minuteRim = 'X';
        remainM = minuteArab % ten;
    }
    if (Math.floor(minuteArab/ten) === 0)
    {
        remainM = minuteArab;
    }
    if (remainM > 5 && remainM < 9)
    {
        while (remainM > 5)
        {
            minuteRim  = minuteRim + 'I';
            remainM--;
        }
    }
    if (remainM === 9)
    {
        minuteRim = minuteRim + 'IX';
    }
    if (remainM < 4)
    {
        while (remainM !== 0)
        {
            minuteRim = minuteRim + 'I';
            remainM--;
        }
    }
    if (remainM === 4)
    {
        minuteRim = minuteRim + 'IV';
    }
    if (remainM === 5)
    {
        minuteRim = minuteRim + 'V';
    }
    if (Math.floor(hourArab/ten) === 2)
    {
        hourRim = 'XX';
        remainH = hourArab % twenty;
    }
    if (Math.floor(minuteArab/ten) === 1)
    {
        hourRim = 'X';
        remainH = hourArab % ten;
    }
    if (Math.floor(hourArab/ten) === 0)
    {
        remainH = hourArab;
    }
    if (remainH > 5 && remainH < 9)
    {
        while (remainH > 5)
        {
            hourRim  = hourRim + 'I';
            remainH--;
        }
    }
    if (remainH === 9)
    {
        hourRim = hourRim + 'IX';
    }
    if (remainH < 4)
    {
        while (remainH !== 0)
        {
            hourRim = hourRim + 'I';
            remainH--;
        }
    }
    if (remainH === 4)
    {
        hourRim = hourRim + 'IV';
    }
    if (remainH === 5)
    {
        hourRim = hourRim + 'V';
    }
    if (Math.floor(hourArab/one) === 0)
    {
        hourRim = 'NN';
    }
    if (Math.floor(minuteArab/one) === 0)
    {
        minuteRim = 'NN';
    }
    time = hourRim +  ':' + minuteRim;
    return time;
}

module.exports = romanTime;
