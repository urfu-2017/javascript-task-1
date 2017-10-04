'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var arab = [1, 4, 5, 9, 10, 40, 50, 90, 100];
var roman = ['I','IV','V','IX','X','XL','L','XC','C'];

function arabToRoman(number){
	if(!number) return '';

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
    if (number==0) {ret='N';}
	return ret;
}

function romanTime(time) {
    try{
    var timesplit = time.split(':');
    var x=Number(timesplit[1]);
    var y=Number(timesplit[2]);
    if((x>23&&x<0)||(y>59&&yx<0)){ throw new TypeError('ошибка:неправильно введены данные');}
    time=arabToRoman(x)+':'+arabToRoman(y);
    return time;
    }
    catch(e){
        console.log(e.message);
    }
}

module.exports = romanTime;
