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

function validTime(HH, MM){

}

function validHours(HH){
    if (isNaN(HH) || HH < 0 || HH > 23){
        check = false;
    } else {
        check = true;
    }
    return check;
}

function validMinutes(MM){
    if (isNaN(MM) || MM < 0 || MM > 59){
        check = false;
    } else {
        check = true;
    }
    return check;
}

function romanTime(time) {
    var timeSplitted = time.split(':');
    if (time[2] !== ':' ||  time.length !== 5 || timeSplitted.length !== 2) {
        throw new TypeError();
    }
    
    return time;
}

module.exports = romanTime;
