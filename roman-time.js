'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var wrongTimeError = new TypeError('Неверное время');

function arabToRom(arabic) { 
    let roman = '';
    if (parseInt(arabic) === 0){
        roman = 'N'
    } else {
        let romanesEuntDomus = [ 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
        var arabicnums = [50,40,10,9,5,4,1];
        for ( let i = 0; i < arabicnums.length; i++ ){
            while( arabic >= arabicnums[i] ){
                roman = roman + romanesEuntDomus[i];
                arabic -= arabicnums[i];
            }
        }
    }
    return roman;
}

function validTime(HH, MM){}

function romanTime(time) {
    var timeSplitted = time.split(':');
    if (time[2] !== ':' ||  time.length !== 5 || timeSplitted.length !== 2) {
        throw wrongTimeError;
    }
    var hours = timeSplitted[0];
    var minutes = timeSplitted[1];
    //validHours(hours, minutes);
    time = arabToRom(hours) + ':' + arabToRom(minutes);
    return time;
}

module.exports = romanTime;
