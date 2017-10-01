'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    array = ["0", "1"];
    for(i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return time;
}

module.exports = romanTime;
