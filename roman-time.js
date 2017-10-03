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
	if (isNaN(hoursInInt) || isNaN(minutesInInt)){
		throw new TypeError("неверный формат");
	}
	//if (time.charAt(2) != ":"){
	//}		throw new TypeError("неверный формат, введите в формате hh:mm");

}

function romanTime(time) {
	
	if(time.length != 5){
		throw new TypeError("неверный формат; введите в формате hh:mm");
	}
	else {
	let hours = time.slice(0,2);
	let minutes = time.slice(-2);
	let hoursInInt = parseInt(hours);
	let minutesInInt = parseInt(minutes);
	var romanHours;
	var romanMinutes;
	
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
	

		if (hoursInInt < 10) {
			if (hoursInInt == 0) {
				romanHours = "N";
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
		
	
		if (minutesInInt < 10) {	
			if (minutesInInt == 0) {
				romanMinutes = "N";
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
			
		

	return (romanHours + ":" + romanMinutes);
	//console.log(ans);
}
	//return ans;
	
}
module.exports = romanTime;
