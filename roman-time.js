'use strict';
const timeRegex = /^(\d\d):(\d\d)$/;
const romanNumbers = ('N I II III IV V VI VII VIII IX X XI XII XIII XIV XV XVI XVII XVIII ' +
'XIX XX XXI XXII XXIII XXIV XXV XXVI XXVII XXVIII XXIX XXX XXXI XXXII XXXIII XXXIV XXXV ' +
'XXXVI XXXVII XXXVIII XXXIX XL XLI XLII XLIII XLIV XLV XLVI XLVII XLVIII XLIX L LI LII ' +
'LIII LIV LV LVI LVII LVIII LIX LX').split(' ');

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var groups = timeRegex.exec(time);
    var [hour, minute] = (groups || []).slice(1, 3).map(x => x - 0);
    if (!groups || hour > 23 || minute > 59) {
        throw new TypeError();
    }

    return [hour, minute].map(x => romanNumbers[x]).join(':');
}

module.exports = romanTime;
