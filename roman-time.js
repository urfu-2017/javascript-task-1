"use strict";
/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function checkFormat(hoursInInt, minutesInInt){
	
	if (hoursInInt === undefined || hoursInInt === null || minutesInInt === undefined || minutesInInt === null ){
		throw new TypeError("неверный формат");
	}
	if (hoursInInt < 0 || hoursInInt > 23 || minutesInInt < 0 || minutesInInt > 59){
		throw new TypeError("неверный формат, часы: 0-23; минуты: 0-59");
	}	
}

function romanTime(time) {
	if(time.length != 5){
		//console.log(time.length);
		throw new TypeError("неверный формат; введите в формате hh:mm");
	}
	
	let hours = time.slice(0,2);
	let minutes = time.slice(-2);
	let hoursInInt = parseInt(hours);
	let minutesInInt = parseInt(minutes);
	var romanHours;
	var romanMinutes;
	
	if(isNaN(hoursInInt) || isNaN(minutesInInt)){
		throw new TypeError("неверный формат");
	}
	checkFormat(hoursInInt, minutesInInt);
	
	let dictionarySmallNumbers = new Map([
		["1" , "I"],
		["2" , "II"],
		["3", "III"],
		["4", "IV"],
		["5", "V"],
		["6", "VI"],
		["7", "VII"],
		["8", "VIII"],
		["9", "IX"]
	]);
	let dictionaryBigNumbers = new Map([
		["1", "X"],
		["2", "XX"],
		["3", "XXX"],
		["4", "XL"],
		["5", "L"]
	]);
	//----часы----------------------
	if (hoursInInt < 10) {
		
		if (hoursInInt == 0) {
			romanHours = "NN"
		}
		else { 
			romanHours = dictionarySmallNumbers.get(hours.charAt(1));
		}
	}
	else if (hoursInInt % 10 == 0) {
		romanHours = dictionaryBigNumbers.get(hours.charAt(0));
		}
		else {
			let BigHour = dictionaryBigNumbers.get(hours.charAt(0));
			let SmallHour = dictionarySmallNumbers.get(hours.charAt(1));
			romanHours = BigHour + SmallHour;
		}

//----минуты----------------------
		if (minutesInInt < 10) {	
			if (minutesInInt == 0) {
				romanMinutes = "NN"
			}
			else { 
				romanMinutes = dictionarySmallNumbers.get(minutes.charAt(1));
			}
		}
		else if (minutesInInt % 10 == 0) {
			romanMinutes = dictionaryBigNumbers.get(minutes.charAt(0));
			}
		else {
			let BigMinute = dictionaryBigNumbers.get(minutes.charAt(0));
			let SmallMinute = dictionarySmallNumbers.get(minutes.charAt(1));
			romanMinutes = BigMinute + SmallMinute;
			}
	let rom = romanHours + ":" + romanMinutes;
	return rom;
}

module.exports = romanTime;
