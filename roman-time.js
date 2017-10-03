'use strict'
var smallNumbers = new Map ([
    ['1', 'I'], ['2', 'II'], ['3', 'III'],
    ['4', 'IV'], ['5', 'V'], ['6', 'VI'],
    ['7', 'VII'], ['8', 'VIII'], ['9', 'IX']]);
var bigNumbers = new Map ([['1', 'X'], ['2', 'XX'], ['3', 'XXX'], ['4', 'XL'], ['5', 'L']]);
var romanHours;
var romanMinutes;
function checkFormat(hoursInInt, minInInt) {
    if (hoursInInt === undefined || hoursInInt === null) {
        throw new TypeError('Неверное время'); 
    }
    if (minInInt === undefined || minInInt === null) {
        throw new TypeError('Неверное время'); 
    }
    if (hoursInInt < 0 || hoursInInt > 23 || minInInt < 0 || minInInt > 59) {
        throw new TypeError('Неверное время'); 
    }
}
function getHours(hoursInInt, hours) {
    if (hoursInInt === 0) {
        romanHours = 'N';
    }
    if (hoursInInt < 10) {
        romanHours = smallNumbers.get(hours.charAt(1));
    }
    if (hoursInInt % 10 === 0) {
        romanHours = bigNumbers.get(hours.charAt(0));
    } else {
        var bigHour = bigNumbers.get(hours.charAt(0));
        var smallHour = smallNumbers.get(hours.charAt(1));
        romanHours = bigHour + smallHour;
    }

    return romanHours;
}
function getMin(minInInt, minutes) {
    if (minInInt === 0) {
        romanMinutes = 'N';
    }
    if (minInInt < 10) {
        romanMinutes = smallNumbers.get(minutes.charAt(1));
    }
    if (minInInt % 10 === 0) {
        romanMinutes = bigNumbers.get(minutes.charAt(0));
    } else {
        var bigMinute = bigNumbers.get(minutes.charAt(0));
        var smallMinute = smallNumbers.get(minutes.charAt(1));
        romanMinutes = bigMinute + smallMinute;
    }

    return romanMinutes;
}
function romanTime(time) {
    if (time.length !== 5) {
        throw new TypeError('Неверное время');
    }
    var hours = time.slice(0, 2);
    var minutes = time.slice(-2);
    var hoursInInt = parseInt(hours);
    var minInInt = parseInt(minutes);
    checkFormat(hoursInInt, minInInt);
    if (isNaN(hoursInInt) || isNaN(minInInt)) {
        throw new TypeError('Неверное время'); 
    }
    getHours(hoursInInt, hours);
    getMin(minInInt, minutes);

    return (romanHours + ':' + romanMinutes);
}
module.exports = romanTime;
