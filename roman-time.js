'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var arab = [1, 4, 5, 9, 10, 40, 50];
var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

function arabToRoman(number) {
    if(isNaN(number)) return TypeError('Неверное время');
    if(number === 0) return 'N';

    var ret = '';
    var i = arab.length - 1;
    while(number > 0)
    {
        if(number >= arab[i])
        {
            ret += roman[i];
            number -= arab[i];
        }
        else
        {
	        i--;
        }
    }
    return ret;
}


function romanTime(time) {
    time = time.split([':']);
    if (time.length > 2){
        return TypeError('Неверное время');
    } else {
        if ((time[0] < 24) && (time[1] < 60)) {
            time[0] = arabToRoman(time[0]);
            time[1] = arabToRoman(time[1]);
        } else {
            return TypeError('Неверное время');
        }

    }
    return time.join(':');
    
}

module.exports = romanTime;
