'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 */
function checkCorrectTime(time) {
    if (typeof time !== 'string' || !(/^\d\d:\d\d$/.test(time))) {
        throw new TypeError('Некорректно задано время!');
    }
}

/**
 * @param {Number} hours – число, указывающее часы
 * @param {Number} minutes – число, указывающее минуты
 */
function checkCorrectRangeTime(hours, minutes) {
    if (hours > 23 || hours < 0) {
        throw new TypeError('Неверное время!');
    }
    if (minutes > 59 || minutes < 0) {
        throw new TypeError('Неверное время!');
    }
}

/**
 * @param {String} units – строка, содержащая римские цифры {I, V}
 * @param {Boolean} tens – флаг, указывающий на то, отвечает ли цифра за десятки
 * @returns {String} – строка содержащая римские цифры {I, V} или {X, L}
 */
function unitsToTen(units, tens) {
    if (tens) {
        units = units.replace(/I/g, 'X').replace(/V/g, 'L');
    }

    return units;
}

/**
 * @param {Number} arabicNumeral – арабская цифра
 * @param {Boolean} ten – флаг, указывающий на то, отвечает ли цифра за десятки
 * @returns {String} – представление этой цифры в римских цифрах
 */
function arabicToRoman(arabicNumeral, ten) {
    let arabicToRomanArray = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let romanNumerical = arabicNumeral.replace(/[0-9]/g, function (str) {
        return arabicToRomanArray[Number(str)];
    });

    return unitsToTen(romanNumerical, ten);
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    checkCorrectTime(time);
    let hours = Number(time.substring(0, 2));
    let minutes = Number(time.substring(3));
    checkCorrectRangeTime(hours, minutes);
    let hoursRoman = (arabicToRoman(String(Math.floor(hours / 10) % 10), true) +
    arabicToRoman(String(hours % 10), false)).replace(/NN/g, 'N');
    let minutesRoman = (arabicToRoman(String(Math.floor(minutes / 10) % 10), true) +
    arabicToRoman(String(minutes % 10), false)).replace(/NN/g, 'N');
    if (hoursRoman.replace(/N/g, '') !== '') {
        hoursRoman = hoursRoman.replace(/N/g, '');
    }
    if (minutesRoman.replace(/N/g, '') !== '') {
        minutesRoman = minutesRoman.replace(/N/g, '');
    }

    return `${hoursRoman}:${minutesRoman}`;
}

module.exports = romanTime;
