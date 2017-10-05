'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

const romanesEuntDomus = { 0:"N", 1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX", 
                            10:"X", 20:"XX", 30:"XXX", 40:"XL", 50:"L"};

function decToRom(decimal) {
    var roman = "";
    if (decimal == 0){
        roman = romanesEuntDomus[0];
    } else {
        var x = (decimal / 10 | 0) * 10;
        var y = decimal % 10;
        roman = romanesEuntDomus[x] + romanesEuntDomus[y];
    }
    return roman;
}

function validateTime(){
    //const regExp = new RegExp('([0-2])?[0-9]:([0-5])?[0-9]');

}

function validateHours(){}

function validateMinutes(){}

function splitString(string){
    var HH = 0;
    var MM = 0;
    return [HH, MM];
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    return time;
}

module.exports = romanTime;
