'use strict';
/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!/^(2[0-3]|[0-1][0-9]):[0-5][0-9]$/.test(time)){ // Регулярное выражение под HH:MM
            throw new TypeError('Некорректное время');
    }
    var romanDigit='';
    var arabicHours=time.split(':')[0];
    var arabicMinutes=time.split(':')[1];
    romanDigit = arabicToRoman(arabicHours)+':'+arabicToRoman(arabicMinutes);
    function arabicToRoman(d){
        dozenDigit=d[0];
        dozenDigit={
            '0': '','1': 'X','2': 'XX','3': 'XXX','4': 'XL','5': 'L'
        }
        unitDigit=d[1];
        unitDigit={
            '0': '','1': 'I','2': 'II','3': 'III','4': 'IV','5': 'V','6': 'VI','7': 'VII','8': 'VIII','9': 'IX'
        }
        if (d==='00'){
            return 'N';
        }
        return (dozenDigit[d[0]]+unitDigit[d[1]]);
    }
    return romanDigit;
}
module.exports = romanTime;
