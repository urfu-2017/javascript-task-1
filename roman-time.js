'use strict';

function toRome(argument) {
    // let flag = false;
    let time = '';
    let rome = [['I', 1], ['IV', 4], ['V', 5], ['IX', 9], ['X', 10], ['XL', 40], ['L', 50]];

    if (parseInt(argument, 10) === 0) {
        time += 'N';
    }
    for (let j = rome.length - 1; argument > 0; j--) {
        if (argument - rome[j][1] >= 0) {
            argument -= rome[j][1];
            time += rome[j][0];
            j = rome.length - 1;
        }
    }

    return time;
}

function romanTime(time) {
    let regul = new RegExp('^((0[0-9])|(1[0-9])|(2[0-3])):[0-5][0-9]$');
    let timeIsValid = regul.test(time);
    if (timeIsValid === false || time[2] !== ':' || time.length !== 5 || typeof time !== 'string') {
        throw new TypeError('неверное время!');
    } else {
        let arr = time.split(':');
        time = toRome(arr[0]) + ':' + toRome(arr[1]);

        return time;
    }
}
module.exports = romanTime;
