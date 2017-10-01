'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var template = new RegExp(/\d\d:\d\d/);
    if (template.test(time) === false) {
        throw new TypeError();
    }
    var times = time.split(':');
    if (Number(times[0])>23 || Number(times[1])>59) {
        throw new TypeError();
    }

    return time;
}

module.exports = romanTime;

