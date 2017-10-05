'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRim(time) {
    //  console.log('zdarova')
    var rimnomber = '';
    var n = time;
    while (n >= 50) {
        rimnomber += 'L';
        n -= 50;
    }
    while (n >= 40) {
        rimnomber += 'XL';
        n -= 40;
    }
    while (n >= 10) {
        rimnomber += 'X';
        n -= 10;
    }
    if(n>0){rimnomber+=toRim2(n);
    }
    //  console.log(rimnomber);
    return rimnomber;
}
function toRim2(time){
    var n=time;
    //  console.log(n);
    var rimnomber2='';
    while (n >= 9)  {
        rimnomber2 += 'XI';
        n -= 9;
        //  console.log('9tyt')
    }
    while (n >= 5) {
        rimnomber2 += 'V';
        n -= 5;
    }
    while (n >= 4) {
        rimnomber2 += 'IV';
        n -= 4;
    }
    while (n >= 1) {
        rimnomber2 += 'I';
        n -= 1;
    //  console.log(rimnomber2,'sadasdasdasdsdasdasd')
    }
    return rimnomber2;
}

function isValid(time){
    //  console.log(time);
    //  console.log(time.length);
    if (time.length === 2){
        return true;
    }
    else {
        //  console.log('owubka')
        throw new TypeError('Неверное время');
    }
}
function romanTime(time) {
    var hoursMin = time.split(':');
    var hours = parseInt(hoursMin[0]);
    var mins = parseInt(hoursMin[1]);
    //  console.log('h=',hours,'m',mins);
    var time =''
    if (isValid(hoursMin[0]) && isValid(hoursMin[1])) {
        if (hours < 24 && mins < 60) {
            hours = toRim(hours);
            mins = toRim(mins);
            if (hours == '') {hours='N';}
            if (mins == '') {mins='N';}
            time = hours+':'+mins;
        }
        else {
            throw new TypeError('Неверное время');
        }
    }
    return time;
}

module.exports = romanTime;
