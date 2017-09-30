'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRoman(num) {
    var ans = '';
    var dict = {L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var i;
    for ( i in dict ) {
        while ( num >= dict[i] ) {
            ans += i;
            num -= dict[i];
        }
    }
    return ans;
}

function romanTime(time) {
    var vars = time.split(':');
    var hours = parseInt(vars[0]);
    var mins = parseInt(vars[1]);
    if (isNaN(hours)||isNaN(mins)|| hours >23 || mins > 59
            || hours < 0 || mins < 0){
        throw new TypeError('Incorrect input!');
    }else{
        var ans = toRoman(hours)+':'+toRoman(mins);
    }
    return ans;
}

module.exports = romanTime;
