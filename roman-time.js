'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRim(chislo) {
    var rimnomber = "";
    var n = chislo;
    while (n >= 50) {
       rimnomber += "L";
       n -= 50;
    }
    while (n >= 40) {
        rimnomber += "XL";
        n -= 40;
    }
    while (n >= 10) {
        rimnomber += "X";
        n -= 10;
    }
    while (n >= 9) {
        rimnomber += "XI";
        n -= 9;
    }
    while (n >= 5) {
        rimnomber += "V";
        n -= 5;
    }
    while (n >= 4) {
        rimnomber += "IV";
        n -= 4;
    }
    while (n >= 1) {
        rimnomber += "I";
        n -= 1;
    }
    return rimnomber;
}
function rimnomberTime(time) {
    var hours_min = time.split(':');
    var hours = parseInt(arrayTime[0]);
    var mins = parseInt(arrayTime[1]);
    if (!(isnan(hours) && isnan(mins))) {
        if (hours < 24 && mins < 60) {
            hours = toRim(hours);
            mins = toRim(mins);
            time = hours+":"+mins;
        }
    }
    return time;
}

module.exports = rimnomberTime;
