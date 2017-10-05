'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var dec = ['N', 'X', 'XX', 'XXX', 'IL', 'L'];
    var unit = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'IIX', 'IX'];
    var re = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!re.test(time)) {
        throw new TypeError('TimeError');
    }
    var tim = time.split(':');
    var hr = parseInt(tim[0], 10);
    hr = String(hr).split("");
    var min = parseInt(tim[1], 10)
    min = String(min).split("");
    hr[0] = dec[Number(hr[0])];
    hr[1] = unit[Number(hr[1])];
    min[0] = dec[Number(min[0])];
    min[1] = unit[Number(min[0])];
    time = hr[0] + hr[1] + ":" + min[0] + min[1];
    return time;
}
module.exports = romanTime;
