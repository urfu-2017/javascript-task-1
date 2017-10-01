'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function convert(number){

    let arabic_digits = [1, 4, 5, 9, 10, 40, 50];
    let roman_digits = ['I', 'IV', 'V','IX', 'X', 'XL', 'L'];

    if (number == 0)
        return 'N';

    let res = '';
    let idx = arabic_digits.length - 1;
    
    while (idx >= 0){
        while (number >= arabic_digits[idx]){
            number -= arabic_digits[idx];
            res += roman_digits[idx];
        }
        --idx;   
    }

    return res;
}

function romanTime(time) {

    if (time == null || undefined)
        throw new TypeError('incorrect value');

    let pattern = /^(\d{1,2}):(\d{2})$/;
    let time_pars = time.match(pattern);   

    if(!time_pars)
        throw new TypeError('incorrect value');

    let hours = time_pars[1];
    let minutes = time_pars[2];
    
    if (hours > 23 || minutes > 59)
        throw new TypeError('incorrect value');

    return convert(hours) + ':' + convert(minutes);
}
 
module.exports = romanTime;
