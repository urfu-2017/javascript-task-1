'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function isCorrectTime(time) {
    if (time === undefined || (time === null && typeof(a) === 'object')) {
        return false;
    }
    if (time.match(/[0-9][0-9]:[0-9][0-9]/ig) === null) {
        return false;
    }
    var timeParts = time.split(':');
    if (timeParts.length !== 2 || (timeParts[0] % 1 !== 0 || timeParts[1] % 1 !== 0)) {
        return false;
    }
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return false;
    }

    return true;
}

function hoursToRoman(hours, romanDict) {
    var romanHours;
    if (hours === 0) {
        romanHours += 'N';
    } else {
        var i;
        for (i = 0; i < parseInt(hours / 10); i++) {
            romanHours += romanDict[10];
        }
        romanHours += romanDict[hours % 10];
    }

    return romanHours;
}

function minutesToRoman(minutes, romanDict) {
    var romanMinutes;
    if (minutes === 0) {
        romanMinutes += 'N';
        return romanMinutes;
    }
    if (minutes < 40) {
        var i;
        for(i = 0; i < parseInt(minutes / 10); i++) {
            romanMinutes += romanDict[10];
        }
    } else if (minutes >= 40 && minutes < 50) {
        romanMinutes += romanDict[40];
        romanMinutes += romanDict[minutes % 10];
    } else {
        romanMinutes += romanDict[50];
        romanMinutes += romanDict[minutes % 10];
    }

    return romanMinutes;
}
function timeToRoman(timeString) {

    /**
    * @param {String} time – корректное время-строка в формате HH:MM (например, 09:05)
    */
    var romanDict = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII',
                 8: 'VIII', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L' };
    var timeParts = timeString.split(':');
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);

    return hoursToRoman(hours, romanDict) + ':' + minutesToRoman(minutes, romanDict);
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!isCorrectTime(time)) {
        throw new TypeError();
    }
 
    return timeToRoman(time);
}

module.exports = romanTime;
