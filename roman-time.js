'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var reg = RegExp('(([01][0-9])|(2[0123]))\:[012345][0-9]')
    if (time.length != 5) || (!reg.test(time)){
        throw new TypeError()
    }
    var romanUnits = ['', '|', '||', '|||', '|V', 'V', 'VI', 'VII', 'VIII', 'IX']
    var romanDec = ['', 'X', 'XX', 'XXX', 'XL', 'L']
    var time = romanDec[parseInt(time[0])] + romanUnits[parseInt(time[1])] + ':' +
        romanDec[parseInt(time[3])] + romanUnits[parseInt(time[4])]
    if (time[0] == ':'){
        time = 'N' + time
    }
    if (time[time.length - 1] == ':'){
        time = time + 'N'
    }
    return time;
}

module.exports = romanTime;
