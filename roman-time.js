'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
	var romanDict = { 0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 
		8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L' };
	var reg = new RegExp('[0-2][0-9]:([0-5])?[0-9]');
	var result = reg.exec(time);
	var hh = parseInt(result[0],10);
	var mm = parseInt(result[1],10);
	var justMinInH = hh%10;
	var justMinInM = mm%10;
	var roman = [];
	if (time.length == result[0].length && hh >= 0 && hh <= 23){
		if (hh == 0){
			roman[0]='N';
		}
		if ( mm == 0){
			roman[1]='N';
		}
		roman[0] = romanDict[hh - justMinInH] + romanDict[justMinInH];
		roman[1] = romanDict[mm - justMinInM] + romanDict[justMinInM];
	} else {
		new TypeError();
	}
	time = roman.join(':');
	return time;
}

module.exports = romanTime;
