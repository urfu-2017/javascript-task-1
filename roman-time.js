'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

 function romanTime(time) {
    let arab = [0, 1, 4, 5, 9, 10, 40, 50];
	let roman = ['N', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

    let sepparation = time.split(':');
    if (parseInt(sepparation[0], 10).isNaN || parseInt(sepparation[1], 10).isNaN || parseInt(sepparation[0], 10) > 23 || parseInt(sepparation[1], 10) > 59) {
        throw new TypeError('Неверный формат');
    } else {
        var romans = sepparation.map(function(number) {

	let ret = '';
    let i = arab.length - 1;
    
    if (number == '00') {
        ret = 'N';
    }

	while(number > 0)
	{
		if (number >= arab[i])
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
})
    }
    let result=romans.join(':');
    return result;
}


module.exports = romanTime;