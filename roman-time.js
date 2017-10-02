'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var hour = '';
    var minutes = '';
    var hoursMinutes = time.split(':');
    if (hoursMinutes[0][0] === '0' && hoursMinutes[0].length < 3) {
        hoursMinutes[0] = hoursMinutes[0][1];
    }
    if (hoursMinutes[1][0] === '0' && hoursMinutes[1].length < 3) {
        hoursMinutes[1] = hoursMinutes[1][1];
    }
    if (isTimeCorrect(Number(hoursMinutes[0]), Number(hoursMinutes[1]))) {
        hour = arabicToRoman(Number(hoursMinutes[0]));
        minutes = arabicToRoman(Number(hoursMinutes[1]));
    } else {
        throw new TypeError();
    }

    return hour + ':' + minutes;
}

function isTimeCorrect(hours, minutes) {
    if (hours < 0 || hours > 23) {

        return false;
    }
    if (minutes < 0 || minutes > 59) {

        return false;
    }

    return true;
}

function arabicToRoman(num) {
    var romanNumbers = [];
    romanNumbers.push(
    { roman: 'I', arabic: 1 }, { roman: 'II', arabic: 2 }, { roman: 'III', arabic: 3 },
    { roman: 'IV', arabic: 4 }, { roman: 'V', arabic: 5 }, { roman: 'VI', arabic: 6 },
    { roman: 'VII', arabic: 7 }, { roman: 'VIII', arabic: 8 }, { roman: 'IX', arabic: 9 },
    { roman: 'X', arabic: 10 }, { roman: 'XX', arabic: 20 }, { roman: 'XXX', arabic: 30 },
    { roman: 'XL', arabic: 40 }, { roman: 'L', arabic: 50 }, { roman: 'LX', arabic: 60 });
    var i = romanNumbers.length - 1;
    var number = num;
    var romanStr = '';
    while (number > 0) {
        if (number >= romanNumbers[i].arabic) {
            number -= romanNumbers[i].arabic;
            romanStr += romanNumbers[i].roman;
        } else {
            i--;
        }
    }
    if (num === 0) {

        return 'N';
    }

    return romanStr;
}
module.exports = romanTime;
