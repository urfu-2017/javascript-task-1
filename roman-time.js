'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
	arr_time = time.split(':');
	if(arr_time){
		//alert(arr_time[0]);
		d1 = rim(arr_time[0], 'h');
		d2 = rim(arr_time[1], 'm');
		if(d1 && d2){
			time = d1 + ':' + d2;
		}
		else{
			throw new TypeError('Не верно указано время!');
			return false;
		}
	}
	else{
		throw new TypeError('Не верно указано время!');
	}
    return time;
}

function rim(t, type){
	v = 0;
	
	if(type == 'h' || type == 'm'){
		if(t == 0) v = "N";
		if(t == 1) v = "I";
		if(t == 2) v = "II";
		if(t == 3) v = "III";
		if(t == 4) v = "IV";
		if(t == 5) v = "V";
		if(t == 6) v = "VI";
		if(t == 7) v = "VII";
		if(t == 8) v = "VIII";
		if(t == 9) v = "IX";
		if(t == 10) v = "X";
		if(t == 11) v = "XI";
		if(t == 12) v = "XII";
		if(t == 13) v = "XIII";
		if(t == 14) v = "XIV";
		if(t == 15) v = "XV";
		if(t == 16) v = "XVI";
		if(t == 17) v = "XVII";
		if(t == 18) v = "XVIII";
		if(t == 19) v = "XIX";
		if(t == 20) v = "XX";
		if(t == 21) v = "XXI";
		if(t == 22) v = "XXII";
		if(t == 23) v = "XXIII";
	}
	
	if(type == 'm'){
		if(t == 24) v = "XXIV";
		if(t == 25) v = "XXV";
		if(t == 26) v = "XXVI";
		if(t == 27) v = "XXVII";
		if(t == 28) v = "XXVIII";
		if(t == 29) v = "XXIX";
		if(t == 30) v = "XXX";
		if(t == 31) v = "XXXI";
		if(t == 32) v = "XXXII";
		if(t == 33) v = "XXXIII";
		if(t == 34) v = "XXXIX";
		if(t == 35) v = "XXXV";
		if(t == 36) v = "XXXVI";
		if(t == 37) v = "XXXVII";
		if(t == 38) v = "XXXVIII";
		if(t == 39) v = "XXXIX";
		if(t == 40) v = "XL";
		if(t == 41) v = "XLI";
		if(t == 42) v = "XLII";
		if(t == 43) v = "XLIII";
		if(t == 44) v = "XLIV";
		if(t == 45) v = "XLV";
		if(t == 46) v = "XLVI";
		if(t == 47) v = "XLVII";
		if(t == 48) v = "XLVIII";
		if(t == 49) v = "XLIX";
		if(t == 50) v = "L";
		if(t == 51) v = "LI";
		if(t == 52) v = "LII";
		if(t == 53) v = "LIII";
		if(t == 54) v = "LIV";
		if(t == 55) v = "LV";
		if(t == 56) v = "LVI";
		if(t == 57) v = "LVII";
		if(t == 58) v = "LVIII";
		if(t == 59) v = "LIX";
	}
	
	if(v){
		return v;
	}
}

module.exports = romanTime;
