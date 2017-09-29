'use strict';

var NUMBERS_MATCHING = {
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
};


/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time === null){
        throw new TypeError('Неверное время');
    }

    var hoursAndMinutes = time.split(':');

    if (hoursAndMinutes.length !== 2){
        throw new TypeError('Неверное время');
    }

    var hours = parseInt(hoursAndMinutes[0]);
    var minutes = parseInt(hoursAndMinutes[1]);

    if (isNaN(hours) || isNaN(minutes) || hours >= 24 || hours < 0 || minutes >= 60 || minutes < 0){
        throw new TypeError('Неверное время');
    }

    var romanHours = convertToRoman(hours);
    var romanMinutes = convertToRoman(minutes);

    return romanHours + ':' + romanMinutes;
}


function convertToRoman(number) {
    if (number === 0){
        return 'N';
    }

    var romanNumber = '';
    for (var romanNumeral in NUMBERS_MATCHING) {
        var quantity = Math.floor(number / NUMBERS_MATCHING[romanNumeral]);
        for (var i = 0; i < quantity; i++){
            romanNumber += romanNumeral;
        }
        number = number % NUMBERS_MATCHING[romanNumeral];
    }

    return romanNumber;
}


module.exports = romanTime;
